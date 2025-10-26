import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Navigation } from './Navigation';

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

interface MobileMenuProps {
  navigationData: NavigationData;
  ctaData?: CTAData;
  className?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  navigationData, 
  ctaData,
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isOpen && !target.closest('[data-mobile-menu]') && !target.closest('#mobile-menu')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Add click outside listener with a small delay to prevent immediate closing
      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
      document.body.style.overflow = 'hidden';
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('click', handleClickOutside);
        document.body.style.overflow = 'unset';
      };
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggle menu clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn("block md:hidden", className)} data-mobile-menu>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          "inline-flex items-center justify-center p-2 rounded-md",
          "text-ww-gray-700 hover:text-ww-blue-600 hover:bg-ww-gray-100",
          "focus:outline-none focus:ring-2 focus:ring-ww-blue-500 focus:ring-offset-2",
          "transition-colors duration-200"
        )}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50"
          style={{ zIndex: 9998 }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-80 max-w-sm bg-white shadow-xl",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        style={{ 
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          zIndex: 9999 
        }}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-ww-gray-200">
            <h2 id="mobile-menu-title" className="text-lg font-semibold text-ww-gray-800">
              Menu
            </h2>
            <button
              onClick={toggleMenu}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md",
                "text-ww-gray-700 hover:text-ww-blue-600 hover:bg-ww-gray-100",
                "focus:outline-none focus:ring-2 focus:ring-ww-blue-500 focus:ring-offset-2"
              )}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <Navigation
              data={navigationData}
              orientation="vertical"
              onItemClick={handleItemClick}
              className="mb-8"
            />

            {/* Mobile CTA Button */}
            {ctaData && (
              <div className="pt-4 border-t border-ww-gray-200">
                <Button
                  asChild
                  className="w-full bg-ww-blue-600 hover:bg-ww-blue-700 text-white"
                >
                  <a href={ctaData.href} onClick={handleItemClick}>
                    {ctaData.text}
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
