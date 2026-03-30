'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Start verifying AI outputs today.',
    features: [
      '6 base domains (A–F)',
      '5-layer verification',
      'Base model access',
      'Community support',
      '100 verifications/day',
    ],
    cta: 'Start Free',
    popular: false,
    gradient: 'from-forge-border/20 to-forge-border/10',
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    desc: 'For professionals who need reliable AI.',
    features: [
      '26 domains (G–Z) + 1 custom',
      'Enhanced model routing',
      'Session history & replay',
      'Basic drift detection',
      '1,000 verifications/day',
      'Email support',
    ],
    cta: 'Go Pro',
    popular: false,
    gradient: 'from-forge-blue/20 to-forge-blue/5',
  },
  {
    name: 'Nexus',
    price: '$49',
    period: '/month',
    desc: 'The sweet spot for power users.',
    features: [
      '26 domains + 5 custom',
      'File uploads & analysis',
      'Multi-format exports',
      '3 concurrent sessions',
      'Advanced drift analytics',
      '5,000 verifications/day',
      'Priority support',
    ],
    cta: 'Get Nexus',
    popular: true,
    gradient: 'from-forge-cyan/20 to-forge-cyan/5',
  },
  {
    name: 'Apex',
    price: '$99',
    period: '/month',
    desc: 'Full power. No compromises.',
    features: [
      'All 100 mastery domains',
      'Domain Drift Detector',
      'Real-time toggles',
      'PSZN consensus reports',
      '10 concurrent sessions',
      'Unlimited verifications',
      'Dedicated support',
    ],
    cta: 'Go Apex',
    popular: false,
    gradient: 'from-forge-cyan/15 to-forge-blue/5',
  },
  {
    name: 'Pantheon',
    price: '$199',
    period: '/month',
    desc: 'The ultimate verification platform.',
    features: [
      'Everything in Apex',
      'Unlimited custom domains',
      'Fine-tuning (A–J sub-specs)',
      'Unity AR/VR exports',
      'API access',
      'White-label options',
      'Concierge onboarding',
    ],
    cta: 'Join Pantheon',
    popular: false,
    gradient: 'from-forge-blue/15 to-forge-cyan/5',
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-forge-cyan tracking-[0.2em] uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{' '}
            <span className="gradient-text">Trust Level</span>
          </h2>
          <p className="text-lg text-forge-muted max-w-2xl mx-auto mb-8">
            From individual verification to full enterprise deployment.
            Every tier includes the PSZN consensus engine.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-forge-card/60 rounded-full p-1.5 border border-forge-border/40">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? 'bg-forge-cyan/20 text-forge-cyan' : 'text-forge-muted hover:text-forge-text'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                annual ? 'bg-forge-cyan/20 text-forge-cyan' : 'text-forge-muted hover:text-forge-text'
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs text-forge-green">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className={`relative rounded-2xl p-6 ${
                tier.popular
                  ? 'glass-card gradient-border ring-1 ring-forge-cyan/20'
                  : 'glass-card'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-forge-cyan rounded-full text-[10px] font-bold text-forge-black tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-xs text-forge-muted mb-4">{tier.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">
                    {tier.price === '$0' ? 'Free' : annual ? `$${Math.round(parseInt(tier.price.slice(1)) * 0.8)}` : tier.price}
                  </span>
                  {tier.price !== '$0' && (
                    <span className="text-sm text-forge-muted">{tier.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" className="mt-0.5 shrink-0">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-xs text-forge-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-forge-cyan to-forge-blue text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                    : 'border border-forge-border/60 text-forge-text hover:border-forge-cyan/40 hover:bg-forge-card/40'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
