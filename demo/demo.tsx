import React from 'react';
import OpenToWorkBadge from '../src/OpenToWorkBadge';
import '../src/OpenToWorkBadge.css';
import './demo.css';

interface ProfileCardProps {
  bannerImage: string;
  profileImage: string;
  name: string;
  title: string;
  location: string;
  employer: string;
  employerLogo: string;
  theme: 'dark' | 'light' | 'vivid';
  badgeConfig: {
    borderColor?: string;
    gradientColor?: { r: number; g: number; b: number };
    size?: number;
    position?: {
      top?: number;
      left?: number;
      right?: number;
      bottom?: number;
    };
  };
}

const formatBadgeProps = (profileImage: string, name: string, badgeConfig: {
  borderColor?: string;
  gradientColor?: { r: number; g: number; b: number };
  size?: number;
  position?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
}): string => {
  const props: string[] = [
    `imageSrc="${profileImage}"`,
    `imageAlt="${name}"`,
  ];

  // Only include props that are actually defined
  if (badgeConfig.size !== undefined) {
    props.push(`size={${badgeConfig.size}}`);
  }

  if (badgeConfig.borderColor !== undefined) {
    props.push(`borderColor="${badgeConfig.borderColor}"`);
  }

  if (badgeConfig.gradientColor !== undefined) {
    props.push(`gradientColor={{ r: ${badgeConfig.gradientColor.r}, g: ${badgeConfig.gradientColor.g}, b: ${badgeConfig.gradientColor.b} }}`);
  }

  // Only include position if it has at least one defined property
  if (badgeConfig.position) {
    const positionProps: string[] = [];
    if (badgeConfig.position.top !== undefined) {
      positionProps.push(`top: ${badgeConfig.position.top}`);
    }
    if (badgeConfig.position.left !== undefined) {
      positionProps.push(`left: ${badgeConfig.position.left}`);
    }
    if (badgeConfig.position.right !== undefined) {
      positionProps.push(`right: ${badgeConfig.position.right}`);
    }
    if (badgeConfig.position.bottom !== undefined) {
      positionProps.push(`bottom: ${badgeConfig.position.bottom}`);
    }
    
    if (positionProps.length > 0) {
      props.push(`position={{ ${positionProps.join(', ')} }}`);
    }
  }

  return `<OpenToWorkBadge\n  ${props.join('\n  ')}\n/>`;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  bannerImage,
  profileImage,
  name,
  title,
  location,
  employer,
  employerLogo,
  theme,
  badgeConfig,
}) => {
  return (
    <div className={`profile-card profile-card--${theme}`}>
      <div className="profile-card__banner">
        <img src={bannerImage} alt="" className="profile-card__banner-image" />
      </div>
      <div className="profile-card__badge-wrapper">
        <OpenToWorkBadge
          imageSrc={profileImage}
          imageAlt={name}
          {...(badgeConfig.size !== undefined && { size: badgeConfig.size })}
          {...(badgeConfig.borderColor !== undefined && { borderColor: badgeConfig.borderColor })}
          {...(badgeConfig.gradientColor !== undefined && { gradientColor: badgeConfig.gradientColor })}
          {...(badgeConfig.position !== undefined && Object.keys(badgeConfig.position).length > 0 && { position: badgeConfig.position })}
        />
      </div>
      <div className="profile-card__content">
        <div className="profile-card__info">
          <div className="profile-card__header">
            <h2 className="profile-card__name">{name}</h2>
            <svg
              className="profile-card__verified"
              width="20"
              height="20"
              viewBox="0 0 256 256"
              fill="#5AB0F7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
            </svg>
          </div>
          <p className="profile-card__title">{title}</p>
          <p className="profile-card__location">{location}</p>
          <div className="profile-card__employer">
            <img
              src={employerLogo}
              alt=""
              className="profile-card__employer-logo"
            />
            <span className="profile-card__employer-name">{employer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Demo: React.FC = () => {
  return (
    <div className="demo">
      <header className="demo__header">
        <h1 className="demo__title">OpenToWork Badge Demo</h1>
        <p className="demo__subtitle">
          Profile cards showcasing the badge component with different themes
        </p>
      </header>
      <div className="demo__cards">
        <div className="demo__card-wrapper">
          <ProfileCard
            bannerImage="/placeholder-banner-dark.webp"
            profileImage="/placeholder-profile-1.webp"
            name="Marcus Johnson"
            title="Senior Software Engineer"
            location="San Francisco, California"
            employer="TechCorp Solutions"
            employerLogo="/placeholder-logo-1.webp"
            theme="dark"
            badgeConfig={{
              borderColor: '#d4ad00',
              gradientColor: { r: 0, g: 102, b: 53 },
              size: 168,
            }}
          />
          <pre className="demo__code">
            <code>{formatBadgeProps('/placeholder-profile-1.webp', 'Marcus Johnson', {
              borderColor: '#d4ad00',
              gradientColor: { r: 0, g: 102, b: 53 },
              size: 168,
            })}</code>
          </pre>
        </div>
        <div className="demo__card-wrapper">
          <ProfileCard
            bannerImage="/placeholder-banner-light.webp"
            profileImage="/placeholder-profile-2.webp"
            name="Alex Rivera"
            title="Product Design Lead, UX"
            location="Austin, Texas"
            employer="Design Studio Inc."
            employerLogo="/placeholder-logo-2.webp"
            theme="light"
            badgeConfig={{
              borderColor: '#0077b5',
              gradientColor: { r: 0, g: 119, b: 181 },
              size: 186,
              position: { top: -10 },
            }}
          />
          <pre className="demo__code">
            <code>{formatBadgeProps('/placeholder-profile-2.webp', 'Alex Rivera', {
              borderColor: '#0077b5',
              gradientColor: { r: 0, g: 119, b: 181 },
              size: 186,
              position: { top: -10 },
            })}</code>
          </pre>
        </div>
        <div className="demo__card-wrapper">
          <ProfileCard
            bannerImage="/placeholder-banner-vivid.webp"
            profileImage="/placeholder-profile-3.webp"
            name="Sarah Chen"
            title="Senior Creative Director"
            location="New York, New York"
            employer="Creative Agency Group"
            employerLogo="/placeholder-logo-3.webp"
            theme="vivid"
            badgeConfig={{
              borderColor: '#ff6b6b',
              gradientColor: { r: 255, g: 107, b: 107 },
              size: 140,
              position: { left: -70 },
            }}
          />
          <pre className="demo__code">
            <code>{formatBadgeProps('/placeholder-profile-3.webp', 'Sarah Chen', {
              borderColor: '#ff6b6b',
              gradientColor: { r: 255, g: 107, b: 107 },
              size: 140,
              position: { left: -70 },
            })}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Demo;

