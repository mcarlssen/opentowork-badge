import React from 'react';
import './OpenToWorkBadge.css';

export interface OpenToWorkBadgeProps {
  /** Image source URL - required */
  imageSrc: string;
  /** Alt text for the image - required for accessibility */
  imageAlt: string;
  /** Badge text to display (default: "#opentowork") */
  badgeText?: string;
  /** Size of the circular badge in pixels (default: 200) */
  size?: number;
  /** Border color - can be CSS color value or CSS variable (default: "#d4ad00") */
  borderColor?: string;
  /** Border width in pixels (default: 4) */
  borderWidth?: number;
  /** Gradient color - RGBA values (default: { r: 0, g: 102, b: 53 }) */
  gradientColor?: { r: number; g: number; b: number };
  /** Gradient angle in degrees (default: 200) */
  gradientAngle?: number;
  /** Gradient opacity at peak (default: 1) */
  gradientOpacity?: number;
  /** Text position along curve - percentage offset (default: 8) */
  textOffset?: number;
  /** Custom SVG path for text curve - if not provided, uses calculated default */
  textPath?: string;
  /** Custom CSS class name for the container */
  className?: string;
  /** Custom CSS styles for the container */
  style?: React.CSSProperties;
  /** Whether to include fade-in animation (default: false) */
  animate?: boolean;
  /** Position for absolute positioning - if provided, badge will be absolutely positioned */
  position?: {
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
  };
}

const OpenToWorkBadge: React.FC<OpenToWorkBadgeProps> = ({
  imageSrc,
  imageAlt,
  badgeText = '#opentowork',
  size = 200,
  borderColor = '#d4ad00',
  borderWidth = 4,
  gradientColor = { r: 0, g: 102, b: 53 },
  gradientAngle = 200,
  gradientOpacity = 1,
  textOffset = 0,
  textPath,
  className = '',
  style,
  animate = false,
  position,
}) => {
  // Calculate default text path based on size
  const calculateTextPath = (): string => {
    if (textPath) return textPath;
    
    const radius = size / 2;
    const center = size / 2;
    // Position text along bottom arc - multiplier scales linearly with size
    // Formula derived from: 0.35 at size=100, 0.4 at size=200, 0.45 at size=300
    // multiplier = 0.3 + 0.0005 * size
    const yMultiplier = 0.3 + 0.000475 * size;
    const y = size - (size * yMultiplier);
    // Calculate x coordinates for the arc
    const offset = Math.sqrt(radius * radius - Math.pow(y - center, 2));
    // Extend the path to start earlier (further left) to give room for text positioning
    // This prevents clipping when using lower textOffset values
    const startPadding = size * 0.01; // Minimal padding on start
    const endPadding = size * -.005;   // Slightly more on end for symmetry
    const x1 = Math.max(5, center - offset - (size * 0.1) + startPadding); // Start earlier
    const x2 = center + offset - endPadding;
    
    // Create arc path - using small arc (0) for bottom curve
    // The extended start gives more room for text to be positioned earlier
    return `M ${x1} ${y} A ${radius} ${radius} 0 0 0 ${x2} ${y}`;
  };

  const containerStyle: React.CSSProperties = {
    ...(position && {
      position: 'absolute',
      ...(position.left !== undefined && { left: position.left }),
      ...(position.top !== undefined && { top: position.top }),
      ...(position.right !== undefined && { right: position.right }),
      ...(position.bottom !== undefined && { bottom: position.bottom }),
    }),
    ...style,
  };

  const wrapperStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderWidth: `${borderWidth}px`,
    borderColor: borderColor,
  };

  const gradientStyle: React.CSSProperties = {
    background: `linear-gradient(
      ${gradientAngle}deg,
      transparent 0%,
      transparent 50%,
      rgba(${gradientColor.r}, ${gradientColor.g}, ${gradientColor.b}, ${gradientOpacity * 0.3}) 60%,
      rgba(${gradientColor.r}, ${gradientColor.g}, ${gradientColor.b}, ${gradientOpacity}) 90%
    )`,
  };

  const textFontSize = size * 0.09; // Scale font size with badge size

  return (
    <div 
      className={`opentowork-badge-container ${animate ? 'fade-in-up' : ''} ${className}`.trim()}
      style={containerStyle}
    >
      <div className="opentowork-badge-wrapper" style={wrapperStyle}>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="opentowork-badge-image"
        />
        <div className="opentowork-badge-overlay">
          <div 
            className="opentowork-badge-gradient" 
            style={gradientStyle}
          />
          <svg 
            className="opentowork-badge-text-svg" 
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path 
                id={`text-curve-${size}`} 
                d={calculateTextPath()} 
                fill="none" 
              />
            </defs>
            <text 
              className="opentowork-badge-text"
              fill="white"
              style={{ fontSize: `${textFontSize}px` }}
            >
              <textPath 
                href={`#text-curve-${size}`} 
                startOffset={`${Math.max(0, textOffset)}%`}
              >
                {badgeText}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OpenToWorkBadge;

