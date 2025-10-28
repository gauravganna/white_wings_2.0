import React from 'react';
import { FooterContact } from './Contact';
import { FooterLegal } from './Legal';
import { FooterLinks } from './Links';
import { FooterNewsletter, type NewsletterData } from './Newsletter';
import { FooterRow } from './Row';
import { FooterSocial } from './Social';

interface FooterData {
  newsletter: NewsletterData;
  social: { label: string; items: Array<{ id: string; label: string; href: string; icon: string }> };
  quickLinks: { label: string; items: Array<{ id: string; label: string; href: string }> };
  contact: { label: string; phone: { text: string; href: string }, email: { text: string; href: string } };
  legal?: { copyright: string; links: Array<{ id: string; label: string; href: string }> };
}

interface FooterProps {
  data: FooterData;
  onNewsletterSubscribe?: (email: string) => Promise<void> | void;
}

export const Footer: React.FC<FooterProps> = ({ data, onNewsletterSubscribe }) => {
  return (
    <footer role="contentinfo" className="mt-2">
      <FooterNewsletter data={data.newsletter} onSubscribe={onNewsletterSubscribe} />

      <div className="container mx-auto px-4 mt-2">
        <FooterRow label={data.social.label}>
          <FooterSocial items={data.social.items} />
        </FooterRow>
        <FooterRow label={data.quickLinks.label}>
          <FooterLinks items={data.quickLinks.items} />
        </FooterRow>
        <FooterRow label={data.contact.label}>
          <FooterContact phone={data.contact.phone} email={data.contact.email} />
        </FooterRow>

        {/* Legal */}
        {data.legal && <FooterLegal copyright={data.legal.copyright} links={data.legal.links} />}
      </div>
    </footer>
  );
};

export default Footer;
