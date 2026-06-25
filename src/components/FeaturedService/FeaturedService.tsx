import React from 'react';
import Link from 'next/link';
import './FeaturedService.css';
import { FeaturedService as FeaturedServiceType } from '../../data/servicesData';

interface FeaturedServiceProps {
  featured: FeaturedServiceType;
}

export const FeaturedService: React.FC<FeaturedServiceProps> = ({ featured }) => {
  return (
    <div className="featured-service p-4 bg-white/5 rounded-lg border border-white/10 flex flex-col gap-2">
      <h3 className="text-yellow-500 font-bold uppercase tracking-widest text-xs">Featured</h3>
      <Link href={featured.href} className="text-white hover:text-yellow-500 transition-colors font-bold text-sm block">
        {featured.title}
      </Link>
      <p className="text-zinc-400 text-xs">{featured.description}</p>
    </div>
  );
};
