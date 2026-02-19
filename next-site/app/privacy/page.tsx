import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Boon Health Inc. Privacy Policy. Learn how we collect, use, and protect your personal information.',
  path: '/privacy',
});

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 font-medium hover:text-boon-blue transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-boon-charcoal tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-body text-gray-400 mb-16">
            Effective Date: February 18, 2026 &middot; Last Updated: February 18, 2026
          </p>

          <div className="prose-policy space-y-10 font-body text-gray-600 leading-relaxed">

            <div>
              <p>
                Your privacy is important to us. It is Boon Health Inc.&apos;s policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you. This includes information collected across our website (<Link href="https://boon-health.com" className="text-boon-blue hover:underline">https://boon-health.com</Link>), our coaching platform, mobile applications, and other digital properties we own and operate.
              </p>
              <p className="mt-4">
                Personal information is any information about you that can be used to identify you. This includes information about you as a person (such as name, address, and date of birth), your devices, payment details, and information about how you use our website or platform services.
              </p>
              <p className="mt-4">
                In the event our site contains links to third-party sites and services, please be aware that those sites and services have their own privacy policies. After following a link to any third-party content, you should read their posted privacy policy. This Privacy Policy does not apply to any of your activities after you leave our site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">1. Information We Collect</h2>
              <p>
                Information we collect falls into one of two categories: &ldquo;voluntarily provided&rdquo; information and &ldquo;automatically collected&rdquo; information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-boon-charcoal mb-3">1.1 Voluntarily Provided Information</h3>
              <p>
                &ldquo;Voluntarily provided&rdquo; information refers to any information you knowingly and actively provide us when using or participating in any of our services and promotions. This may include:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Name, email address, phone or mobile number</li>
                <li>Company name, job title, and professional role</li>
                <li>Account credentials and profile information</li>
                <li>Coaching session feedback, survey responses, and program participation data</li>
                <li>Payment and billing information</li>
                <li>Communications you send to us (e.g., support requests, feedback)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-boon-charcoal mb-3">1.2 Automatically Collected Information</h3>
              <p>
                &ldquo;Automatically collected&rdquo; information refers to any information automatically sent by your devices in the course of accessing our products and services.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Log Data:</strong> When you visit our website, our servers may automatically log standard data provided by your web browser. This may include your device&apos;s Internet Protocol (IP) address, browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details about your visit. If you encounter errors while using the site, we may automatically collect data about the error and the circumstances surrounding its occurrence.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Device Data:</strong> When you visit our website or interact with our services, we may automatically collect data about your device, such as device type, operating system, unique device identifiers, device settings, and approximate geo-location data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-boon-charcoal mb-3">1.3 Coaching and Platform Data</h3>
              <p>
                When you use the Boon coaching platform, we may collect additional information related to your coaching experience, including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Session scheduling and attendance records</li>
                <li>Coaching goals, progress notes, and session summaries</li>
                <li>Survey responses, feedback scores, and program engagement metrics</li>
                <li>Manager-reported observations and organizational context (when provided by your employer)</li>
                <li>Aggregated analytics and usage patterns</li>
              </ul>
              <p className="mt-4">
                <strong className="text-boon-charcoal"><em>Important:</em></strong> The content of coaching sessions between you and your coach is confidential. Boon does not access, record, or store the substantive content of individual coaching conversations unless explicitly agreed upon by all parties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-boon-charcoal mb-3">1.4 Transaction Data</h3>
              <p>
                Transaction data refers to data that accumulates over the normal course of operation on our platform. This may include transaction records, stored files, user profiles, analytics data, and other metrics created or generated as users interact with our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">2. How We Use Your Information</h2>
              <p>
                We only collect and use your personal information when we have a legitimate reason for doing so. We collect personal information that is reasonably necessary to provide our services to you. We may collect personal information from you when you:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Register for an account or are enrolled by your employer</li>
                <li>Schedule or participate in coaching sessions</li>
                <li>Complete surveys, assessments, or feedback forms</li>
                <li>Purchase a subscription or process payments</li>
                <li>Sign up to receive updates from us via email or social media channels</li>
                <li>Use a mobile device or web browser to access our content</li>
                <li>Contact us via email, social media, or similar technologies</li>
              </ul>
              <p className="mt-4">We may use information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>To provide you with our platform&apos;s core features and services, including matching you with coaches and facilitating coaching sessions</li>
                <li>To generate aggregated, de-identified analytics and reporting for your organization (individual coaching content remains confidential)</li>
                <li>To enable you to customize or personalize your experience</li>
                <li>To deliver products and services to you</li>
                <li>To contact and communicate with you</li>
                <li>For analytics, market research, and business development, including to improve our website, platform, and services</li>
                <li>For advertising and marketing, including to send you promotional information about our products and services</li>
                <li>For internal record keeping and administrative purposes</li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">3. Data Sharing and Employer Access</h2>
              <p>
                When Boon provides services through an employer-sponsored program, certain information may be shared with your employer in aggregated or summarized form to demonstrate program effectiveness. This may include:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Aggregated participation and engagement metrics (e.g., session completion rates)</li>
                <li>Anonymized survey results and trend data</li>
                <li>Program-level ROI and outcome reporting</li>
                <li>Coach utilization and scheduling statistics</li>
              </ul>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Your employer will not receive:</strong> the content of your coaching sessions, your individual survey responses (unless you explicitly opt in to share), or any other information that would identify your specific coaching discussions or personal development goals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">4. Disclosure of Personal Information to Third Parties</h2>
              <p>We may disclose personal information to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>A parent, subsidiary, or affiliate of our company</li>
                <li>Third-party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, hosting and server providers, analytics providers, error loggers, maintenance or problem-solving providers, marketing providers, professional advisors, and payment systems operators</li>
                <li>Our employees, contractors, and related entities</li>
                <li>Our existing or potential agents or business partners</li>
                <li>Credit reporting agencies, courts, tribunals, and regulatory authorities, in the event you fail to pay for goods or services we have provided to you</li>
                <li>Courts, tribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or to establish, exercise, or defend our legal rights</li>
                <li>Third parties, including agents or sub-contractors, who assist us in providing information, products, services, or direct marketing to you</li>
                <li>An entity that buys, or to which we transfer all or substantially all of our assets and business</li>
              </ul>
              <p className="mt-4"><strong className="text-boon-charcoal">Current third-party service providers include:</strong></p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Google Analytics (website analytics)</li>
                <li>HubSpot (CRM and marketing)</li>
                <li>Calendly (scheduling)</li>
                <li>Supabase (database and authentication)</li>
                <li>Vercel (hosting)</li>
                <li>Stripe (payment processing)</li>
                <li>Zoom (video conferencing for coaching sessions)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">5. Security of Your Personal Information</h2>
              <p>
                When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
              </p>
              <p className="mt-4">Our security measures include:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Access controls and authentication requirements for all platform users</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Employee training on data protection and security best practices</li>
                <li>Incident response procedures for potential data breaches</li>
              </ul>
              <p className="mt-4">
                Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. You are responsible for selecting any password and its overall security strength, and for ensuring the security of your own information within the bounds of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">6. How Long We Keep Your Personal Information</h2>
              <p>
                We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. For example, if you have provided us with personal information as part of creating an account with us, we may retain this information for the duration your account exists on our system. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you.
              </p>
              <p className="mt-4">
                If necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation, or for archiving purposes in the public interest, scientific, or historical research purposes, or statistical purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">7. Children&apos;s Privacy</h2>
              <p>
                We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">8. Your Rights and Controlling Your Personal Information</h2>
              <p>
                <strong className="text-boon-charcoal">Your choice:</strong> By providing personal information to us, you understand we will collect, hold, use, and disclose your personal information in accordance with this privacy policy. You do not have to provide personal information to us; however, if you do not, it may affect your use of our website or the products and services offered on or through it.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Information from third parties:</strong> If we receive personal information about you from a third party (such as your employer enrolling you in a coaching program), we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person&apos;s consent to provide the personal information to us.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Access:</strong> You may request details of the personal information that we hold about you.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Correction:</strong> If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Deletion:</strong> You may request that we delete your personal information. We will comply with such requests unless we are required to retain the information for legal, accounting, or other legitimate business purposes.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Non-discrimination:</strong> We will not discriminate against you for exercising any of your rights over your personal information. Unless your personal information is required to provide you with a particular service or offer, we will not deny you goods or services, charge you different prices or rates, or provide you with a different level or quality of goods or services.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Notification of data breaches:</strong> We will comply with laws applicable to us in respect of any data breach.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Complaints:</strong> If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Unsubscribe:</strong> To unsubscribe from our email database or opt-out of communications (including marketing communications), please contact us using the details provided in this privacy policy, or opt-out using the opt-out facilities provided in the communication.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">9. Additional Rights for California Residents</h2>
              <p>
                If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>The right to know what personal information is collected, used, shared, or sold</li>
                <li>The right to delete personal information held by businesses and their service providers</li>
                <li>The right to opt-out of the sale or sharing of personal information</li>
                <li>The right to correct inaccurate personal information</li>
                <li>The right to limit the use and disclosure of sensitive personal information</li>
                <li>The right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="mt-4">
                Boon Health Inc. does not sell your personal information to third parties. To exercise any of your California privacy rights, please contact us using the details provided below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">10. Use of Cookies</h2>
              <p>
                We use &ldquo;cookies&rdquo; to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.
              </p>
              <p className="mt-4">
                You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and some functionality may no longer be available.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">11. Business Transfers</h2>
              <p>
                If we or our assets are acquired, or in the unlikely event that we go out of business or enter bankruptcy, we would include data, including your personal information, among the assets transferred to any parties who acquire us. You acknowledge that such transfers may occur, and that any parties who acquire us may, to the extent permitted by applicable law, continue to use your personal information according to this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">12. Changes to This Policy</h2>
              <p>
                At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here and update the &ldquo;Last Updated&rdquo; date at the top of this page.
              </p>
              <p className="mt-4">
                If the changes are significant, or if required by applicable law, we will contact you (based on your selected preferences for communications from us) and all our registered users with the new details and links to the updated or changed policy.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-black text-boon-charcoal mb-4">13. Contact Us</h2>
              <p>
                For any questions or concerns regarding your privacy, you may contact us using the following details:
              </p>
              <p className="mt-4">
                <strong className="text-boon-charcoal">Boon Health Inc.</strong><br />
                Email: <a href="mailto:privacy@boon-health.com" className="text-boon-blue hover:underline">privacy@boon-health.com</a><br />
                Website: <Link href="https://boon-health.com" className="text-boon-blue hover:underline">https://boon-health.com</Link>
              </p>
              <p className="mt-4">
                You may also reach our team directly:<br />
                <strong className="text-boon-charcoal">Alex Simmons</strong>, CEO<br />
                <a href="mailto:asimmons@boon-health.com" className="text-boon-blue hover:underline">asimmons@boon-health.com</a>
              </p>
            </div>

            <p className="text-xs text-gray-400 italic pt-4">
              Copyright 2026 Boon Health Inc. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
