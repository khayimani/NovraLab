export const metadata = {
    title: 'Privacy Policy — NovraLab',
    description: 'Learn how NovraLab collects, uses, and protects your personal data in compliance with GDPR and applicable privacy laws.',
}

export default function PrivacyPage() {
    const updated = 'March 16, 2026'

    return (
        <div className="terms-page">
            <div className="terms-container">
                {/* Header */}
                <div className="terms-header">
                    <span className="terms-badge">Legal</span>
                    <h1 className="terms-title">Privacy Policy</h1>
                    <p className="terms-sub">Last updated: {updated}</p>
                </div>

                <div className="terms-body">

                    {/* 1 */}
                    <section className="terms-section">
                        <h2>1. Introduction</h2>
                        <p>
                            <strong>NovraLab</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This
                            Privacy Policy explains how we collect, use, store, share, and protect personal data when
                            you use our website, products, and services, including the NovraLab Compliance Platform,
                            OutfitsGen, LeadGen, and any associated digital tools.
                        </p>
                        <p>
                            We comply with the EU General Data Protection Regulation (&quot;GDPR&quot;) and other applicable
                            data protection laws. By using our services, you agree to the practices described in this Policy.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="terms-section">
                        <h2>2. Data Controller</h2>
                        <p>
                            For the purposes of applicable data protection law, NovraLab is the <strong>data controller</strong> of
                            personal data collected through our platform and website. Questions about this Policy or our
                            data practices should be directed to:
                        </p>
                        <address className="terms-contact">
                            <strong>NovraLab — Data Privacy</strong><br />
                            Email: <a href="mailto:privacy@novralab.com">privacy@novralab.com</a>
                        </address>
                    </section>

                    {/* 3 */}
                    <section className="terms-section">
                        <h2>3. Data We Collect</h2>
                        <p>We collect the following categories of personal data:</p>
                        <ul>
                            <li>
                                <strong>Account &amp; Identity Data:</strong> name, email address, job title, company name,
                                and login credentials when you register for an account.
                            </li>
                            <li>
                                <strong>Billing &amp; Payment Data:</strong> billing address and payment method details.
                                Note: card and bank details are processed and stored exclusively by our payment provider,
                                Paddle.com, and are never stored on NovraLab servers.
                            </li>
                            <li>
                                <strong>Usage &amp; Activity Data:</strong> pages visited, features used, session timestamps,
                                clicks, and error logs to help us improve our products.
                            </li>
                            <li>
                                <strong>Communications Data:</strong> content of messages you send us via email, support
                                tickets, or contact forms.
                            </li>
                            <li>
                                <strong>Technical Data:</strong> IP address, browser type, device identifiers, and
                                operating system.
                            </li>
                            <li>
                                <strong>Compliance Platform Data:</strong> For enterprise clients, documents, workflows,
                                and records uploaded to the compliance platform are processed on your behalf as a
                                data processor.
                            </li>
                        </ul>
                    </section>

                    {/* 4 */}
                    <section className="terms-section">
                        <h2>4. How We Use Your Data</h2>
                        <p>We use your personal data for the following purposes and on the following lawful bases:</p>
                        <ul>
                            <li>
                                <strong>Service delivery</strong> — to provide, maintain, and improve our platform and
                                products (Contractual necessity).
                            </li>
                            <li>
                                <strong>Billing &amp; account management</strong> — to process payments, issue invoices,
                                and manage your subscription (Contractual necessity).
                            </li>
                            <li>
                                <strong>Customer support</strong> — to respond to enquiries and resolve issues
                                (Legitimate interest).
                            </li>
                            <li>
                                <strong>Security &amp; fraud prevention</strong> — to monitor for misuse, unauthorised
                                access, and fraudulent activity (Legitimate interest / Legal obligation).
                            </li>
                            <li>
                                <strong>Product improvements</strong> — to analyse usage patterns and improve features
                                through anonymised analytics (Legitimate interest).
                            </li>
                            <li>
                                <strong>Marketing communications</strong> — to send product updates and news. You may
                                opt out at any time (Consent).
                            </li>
                            <li>
                                <strong>Legal compliance</strong> — to fulfil legal and regulatory obligations
                                (Legal obligation).
                            </li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section className="terms-section">
                        <h2>5. Cookies &amp; Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your experience, maintain sessions,
                            and gather analytics. Categories of cookies used:
                        </p>
                        <ul>
                            <li><strong>Essential cookies:</strong> Required for the platform to function. Cannot be disabled.</li>
                            <li><strong>Analytics cookies:</strong> Help us understand usage and improve our products (e.g. Vercel Analytics).</li>
                            <li><strong>Preference cookies:</strong> Remember your settings and preferences.</li>
                        </ul>
                        <p>
                            You can manage cookie preferences through your browser settings. Disabling non-essential cookies
                            will not affect core platform functionality.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="terms-section">
                        <h2>6. Data Sharing &amp; Third Parties</h2>
                        <p>We do not sell your personal data. We share data only with:</p>
                        <ul>
                            <li>
                                <strong>Paddle.com</strong> — our Merchant of Record, who processes all payments. Paddle
                                operates as an independent data controller for billing data.
                            </li>
                            <li>
                                <strong>Firebase / Google</strong> — authentication and cloud infrastructure services.
                            </li>
                            <li>
                                <strong>Vercel</strong> — hosting and deployment infrastructure.
                            </li>
                            <li>
                                <strong>Email &amp; support tools</strong> — to communicate with you and manage support tickets.
                            </li>
                            <li>
                                <strong>Legal &amp; regulatory authorities</strong> — where required by applicable law or a
                                valid court order.
                            </li>
                        </ul>
                        <p>
                            All third-party processors are subject to data processing agreements and are required to
                            implement appropriate safeguards.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="terms-section">
                        <h2>7. International Data Transfers</h2>
                        <p>
                            Some of our service providers are located outside the European Economic Area (EEA). Where
                            data is transferred internationally, we ensure appropriate safeguards are in place — such
                            as Standard Contractual Clauses (SCCs) approved by the European Commission — to protect
                            your data to the same standard as within the EEA.
                        </p>
                    </section>

                    {/* 8 */}
                    <section className="terms-section">
                        <h2>8. Data Retention</h2>
                        <p>
                            We retain personal data only for as long as necessary for the purposes for which it was
                            collected, or as required by law:
                        </p>
                        <ul>
                            <li><strong>Account data:</strong> For the duration of your account plus 3 years after closure.</li>
                            <li><strong>Billing records:</strong> 7 years to comply with financial and tax regulations.</li>
                            <li><strong>Support communications:</strong> 2 years from the date of last contact.</li>
                            <li><strong>Analytics data:</strong> Aggregated and anonymised after 12 months.</li>
                        </ul>
                    </section>

                    {/* 9 */}
                    <section className="terms-section">
                        <h2>9. Your Rights</h2>
                        <p>Under GDPR and applicable privacy law, you have the right to:</p>
                        <ul>
                            <li><strong>Access</strong> the personal data we hold about you.</li>
                            <li><strong>Rectify</strong> inaccurate or incomplete data.</li>
                            <li><strong>Erase</strong> your data (&quot;right to be forgotten&quot;) where no overriding legal basis applies.</li>
                            <li><strong>Restrict</strong> processing of your data in certain circumstances.</li>
                            <li><strong>Data portability</strong> — receive your data in a structured, machine-readable format.</li>
                            <li><strong>Object</strong> to processing based on legitimate interests or for direct marketing.</li>
                            <li><strong>Withdraw consent</strong> at any time where processing is based on consent.</li>
                        </ul>
                        <p>
                            To exercise any of these rights, email <a href="mailto:privacy@novralab.com">privacy@novralab.com</a>.
                            We will respond within <strong>30 days</strong>. You also have the right to lodge a complaint
                            with your local supervisory authority (e.g. the ICO in the UK, or your national DPA in the EU).
                        </p>
                    </section>

                    {/* 10 */}
                    <section className="terms-section">
                        <h2>10. Security</h2>
                        <p>
                            We implement industry-standard technical and organisational security measures to protect your
                            personal data, including:
                        </p>
                        <ul>
                            <li>TLS/HTTPS encryption for all data in transit.</li>
                            <li>Encryption at rest for sensitive records.</li>
                            <li>Role-based access controls and principle of least privilege.</li>
                            <li>Regular security reviews and vulnerability assessments.</li>
                        </ul>
                        <p>
                            In the event of a personal data breach that poses a risk to your rights, we will notify you
                            and the relevant supervisory authority within 72 hours of becoming aware.
                        </p>
                    </section>

                    {/* 11 */}
                    <section className="terms-section">
                        <h2>11. Children&apos;s Privacy</h2>
                        <p>
                            Our services are not directed at individuals under the age of 18. We do not knowingly collect
                            personal data from children. If you believe a child has provided data to us, please contact
                            <a href="mailto:privacy@novralab.com"> privacy@novralab.com</a> and we will delete it promptly.
                        </p>
                    </section>

                    {/* 12 */}
                    <section className="terms-section">
                        <h2>12. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. When we make material changes, we will
                            notify you by email or via a prominent notice on our website at least 14 days before the
                            changes take effect. Continued use of our services after the effective date constitutes
                            acceptance of the updated Policy.
                        </p>
                    </section>

                    {/* 13 */}
                    <section className="terms-section">
                        <h2>13. Contact Us</h2>
                        <p>
                            If you have any questions, concerns, or requests relating to this Privacy Policy, please
                            contact us:
                        </p>
                        <address className="terms-contact">
                            <strong>NovraLab — Privacy Team</strong><br />
                            Email: <a href="mailto:privacy@novralab.com">privacy@novralab.com</a><br />
                            Legal enquiries: <a href="mailto:legal@novralab.com">legal@novralab.com</a><br />
                            Website: <a href="https://novralab.com">novralab.com</a>
                        </address>
                    </section>

                </div>
            </div>
        </div>
    )
}
