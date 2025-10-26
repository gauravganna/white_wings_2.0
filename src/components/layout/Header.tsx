import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { Navigation } from './Navigation';

interface LogoData {
  text: string;
  subtitle: string;
  tagline: string;
}

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavigationData {
  items: NavigationItem[];
}

interface CTAData {
  text: string;
  href: string;
  variant: string;
}

interface HeaderData {
  logo: LogoData;
  navigation: NavigationData;
  cta?: CTAData;
}

interface HeaderProps {
  data: HeaderData;
  className?: string;
  variant?: 'default' | 'transparent' | 'solid';
  sticky?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  data, 
  className,
  variant = 'default',
  sticky = true 
}) => {
  const headerVariants = {
    default: "bg-white border-b border-ww-gray-200",
    transparent: "bg-transparent",
    solid: "bg-white shadow-sm"
  };

  return (
    <header 
      className={cn(
        "w-full z-40 transition-all duration-200",
        sticky && "sticky top-0",
        headerVariants[variant],
        className
      )}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo 
              data={data.logo}
              href="/"
              className="transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Navigation 
              data={data.navigation}
              className="flex-1"
            />
            
            {/* Desktop CTA Button */}
            {data.cta && (
              <Button
                asChild
                className={cn(
                  "ml-8 bg-ww-blue-600 hover:bg-ww-blue-700 text-white",
                  "px-6 py-2 rounded-md font-medium transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-ww-blue-500 focus:ring-offset-2"
                )}
              >
                <a href={data.cta.href}>
                  {data.cta.text}
                </a>
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <MobileMenu 
            navigationData={data.navigation}
            ctaData={data.cta || undefined}
          />
        </div>
      </div>
    </header>
  );
};
