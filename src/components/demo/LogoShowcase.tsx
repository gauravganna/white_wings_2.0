import { Logo } from '@/components/layout';
import logoExamples from '@/data/logo-examples.json';
import React from 'react';

export const LogoShowcase: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-ww-gray-200">
      <h2 className="text-2xl font-bold text-ww-gray-800 mb-6">
        Logo Variants Showcase
      </h2>
      
      <div className="space-y-8">
        {/* Full Logo with Image */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-ww-gray-700">Full Logo (Image)</h3>
          <div className="p-4 bg-ww-gray-50 rounded-md">
            <Logo 
              data={logoExamples.examples.fullLogo} 
              size="lg"
            />
          </div>
          <p className="text-sm text-ww-gray-600">
            Complete logo with your White Wings image file
          </p>
        </div>

        {/* Icon Only */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-ww-gray-700">Icon Only</h3>
          <div className="p-4 bg-ww-gray-50 rounded-md">
            <Logo 
              data={logoExamples.examples.iconOnly} 
              size="md"
            />
          </div>
          <p className="text-sm text-ww-gray-600">
            Just the icon/symbol for compact spaces
          </p>
        </div>

        {/* Text with Icon */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-ww-gray-700">Icon + Text Combination</h3>
          <div className="p-4 bg-ww-gray-50 rounded-md">
            <Logo 
              data={logoExamples.examples.textWithIcon} 
              size="md"
            />
          </div>
          <p className="text-sm text-ww-gray-600">
            Icon alongside text for flexible layouts
          </p>
        </div>

        {/* Text Only */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-ww-gray-700">Text Only</h3>
          <div className="p-4 bg-ww-gray-50 rounded-md">
            <Logo 
              data={logoExamples.examples.textOnly} 
              size="md"
            />
          </div>
          <p className="text-sm text-ww-gray-600">
            Pure text version for minimal designs
          </p>
        </div>

        {/* Fallback Squares */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-ww-gray-700">Fallback Design</h3>
          <div className="p-4 bg-ww-gray-50 rounded-md">
            <Logo 
              data={logoExamples.examples.fallbackSquares} 
              size="md"
            />
          </div>
          <p className="text-sm text-ww-gray-600">
            Geometric fallback when image is not available
          </p>
        </div>

        {/* Different Sizes */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-ww-gray-700">Size Variants</h3>
          <div className="p-4 bg-ww-gray-50 rounded-md space-y-4">
            <div className="flex items-center space-x-6">
              <div>
                <p className="text-xs text-ww-gray-500 mb-2">Small</p>
                <Logo data={logoExamples.examples.textWithIcon} size="sm" />
              </div>
              <div>
                <p className="text-xs text-ww-gray-500 mb-2">Medium</p>
                <Logo data={logoExamples.examples.textWithIcon} size="md" />
              </div>
              <div>
                <p className="text-xs text-ww-gray-500 mb-2">Large</p>
                <Logo data={logoExamples.examples.textWithIcon} size="lg" />
              </div>
            </div>
          </div>
          <p className="text-sm text-ww-gray-600">
            Responsive sizing for different contexts
          </p>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">How to Use Your Logo:</h4>
        <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
          <li>Place your White Wings logo files in <code className="bg-blue-100 px-1 rounded">src/assets/images/</code></li>
          <li>Update the <code className="bg-blue-100 px-1 rounded">src</code> path in <code className="bg-blue-100 px-1 rounded">header.json</code></li>
          <li>The component will automatically use your image logo</li>
          <li>Text fallback is available if image fails to load</li>
        </ol>
      </div>
    </div>
  );
};
