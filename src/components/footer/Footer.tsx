import React from 'react';
import { FooterNewsletter, type NewsletterData } from './Newsletter';

interface FooterData {
  newsletter: NewsletterData;
}

interface FooterProps {
  data: FooterData;
  onNewsletterSubscribe?: (email: string) => Promise<void> | void;
}

export const Footer: React.FC<FooterProps> = ({ data, onNewsletterSubscribe }) => {
  return (
    <footer role="contentinfo" className="mt-16">
      <FooterNewsletter data={data.newsletter} onSubscribe={onNewsletterSubscribe} />
    </footer>
  );
};

export default Footer;
