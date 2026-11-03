import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[12px] font-black underline">← Back to RapidFundi</Link>
        <h1 className="mt-6 text-[36px] font-black text-[#0A1931] leading-[0.9]">Terms of Service</h1>
        <div className="mt-2 text-[12px] text-[#64748B]">Effective: 3 Nov 2026 • Lantei Supplies / RapidFundi</div>
        
        <div className="mt-10 space-y-8 text-[14px] leading-7 text-[#334155]">
          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">1. Service</h2>
            <p>RapidFundi by Lantei Supplies connects you to independent NITA-licensed fundis across Nairobi. We are a dispatch platform. Fundis are vetted but work as independent contractors.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">2. Coverage & Timing</h2>
            <p>We serve Nairobi areas listed on homepage. Arrival is typically 30-60 minutes depending on area and traffic, not guaranteed. Emergency line is 24/7, standard visits 8am-7pm. If fundi cannot arrive, we will notify and re-schedule.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">3. Pricing</h2>
            <p>From prices on site include call-out + labour only. Parts extra and quoted before work. Final price may change if job scope changes, you will approve before work continues. Prices in KES.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">4. Payments - LANTEI till only</h2>
            <p className="bg-[#0A1931] text-white rounded-xl p-4 text-[13px]"><b>Pay only via in-app request or official till named LANTEI. Never to personal number. If anyone asks for personal M-Pesa, call +254 722 819 877 immediately.</b></p>
            <p className="mt-3">RapidFundi is a product of Lantei Supplies - M-Pesa prompt showing LANTEI is correct.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">5. Guarantee</h2>
            <p>If job fails due to workmanship within 3 days, we re-visit free once with photo proof required. Guarantee does not cover new issues, misuse, or customer-supplied parts.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">6. App APK</h2>
            <p>Android APK is early access before Play Store. Install warnings ("unknown developer", Play Protect) are expected outside Play Store. App is signed by Lantei Supplies, versioned, checksum published. Permissions: location, camera/photos, notifications.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">7. User responsibilities</h2>
            <ul className="list-disc ml-5">
              <li>Provide correct estate, access, and description.</li>
              <li>Ensure site safe for fundi.</li>
              <li>Do not engage fundis off-platform to avoid guarantee loss.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">8. Liability</h2>
            <p>Liability limited to amount paid for that job. Not liable for indirect loss, business interruption, or pre-existing conditions.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">9. Contact</h2>
            <p>One public hotline: +254 722 819 877. Email: hello@rapidfundi.co.ke. Physical address and registration number to be added after company docs finalized.</p>
          </section>

          <section className="border-t pt-6 text-[12px] text-[#64748B]">
            Governed by laws of Kenya. Disputes: Nairobi Magistrates Court.
          </section>
        </div>
      </div>
    </main>
  );
}