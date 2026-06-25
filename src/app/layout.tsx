import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from "@/components/Footer";
import { GlobalClientComponents } from "@/components/GlobalClientComponents";
import AwardBanner from "@/components/AwardBanner";
import Script from "next/script";
import { Anton, Manrope } from "next/font/google";

const anton = Anton({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-anton",
});

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    title: "Custom Software Development Company India | Kiaan Technology",
    description: "Kiaan Technology provides AI-driven custom software development services including ERP, CRM, SaaS development, and enterprise automation solutions in India.",
    keywords: "Custom Software Development Company India, ERP Software Development, CRM Development Company, SaaS Development India, Business Automation Software, Enterprise Software Development, Cloud Based Business Software, Web Application Development Company",
    robots: "index, follow",
    authors: [{ name: "Kiaan Technology" }],
    category: "Technology",
    metadataBase: new URL("https://kiaantechnology.com"),
    alternates: {
        canonical: "https://kiaantechnology.com",
    },
    openGraph: {
        title: "Custom Software Development Company India | Kiaan Technology",
        description: "Kiaan Technology provides ERP, CRM, SaaS and AI powered custom software development services.",
        url: "https://kiaantechnology.com",
        siteName: "Kiaan Technology",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Kiaan Technology - Custom Software Development",
            },
        ],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Development Company India | Kiaan Technology",
        description: "AI driven business automation and software development company.",
        images: ["/og-image.jpg"],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    other: {
        "theme-color": "#000000",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`no-scrollbar ${anton.variable} ${manrope.variable}`} suppressHydrationWarning>
            <head>
                {/* DNS Prefetch for external domains */}
                <link rel="dns-prefetch" href="https://images.unsplash.com" />

                {/* Google Analytics (GA4) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-JCSRXVVVR8"
                    strategy="afterInteractive"
                />
                <Script
                    id="ga4-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-JCSRXVVVR8');
                        `,
                    }}
                />
            </head>
            <body className="antialiased selection:bg-yellow-500 selection:text-black max-w-screen pb-20" suppressHydrationWarning>
                {/* Global Schema Markup */}
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Kiaan Technology",
                            "url": "https://kiaantechnology.com",
                            "logo": "https://kiaantechnology.com/logo.png",
                            "description": "AI driven custom software development company providing ERP, CRM, SaaS and enterprise solutions.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91 97521 00980",
                                "contactType": "customer service"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/company/89547261/",
                                "https://www.instagram.com/kiaan_technology4/",
                                "https://youtube.com/@kiaantechnology-r3p?si=_NY7-esRTL0vhO6_"
                            ]
                        })
                    }}
                />
                <Script
                    id="website-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Kiaan Technology",
                            "url": "https://kiaantechnology.com",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://kiaantechnology.com/search?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />
                <Script
                    id="breadcrumb-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://kiaantechnology.com"
                                }
                            ]
                        })
                    }}
                />
                <Script
                    id="local-business"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Kiaan Technology Indore",
                            "image": "https://kiaantechnology.com/logo.png",
                            "@id": "https://kiaantechnology.com",
                            "url": "https://kiaantechnology.com",
                            "telephone": "+91 97521 00980",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Vijay Nagar",
                                "addressLocality": "Indore",
                                "postalCode": "452010",
                                "addressRegion": "MP",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 22.7523,
                                "longitude": 75.8948
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday"
                                ],
                                "opens": "09:00",
                                "closes": "20:00"
                            }
                        })
                    }}
                />
                <div className="flex flex-col min-h-screen relative bg-black text-white">
                    <Navbar />
                    <main className="relative z-10 w-full">{children}</main>
                    <Footer />
                    <GlobalClientComponents />
                    <AwardBanner />
                </div>
            </body>
        </html>
    );
}
