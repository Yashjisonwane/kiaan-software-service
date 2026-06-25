import React from 'react';
import { EcosystemClient } from '@/components/Ecosystem/EcosystemClient';
import { serviceEcosystems } from '@/data/servicesData';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(serviceEcosystems).map((slug) => ({
    slug,
  }));
}

export default function ServiceEcosystemPage({ params }: PageProps) {
  const { slug } = params;

  if (!serviceEcosystems[slug]) {
    notFound();
  }

  return <EcosystemClient slug={slug} />;
}
