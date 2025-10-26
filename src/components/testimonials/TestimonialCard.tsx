import React from 'react';

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  quote: string;
  long?: string;
}

interface TestimonialCardProps {
  item: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <article className="w-full h-full bg-white rounded-lg border border-ww-gray-200 shadow-sm md:py-4 md:px-4">
      {/* Header */}
      <div className="flex items-center gap-4 p-6">
        <div className="h-12 w-12 rounded-full bg-ww-gray-200 overflow-hidden">
          {item.avatar && (
            <img src={item.avatar} alt={item.name} className="h-full w-full object-cover rounded-full" loading="lazy" />
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-ww-gray-900">{item.name}</h3>
          {item.role && <p className="text-sm text-ww-gray-600 ">{item.role}</p>}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pb-6">
        <p className="text-ww-gray-700 leading-relaxed">
          {item.long || item.quote}
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
