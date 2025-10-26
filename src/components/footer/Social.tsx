import { Asterisk, Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
import React from 'react';

interface SocialItem { id: string; label: string; href: string; icon: string; }
interface SocialProps { items: SocialItem[] }

const iconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  asterisk: <Asterisk className="h-5 w-5" />,
  phone: <Phone className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />
};

export const FooterSocial: React.FC<SocialProps> = ({ items }) => {
  return (
    <ul className="flex items-center flex-wrap gap-x-8 gap-y-4">
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-2 text-ww-gray-700">
          <span aria-hidden className="text-ww-gray-800">{iconMap[item.icon] ?? iconMap['asterisk']}</span>
          <a href={item.href} className="hover:text-ww-blue-700 transition-colors" aria-label={item.label}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocial;
