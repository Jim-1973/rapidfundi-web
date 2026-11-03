import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[12px] font-black underline">← Back to RapidFundi</Link>
        <h1 className="mt-6 text-[36px] font-black text-[#0A1931] leading-[0.9]">RapidFundi - Terms & Conditions</h1>
        <div className="mt-2 text-[12px] text-[#64748B]">Last Updated: 3 Nov 2026 • EULA for App & Website</div>

        <div className="mt-10 space-y-8 text-[14px] leading-7 text-[#334155]">
          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">1. Service Description</h2>
            <p>RapidFundi is a marketplace connecting customers with independent plumbers. We are not the plumber. We facilitate quotation, assignment, and payment. Plumbers are independent contractors vetted by Lantei Supplies.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">2. User Responsibilities</h2>
            <ul className="list-disc ml-5">
              <li>Provide accurate address and plumbing issue description</li>
              <li>Ensure safe access for plumber</li>
              <li>Do not abuse, harass plumbers</li>
              <li>Do not use plumber contacts outside app to evade fee</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">3. Quotations & Approval</h2>
            <p>Quotation prepared by admin/plumber after reviewing photos/location. Customer must <b>Approve</b> before work starts. Once Approved, you agree to pay quoted amount unless additional damage is found and re-quoted. You will be asked to re-approve.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">4. Payments & M-Pesa</h2>
            <p>Payments via M-Pesa STK Push via Daraja API. Ensure phone has sufficient balance. Payment is held as <b>completed_awaiting_payment</b> until confirmed by Safaricom. Receipt <b>RCPT-</b> is auto-generated and saved as PDF in app.</p>
            <p className="mt-3 bg-[#0A1931] text-white rounded-xl p-4 text-[13px]"><b>Pay only via in-app request or official till named LANTEI. Never to personal number. If anyone asks for personal M-Pesa, call +254 722 819 877 immediately.</b></p>
            <p className="mt-2">All prices in KES. No refunds after payment confirmation unless service not delivered. Receipts kept 7 years for KRA.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">5. Plumber Assignment & Liability</h2>
            <p>We assign vetted plumbers but not liable for:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Delays due to traffic, weather, parts unavailability - typical 30-60 mins not guaranteed</li>
              <li>Damage to property - report within 24h via Contact Admin. Plumber insurance covers up to KES 50,000 per incident</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">6. Receipts</h2>
            <p>Receipt is final proof of payment. PDF saved in app. If you rename file and remove .pdf extension, file may become unreadable. Always keep .pdf extension. Receipt format: RCPT-YYYY-XXXX.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">7. Cancellations</h2>
            <ul className="list-disc ml-5">
              <li><b>UNDER_REVIEW:</b> Free cancellation</li>
              <li><b>After QUOTATION_APPROVED:</b> KES 500 cancellation fee</li>
              <li><b>After ARRIVED:</b> Full labour charge applies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">8. Prohibited Use</h2>
            <p>No fraud, no fake jobs, no using plumber contacts outside app to evade platform fee. Violation leads to account suspension.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">9. Limitation of Liability</h2>
            <p>Our max liability is amount paid for that job. We are not liable for indirect loss, water damage due to delayed reporting, or pre-existing plumbing conditions. Nothing excludes liability for gross negligence.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">10. Account Termination</h2>
            <p>We can suspend account for fraud, abuse, non-payment, or violation of these terms.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">11. Governing Law</h2>
            <p>These terms governed by Laws of Kenya. Disputes resolved in Magistrate Law Courts, Nairobi Contact: rapidfundi@outlook.com / +254 722 819 877.</p>
          </section>

          <section>
            <h2 className="font-black text-[16px] text-[#0A1931]">12. Changes</h2>
            <p>We will notify in app for term changes. Continued use after change means acceptance.</p>
          </section>
        </div>
      </div>
    </main>
  );
}