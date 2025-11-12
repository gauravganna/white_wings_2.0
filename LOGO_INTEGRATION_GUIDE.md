# White Wings Logo Integration Guide

This guide explains how to integrate your White Wings logo into the header component and use it throughout your application.

## 🎯 Quick Setup

### 1. Add Your Logo Files

Place your White Wings logo files in the `public/assets/images/` directory:

```
public/assets/images/
├── white-wings-logo-full.png    # Complete logo with text
├── white-wings-icon.png         # Icon/symbol only
├── white-wings-logo-white.png   # White version for dark backgrounds
└── white-wings-logo.svg         # Vector version (recommended)
```

### 2. Update Header Configuration

Edit `src/data/header.json` to use your logo:

```json
{
  "logo": {
    "image": {
      "src": "/assets/images/white-wings-logo.png",
      "alt": "White Wings Group - We Transform Space",
      "width": 120,
      "height": 40
    },
    "text": "WHITE WINGS",
    "subtitle": "GROUP", 
    "tagline": "We Transform Space",
    "variant": "full"
  }
}
```

### 3. That's It!

Your logo will now appear in the header automatically. The component handles:
- ✅ Responsive sizing
- ✅ Accessibility
- ✅ Loading optimization
- ✅ Fallback handling

## 🎨 Logo Variants

### Full Logo (`variant: "full"`)
Shows your complete logo image with optional text alongside.

```json
{
  "image": { "src": "/path/to/full-logo.png", "alt": "..." },
  "variant": "full"
}
```

### Icon Only (`variant: "icon"`)
Shows just the logo symbol/icon without text.

```json
{
  "image": { "src": "/path/to/icon.png", "alt": "..." },
  "variant": "icon"
}
```

### Text Only (`variant: "text"`)
Shows only text without any image.

```json
{
  "text": "WHITE WINGS",
  "subtitle": "GROUP",
  "variant": "text"
}
```

## 📏 Size Options

Control logo size with the `size` prop:

```tsx
// Small (32px height)
<Logo data={logoData} size="sm" />

// Medium (40px height) - Default
<Logo data={logoData} size="md" />

// Large (48px height)
<Logo data={logoData} size="lg" />
```

## 🔧 Advanced Usage

### Custom Logo Component

```tsx
import { Logo } from '@/components/layout';

const customLogoData = {
  image: {
    src: "/assets/custom-logo.svg",
    alt: "Custom Logo",
    width: 100,
    height: 35
  },
  variant: "full"
};

<Logo 
  data={customLogoData}
  size="lg"
  href="/custom-link"
  className="custom-styles"
/>
```

### Multiple Logo Configurations

Create different logo configs for different pages:

```typescript
// src/data/logos/
├── header-logo.json      # Main header logo
├── footer-logo.json      # Footer version (maybe white)
├── mobile-logo.json      # Simplified mobile version
└── print-logo.json       # High-res for print
```

### Conditional Logo Loading

```tsx
const logoData = {
  image: {
    src: isDarkMode 
      ? "/assets/logo-white.png" 
      : "/assets/logo-dark.png",
    alt: "White Wings Group"
  }
};
```

## 🎯 Best Practices

### Image Optimization
- **Use SVG** for crisp scaling at all sizes
- **Optimize PNGs** with tools like TinyPNG
- **Provide multiple sizes** for different contexts
- **Use WebP** format for better compression

### Accessibility
- **Always provide alt text** that describes your logo
- **Use semantic markup** (the component handles this)
- **Ensure sufficient contrast** against backgrounds

### Performance
- **Lazy loading** is enabled by default
- **Specify dimensions** to prevent layout shift
- **Use appropriate file sizes** for web

### Responsive Design
```json
{
  "mobile": {
    "image": { "src": "/assets/logo-mobile.png" },
    "variant": "icon"
  },
  "desktop": {
    "image": { "src": "/assets/logo-full.png" },
    "variant": "full"
  }
}
```

## 🚨 Troubleshooting

### Logo Not Showing?
1. Check file path is correct
2. Verify image file exists
3. Check browser console for errors
4. Ensure proper file permissions

### Logo Too Big/Small?
1. Adjust `width` and `height` in JSON
2. Use different `size` prop
3. Add custom CSS classes

### Fallback Not Working?
The component automatically falls back to:
1. Text version if image fails
2. Geometric squares if no text provided

## 📱 Usage Throughout App

### In Components
```tsx
import { Logo } from '@/components/layout';
import logoData from '@/data/header.json';

// Use anywhere in your app
<Logo data={logoData.logo} size="sm" />
```

### In Footer
```tsx
<Logo 
  data={{
    image: { src: "/assets/logo-white.png", alt: "White Wings" },
    variant: "icon"
  }}
  size="md"
/>
```

### In Print Styles
```css
@media print {
  .logo img {
    filter: grayscale(100%);
  }
}
```

## 🔄 Migration from Old Logo

If you're updating from the geometric squares:

1. **Keep existing config** as fallback
2. **Add image property** to logo data
3. **Test thoroughly** across devices
4. **Update alt text** to match your brand

The component is backward compatible - existing text-based logos continue to work!

---

**Need help?** The Logo component is designed to be flexible and handle most use cases. Check the `LogoShowcase` component for live examples of all variants.
