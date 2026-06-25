import React from 'react';
import { serviceEcosystems } from '@/data/servicesData';
import { notFound, redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(serviceEcosystems).map((slug) => ({
    slug,
  }));
}

export default async function ServiceEcosystemPage({ params }: PageProps) {
  const { slug } = await params;

  if (!serviceEcosystems[slug]) {
    notFound();
  }

  redirect(`/products/${slug}`);
}
