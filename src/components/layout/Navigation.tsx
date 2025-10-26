import { cn } from '@/lib/utils';
import React from 'react';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavigationData {
  items: NavigationItem[];
}

interface NavigationProps {
  data: NavigationData;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  onItemClick?: (item: NavigationItem) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  data, 
  className,
  orientation = 'horizontal',
  onItemClick 
}) => {
  const handleItemClick = (item: NavigationItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <nav 
      className={cn(
        "flex",
        orientation === 'horizontal' ? "flex-row space-x-8" : "flex-col space-y-4",
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {data.items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => handleItemClick(item)}
          className={cn(
            "relative text-sm font-medium transition-colors duration-200",
            "hover:text-ww-blue-600 focus:text-ww-blue-600",
            "focus:outline-none focus:ring-2 focus:ring-ww-blue-500 focus:ring-offset-2 rounded-sm px-2 py-1",
            item.isActive 
              ? "text-ww-blue-600" 
              : "text-ww-gray-700 hover:text-ww-blue-600"
          )}
          aria-current={item.isActive ? "page" : undefined}
        >
          {item.label}
          {item.isActive && (
            <span 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-ww-blue-600 rounded-full"
              aria-hidden="true"
            />
          )}
        </a>
      ))}
    </nav>
  );
};
