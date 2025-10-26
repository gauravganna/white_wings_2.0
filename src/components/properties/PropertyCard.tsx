import React from 'react';

export interface PropertyItem {
  id: string;
  type?: 'residential' | 'commercial';
  name: string;
  address: string;
  phone: string;
  image: string;
  logo: string;
  brochureUrl: string;
  contactUrl: string;
  detailUrl?: string;
}

export const PropertyCard: React.FC<{ item: PropertyItem }> = ({ item }) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    item.detailUrl ? (
      <a href={item.detailUrl} className="block focus:outline-none focus:ring-2 focus:ring-ww-blue-600" aria-label={`${item.name} details`}>
        {children}
      </a>
    ) : (
      <>{children}</>
    )
  );

  return (
    <article className="rounded-lg overflow-hidden border border-ww-gray-200 bg-white shadow-sm">
      <Wrapper>
        {/* Desktop layout: image left, details right */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
          {/* Image */}
          <div className="relative h-[367px]">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-10 left-8 text-white">
              <h3 className="text-6xl tracking-wider opacity-80 font-medium">{item.name}</h3>
              <p className="text-s mt-2 max-w-[40ch] leading-relaxed opacity-70">{item.address}</p>
              <a href={`tel:${item.phone}`} className="mt-2 inline-block opacity-80" onClick={(e) => e.stopPropagation()}>
                {item.phone}
              </a>
            </div>
          </div>

          {/* Right column: logo top + CTAs */}
          <div className="flex flex-col items-center justify-between p-6">
            <div className="w-full h-full flex items-center justify-center">
              <img src={item.logo} alt={`${item.name} logo`} className="max-h-48 object-contain" />
            </div>

            <div className="w-full space-y-3 px-4">
              <a
                href={item.brochureUrl}
                className="block w-full text-center border rounded-md py-2 text-ww-gray-800 hover:bg-ww-gray-50"
                onClick={(e) => e.stopPropagation()}
              >
                Brochure
              </a>
              <a
                href={item.contactUrl}
                className="block w-full text-center rounded-md py-2 bg-ww-blue-800 text-white hover:bg-ww-blue-900"
                onClick={(e) => e.stopPropagation()}
              >
                Contact us
              </a>
            </div>
          </div>
        </div>

        {/* Mobile card: compact vertical */}
        <div className="md:hidden">
          <div className="relative h-[240px]">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <h3 className="text-5xl tracking-wider opacity-80 font-medium">{item.name}</h3>
              <p className="text-s mt-2 max-w-[70ch] leading-relaxed opacity-70">{item.address}</p>
              <a href={`tel:${item.phone}`} className="mt-1 inline-block underline opacity-80 text-sm" onClick={(e) => e.stopPropagation()}>
                {item.phone}
              </a>
            </div>
          </div>
          <div className="p-3 space-y-3">
            <a
              href={item.brochureUrl}
              className="block w-full text-center border rounded-md py-2 text-ww-gray-800 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              Brochure
            </a>
            <a
              href={item.contactUrl}
              className="block w-full text-center rounded-md py-2 bg-ww-blue-800 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              Contact us
            </a>
          </div>
        </div>
      </Wrapper>
    </article>
  );
};

export default PropertyCard;
