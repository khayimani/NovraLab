export const metadata = {
    title: 'Refund Policy — NovraLab',
    description: 'Understand the refund and cancellation policy for NovraLab services and subscriptions.',
}

export default function RefundPolicyPage() {
    const updated = 'March 16, 2026'

    return (
        <div className="terms-page">
            <div className="terms-container">
                {/* Header */}
                <div className="terms-header">
                    <span className="terms-badge">Legal</span>
                    <h1 className="terms-title">Refund Policy</h1>
                    <p className="terms-sub">Last updated: {updated}</p>
                </div>

                <div className="terms-body">

                    {/* 1 */}
                    <section className="terms-section">
                        <h2>1. Overview</h2>
                        <p>
                            At <strong>NovraLab</strong>, we strive to deliver high-quality digital products and compliance
                            technology solutions. This Refund Policy explains when and how refunds may be issued for
                            subscriptions and one-time purchases made through our platform.
                        </p>
                        <p>
                            All payments are processed by <strong>Paddle.com</strong>, which acts as our Merchant of Record.
                            Refunds are subject to Paddle&apos;s own policies in addition to the terms set out below.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="terms-section">
                        <h2>2. Subscription Services</h2>
                        <p>
                            NovraLab offers monthly and annual subscription plans for its compliance platform and SaaS products.
                            The following refund terms apply:
                        </p>
                        <ul>
                            <li>
                                <strong>Monthly subscriptions:</strong> Refundable within <strong>7 days</strong> of initial
                                purchase or renewal if you have not materially used the service during that period.
                            </li>
                            <li>
                                <strong>Annual subscriptions:</strong> A pro-rated refund may be issued within <strong>14 days</strong> of
                                purchase for the unused portion of the subscription term, minus any platform setup or onboarding fees incurred.
                            </li>
                            <li>
                                <strong>Enterprise &amp; custom plans:</strong> Refunds on enterprise contracts are governed by
                                the individual service agreement (SLA/MSA) signed at the time of onboarding. Please contact your
                                account manager at <a href="mailto:enterprise@novralab.com">enterprise@novralab.com</a> for assistance.
                            </li>
                        </ul>
                    </section>

                    {/* 3 */}
                    <section className="terms-section">
                        <h2>3. One-Time Purchases &amp; Setup Fees</h2>
                        <p>
                            One-time implementation fees, onboarding fees, and compliance platform set-up charges are
                            <strong> non-refundable</strong> once work has commenced, unless:
                        </p>
                        <ul>
                            <li>NovraLab has materially failed to deliver the agreed scope of work.</li>
                            <li>NovraLab cancels the engagement prior to commencement.</li>
                        </ul>
                        <p>
                            If a deliverable milestone is incomplete due to our fault, a partial refund proportional to the
                            undelivered work will be issued.
                        </p>
                    </section>

                    {/* 4 */}
                    <section className="terms-section">
                        <h2>4. Add-On Modules</h2>
                        <p>
                            Optional add-on modules — including Regulatory Reporting Automation, Audit Preparation,
                            AML/KYC Workflow Automation, and Custom Compliance Integration — are billed on a recurring
                            basis as part of your subscription. Refunds for add-ons follow the same schedule as the
                            base subscription tier to which they are attached.
                        </p>
                        <p>
                            Add-ons that have been fully provisioned and activated are non-refundable after the applicable
                            refund window has elapsed.
                        </p>
                    </section>

                    {/* 5 */}
                    <section className="terms-section">
                        <h2>5. Eligible Refund Grounds</h2>
                        <p>We will issue a refund in the following circumstances, regardless of timing:</p>
                        <ul>
                            <li>A significant technical failure directly attributable to NovraLab that rendered the service unusable.</li>
                            <li>Duplicate billing or an erroneous charge.</li>
                            <li>A charge made after a confirmed cancellation.</li>
                            <li>A billing error confirmed in writing by NovraLab or Paddle.</li>
                        </ul>
                    </section>

                    {/* 6 */}
                    <section className="terms-section">
                        <h2>6. Non-Refundable Items</h2>
                        <p>The following are explicitly non-refundable:</p>
                        <ul>
                            <li>Fees for services already rendered or substantially performed.</li>
                            <li>Trial or promotional plan upgrades after the trial has ended.</li>
                            <li>Partial months or billing periods already consumed.</li>
                            <li>Currency conversion losses or third-party bank charges.</li>
                        </ul>
                    </section>

                    {/* 7 */}
                    <section className="terms-section">
                        <h2>7. How to Request a Refund</h2>
                        <p>
                            To submit a refund request, email <a href="mailto:billing@novralab.com">billing@novralab.com</a> with
                            the subject line <em>&quot;Refund Request — [Your Order ID]&quot;</em>. Please include:
                        </p>
                        <ul>
                            <li>Your registered email address and account name.</li>
                            <li>Your Paddle order ID or invoice number.</li>
                            <li>The reason for the refund request.</li>
                            <li>Any supporting documentation (screenshots, error logs, etc.).</li>
                        </ul>
                        <p>
                            Requests must be submitted within <strong>30 days</strong> of the charge date. We aim to respond
                            within <strong>3 business days</strong>. Once approved, refunds are processed by Paddle and
                            typically appear on your statement within <strong>5–10 business days</strong>.
                        </p>
                    </section>

                    {/* 8 */}
                    <section className="terms-section">
                        <h2>8. Cancellation &amp; Access</h2>
                        <p>
                            Cancelling your subscription does not automatically trigger a refund. Upon cancellation, access to
                            the platform continues until the end of the current billing period. To request a refund in addition
                            to cancellation, please follow the process outlined in Section 7.
                        </p>
                    </section>

                    {/* 9 */}
                    <section className="terms-section">
                        <h2>9. Consumer Rights</h2>
                        <p>
                            Nothing in this policy limits your statutory rights under applicable consumer protection or distance
                            selling legislation. EU/EEA customers exercising the 14-day cooling-off right under the Consumer
                            Rights Directive should note that, by commencing use of a digital service, you may waive this right.
                            We will inform you clearly before purchase where this applies.
                        </p>
                    </section>

                    {/* 10 */}
                    <section className="terms-section">
                        <h2>10. Changes to This Policy</h2>
                        <p>
                            NovraLab reserves the right to update this Refund Policy at any time. Material changes will be
                            communicated by email or a prominent notice on our website at least 14 days before taking effect.
                        </p>
                    </section>

                    {/* 11 */}
                    <section className="terms-section">
                        <h2>11. Contact</h2>
                        <address className="terms-contact">
                            <strong>NovraLab — Billing &amp; Refunds</strong><br />
                            Email: <a href="mailto:billing@novralab.com">billing@novralab.com</a><br />
                            General enquiries: <a href="mailto:legal@novralab.com">legal@novralab.com</a><br />
                            Website: <a href="https://novralab.com">novralab.com</a>
                        </address>
                    </section>

                </div>
            </div>
        </div>
    )
}
