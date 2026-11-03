"use client";
import Link from "next/link";
import { useState } from "react";

const AREAS = [
  { group: "CBD and surroundings", examples: "CBD, Upper Hill, Hurlingham, Parklands" },
  { group: "Westlands side", examples: "Westlands, Kileleshwa, Kilimani, Lavington, Kangemi" },
  { group: "Southern Nairobi", examples: "South B, South C, Lang'ata, Karen, Nairobi West" },
  { group: "Eastlands", examples: "Buruburu, Donholm, Umoja, Embakasi, Pangani" },
  { group: "Northern and Thika Road", examples: "Kasarani, Roysambu, Ruaraka, Muthaiga" },
];

export default function Home() {
  const [estate, setEstate] = useState("");
  const [notifyEmail, setNotifyEmail] = useState("");

  const matched = AREAS.filter(a => 
    !estate || a.examples.toLowerCase().includes(estate.toLowerCase()) || a.group.toLowerCase().includes(estate.toLowerCase())
  );

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans antialiased">
      {/* TOP BANNER */}
      <div className="bg-[#0A1931] text-white text-center py-2.5 px-6 text-[11px] font-bold tracking-wide">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
          Serving Nairobi. Android app available now — <a href="#download-app" className="text-[#FFC83D] underline underline-offset-4">Get the app</a>
        </span>
      </div>

      {/* HEADER */}
      <header className="bg-white border-b border-black/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-xl border border-black/5 shadow-sm flex items-center justify-center p-1.5">
              <img src="/rapidfundi.png?v=3" alt="RapidFundi" className="w-full h-full object-contain" />
            </div>
            <div className="leading-[0.9]">
              <div className="font-black text-[19px] tracking-[-0.02em] text-[#0A1931]">RapidFundi</div>
              <div className="text-[10px] font-black tracking-[0.18em] text-[#0A66FF] mt-[2px]">BY LANTEI</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <a href="tel:+254722819877" className="bg-white border border-black/10 text-[#0A1931] h-[44px] px-5 flex items-center font-black text-[13px] rounded-full">Call +254 722 819 877</a>
            <a href="#download-app" className="bg-[#0A1931] text-white h-[44px] px-6 flex items-center font-black text-[13px] rounded-full">Download App</a>
          </div>
          <a href="tel:+254722819877" className="md:hidden bg-[#0A1931] text-white px-5 py-2.5 rounded-full text-[12px] font-bold">Call Now</a>
        </div>
        <div className="hidden md:block border-t border-black/[0.04] bg-[#FCFBF8]/50">
          <div className="max-w-7xl mx-auto px-6 h-[40px] flex items-center justify-end">
            <div className="flex items-center gap-8 text-[13px] font-bold text-[#0A1931]">
              <a href="#how-it-works">How it works</a>
              <a href="#services">Services</a>
              <a href="#coverage">Where we serve</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-black/5 shadow-sm px-3 py-1.5 rounded-full text-[11px] font-black tracking-wide">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> SERVING NAIROBI • NITA VERIFIED • CBD: MUNYU ROAD
          </div>
          <h1 className="mt-6 text-[42px] md:text-[56px] leading-[0.9] font-black tracking-[-0.03em] text-[#0F172A]">
            Verified plumbers anywhere in Nairobi, <span className="text-[#0A66FF]">sent to you fast.</span>
          </h1>
          <p className="mt-6 text-[17px] leading-7 text-[#475569] max-w-[480px]">
            Nearest NITA-licensed fundi dispatched, upfront price, photo proof before you pay. Typically 30 to 60 minutes depending on area and traffic. Pay via M-Pesa to LANTEI. Base: Munyu Road, Nairobi CBD.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#download-app" className="bg-[#0F172A] text-white px-8 py-4 rounded-full font-bold text-[14px]">Download for Android</a>
            <a href="https://wa.me/254722819877?text=Hi%20RapidFundi%20-%20I%20need%20a%20plumber%20in%20" target="_blank" className="bg-white border border-black/10 px-8 py-4 rounded-full font-bold text-[14px]">WhatsApp Us</a>
          </div>
          <div className="mt-4 text-[11px] text-[#64748B]">Emergency line 24/7, standard visits 8am-7pm • RapidFundi is a product of Lantei Supplies • rapidfundi.vercel.app</div>
        </div>

        <div className="relative md:ml-8">
          <div className="bg-white rounded-[32px] border border-black/[0.06] shadow-[0_24px_80px_rgba(15,23,42,0.12)] p-3">
            <div className="bg-[#F8FAFC] rounded-[24px] overflow-hidden relative flex flex-col">
              <div className="p-5 flex justify-between">
                <div className="bg-white border shadow-sm rounded-full px-3.5 py-2 text-[11px] font-black">Nairobi • Your Estate</div>
                <div className="bg-[#0A1931] text-white text-[10px] font-black px-3 py-1.5 rounded-full">Example job</div>
              </div>
              <div className="m-3 bg-white rounded-[16px] border shadow-sm p-4">
                <div className="flex justify-between"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-full bg-[#0A1931] text-white flex items-center justify-center text-[11px] font-black">JK</div><div><div className="font-black text-[13px]">Job #124 • Office Leak</div><div className="text-[11px] text-[#64748B]">By James K. • NITA Licensed</div></div></div><div className="bg-[#ECFDF5] text-[#15803D] text-[9px] font-black px-2.5 py-1 rounded-full">VERIFIED</div></div>
                <div className="mt-3 grid grid-cols-2 gap-2.5"><div className="bg-[#F1F5F9] rounded-xl h-[76px] flex items-center justify-center text-[10px] font-bold">BEFORE</div><div className="bg-[#0F172A] rounded-xl h-[76px] flex items-center justify-center text-[10px] font-bold text-white">AFTER ✓</div></div>
                <div className="mt-3 flex justify-between text-[11px]"><span className="text-[#64748B]">✓ Photo proof • ✓ M-Pesa LANTEI</span><span className="font-black">From KES 2,500</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#0A1931] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 text-[11px] font-black tracking-widest">
          <span>✓ VERIFIED FUNDIS</span><span>✓ UPFRONT PRICING</span><span>✓ PHOTO PROOF</span><span>✓ M-PESA: LANTEI</span><span className="text-white/60 font-medium tracking-normal">If we don't arrive, we re-visit free within 3 days. Base: Munyu Road, CBD.</span>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-6 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-black text-[#0A1931]">How it works</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              ["1. Request","Call, WhatsApp or app. Share your estate & issue."],
              ["2. Get fixed quote","Upfront price with what's included. No hidden fees."],
              ["3. Fundi arrives","Nearest verified fundi dispatched. Typically 30-60 mins."],
              ["4. Approve & pay","Photo proof, then M-Pesa to LANTEI till. Never personal number."],
            ].map(([t,d])=>(
              <div key={t} className="bg-[#FCFBF8] border rounded-[20px] p-6"><div className="font-black text-[#0A1931]">{t}</div><div className="mt-2 text-[13px] text-[#64748B] leading-6">{d}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#FCFBF8] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex bg-[#0A1931] text-white px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em]">OUR SERVICES</div>
          <h2 className="mt-4 text-[36px] font-black text-[#0A1931]">Fixed Right. Priced Right.</h2>
          <p className="text-[13px] text-[#64748B] mt-2">From prices include call-out + labour. Parts extra, quoted before work. Dispatched from Nairobi CBD, Munyu Road hub.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ["Drain Unclogging","Sinks, toilets, kitchen lines for homes & shops.","From KES 2,500"],
              ["Leak Detection","Bathrooms, rooftop tanks, hidden pipes.","From KES 3,000"],
              ["24/7 Emergency","Burst pipe, flooded shop or home. Emergency line 24/7.","From KES 4,500"],
              ["Toilet Repair","Running, leaking, clogged toilets.","From KES 2,000"],
              ["Heater & Pumps","Instant showers, booster pumps.","From KES 3,500"],
              ["Pipe Installation","PPR & PVC for renovations. Compliant.","Custom Quote"],
            ].map(([name, desc, price])=>(
              <div key={name} className="bg-white rounded-[24px] border p-6"><h3 className="font-black">{name}</h3><p className="text-[13px] text-[#64748B] mt-2">{desc}</p><div className="mt-6 flex justify-between items-center"><span className="font-black text-[13px]">{price}</span><a href="tel:+254722819877" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="bg-[#0A1931] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10">
            <div>
              <div className="inline-flex bg-white/10 px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em] text-[#FFC83D]">WHERE WE SERVE</div>
              <h2 className="mt-4 text-[40px] font-black leading-[0.9]">Serving Nairobi.<br/>Not just CBD.</h2>
              <p className="mt-4 text-[14px] text-white/60">We dispatch the nearest verified fundi from our hub at Munyu Road, Nairobi CBD. Arrival typically 30 to 60 minutes depending on area and traffic.</p>
              <div className="mt-8 space-y-3">
                {AREAS.map(a=>(
                  <div key={a.group} className="bg-white text-[#0A1931] rounded-[16px] p-4 flex justify-between"><div><div className="font-black text-[13px]">{a.group}</div><div className="text-[11px] text-[#64748B]">{a.examples}</div></div><span className="text-[10px] font-black bg-[#0A1931] text-white px-2 py-1 rounded-full h-fit">LIVE</span></div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white rounded-[20px] p-6 text-[#0A1931]">
                <div className="font-black">Check your estate</div>
                <p className="text-[12px] text-[#64748B] mt-1">Type your estate to see if we serve you.</p>
                <input value={estate} onChange={e=>setEstate(e.target.value)} placeholder="e.g. Kilimani, Umoja, Karen" className="mt-4 w-full border rounded-full px-4 py-3 text-[13px] outline-none" />
                <div className="mt-4 space-y-2">
                  {matched.map(m=>(
                    <div key={m.group} className="text-[12px] bg-[#F8FAFC] border rounded-full px-3 py-2"><b>{m.group}:</b> {m.examples}</div>
                  ))}
                </div>
                <div className="mt-4 text-[11px] text-[#64748B]">Don't see your area? <a href="https://wa.me/254722819877?text=Hi%20RapidFundi%20-%20Do%20you%20serve%20my%20area:%20" target="_blank" className="underline font-black text-[#0A1931]">Call or WhatsApp</a> - we log demand to expand.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APK SECTION */}
      <section id="download-app" className="bg-white py-20 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FCFBF8] border rounded-[28px] p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex bg-[#FFC83D] text-[#0A1931] px-3 py-1 rounded-full text-[10px] font-black">EARLY ACCESS: Google Play coming soon</div>
              <h2 className="mt-4 text-[32px] font-black leading-[0.9] text-[#0A1931]">Get the RapidFundi app</h2>
              <p className="mt-3 text-[13px] text-[#64748B] leading-6">Book in 30 seconds, track fundi, get photo proof. Published by Lantei Supplies. Official site: rapidfundi.vercel.app</p>
              
              <div className="mt-6 flex flex-col gap-3">
                <a href="/rapidfundi-v1.0.0.apk" download className="bg-[#0A1931] text-white px-6 py-3.5 rounded-full text-[13px] font-black text-center">Download for Android (APK)</a>
                <div className="text-[11px] text-[#64748B]">v1.0.0 • 18 MB • 3 Nov 2026 • Hosted on rapidfundi.vercel.app</div>
              </div>

              <div className="mt-6 space-y-2 text-[12px] text-[#475569]">
                <div><b>1. Download</b> - Tap button, allow download.</div>
                <div><b>2. Install</b> - Open file, allow "Install unknown apps" for browser.</div>
                <div><b>3. Open</b> - Login and request fundi.</div>
                <div className="pt-2 text-[11px] text-[#64748B]">Seeing "unknown developer" or Play Protect warning is expected for apps outside Play Store. App is signed by Lantei.</div>
                <div className="text-[11px]"><b>Permissions:</b> Location (nearest fundi), Camera/Photos (job proof), Phone/Notifications. Privacy: rapidfundi.vercel.app/privacy</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white border rounded-[20px] p-4 text-center">
                <div className="text-[11px] font-black tracking-widest">QR FOR PHONE DOWNLOAD</div>
                <div className="mt-3 w-40 h-40 mx-auto bg-[#0A1931] rounded-xl flex items-center justify-center text-white text-[11px]">QR: rapidfundi.vercel.app</div>
              </div>
              <div className="bg-[#0A1931] rounded-[20px] p-5 text-white">
                <div className="text-[12px] font-black">iPhone?</div>
                <div className="text-[12px] text-white/60 mt-1">iPhone version coming. Book now by WhatsApp or Call - no app needed.</div>
                <a href="https://wa.me/254722819877" target="_blank" className="mt-3 inline-block bg-white text-[#0A1931] px-4 py-2 rounded-full text-[11px] font-black">WhatsApp Booking</a>
              </div>
              <div className="bg-white border rounded-[20px] p-4 flex gap-2">
                <input value={notifyEmail} onChange={e=>setNotifyEmail(e.target.value)} placeholder="Email for Play Store launch" className="flex-1 border rounded-full px-4 py-2 text-[12px]" />
                <button onClick={()=>alert(`Will notify ${notifyEmail}`)} className="bg-[#FFC83D] px-4 py-2 rounded-full text-[11px] font-black">Notify me</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#FCFBF8] py-20 px-6 border-t">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[32px] font-black text-[#0A1931] text-center">FAQ</h2>
          <div className="mt-10 space-y-4">
            {[
              ["How fast do you arrive?","Typically 30-60 mins depending on area and traffic. We dispatch nearest verified fundi from Munyu Road, Nairobi CBD hub."],
              ["How does pricing work?","From price includes call-out + labour. Parts extra. You get fixed quote in app before work."],
              ["How do I pay?","RapidFundi is a product of Lantei Supplies. Pay only via in-app request or official till showing LANTEI. Never to personal number."],
              ["What is the guarantee?","If job fails or fundi doesn't arrive, we re-visit free within 3 days."],
              ["Which areas do you serve?","All Nairobi - CBD (Munyu Road), Westlands, Kilimani, Eastlands, Thika Road, South, Karen, etc."],
              ["How to install APK?","Download from rapidfundi.vercel.app, tap file, allow install unknown apps for browser, open. Play Protect warning is normal before Play Store listing."],
              ["Privacy Policy URL for Play Store?","https://rapidfundi.vercel.app/privacy - Email deletion requests to rapidfundi@outlook.com"],
            ].map(([q,a])=>(
              <div key={q} className="bg-white border rounded-[16px] p-5"><div className="font-black text-[13px]">{q}</div><div className="mt-2 text-[13px] text-[#64748B] leading-6">{a}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-20 px-6 border-t">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <div className="inline-flex bg-[#0A1931] text-white px-3 py-1 rounded-full text-[10px] font-black">CONTACT & DISPATCH</div>
            <h2 className="mt-4 text-[36px] font-black text-[#0A1931] leading-[0.9]">Talk to dispatch.<br/>One hotline.</h2>
            <p className="mt-4 text-[13px] text-[#64748B]">Our dispatch hub is at Munyu Road, Nairobi CBD. Payments go to LANTEI till only.</p>
            <div className="mt-6 bg-[#FCFBF8] border rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFC83D] flex items-center justify-center font-black">M</div>
              <div><div className="text-[11px] font-black text-[#64748B]">MAIN HOTLINE + LOCATION</div><div className="font-black">+254 722 819 877 • Munyu Road, CBD</div><div className="text-[11px] text-[#64748B]">24/7 Emergency • Standard visits 8am-7pm • Email: rapidfundi@outlook.com</div></div>
            </div>
          </div>
          <div className="bg-[#0A1931] rounded-[24px] p-8 text-white">
            <div className="font-black text-[18px]">Contact Lantei Supplies</div>
            <div className="mt-6 space-y-4">
              <a href="tel:+254722819877" className="block bg-white text-[#0A1931] text-center py-3 rounded-full font-black text-[13px]">Call +254 722 819 877</a>
              <a href="https://wa.me/254722819877?text=Hi%20RapidFundi%20-%20I%20need%20a%20plumber%20in%20" target="_blank" className="block bg-[#25D366] text-white text-center py-3 rounded-full font-black text-[13px]">WhatsApp Us</a>
              <a href="mailto:rapidfundi@outlook.com" className="block bg-white/10 border border-white/20 text-white text-center py-3 rounded-full font-black text-[13px]">Email: rapidfundi@outlook.com</a>
              <div className="text-[11px] text-white/60">Official Site: rapidfundi.vercel.app • Privacy: rapidfundi.vercel.app/privacy • Terms: rapidfundi.vercel.app/terms</div>
              <div className="text-[11px] text-white/50">Registered: Lantei Supplies • Physical: Munyu Road, Nairobi CBD, Kenya</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A1931] text-white py-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-[11px] text-white/60">
          <div>© 2026 RapidFundi by Lantei Supplies • Munyu Road, Nairobi CBD • rapidfundi.vercel.app • Emergency 24/7, standard 8am-7pm • rapidfundi@outlook.com</div>
          <div className="flex gap-4"><Link href="/privacy" className="underline">Privacy</Link><Link href="/terms" className="underline">Terms</Link><a href="mailto:rapidfundi@outlook.com" className="underline">Email</a></div>
        </div>
      </footer>
    </main>
  );
}