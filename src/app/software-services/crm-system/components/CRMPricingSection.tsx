import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { CRMCreateAccountModal } from './CRMCreateAccountModal';

export interface CRMPricingPlan {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  badge?: string;
  isHighlighted?: boolean;
  planValue: string;
}

const defaultPlans: CRMPricingPlan[] = [
  {
    title: "10 Days Free Trial",
    price: "$0",
    features: [
      "Full Platform Access",
      "Restaurant Setup",
      "Order Management",
      "Billing System",
      "Inventory Tracking",
      "Staff Management",
      "Reports & Analytics",
      "No Credit Card Required"
    ],
    buttonText: "Start Free Trial",
    badge: "Most Popular for New Users",
    planValue: "10 Days Free Trial ($0)"
  },
  {
    title: "Premium - 5 Users",
    price: "$9/month",
    features: [
      "Up to 5 Users",
      "Order Management",
      "Billing & Invoicing",
      "Menu Management",
      "Inventory Tracking",
      "Staff Management",
      "Basic Reports",
      "Email Support"
    ],
    buttonText: "Get Started",
    planValue: "Premium - 5 Users ($9/month)"
  },
  {
    title: "Premium - 12 Users",
    price: "$19/month",
    features: [
      "Up to 12 Users",
      "Advanced Reports",
      "Multi-Staff Access",
      "Inventory Tracking",
      "Billing System",
      "Customer Management",
      "Priority Support"
    ],
    buttonText: "Get Started",
    badge: "Most Popular",
    isHighlighted: true,
    planValue: "Premium - 12 Users ($19/month)"
  },
  {
    title: "Premium - 25 Users",
    price: "$29/month",
    features: [
      "Up to 25 Users",
      "Full Restaurant Management",
      "Advanced Analytics",
      "Team Management",
      "Premium Support",
      "Unlimited Orders",
      "Business Insights Dashboard"
    ],
    buttonText: "Get Started",
    planValue: "Premium - 25 Users ($29/month)"
  }
];

export const CRMPricingSection: React.FC<{ plans?: CRMPricingPlan[], subtitle?: string }> = ({ 
  plans = defaultPlans, 
  subtitle = "Choose the perfect plan for your restaurant business and start managing everything from one platform." 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const handlePlanSelect = (planValue: string) => {
    setSelectedPlan(planValue);
    setIsModalOpen(true);
  };

  return (
    <div className="py-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mb-2 text-white"
          >
            Pricing <span className="text-yellow-500">Plans</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-sm"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col h-full bg-[#0a0a0a] rounded-3xl p-5 border transition-all duration-300 ${
                plan.isHighlighted 
                  ? 'border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]' 
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap ${
                  plan.isHighlighted ? 'bg-yellow-500 text-black' : 'bg-white/10 text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-1">{plan.title}</h3>
              <div className="text-2xl font-display font-bold text-yellow-500 mb-4">
                {plan.price}
              </div>

              <div className="flex-grow space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 text-yellow-500">
                      <Check size={14} />
                    </div>
                    <span className="text-zinc-300 text-xs leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handlePlanSelect(plan.planValue)}
                className={`w-full py-2 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 ${
                  plan.isHighlighted
                    ? 'bg-gradient-to-r from-yellow-500 to-red-600 text-white hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                    : 'bg-white/10 text-white hover:bg-white hover:text-black'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <CRMCreateAccountModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPlan={selectedPlan} 
        availablePlans={plans.map(p => p.planValue)}
      />
    </div>
  );
};
