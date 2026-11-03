import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[12px] font-black underline">← Back to RapidFundi</Link>
        <h1 className="mt-6 text-[36px] font-black text-[#0A1931] leading-[0.9]">Privacy Policy</h1>
        <div className="mt-2 text-[12px] text-[#64748B]">Effective: 3 Nov 2026 • Lantei Supplies / RapidFundi</div>
        
        <div className="mt-10 space-y-8 text-[14px] leading-7 text-[#334155]">
          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">1. Who we are</h2>
            <p className="mt-2">RapidFundi is a product of <b>Lantei Supplies</b>, Nairobi, Kenya. We provide on-demand plumbing services across Nairobi. Contact: hello@rapidfundi.co.ke / +254 722 819 877.</p>
            <p className="mt-2 text-[12px] bg-white border rounded-xl p-3">Currently using rapidfundi@outlook.com - migrating to domain email. Company registration and physical address to be added in footer after incorporation certificate is available.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">2. What we collect (Kenya Data Protection Act 2019)</h2>
            <ul className="list-disc ml-5 mt-2">
              <li><b>Contact:</b> name, phone, estate/area, email if you provide it for Play Store notify.</li>
              <li><b>Location:</b> only when you request a fundi via app/call/WhatsApp, to dispatch nearest fundi.</li>
              <li><b>Photos:</b> before/after job photos for proof, with your consent.</li>
              <li><b>Usage:</b> clicks on Call, WhatsApp, Download for analytics.</li>
            </ul>
            <p className="mt-2">We do NOT collect M-Pesa PIN, ID numbers, or personal numbers of fundis for public display.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">3. Why we collect</h2>
            <p>To dispatch fundis, give quotes, provide photo proof, improve coverage, and notify about Play Store launch. Legal basis: consent and performance of service you request.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">4. M-Pesa payments</h2>
            <p>All payments go to official LANTEI till. We never ask you to send to personal numbers. Payment processing is via Safaricom M-Pesa. We do not store your M-Pesa PIN.</p>
            <p className="mt-2 bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-3 text-[12px]"><b>Important:</b> RapidFundi is a product of Lantei Supplies. If you see LANTEI on M-Pesa prompt, that is correct and expected.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">5. Sharing</h2>
            <p>We share your phone + estate + issue with assigned NITA-licensed fundi only to complete job. No selling of data. Fundis are under NDA and vetting.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">6. Retention & Rights</h2>
            <p>Job data kept 24 months for warranty and tax. You can request access, correction, deletion via hello@rapidfundi.co.ke. We will respond within 14 days per ODPC guidelines.</p>
            <p className="mt-2 text-[12px]">Data storage: Kenya / Vercel / Firebase. If Lantei is required to register as Data Controller with ODPC, registration number will be listed here after legal review.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">7. Your choices</h2>
            <ul className="list-disc ml-5">
              <li>Deny location - we can still dispatch using estate you type.</li>
              <li>Opt out of photos - but warranty may not apply without proof.</li>
              <li>Opt out of notify email - delete via same email request.</li>
            </ul>
          </section>

          <section className="border-t pt-6">
            <p className="text-[12px] text-[#64748B]">Questions: hello@rapidfundi.co.ke • +254 722 819 877 • Nairobi, Kenya</p>
          </section>
        </div>
      </div>
    </main>
  );
}