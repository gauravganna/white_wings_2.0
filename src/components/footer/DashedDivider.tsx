import React from 'react';

interface DashedDividerProps {
  maxWidth?: number;
  color?: string;
  dash?: number; // dash length
  gap?: number;  // gap length
  className?: string;
}

export const DashedDivider: React.FC<DashedDividerProps> = ({
  maxWidth = 800,
  color = '#9ca3af',
  dash = 10,
  gap = 10,
  className
}) => {
  return (
    <div className={['hidden lg:flex justify-center items-center px-4', className].filter(Boolean).join(' ')} aria-hidden="true">
      <div
        className="bg-repeat-x w-full"
        style={{
          maxWidth,
          height: 2,
          backgroundImage: `repeating-linear-gradient(to right, ${color} 0, ${color} ${dash}px, transparent ${dash}px, transparent ${dash + gap}px)`
        }}
      />
    </div>
  );
};

export default DashedDivider;
