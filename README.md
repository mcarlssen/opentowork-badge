# @mcarlssen/opentowork-badge

A customizable React component for displaying a professional headshot with an '#opentowork' badge overlay, perfect for websites and portfolios.

![OpenToWorkBadge Demo Screenshot](demo/public/demo-splash.webp)

## Installation

```bash
npm install @mcarlssen/opentowork-badge
# or
yarn add @mcarlssen/opentowork-badge
# or
pnpm add @mcarlssen/opentowork-badge
```

## Basic Usage

```tsx
import OpenToWorkBadge from '@mcarlssen/opentowork-badge';
import '@mcarlssen/opentowork-badge/styles';

function App() {
  return (
    <OpenToWorkBadge
      imageSrc="/path/to/your/headshot.jpg"
      imageAlt="Your Name"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageSrc` | `string` | **required** | URL or path to the headshot image |
| `imageAlt` | `string` | **required** | Alt text for accessibility |
| `badgeText` | `string` | `"#opentowork"` | Text to display on the badge |
| `size` | `number` | `200` | Size of the circular badge in pixels |
| `borderColor` | `string` | `"#d4ad00"` | Border color (supports CSS variables) |
| `borderWidth` | `number` | `4` | Border width in pixels |
| `gradientColor` | `{ r: number, g: number, b: number }` | `{ r: 0, g: 102, b: 53 }` | RGB values for gradient color |
| `gradientAngle` | `number` | `200` | Gradient angle in degrees |
| `gradientOpacity` | `number` | `1` | Maximum opacity of gradient (0-1) |
| `textOffset` | `number` | `8` | Text position along curve (percentage) |
| `textPath` | `string` | `undefined` | Custom SVG path for text curve |
| `className` | `string` | `""` | Additional CSS class names |
| `style` | `React.CSSProperties` | `undefined` | Inline styles for container |
| `animate` | `boolean` | `false` | Enable fade-in animation |
| `position` | `{ left?, top?, right?, bottom? }` | `undefined` | Absolute positioning |

## Examples

### Basic Usage

```tsx
<OpenToWorkBadge
  imageSrc="/images/profile.jpg"
  imageAlt="John Doe"
/>
```

### Custom Size and Colors

```tsx
<OpenToWorkBadge
  imageSrc="/images/profile.jpg"
  imageAlt="Jane Smith"
  size={300}
  borderColor="#0077b5"
  gradientColor={{ r: 0, g: 119, b: 181 }}
/>
```

### With Custom Positioning

```tsx
<OpenToWorkBadge
  imageSrc="/images/profile.jpg"
  imageAlt="Alex Johnson"
  position={{ left: -225, top: -60 }}
/>
```

### Custom Badge Text

```tsx
<OpenToWorkBadge
  imageSrc="/images/profile.jpg"
  imageAlt="Sam Wilson"
  badgeText="#available"
/>
```

### With Animation

```tsx
<OpenToWorkBadge
  imageSrc="/images/profile.jpg"
  imageAlt="Taylor Brown"
  animate={true}
/>
```

### Using CSS Variables

```tsx
<OpenToWorkBadge
  imageSrc="/images/profile.jpg"
  imageAlt="Casey Davis"
  borderColor="var(--accent-color)"
  gradientColor={{ r: 0, g: 102, b: 53 }}
/>
```

## Styling

The component includes its own CSS, but you can override styles using the `className` and `style` props, or by targeting the component's CSS classes:

- `.opentowork-badge-container` - Main container
- `.opentowork-badge-wrapper` - Circular wrapper
- `.opentowork-badge-image` - Image element
- `.opentowork-badge-overlay` - Overlay container
- `.opentowork-badge-gradient` - Gradient overlay
- `.opentowork-badge-text` - Text element

## Advanced: Custom Text Path

For fine control over the text curve, you can provide a custom SVG path:

```tsx
<OpenToWorkBadge
  imageSrc="/images/profile.jpg"
  imageAlt="Custom Path Example"
  textPath="M 48 185 A 100 100 0 0 0 152 185"
/>
```

The path uses SVG arc syntax: `M x1 y1 A rx ry rotation large-arc sweep x2 y2`

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

