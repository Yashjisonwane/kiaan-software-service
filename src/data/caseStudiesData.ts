export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    category: string;
    type: string;
    result: string;
    desc: string;
    image: string;
    stats: string;
    challenge: string;
    blueprint: string;
    execution: string;
    impactMetrics: { label: string; value: string; }[];
    architectureImage?: string;
}

export const caseStudiesData: CaseStudy[] = [
    {
        slug: 'global-fintech-platform',
        title: 'Global Fintech Platform',
        client: 'Finance Corp',
        category: 'WEB APP',
        type: 'Web',
        result: '50% faster transaction processing',
        desc: 'Built a specialized high-frequency trading engine with low-latency architecture, enabling real-time global transactions with zero-fail redundancy.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stats: '50% Speedup',
        challenge: 'A legacy monolithic system was causing significant bottlenecks during peak trading hours, resulting to up to 30% downtime and potential data loss risks for global clients.',
        blueprint: 'We architected a distributed, low-latency microservices backend utilizing Go and gRPC, migrating the primary data layer to a highly available, multi-region PostgreSQL cluster.',
        execution: 'Over 6 months, our elite engineering team conducted a phased rollout, running the new system in parallel with the legacy engine to ensure zero downtime during the cutover.',
        impactMetrics: [
            { label: 'Execution Speed Metric', value: '+50%' },
            { label: 'System Uptime', value: '99.999%' },
            { label: 'Downtime Incidents', value: '0' }
        ],
        architectureImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        slug: 'healthcare-ai-management',
        title: 'Healthcare AI Management',
        client: 'HealthPlus',
        category: 'AI SAAS',
        type: 'AI',
        result: '30% reduction in admin tasks',
        desc: 'Developing an AI-driven patient management portal that automates scheduling and medical record indexing for over 200 clinics nationwide.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stats: '30% Efficiency',
        challenge: 'Manual data entry and scheduling inefficiencies were costing clinics thousands of hours annually, leading to staff burnout and patient dissatisfaction.',
        blueprint: 'We designed a custom AI automation engine integrating NLP models to parse medical documents and a predictive scheduling algorithm hosted on AWS.',
        execution: 'A 4-month agile delivery involving continuous feedback loops with medical professionals to ensure compliance and UX intuitiveness.',
        impactMetrics: [
            { label: 'Admin Overhead', value: '-30%' },
            { label: 'Patient Wait Time', value: '-45%' },
            { label: 'Clinic Adoption', value: '200+' }
        ]
    },
    {
        slug: 'enterprise-erp-revolution',
        title: 'Enterprise ERP Revolution',
        client: 'Manufacto',
        category: 'ENTERPRISE',
        type: 'Enterprise',
        result: '40% operational cost reduction',
        desc: 'A comprehensive cloud-native ERP system that unified 12 international manufacturing units into a single real-time data ecosystem.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stats: '40% Cost Cut',
        challenge: 'Fragmented legacy ERP systems across 12 countries prevented executives from getting a unified view of the supply chain, causing millions in inventory waste.',
        blueprint: 'A robust cloud-native architecture on AWS utilizing loosely coupled domain-driven APIs, connected via an event-driven Kafka backbone.',
        execution: 'Deployed iteratively over 14 months, starting with core financial modules before expanding to inventory and logistics routing.',
        impactMetrics: [
            { label: 'Operational Cost', value: '-40%' },
            { label: 'Data Latency', value: '<1s' },
            { label: 'Inventory Waste', value: '-25%' }
        ]
    },
    {
        slug: 'automated-agency-flow',
        title: 'Automated Agency Flow',
        client: 'GrowthScale',
        category: 'SAAS',
        type: 'SaaS',
        result: '80% faster onboarding',
        desc: 'Built an autonomous client onboarding system that handles contracts, payments, and task delegation without human intervention.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stats: '80% Speed',
        challenge: 'The agency was losing clients during the onboarding phase because manual contract generation and setup took days.',
        blueprint: 'A serverless integration hub connecting Stripe, DocuSign, and Jira via custom AWS Lambda functions and a unified Next.js dashboard.',
        execution: 'Delivered in just 8 weeks, completely automating the workflow from payment capture to initial task assignment.',
        impactMetrics: [
            { label: 'Onboarding Time', value: '-80%' },
            { label: 'Manual Steps', value: '0' },
            { label: 'Client Satisfaction', value: '+40%' }
        ]
    },
    {
        slug: 'next-gen-edtech-portal',
        title: 'Next-Gen EdTech Portal',
        client: 'EduCore',
        category: 'WEB APP',
        type: 'Web',
        result: '1M+ active users scaled',
        desc: 'Architected a hyper-scalable learning platform that supports concurrent live streaming and interactive testing for over a million global learners.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stats: '1M+ Users',
        challenge: 'The legacy learning platform crashed when user load exceeded 10,000 concurrent students, severely limiting expansion into the Asian market.',
        blueprint: 'Migrated to a horizontally scalable Kubernetes cluster orchestrating Node.js microservices with a Redis caching layer for real-time exam state.',
        execution: 'executed a seamless migration of 500,000 user profiles over a single weekend with zero data loss.',
        impactMetrics: [
            { label: 'Concurrent Users', value: '1M+' },
            { label: 'Platform Crashes', value: '0' },
            { label: 'Video Latency', value: '-60%' }
        ]
    },
    {
        slug: 'ai-real-estate-valuation',
        title: 'AI Real Estate Valuation',
        client: 'PropTech Inc',
        category: 'AI',
        type: 'AI',
        result: '3x faster property valuations',
        desc: 'Implemented computer vision and predictive ML models to automate property appraisal with 99.2% accuracy in real-time.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stats: '3x Faster',
        challenge: 'Human appraisers were a massive bottleneck, taking an average of 4 days to validate property values in a rapidly moving housing market.',
        blueprint: 'Trained a distributed TensorFlow model on 10 years of market data and satellite imagery, deployed via serverless inference endpoints.',
        execution: 'Continuous integration of new market data ensures the model learns dynamically, scaling from one test city to national coverage in 6 months.',
        impactMetrics: [
            { label: 'Valuation Speed', value: '3x Faster' },
            { label: 'Accuracy Model', value: '99.2%' },
            { label: 'Cost per Appraisal', value: '-85%' }
        ]
    },
    {
        slug: 'logistics-core-hub',
        title: 'Logistics Core Hub',
        client: 'LogiTech',
        category: 'MOBILE APP',
        type: 'Mobile',
        result: 'Zero delivery failures',
        desc: 'Developed a robust driver-focused mobile application with offline-first synchronization for global freight tracking in remote areas.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stats: '0 Errors',
        challenge: 'Drivers in rural areas constantly lost connectivity, causing syncing errors and lost tracking data critical for SLA compliance.',
        blueprint: 'A React Native mobile application built with WatermelonDB for reliable local storage and background sync prioritization.',
        execution: 'Field tested across harsh conditions in three continents before a global rollout to 5,000+ drivers.',
        impactMetrics: [
            { label: 'Delivery Failures', value: '0' },
            { label: 'Offline Resync', value: '<2s' },
            { label: 'Driver Satisfaction', value: '98%' }
        ]
    },
    {
        slug: 'luxury-retail-experience',
        title: 'Luxury Retail Experience',
        client: 'VogueStore',
        category: 'E-COMMERCE',
        type: 'Web',
        result: '200% increase in checkout',
        desc: 'A headless commerce implementation focusing on ultra-high-speed performance and cinematic micro-interactions for elite buyers.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        stats: '200% Conversion',
        challenge: 'A bloated Shopify theme was causing 4-second page load times, leading to high cart abandonment rates among high-net-worth customers.',
        blueprint: 'Decoupled the frontend using Next.js and Shopify Storefront API, applying bespoke Framer Motion animations for a premium feel.',
        execution: 'Delivered a blistering fast, SEO-optimized Progressive Web App that increased the perception of brand value.',
        impactMetrics: [
            { label: 'Checkout Conversion', value: '+200%' },
            { label: 'Lighthouse Score', value: '100' },
            { label: 'Load Time', value: '< 1s' }
        ]
    }
];
