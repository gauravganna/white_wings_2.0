import { Facebook, Instagram, Play, Youtube } from 'lucide-react';
import React from 'react';

export interface SocialItem {
  id: string;
  platform: 'youtube' | 'instagram' | 'facebook' | string;
  type: 'video' | 'image' | 'link';
  title: string;
  subtitle?: string;
  thumbnail: string;
  url: string;
}

const PlatformIcon: React.FC<{ platform: string }> = ({ platform }) => {
  const common = 'h-4 w-4';
  if (platform === 'instagram') return <Instagram className={common} aria-hidden />;
  if (platform === 'youtube') return <Youtube className={common} aria-hidden />;
  if (platform === 'facebook') return <Facebook className={common} aria-hidden />;
  return <span className="text-xs">↗</span>;
};

export const SocialMediaCard: React.FC<{ item: SocialItem }> = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-sm overflow-hidden bg-white shadow-sm border border-ww-gray-200 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-ww-blue-600"
      aria-label={`${item.title} - ${item.subtitle ?? ''}`}
    >
      <div className="relative aspect-[311/275] w-full">
        <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
        {/* Video play indicator */}
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow">
              <Play className="h-5 w-5 text-ww-blue-800" />
            </div>
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="flex items-center gap-2 text-ww-gray-800">
          <PlatformIcon platform={item.platform} />
          <h3 className="font-medium">{item.title}</h3>
        </div>
        {item.subtitle && <p className="text-xs text-ww-gray-500 mt-1">{item.subtitle}</p>}
      </div>
    </a>
  );
};

export default SocialMediaCard;
