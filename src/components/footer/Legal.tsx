import React from 'react';

interface LegalLink { id: string; label: string; href: string }
interface LegalData {
  copyright: string;
  links: LegalLink[];
}

export const FooterLegal: React.FC<LegalData> = ({ copyright, links }) => {
  return (
    <div className="mt-6 border-t border-ww-gray-300 pt-2 pb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-ww-gray-600">
        <p className="text-sm">{copyright}</p>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <a href={l.href} className="hover:text-ww-blue-700 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterLegal;
