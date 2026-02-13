# React Landing Page

A modern, responsive landing page built with React, TypeScript, and Vite.

## Features

- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and build times
- 📱 **Fully Responsive** - Works seamlessly on all devices and screen sizes
- 🎨 **Modern Design** - Clean and professional UI with smooth animations
- ♿ **Accessible** - Built with accessibility best practices in mind
- 🔧 **Easy to Customize** - Simple component structure for quick modifications

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features showcase
│   ├── CTA.tsx            # Call to action section
│   ├── Footer.tsx         # Footer component
│   └── styles/            # Component-specific CSS
├── App.tsx                # Main application component
├── App.css                # App styles
├── index.css              # Global styles
└── main.tsx               # Application entry point
public/                    # Static assets
index.html                 # HTML template
```

## Customization

### Colors and Styling

All colors and styles can be customized in the CSS files:
- Global styles: `src/index.css`
- Component styles: `src/components/styles/*.css`

### Adding New Sections

1. Create a new component in `src/components/`
2. Add corresponding CSS in `src/components/styles/`
3. Import and include the component in `src/App.tsx`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3

## License

MIT
