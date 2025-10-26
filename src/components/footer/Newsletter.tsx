import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useEffect, useMemo, useState } from 'react';
import { FooterRow } from './Row';

export interface NewsletterData {
  title: string;
  description: string;
  input: { placeholder: string; ariaLabel: string };
  cta: { label: string; ariaLabel: string };
  success: { message: string; ariaLive?: 'polite' | 'assertive' };
  errors: { required: string; invalid: string };
}

interface FooterNewsletterProps {
  data: NewsletterData;
  onSubscribe?: (email: string) => Promise<void> | void;
  className?: string;
}

const emailRegex = /^(?:[a-zA-Z0-9_'^&\/+{}*!?`|~.-]+)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

export const FooterNewsletter: React.FC<FooterNewsletterProps> = ({ data, onSubscribe, className }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isValid = useMemo(() => emailRegex.test(email.trim()), [email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!trimmed) {
      setError(data.errors.required);
      return;
    }
    if (!isValid) {
      setError(data.errors.invalid);
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubscribe?.(trimmed);
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError(data.errors.invalid);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide success after 3s
  useEffect(() => {
    if (!isSuccess) return;
    const t = setTimeout(() => setIsSuccess(false), 3000);
    return () => clearTimeout(t);
  }, [isSuccess]);

  return (
    <section
      className={cn(
        'w-full bg-ww-gray-50',
        'border-t border-ww-gray-200',
        'py-8 md:py-12',
        className
      )}
      aria-labelledby="newsletter-title"
      role="region"
    >
      <div className="container mx-auto px-4">
        {/* Use FooterRow layout: left custom content | dashed | right form */}
        <FooterRow
          left={
            <div>
              <h2 id="newsletter-title" className="text-base md:text-lg font-semibold text-ww-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
                {data.title}
              </h2>
              <p className="mt-2 text-ww-gray-600 text-sm md:text-base max-w-lg">
                {data.description}
              </p>
            </div>
          }
        >
          <form onSubmit={handleSubmit} noValidate className="w-full max-w-[420px]">
            <div className="flex items-center gap-3 h-11">
              <div className="relative flex-1 min-w-0 h-11">
                <input
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={data.input.placeholder}
                  aria-label={data.input.ariaLabel}
                  aria-invalid={!!error}
                  aria-describedby="newsletter-error newsletter-success"
                  className={cn(
                    'w-full bg-transparent outline-none',
                    'border-b border-ww-gray-400 focus:border-ww-blue-600',
                    'transition-colors duration-200',
                    'placeholder:text-ww-gray-500 text-ww-gray-900',
                    'py-2.5 text-sm md:text-base'
                  )}
                />

                {/* Error text */}
                {!!error && (
                  <p id="newsletter-error" role="alert" className="mt-2 text-sm text-red-600 text-left">
                    {error}
                  </p>
                )}

                {/* Success text (aria-live) */}
                <p
                  id="newsletter-success"
                  aria-live={data.success.ariaLive ?? 'polite'}
                  className={cn('mt-2 text-sm text-green-600 text-left', isSuccess ? 'opacity-100' : 'opacity-0')}
                >
                  {data.success.message}
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'shrink-0 rounded-md px-5 h-11',
                  'bg-ww-blue-800 hover:bg-ww-blue-900 text-white text-sm',
                  'focus-visible:ring-2 focus-visible:ring-ww-blue-600 focus-visible:ring-offset-2'
                )}
                aria-label={data.cta.ariaLabel}
              >
                {isSubmitting ? 'Submitting…' : data.cta.label}
              </Button>
            </div>
          </form>
        </FooterRow>
      </div>
    </section>
  );
};

export default FooterNewsletter;
