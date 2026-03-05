export const metadata = {
    title: 'Terms & Conditions — NovraLab',
    description: 'Read the Terms and Conditions for using NovraLab services and subscriptions.',
}

export default function TermsPage() {
    const updated = 'March 4, 2026'

    return (
        <div className="terms-page">
            <div className="terms-container">
                {/* Header */}
                <div className="terms-header">
                    <span className="terms-badge">Legal</span>
                    <h1 className="terms-title">Terms &amp; Conditions</h1>
                    <p className="terms-sub">Last updated: {updated}</p>
                </div>

                <div className="terms-body">

                    {/* 1 */}
                    <section className="terms-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using any service, product, or website operated by <strong>NovraLab</strong>
                            {" "}(collectively, "NovraLab", "we", "us", or "our"), you agree to be bound by these
                            Terms &amp; Conditions ("Terms"). If you do not agree to these Terms, you must not use our services.
                        </p>
                        <p>
                            These Terms apply to all visitors, users, and subscribers of NovraLab products and services,
                            including but not limited to software-as-a-service products, digital tools, research publications,
                            and any associated websites.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="terms-section">
                        <h2>2. Description of Services</h2>
                        <p>
                            NovraLab is a digital innovation laboratory that develops and commercialises software products
                            including, but not limited to:
                        </p>
                        <ul>
                            <li>AI-powered outfit generation tools (<em>OutfitsGen</em>)</li>
                            <li>Lead generation software (<em>LeadGen</em>)</li>
                            <li>UX/UI research and prototyping tools</li>
                            <li>Agricultural technology (AgTech) platforms</li>
                            <li>Compliance and regulatory tooling</li>
                        </ul>
                        <p>
                            We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.
                        </p>
                    </section>

                    {/* 3 */}
                    <section className="terms-section">
                        <h2>3. Account Registration</h2>
                        <p>
                            To access certain services you must create an account. You agree to:
                        </p>
                        <ul>
                            <li>Provide accurate, complete, and current registration information.</li>
                            <li>Maintain the security of your password and accept responsibility for all activity under your account.</li>
                            <li>Notify us immediately at <a href="mailto:legal@novralab.com">legal@novralab.com</a> if you suspect unauthorised access.</li>
                        </ul>
                        <p>
                            We reserve the right to suspend or terminate accounts that violate these Terms.
                        </p>
                    </section>

                    {/* 4 */}
                    <section className="terms-section">
                        <h2>4. Subscription &amp; Billing</h2>
                        <p>
                            Paid services offered by NovraLab are billed on a recurring subscription basis. All payments are
                            processed securely by our payment provider, <strong>Paddle.com</strong>. By subscribing, you authorise
                            Paddle to charge your selected payment method on the applicable billing cycle (monthly or annual).
                        </p>
                        <p>
                            Paddle acts as the <em>Merchant of Record</em> for all NovraLab transactions. This means:
                        </p>
                        <ul>
                            <li>Paddle handles all payment processing, tax collection, and invoicing on our behalf.</li>
                            <li>Your payment details are stored and managed solely by Paddle in accordance with their
                                {" "}<a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</li>
                            <li>All applicable sales tax (VAT, GST, etc.) is calculated and remitted by Paddle.</li>
                        </ul>
                        <p>
                            Prices are displayed in USD unless otherwise stated. We may change pricing at any time with at least
                            14 days' notice via email.
                        </p>
                    </section>

                    {/* 5 */}
                    <section className="terms-section">
                        <h2>5. Free Trials &amp; Promotions</h2>
                        <p>
                            We may offer free trial periods at our sole discretion. At the end of any free trial, your subscription
                            will automatically convert to a paid plan unless cancelled before the trial period ends.
                            We reserve the right to modify or cancel any promotional offer at any time.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="terms-section">
                        <h2>6. Refund Policy</h2>
                        <p>
                            All sales are final unless otherwise required by applicable law. We offer refunds at our reasonable
                            discretion in the following circumstances:
                        </p>
                        <ul>
                            <li>You experienced a significant technical failure attributable to NovraLab within the first 14 days of subscription.</li>
                            <li>You were charged in error.</li>
                        </ul>
                        <p>
                            Refund requests must be submitted within <strong>30 days</strong> of the charge to{" "}
                            <a href="mailto:billing@novralab.com">billing@novralab.com</a> with your order details. Refunds are
                            processed by Paddle and may take 5–10 business days to appear on your statement.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="terms-section">
                        <h2>7. Cancellation</h2>
                        <p>
                            You may cancel your subscription at any time through your account settings or by contacting us at{" "}
                            <a href="mailto:billing@novralab.com">billing@novralab.com</a>. Cancellation takes effect at the end
                            of the current billing period. We do not provide prorated refunds for partial months unless required by law.
                        </p>
                    </section>

                    {/* 8 */}
                    <section className="terms-section">
                        <h2>8. Acceptable Use</h2>
                        <p>You agree <strong>not</strong> to:</p>
                        <ul>
                            <li>Use our services for any unlawful, fraudulent, or abusive purpose.</li>
                            <li>Reverse engineer, decompile, or attempt to extract source code from any NovraLab software.</li>
                            <li>Resell, redistribute, or sublicense access to our services without prior written consent.</li>
                            <li>Use automated tools to scrape, crawl, or overload our infrastructure.</li>
                            <li>Upload content that infringes third-party intellectual property rights, is defamatory, or is
                                otherwise harmful.</li>
                        </ul>
                        <p>
                            Violation of these rules may result in immediate account termination without refund.
                        </p>
                    </section>

                    {/* 9 */}
                    <section className="terms-section">
                        <h2>9. Intellectual Property</h2>
                        <p>
                            All content, software, branding, and technology developed by NovraLab — including but not limited to
                            product names, logos, source code, user interfaces, and written materials — remains the exclusive
                            intellectual property of NovraLab. Nothing in these Terms grants you ownership of NovraLab's IP.
                        </p>
                        <p>
                            You retain ownership of any data or content you submit to our platform. By submitting content, you
                            grant NovraLab a limited, non-exclusive, royalty-free licence to store and process that content
                            solely for the purpose of providing the services.
                        </p>
                    </section>

                    {/* 10 */}
                    <section className="terms-section">
                        <h2>10. Privacy &amp; Data Protection</h2>
                        <p>
                            Our collection and use of personal data is governed by our Privacy Policy, which is incorporated into
                            these Terms by reference. By using our services, you consent to our data practices as described therein.
                            We comply with applicable data protection laws including the EU General Data Protection Regulation (GDPR)
                            where applicable.
                        </p>
                    </section>

                    {/* 11 */}
                    <section className="terms-section">
                        <h2>11. Disclaimer of Warranties</h2>
                        <p>
                            Our services are provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties
                            of any kind, either express or implied, including but not limited to implied warranties of merchantability,
                            fitness for a particular purpose, or non-infringement. We do not warrant that our services will be
                            uninterrupted, error-free, or free of viruses or other harmful components.
                        </p>
                    </section>

                    {/* 12 */}
                    <section className="terms-section">
                        <h2>12. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, NovraLab and its directors, employees, and contractors shall
                            not be liable for any indirect, incidental, special, consequential, or punitive damages arising from
                            your use of (or inability to use) our services, even if advised of the possibility of such damages.
                        </p>
                        <p>
                            Our total aggregate liability to you for any claims arising from these Terms or the use of our services
                            shall not exceed the greater of (a) the amount you paid to NovraLab in the 12 months preceding the claim,
                            or (b) USD $50.
                        </p>
                    </section>

                    {/* 13 */}
                    <section className="terms-section">
                        <h2>13. Governing Law &amp; Disputes</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with applicable international commercial law.
                            Any disputes arising under these Terms shall first be attempted to be resolved amicably. If unresolved
                            within 30 days, disputes shall be submitted to binding arbitration in a mutually agreed jurisdiction.
                        </p>
                    </section>

                    {/* 14 */}
                    <section className="terms-section">
                        <h2>14. Changes to These Terms</h2>
                        <p>
                            We reserve the right to update these Terms at any time. We will notify you of material changes via email
                            or a prominent notice on our website at least 14 days in advance. Continued use of our services after
                            the effective date of any change constitutes your acceptance of the new Terms.
                        </p>
                    </section>

                    {/* 15 */}
                    <section className="terms-section">
                        <h2>15. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us:
                        </p>
                        <address className="terms-contact">
                            <strong>NovraLab</strong><br />
                            Email: <a href="mailto:legal@novralab.com">legal@novralab.com</a><br />
                            Billing enquiries: <a href="mailto:billing@novralab.com">billing@novralab.com</a><br />
                            Website: <a href="https://novralab.com">novralab.com</a>
                        </address>
                    </section>

                </div>
            </div>
        </div>
    )
}
