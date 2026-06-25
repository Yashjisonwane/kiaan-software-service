import React from 'react';
import Link from 'next/link';
import './ServiceCard.css';
import { ServiceItem } from '../../data/servicesData';

interface ServiceCardProps {
  item: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <Link
      href={item.href}
      prefetch={false}
      className="service-card px-4 py-3.5 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-yellow-500 hover:bg-white/5 transition-all block"
    >
      {item.name}
    </Link>
  );
};
