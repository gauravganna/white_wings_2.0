import { Mail, Phone } from 'lucide-react';
import React from 'react';

interface ContactItem { text: string; href: string; icon?: 'phone' | 'mail' | string }
interface ContactData { phone: ContactItem; email: ContactItem }

export const FooterContact: React.FC<ContactData> = ({ phone, email }) => {
  return (
    <ul className="flex items-center flex-wrap gap-x-12 gap-y-4">
      <li className="flex items-center gap-2 text-ww-gray-700">
        <Phone className="h-5 w-5" aria-hidden />
        <a href={phone.href} className="hover:text-ww-blue-700 transition-colors">
          {phone.text}
        </a>
      </li>
      <li className="flex items-center gap-2 text-ww-gray-700">
        <Mail className="h-5 w-5" aria-hidden />
        <a href={email.href} className="hover:text-ww-blue-700 transition-colors">
          {email.text}
        </a>
      </li>
    </ul>
  );
};

export default FooterContact;
