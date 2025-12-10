# Demo Page

This demo showcases the OpenToWork Badge component integrated into profile cards with different color themes.

## Running the Demo

```bash
npm run demo
```

This will start a development server. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`).

## Placeholder Images Needed

The demo uses placeholder images that you'll need to add to the `demo/public` directory. Create the `demo/public` folder if it doesn't exist, then add the following images:

### Banner Images
- `demo/public/placeholder-banner-dark.jpg` - Dark theme banner (120px height, ~400px width recommended)
- `demo/public/placeholder-banner-light.jpg` - Light theme banner
- `demo/public/placeholder-banner-vivid.jpg` - Vivid theme banner

### Profile Photos
- `demo/public/placeholder-profile-1.jpg` - Profile photo for dark theme card (square, at least 168x168px)
- `demo/public/placeholder-profile-2.jpg` - Profile photo for light theme card
- `demo/public/placeholder-profile-3.jpg` - Profile photo for vivid theme card

### Employer Logos
- `demo/public/placeholder-logo-1.png` - Logo for TechCorp Solutions (20x20px recommended)
- `demo/public/placeholder-logo-2.png` - Logo for Design Studio Inc.
- `demo/public/placeholder-logo-3.png` - Logo for Creative Agency Group

**Note:** In Vite, files in the `public` directory are served at the root path, so `/placeholder-banner-dark.jpg` will load from `demo/public/placeholder-banner-dark.jpg`.

## Building the Demo

To build the demo for production:

```bash
npm run demo:build
```

The built files will be in the `dist-demo` directory.

