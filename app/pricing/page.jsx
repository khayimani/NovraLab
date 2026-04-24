import Link from 'next/link'
import PaddleCheckoutButton from '../../components/PaddleCheckoutButton'

export const metadata = {
    title: 'Pricing — NovraLab Compliance Platform',
    description: 'Transparent pricing for the NovraLab Compliance Platform. Small, Medium, and Enterprise tiers with optional high-margin add-ons.',
}

const tiers = [
    {
        id: 'small',
        label: 'Small Firm',
        badge: null,
        priceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_BASE,
        description: 'Ideal for boutique advisory firms, family offices, and early-stage regulated businesses.',
        setup: '€3,000 – €8,000',
        setupNote: 'One-time implementation fee',
        monthly: '€400 – €900',
        monthlyNote: 'Per month, billed monthly',
        color: 'pricing-card-basic',
        features: [
            'Core compliance workflow engine',
            'Regulatory alerts & monitoring',
            'Document management repository',
            'Up to 5 user seats',
            'Standard onboarding (remote)',
            'Email support (48h SLA)',
        ],
    },
    {
        id: 'medium',
        label: 'Medium Firm',
        badge: 'Most Popular',
        priceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_STANDARD,
        description: 'Built for mid-size asset managers, broker-dealers, and multi-entity compliance teams.',
        setup: '€8,000 – €25,000',
        setupNote: 'One-time implementation fee',
        monthly: '€1,200 – €3,500',
        monthlyNote: 'Per month, billed monthly',
        color: 'pricing-card-pro',
        features: [
            'Everything in Small Firm',
            'Multi-jurisdiction regulatory mapping',
            'Breach simulation sandbox',
            'ML-assisted risk flagging',
            'Up to 25 user seats',
            'Dedicated onboarding specialist',
            'Priority support (12h SLA)',
            'Quarterly compliance health reports',
        ],
    },
    {
        id: 'enterprise',
        label: 'Enterprise',
        badge: null,
        priceId: null,
        description: 'For large financial institutions, banks, and global compliance operations requiring custom deployments.',
        setup: '€25,000 – €80,000',
        setupNote: 'One-time implementation fee',
        monthly: '€5,000 – €15,000',
        monthlyNote: 'Per month, billed monthly',
        color: 'pricing-card-enterprise',
        features: [
            'Everything in Medium Firm',
            'Unlimited user seats',
            'Dedicated infrastructure (private cloud / on-prem option)',
            'Custom regulatory framework configuration',
            'White-glove onboarding & training',
            'Dedicated account manager',
            '24/7 priority support (2h SLA)',
            'SLA-backed uptime guarantee (99.9%)',
            'Executive compliance dashboards',
            'Custom contract & MSA',
        ],
    },
]

const addons = [
    {
        icon: '📊',
        name: 'Regulatory Reporting Automation',
        description:
            'Automatically generate and submit regulatory reports (MiFID II, EMIR, SFDR, Basel III, etc.) directly from your compliance data. Eliminates manual data aggregation and reduces reporting errors.',
        prices: {
            small: '€200 – €400 / mo',
            medium: '€600 – €1,200 / mo',
            enterprise: '€2,000 – €4,500 / mo',
        },
        tag: 'High ROI',
    },
    {
        icon: '🗂️',
        name: 'Audit Preparation Module',
        description:
            'Centralise all audit evidence, generate audit-ready packages, and track remediation actions. Reduces audit preparation time by up to 70% with automated evidence collection.',
        prices: {
            small: '€150 – €350 / mo',
            medium: '€450 – €900 / mo',
            enterprise: '€1,500 – €3,000 / mo',
        },
        tag: 'Time Saver',
    },
    {
        icon: '🔍',
        name: 'AML/KYC Workflow Automation',
        description:
            'Automate customer due diligence, PEP/sanctions screening, ongoing monitoring, and SAR filing workflows. Integrates with leading data providers (Refinitiv, LexisNexis, etc.).',
        prices: {
            small: '€300 – €600 / mo',
            medium: '€900 – €2,000 / mo',
            enterprise: '€3,500 – €8,000 / mo',
        },
        tag: 'Compliance Critical',
    },
    {
        icon: '⚙️',
        name: 'Custom Compliance Integration',
        description:
            'Bespoke API integrations to connect the NovraLab compliance engine to your existing core systems — risk management platforms, trading systems, CRM, or proprietary data sources.',
        prices: {
            small: '€500 – €1,500 / mo',
            medium: '€1,500 – €4,000 / mo',
            enterprise: 'Custom — contact sales',
        },
        tag: 'Bespoke',
    },
]

export default function PricingPage() {
    return (
        <div className="pricing-page">

            {/* ── Hero ── */}
            <div className="pricing-hero">
                <div className="pricing-hero-inner">
                    <span className="terms-badge">Compliance Platform</span>
                    <h1 className="pricing-title">Transparent, Institutional-Grade Pricing</h1>
                    <p className="pricing-sub">
                        All plans include a one-time implementation fee and a recurring monthly subscription.
                        Prices shown in <strong>Euros (€)</strong> and reflect the complexity of your firm&apos;s compliance
                        requirements. Final pricing is confirmed after a scoping call.
                    </p>
                </div>
            </div>

            {/* ── Tiers ── */}
            <div className="pricing-tiers-section">
                <div className="pricing-tiers-grid">
                    {tiers.map((tier) => (
                        <div key={tier.id} className={`pricing-card ${tier.color}`}>
                            {tier.badge && (
                                <div className="pricing-popular-badge">{tier.badge}</div>
                            )}
                            <div className="pricing-tier-label">{tier.label}</div>
                            <p className="pricing-tier-desc">{tier.description}</p>

                            <div className="pricing-price-block">
                                <div className="pricing-price-row">
                                    <span className="pricing-price-amount">{tier.setup}</span>
                                </div>
                                <div className="pricing-price-note">{tier.setupNote}</div>
                                <div className="pricing-divider" />
                                <div className="pricing-price-row">
                                    <span className="pricing-price-amount">{tier.monthly}</span>
                                </div>
                                <div className="pricing-price-note">{tier.monthlyNote}</div>
                            </div>

                            <ul className="pricing-features">
                                {tier.features.map((f) => (
                                    <li key={f}>
                                        <span className="pricing-check">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {tier.priceId ? (
                                <PaddleCheckoutButton
                                    priceId={tier.priceId}
                                    label="Get Started"
                                />
                            ) : (
                                <Link href="/contact" className="pricing-cta">
                                    Talk to Sales
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <p className="pricing-vat-note">
                    All prices are exclusive of VAT / applicable taxes. VAT is calculated and collected by Paddle at checkout.
                    Annual billing options available on request with up to 15% discount.
                </p>
            </div>

            {/* ── Add-Ons ── */}
            <div className="pricing-addons-section">
                <div className="pricing-addons-inner">
                    <div className="pricing-section-header">
                        <div className="pricing-section-label">Optional Modules</div>
                        <h2 className="pricing-section-title">High-Margin Add-Ons</h2>
                        <p className="pricing-section-sub">
                            Extend your compliance platform with purpose-built modules. Add-ons are activated
                            per tier and billed monthly alongside your base subscription.
                        </p>
                    </div>

                    <div className="pricing-addons-grid">
                        {addons.map((addon) => (
                            <div key={addon.name} className="pricing-addon-card">
                                <div className="pricing-addon-top">
                                    <div className="pricing-addon-icon">{addon.icon}</div>
                                    <span className="pricing-addon-tag">{addon.tag}</span>
                                </div>
                                <h3 className="pricing-addon-name">{addon.name}</h3>
                                <p className="pricing-addon-desc">{addon.description}</p>

                                <div className="pricing-addon-prices">
                                    <div className="pricing-addon-price-row">
                                        <span className="pricing-addon-tier-name">Small Firm</span>
                                        <span className="pricing-addon-price-val">{addon.prices.small}</span>
                                    </div>
                                    <div className="pricing-addon-price-row">
                                        <span className="pricing-addon-tier-name">Medium Firm</span>
                                        <span className="pricing-addon-price-val">{addon.prices.medium}</span>
                                    </div>
                                    <div className="pricing-addon-price-row">
                                        <span className="pricing-addon-tier-name">Enterprise</span>
                                        <span className="pricing-addon-price-val">{addon.prices.enterprise}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── FAQ / Notes ── */}
            <div className="pricing-notes-section">
                <div className="pricing-notes-inner">
                    <h2 className="pricing-notes-title">Frequently Asked Questions</h2>
                    <div className="pricing-faq-grid">

                        <div className="pricing-faq-item">
                            <h3>What determines my final price?</h3>
                            <p>
                                Pricing is scoped based on your firm&apos;s size, regulatory jurisdictions, the number of
                                compliance workflows to automate, and the degree of custom integration required.
                                All quotes are confirmed after a free 30-minute scoping call.
                            </p>
                        </div>

                        <div className="pricing-faq-item">
                            <h3>Is the setup fee a one-time charge?</h3>
                            <p>
                                Yes. The implementation fee covers platform configuration, regulatory framework mapping,
                                data migration, and initial staff training. It is paid once at the start of your engagement.
                            </p>
                        </div>

                        <div className="pricing-faq-item">
                            <h3>Can I add modules later?</h3>
                            <p>
                                Absolutely. Add-on modules can be activated at any point during your subscription.
                                Pricing is tier-matched to your current plan at the time of activation.
                            </p>
                        </div>

                        <div className="pricing-faq-item">
                            <h3>Do you offer annual billing?</h3>
                            <p>
                                Yes. Annual billing is available with up to a <strong>15% discount</strong> on the
                                monthly subscription rate. Contact our sales team to discuss your options.
                            </p>
                        </div>

                        <div className="pricing-faq-item">
                            <h3>What currencies do you accept?</h3>
                            <p>
                                Prices are listed in Euros (€). We can invoice in USD, GBP, or CHF for enterprise
                                clients — speak to your account manager. All transactions are processed through
                                Paddle.com.
                            </p>
                        </div>

                        <div className="pricing-faq-item">
                            <h3>What is your refund policy?</h3>
                            <p>
                                Monthly subscriptions are refundable within 7 days of the charge date if the service
                                has not been materially used. Annual plans may receive a pro-rated refund within 14 days.
                                See our full <Link href="/refund-policy" className="pricing-faq-link">Refund Policy</Link> for details.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── CTA Banner ── */}
            <div className="pricing-cta-banner">
                <div className="pricing-cta-banner-inner">
                    <h2 className="pricing-cta-banner-title">Not sure which plan is right for you?</h2>
                    <p className="pricing-cta-banner-sub">
                        Our compliance architects will scope your requirements and recommend the optimal configuration —
                        at no cost and with no obligation.
                    </p>
                    <div className="pricing-cta-group">
                        <Link href="/contact" className="product-cta-primary">
                            Book a Free Scoping Call →
                        </Link>
                        <Link href="/Pinto" className="product-cta-secondary">
                            View Platform Overview
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
