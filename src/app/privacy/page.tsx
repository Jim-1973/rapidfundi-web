import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[12px] font-black underline">← Back to RapidFundi</Link>
        <h1 className="mt-6 text-[36px] font-black text-[#0A1931] leading-[0.9]">RapidFundi - Privacy Policy</h1>
        <div className="mt-2 text-[12px] text-[#64748B]">Last Updated: 3 Nov 2026 • Mandatory for Google Play</div>
        <div className="mt-3 bg-[#0A1931] text-white rounded-xl p-4 text-[12px]">
          <b>Play Console URL:</b> Host this at https https://rapidfundi.vercel.app/privacy<br/>
          This URL will be pasted in Play Console → App Content → Privacy Policy
        </div>

        <div className="mt-10 space-y-8 text-[14px] leading-7 text-[#334155]">
          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">1. Information We Collect</h2>
            <div className="mt-3 space-y-3">
              <div><b>Account:</b> Name, phone number, email (from Supabase Auth)</div>
              <div><b>Job Details:</b> Location (estate, building), category, photos/videos of plumbing issue (job-evidence storage bucket)</div>
              <div><b>Payment:</b> M-Pesa phone number, transaction amount, receipt data. We DO NOT store M-Pesa PIN.</div>
              <div><b>Device:</b> Device ID, app version, crash logs via Expo</div>
            </div>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">2. How We Use It</h2>
            <ul className="list-disc ml-5 mt-2">
              <li>To assign nearest plumber, generate quotations and receipts</li>
              <li>To process M-Pesa payments via Daraja API (Safaricom)</li>
              <li>To provide proof of work (before/after photos)</li>
              <li>To contact you via Call / WhatsApp on +254 722 819 877</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">3. Data Storage & Sharing</h2>
            <ul className="list-disc ml-5 mt-2">
              <li>Stored securely on Supabase (EU/US) with Row Level Security (RLS)</li>
              <li>Shared only with assigned plumber for job execution</li>
              <li>Shared with Safaricom for M-Pesa payment processing</li>
              <li>We never sell your data</li>
            </ul>
            <p className="mt-3 bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-3 text-[12px]"><b>Important:</b> RapidFundi is a product of Lantei Supplies. M-Pesa prompt showing LANTEI is correct and expected.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">4. Location</h2>
            <p>We collect precise location only when you create a job request to find plumbers nearby. You can deny location permission, but the app won't be able to assign a plumber automatically. You can still type your estate manually on the website.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">5. Photos & Media</h2>
            <p>Job photos are stored in <b>job-evidence</b> bucket on Supabase and visible to admin and assigned plumber only. Used as proof of work and for guarantee claims. If you delete a job, photos remain for 7 years for tax but are anonymized.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">6. Your Rights (Kenya Data Protection Act 2019)</h2>
            <p>You can request deletion of account and data via WhatsApp admin or email <b>rapidfundi@outlook.com</b>. We respond within 14 days per ODPC guidelines. You have right to access, correct, object.</p>
            <p className="mt-2 text-[12px] bg-white border rounded-xl p-3">Encryption in transit: YES - Supabase uses HTTPS, M-Pesa Daraja uses TLS. Data deletion: YES - via admin request. Target Audience: 18+</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">7. Data Retention</h2>
            <p>Jobs, receipts and payment records kept for <b>7 years</b> for KRA tax compliance. You can delete account but receipts remain anonymized as required by law. Crash logs kept 90 days.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">8. Children</h2>
            <p>App not for under 18. We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">9. Data Safety Form - What to declare in Play Console</h2>
            <div className="mt-2 bg-white border rounded-xl p-4 text-[12px] space-y-1">
              <div>Location: Collected, for app functionality, precise</div>
              <div>Photos: Collected, for app functionality</div>
              <div>Phone Number: Collected, for account + payments</div>
              <div>Financial info: M-Pesa payment, collected</div>
              <div>Encryption in transit: YES</div>
              <div>Data deletion: YES - user can request via admin</div>
              <div>Permissions: Location (find plumber), Camera (job proof), Storage (receipt PDF)</div>
            </div>
          </section>

          <section className="border-t pt-6">
            <h2 className="font-black text-[16px] text-[#0A1931]">10. Contact</h2>
            <p className="mt-2">RapidFundi by Lantei Supplies, Nairobi, Kenya<br/>Phone: +254 722 819 877 / 0722819877<br/>Email: <b>rapidfundi@outlook.com</b><br/>Website: rapidfundi.vercel.app (migrating to rapidfundi.co.ke)</p>
          </section>
        </div>
      </div>
    </main>
  );
}