import React from 'react';

interface LinkItem { id: string; label: string; href: string }
interface FooterLinksProps { items: LinkItem[] }

export const FooterLinks: React.FC<FooterLinksProps> = ({ items }) => {
  return (
    <ul className="flex items-center flex-wrap gap-x-8 gap-y-4">
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.href} className="text-ww-gray-700 hover:text-ww-blue-700 transition-colors">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
