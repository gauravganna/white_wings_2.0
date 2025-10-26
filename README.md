# White Wings Group - Modular Header Component

A highly modular, reactive header component built with React, TypeScript, TailwindCSS, and shadcn/ui. This component is designed to be easily reusable across different pages and can be configured through external data files.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Main header component
│   │   ├── Logo.tsx            # Reusable logo component
│   │   ├── Navigation.tsx      # Desktop navigation
│   │   ├── MobileMenu.tsx      # Mobile hamburger menu
│   │   └── index.ts            # Export barrel
│   └── ui/
│       └── button.tsx          # shadcn/ui button component
├── data/
│   └── header.json             # Header configuration data
├── lib/
│   └── utils.ts                # Utility functions
└── styles/
    └── globals.css             # Global styles and CSS variables
```

## 🎯 Header Component Features

### ✅ Responsive Design
- **Desktop**: Horizontal navigation with logo and CTA button
- **Mobile**: Hamburger menu with slide-out panel
- **Tablet**: Adaptive layout that works on all screen sizes

### ✅ Accessibility
- Semantic HTML structure with proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- Focus management for mobile menu
- High contrast colors for readability

### ✅ Modular Architecture
- Separate components for Logo, Navigation, and MobileMenu
- Data-driven content through JSON configuration
- Easy to extend and customize
- TypeScript interfaces for type safety

### ✅ Modern Tech Stack
- React 18 with functional components and hooks
- TypeScript for type safety
- TailwindCSS for styling with custom color palette
- Radix UI for accessible components
- Lucide React for icons

## 📊 Data Structure

The header component is completely data-driven. Configure it through `src/data/header.json`:

```json
{
  "logo": {
    "text": "WHITE WINGS",
    "subtitle": "GROUP", 
    "tagline": "We Transform Space"
  },
  "navigation": {
    "items": [
      {
        "id": "home",
        "label": "Home",
        "href": "/",
        "isActive": true
      }
      // ... more navigation items
    ]
  },
  "cta": {
    "text": "Schedule a call",
    "href": "/contact",
    "variant": "primary"
  }
}
```

## 🔧 Usage Examples

### Basic Usage
```tsx
import { Header } from '@/components/layout';
import headerData from '@/data/header.json';

function App() {
  return (
    <div>
      <Header data={headerData} />
      {/* Your page content */}
    </div>
  );
}
```

### With Custom Variants
```tsx
<Header 
  data={headerData} 
  variant="transparent"  // 'default' | 'transparent' | 'solid'
  sticky={false}         // Enable/disable sticky positioning
  className="custom-class"
/>
```

### Individual Components
```tsx
import { Logo, Navigation, MobileMenu } from '@/components/layout';

// Use components separately
<Logo data={headerData.logo} href="/" />
<Navigation data={headerData.navigation} orientation="vertical" />
<MobileMenu navigationData={headerData.navigation} ctaData={headerData.cta} />
```

## 🎨 Customization

### Colors
The header uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'ww-blue': {
    50: '#eff6ff',
    // ... blue color scale
    900: '#1e3a8a',
  },
  'ww-gray': {
    50: '#f9fafb',
    // ... gray color scale  
    900: '#111827',
  }
}
```

### Logo Customization
The logo component supports:
- Custom text and subtitle
- Tagline/subtitle
- Custom href for navigation
- Hover effects and transitions

### Navigation Customization
- Horizontal or vertical orientation
- Active state indicators
- Custom click handlers
- Accessible focus states

### Mobile Menu Features
- Slide-out animation
- Overlay background
- Escape key and click-outside to close
- Body scroll lock when open
- Accessible dialog implementation

## 🔄 Extending the Component

### Adding New Navigation Items
Update `src/data/header.json`:

```json
{
  "navigation": {
    "items": [
      // ... existing items
      {
        "id": "new-page",
        "label": "New Page",
        "href": "/new-page",
        "isActive": false
      }
    ]
  }
}
```

### Creating Page-Specific Headers
Create separate data files for different pages:

```typescript
// src/data/about-header.json
import aboutHeaderData from '@/data/about-header.json';

<Header data={aboutHeaderData} variant="solid" />
```

### Custom Header Variants
Extend the component with new variants:

```tsx
const customVariants = {
  // ... existing variants
  'custom': 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
};
```

## 🎯 Best Practices

1. **Data Separation**: Keep all content in JSON files for easy management
2. **Component Composition**: Use individual components when you need specific functionality
3. **Accessibility**: Always test with keyboard navigation and screen readers
4. **Performance**: Components are optimized with proper React patterns
5. **Responsive Design**: Test on multiple device sizes

## 🚀 Next Steps

This header component is designed to be the foundation for a complete design system. You can:

1. **Add More Components**: Create Footer, Hero, Card components using the same patterns
2. **Integrate CMS**: Replace JSON files with API calls to a headless CMS
3. **Add Animations**: Enhance with Framer Motion or similar animation libraries
4. **Theme System**: Extend with dark mode and multiple theme variants
5. **Testing**: Add unit tests with React Testing Library

## 📱 Mobile-First Design

The header is built with mobile-first principles:
- Touch-friendly button sizes (44px minimum)
- Optimized for thumb navigation
- Fast animations and smooth transitions
- Accessible on all devices

---

**Ready to build more components?** This header demonstrates the patterns and architecture for creating a complete, modular design system. Each component is self-contained, data-driven, and follows modern React best practices.
