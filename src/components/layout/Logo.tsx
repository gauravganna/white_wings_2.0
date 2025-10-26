import { cn } from '@/lib/utils';
import React from 'react';

interface LogoData {
  // Image-based logo
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  // Text-based logo (fallback or alternative)
  text?: string;
  subtitle?: string;
  tagline?: string;
  // Logo variant
  variant?: 'full' | 'icon' | 'text';
}

interface LogoProps {
  data: LogoData;
  className?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  data, 
  className,
  href = "/",
  size = 'md'
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      container: "space-x-2",
      image: "h-12",
      text: "text-lg",
      tagline: "text-xs",
      squares: "w-2 h-2"
    },
    md: {
      container: "space-x-3",
      image: "h-16",
      text: "text-xl",
      tagline: "text-xs",
      squares: "w-3 h-3"
    },
    lg: {
      container: "space-x-4",
      image: "h-20",
      text: "text-2xl",
      tagline: "text-sm",
      squares: "w-4 h-4"
    }
  };

  const config = sizeConfig[size];

  const LogoContent = () => {
    // If image is provided, use image logo
    if (data.image) {
      return (
        <div className={cn("flex items-center", config.container, className)}>
          <img
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            className={cn(
              "object-contain transition-opacity hover:opacity-90",
              config.image
            )}
            loading="lazy"
          />
          {/* Optional text alongside image */}
          {data.variant !== 'icon' && (data.text || data.tagline) && (
            <div className="flex flex-col">
              {data.text && (
                <span className={cn(
                  "font-bold text-ww-gray-800 tracking-wide",
                  config.text
                )}>
                  {data.text}
                </span>
              )}
              {data.tagline && (
                <span className={cn(
                  "text-ww-gray-500 font-medium tracking-wider uppercase",
                  config.tagline
                )}>
                  {data.tagline}
                </span>
              )}
            </div>
          )}
        </div>
      );
    }

    // Fallback to text/icon logo
    return (
      <div className={cn("flex items-center", config.container, className)}>
        {/* Logo Icon - Blue squares representing the brand (fallback) */}
        {data.variant !== 'text' && (
          <div className="flex flex-col space-y-1">
            <div className="flex space-x-1">
              <div className={cn(config.squares, "bg-ww-blue-600 rounded-sm")}></div>
              <div className={cn(config.squares, "bg-ww-blue-400 rounded-sm")}></div>
            </div>
            <div className="flex space-x-1">
              <div className={cn(config.squares, "bg-ww-blue-500 rounded-sm")}></div>
              <div className={cn(config.squares, "bg-ww-blue-300 rounded-sm")}></div>
            </div>
          </div>
        )}
        
        {/* Logo Text */}
        {data.variant !== 'icon' && (data.text || data.subtitle || data.tagline) && (
          <div className="flex flex-col">
            {(data.text || data.subtitle) && (
              <div className="flex items-center space-x-2">
                {data.text && (
                  <span className={cn(
                    "font-bold text-ww-gray-800 tracking-wide",
                    config.text
                  )}>
                    {data.text}
                  </span>
                )}
                {data.subtitle && (
                  <span className={cn(
                    "font-bold text-ww-blue-600 tracking-wide",
                    config.text
                  )}>
                    {data.subtitle}
                  </span>
                )}
              </div>
            )}
            {data.tagline && (
              <span className={cn(
                "text-ww-gray-500 font-medium tracking-wider uppercase",
                config.tagline
              )}>
                {data.tagline}
              </span>
            )}
          </div>
        )}
      </div>
    );
  };

  // Generate accessible label
  const getAriaLabel = () => {
    if (data.image) {
      return data.image.alt;
    }
    const parts = [data.text, data.subtitle, data.tagline].filter(Boolean);
    return parts.join(' - ') || 'White Wings Group Logo';
  };

  if (href) {
    return (
      <a 
        href={href}
        className="inline-block transition-opacity hover:opacity-80"
        aria-label={getAriaLabel()}
      >
        <LogoContent />
      </a>
    );
  }

  return <LogoContent />;
};
