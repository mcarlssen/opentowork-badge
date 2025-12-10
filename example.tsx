/**
 * Example usage of OpenToWorkBadge component
 * This file is for reference only and not included in the build
 */

import OpenToWorkBadge from './src/OpenToWorkBadge';
import './src/OpenToWorkBadge.css';

// Basic usage
export function BasicExample() {
  return (
    <OpenToWorkBadge
      imageSrc="/path/to/headshot.jpg"
      imageAlt="Your Name"
    />
  );
}

// Custom size and colors
export function CustomExample() {
  return (
    <OpenToWorkBadge
      imageSrc="/path/to/headshot.jpg"
      imageAlt="Your Name"
      size={300}
      borderColor="#0077b5"
      gradientColor={{ r: 0, g: 119, b: 181 }}
      gradientAngle={200}
    />
  );
}

// With absolute positioning (like in your current project)
export function PositionedExample() {
  return (
    <div style={{ position: 'relative' }}>
      <OpenToWorkBadge
        imageSrc="/images/mt.png"
        imageAlt="Mike Thorn"
        position={{ left: -225, top: -60 }}
        animate={true}
      />
      <h1>Your content here</h1>
    </div>
  );
}

// Custom badge text
export function CustomTextExample() {
  return (
    <OpenToWorkBadge
      imageSrc="/path/to/headshot.jpg"
      imageAlt="Your Name"
      badgeText="#available"
      textOffset={10}
    />
  );
}

// Using CSS variables
export function CSSVariableExample() {
  return (
    <OpenToWorkBadge
      imageSrc="/path/to/headshot.jpg"
      imageAlt="Your Name"
      borderColor="var(--accent-color)"
      gradientColor={{ r: 0, g: 102, b: 53 }}
    />
  );
}

