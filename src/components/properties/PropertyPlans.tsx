import React from 'react'

interface PlanItem {
  src: string
  label?: string
  alt?: string
}

interface PropertyPlansProps {
  title?: string
  items: PlanItem[]
}

export const PropertyPlans: React.FC<PropertyPlansProps> = ({ title = 'Plans', items }) => {
  const plans = (items ?? []).filter(Boolean)

  if (plans.length === 0) {
    return null
  }

  return (
    <section id="plans" aria-labelledby="plans-title" className="bg-[#F8F8F8]">
      <div className="container mx-auto px-2 md:px-4 py-0 md:pt-6">
        <h2 id="plans-title" className="text-2xl md:text-3xl font-semibold text-ww-gray-900 mb-4 md:mb-6">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-3 md:gap-16 px-0 md:px-8">
          {plans.map((plan, idx) => (
            <figure key={idx} className="flex flex-col gap-2">
              {plan.label && (
                <figcaption className="text-sm md:text-base font-medium text-ww-gray-800 hidden md:block">
                  {plan.label}
                </figcaption>
              )}
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-ww-gray-200">
                <img
                  src={plan.src}
                  alt={plan.alt ?? plan.label ?? `${title} ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertyPlans


