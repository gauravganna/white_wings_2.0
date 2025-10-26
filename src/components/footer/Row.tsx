import React from 'react';
import { DashedDivider } from './DashedDivider';

interface FooterRowProps {
  label?: string;
  left?: React.ReactNode;
  children: React.ReactNode;
}

export const FooterRow: React.FC<FooterRowProps> = ({ label, left, children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center py-4">
      <div>
        {left ? left : <p className="text-ww-gray-700 font-medium">{label}</p>}
      </div>
      <DashedDivider className="px-2" />
      <div className="flex items-center justify-end flex-wrap gap-x-8 gap-y-4 text-right">
        {children}
      </div>
    </div>
  );
};

export default FooterRow;
