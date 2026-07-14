import { motion } from "motion/react";
import { ArrowRight, Droplets, Sun, CloudRain, Shield, Award, Users, MapPin, Phone, MessageSquare, Mail, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  const customPhone = "+91 7384854555";
  const customWhatsApp = "+91 7384854555";
  const customEmail = "gvat.93@gmail.com";

  return (
    <div className="overflow-hidden bg-[#fafbfa]">
      {/* 🔷 HERO SECTION */}
      <section 
        className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #091307 0%, #152410 40%, #573e0e 100%)",
        }}
      >
        {/* Subtle horizontal vector lines pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none z-0" 
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 10px)"
          }}
        />

        {/* Glowing sun in top right */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-12 -right-12 sm:top-[-5%] sm:right-[-5%] w-[450px] h-[450px] bg-[#ffab00]/25 blur-[120px] rounded-full" />
          <div className="absolute top-[10%] right-[5%] sm:top-[12%] sm:right-[8%] w-32 h-32 sm:w-44 sm:h-44 bg-[#FFEFA6]/30 blur-[25px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white space-y-6"
          >
            {/* Dual Badges */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 bg-transparent border border-[#d4af37]/40 text-[#ffb000] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffb000]" />
                Official PM Surya Ghar Registered Vendor
              </span>
              <span className="inline-flex items-center gap-1.5 bg-transparent border border-teal-500/40 text-teal-300 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                WBSEDCL + CESC Covered
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-[5.4rem] font-extrabold leading-[1.05] tracking-tight text-white">
              Water. Power.<br />
              Growth.<br />
              <span className="text-[#00df89] font-extrabold drop-shadow-md">
                All in Your Hands.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Irrigation systems, solar pumps, polyhouses, and <strong className="text-white font-bold">PM Surya Ghar</strong> rooftop solar with up to <strong className="text-white font-bold">₹78,000 government subsidy</strong> — complete installation and full support across all of West Bengal.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="bg-[#12B76A] hover:bg-[#0fa05b] text-white px-6 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <span>📅</span> Book Free Site Visit
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/services?tab=pmsuryaghar"
                    className="bg-[#FF6B00] hover:bg-[#e05e00] text-white px-6 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20"
                  >
                    ₹78,000 Subsidy — Check Now →
                  </Link>
                </motion.div>
              </div>
              <div className="flex justify-start">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center justify-center transition-all"
                  >
                    Talk to Us
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Trust tags under hero */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-6 text-xs text-white/80 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> WBSEDCL Empanelled
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> CESC Registered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> All of West Bengal
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /> Unlimited Install Capacity
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scrolldown hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5">
          <span className="text-[9px] text-slate-400 uppercase tracking-[0.25em] font-extrabold">Scroll Details</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-slate-500/50 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ═══ TRUST BAR — THE CREDIBILITY BRIDGE ═══ */}
      <section className="bg-[#070d1e] text-white border-y border-slate-900/60">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/40">
          <div className="p-6 sm:p-8 text-center space-y-1 hover:bg-white/5 transition-colors cursor-default">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ffb000] block tracking-tight">₹78,000</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Max Govt. Subsidy</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">PM Surya Ghar</span>
          </div>
          <div className="p-6 sm:p-8 text-center space-y-1 hover:bg-white/5 transition-colors cursor-default">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ffb000] block tracking-tight">300 Units</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Free Electricity</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Every Month</span>
          </div>
          <div className="p-6 sm:p-8 text-center space-y-1 hover:bg-white/5 transition-colors cursor-default">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ffb000] block tracking-tight">17+</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Authorized</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Manufacturing Partners</span>
          </div>
          <div className="p-6 sm:p-8 text-center space-y-1 hover:bg-white/5 transition-colors cursor-default">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ffb000] block tracking-tight">WB-Wide</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">WBSEDCL + CESC</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Both Areas Covered</span>
          </div>
        </div>
      </section>

      {/* 🔷 WHAT WE DO (Redesigned Services Section) */}
      <section className="py-24 bg-gradient-to-b from-[#fafbfa] to-white border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block">Our Services</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Everything Your Farm — And Home — Needs.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              From the first drip line on your field to free electricity on your roof — we design, install, and stand behind everything.
            </p>
          </div>

          {/* Grid of 3 standard services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Tile 1 — Irrigation */}
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl border border-gray-150 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl w-fit mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3">Irrigation Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Drip, sprinkler, mini & micro, pop-up, foggers — we supply, design, and install. We work with trusted brands like Premier Irrigation Adritec, Jain Irrigation, and Netafim.
              </p>
              <div className="border border-green-200 bg-green-50/45 rounded-2xl p-4 mb-6 text-sm text-green-800 font-semibold flex items-center gap-2">
                <span>Best for: Farmers, orchards, nurseries</span>
              </div>
              <Link 
                to="/services?tab=irrigation" 
                className="text-green-600 font-extrabold flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                Explore Irrigation Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Tile 2 — Polyhouse */}
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl border border-gray-150 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl w-fit mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3">Polyhouse Construction</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
               We build polyhouses from the ground up — structure, cladding, ventilation, irrigation inside. Both private projects and government-linked work across West Bengal and neighbouring states.
              </p>
              <div className="border border-green-200 bg-green-50/45 rounded-2xl p-4 mb-6 text-sm text-green-800 font-semibold flex items-center gap-2">
                <span>Best for: Protected cultivation, high-value crops</span>
              </div>
              <Link 
                to="/services?tab=polyhouse" 
                className="text-green-600 font-extrabold flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                Explore Polyhouse Construction <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Tile 3 — Solar Pumping */}
            <motion.div 
              variants={fadeIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl border border-gray-150 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-amber-50 text-amber-600 p-4 rounded-2xl w-fit mb-6">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3">Solar Pumping Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                Surface or submersible, subsidy or private — we install solar pump systems that work reliably and cut your electricity costs from day one.
              </p>
              <div className="border border-green-200 bg-green-50/45 rounded-2xl p-4 mb-6 text-sm text-green-800 font-semibold flex items-center gap-2">
                <span>Best for: Farmers, bore wells, irrigation</span>
              </div>
              <Link 
                to="/services?tab=solar" 
                className="text-green-600 font-extrabold flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                Explore Solar Pumping <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* LARGE FEATURED PANEL — PM SURYA GHAR ROOFTOP SOLAR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-xl relative overflow-hidden"
          >
            {/* Ambient glows inside panel */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Info & Description */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                  Official Registered Vendor — West Bengal
                </span>
                
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  PM Surya Ghar Rooftop Solar — With Full Subsidy Support.
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The government is offering up to <strong>₹78,000 in direct subsidy</strong> to install solar panels on your home — with up to 300 units of free electricity every month. We are an officially registered vendor under this scheme for both <strong>WBSEDCL and CESC areas</strong>. We manage everything: portal registration, documentation, installation, net metering, and your subsidy — until the money is in your bank account.
                </p>

                <div className="pt-2">
                  <Link 
                    to="/services?tab=pmsuryaghar" 
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 text-sm shadow-lg shadow-orange-500/20"
                  >
                    Check My ₹78,000 Subsidy <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Mini Stats Box */}
              <div className="lg:col-span-5 bg-slate-900/55 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center border-b border-slate-800 pb-3">Scheme Highlights</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <span className="text-xl sm:text-2xl font-black text-amber-400 block">₹78,000</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Max Govt. Subsidy</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xl sm:text-2xl font-black text-emerald-400 block">300 Units</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Free Power / Month</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xl sm:text-2xl font-black text-teal-400 block">~7% p.a.</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Low-Interest Loans</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xl sm:text-2xl font-black text-blue-400 block">30 Days</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Subsidy Turnaround</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-start items-center pt-8 mt-8 border-t border-slate-800 text-xs text-slate-400 font-medium relative z-10">
              <span className="bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">🏛️ WBSEDCL Empanelled</span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">🏛️ CESC Registered</span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">🛡️ End-to-End D2C Service</span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">📍 All of West Bengal Covered</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔷 WHY FARMERS TRUST US */}
      <section className="py-24 bg-white border-y border-gray-150 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/[0.02] rounded-l-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-green-600 font-bold uppercase tracking-widest text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block">Real Accountability</span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Why Farmers Trust Us
              </h2>
              <p className="text-lg text-gray-600 font-medium">
              
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "We don't just sell — we install and stand behind our work.",
                  "Authorized dealer of Premier Irrigation Adritec Limited & Jain Irrigation Systems Ltd.",
                  "Government subsidy support (Authorized dealer of leading irrigation, solar, and polyhouse manufacturers → See All Partners)",
                  "Experienced installation team — not outsourced labor, our own people.",
                  "We work across West Bengal and neighbouring states."
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0 mt-1">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-semibold">
                      {reason.includes("See All Partners") ? (
                        <>
                          {reason.split("See All Partners")[0]}
                          <Link to="/partners" className="text-green-600 hover:underline">
                            See All Partners
                          </Link>
                          {reason.split("See All Partners")[1]}
                        </>
                      ) : reason}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-2xl z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-50 rounded-2xl z-0" />
              <img 
                src="/01.png" 
                alt="Agricultural fields and irrigation setup" 
                className="relative z-10 w-full h-[450px] object-cover rounded-3xl shadow-xl border border-gray-150"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-white py-4 px-6 rounded-2xl shadow-xl z-20 border border-gray-150 flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-xl text-green-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-950 text-lg leading-tight">100% On-Ground</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">No Outsourced Labor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔷 BRANDS WE WORK WITH (Logo Strip) */}
      <section className="py-16 bg-[#fafbfa] border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-8">Brands We Work With</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-95">
            {[
              "PREMIER", "JAIN IRRIGATION SYSTEM LTD.", "NETAFIM", "GreenPro"
            ].map((brand) => (
              <div key={brand} className="bg-white border border-gray-150 h-24 sm:h-28 w-60 sm:w-72 flex items-center justify-center p-6 rounded-2xl shadow-sm hover:border-green-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {brand === "PREMIER" ? (
                  <img src="/PREMIER.png" alt="Premier Irrigation" className="max-h-16 sm:max-h-20 max-w-full object-contain" referrerPolicy="no-referrer" />
                ) : brand === "GreenPro" ? (
                  <img src="/GreenPro.png" alt="GreenPro" className="max-h-16 sm:max-h-20 max-w-full object-contain" referrerPolicy="no-referrer" />
                ) : brand === "JAIN IRRIGATION SYSTEM LTD." ? (
                  <img src="/JAIN_IRRIGATION_SYSTEM_LTD.png" alt="Jain Irrigation Systems Ltd." className="max-h-16 sm:max-h-20 max-w-full object-contain" referrerPolicy="no-referrer" />
                ) : brand === "NETAFIM" ? (
                  <img src="/netafim.jpeg" alt="Netafim" className="max-h-16 sm:max-h-20 max-w-full object-contain" referrerPolicy="no-referrer" />
                ) : (
                  <span className="text-sm font-extrabold text-gray-800">{brand}</span>
                )}
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mt-10"
          >
            <Link 
              to="/partners" 
              className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 px-6 py-3 rounded-full font-extrabold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              See More Brands & Sourcing Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🔷 QUICK CONTACT STRIP */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=1000" 
            alt="Field background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-3.5xl font-extrabold tracking-tight">Have a project in mind? Let's talk.</h2>
              <p className="text-green-100 text-sm sm:text-base">
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full lg:w-auto">
              {/* Call */}
              <a 
                href={`tel:${customPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 bg-white text-green-950 font-bold px-6 py-4 rounded-2xl hover:bg-green-50 transition-colors shadow-lg shadow-black/10 text-sm sm:text-base shrink-0"
              >
                <div className="bg-green-100 p-1.5 rounded-xl text-green-600">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call: {customPhone}</span>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${customEmail}`}
                className="flex items-center gap-3 bg-white text-green-950 font-bold px-6 py-4 rounded-2xl hover:bg-green-50 transition-colors shadow-lg shadow-black/10 text-sm sm:text-base shrink-0"
              >
                <div className="bg-green-100 p-1.5 rounded-xl text-green-600">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Email: {customEmail}</span>
              </a>

              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${customWhatsApp.replace(/[+\s]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-4 rounded-2xl hover:bg-[#20ba5a] transition-colors shadow-lg shadow-black/10 text-sm sm:text-base shrink-0"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
