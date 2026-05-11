import LocationMap from "./LocationMap";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Nav />
      <Hero />
      <SignsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

/* ─── Navigation ─── */

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/95 backdrop-blur-xl">
      <div className="cmyk-stripe absolute bottom-0 left-0 right-0"><span /><span /><span /><span /></div>
      <a href="#" className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <div className="absolute top-0 left-1 w-6 h-6 rounded-full bg-cyan opacity-75 mix-blend-multiply" />
          <div className="absolute top-0 right-1 w-6 h-6 rounded-full bg-magenta opacity-75 mix-blend-multiply" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-yellow opacity-75 mix-blend-multiply" />
        </div>
        <span className="text-key font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight hidden sm:block">
          High 5 Signs
        </span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted font-semibold">
        <a href="#signs" className="hover:text-cyan transition-colors">Signs</a>
        <a href="#clients" className="hover:text-magenta transition-colors">Clients</a>
        <a href="#contact" className="hover:text-key transition-colors">Contact</a>
      </div>
      <a
        href="#contact"
        className="px-6 py-2.5 text-sm font-bold gradient-cmyk text-white rounded-full hover:shadow-[0_4px_24px_rgba(233,30,99,0.35)] transition-all duration-300"
      >
        Free Quote
      </a>
    </nav>
  );
}

/* ─── Hero ─── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cyan-pale via-white to-magenta-pale/40">
      <div className="absolute inset-0 halftone-bg" />

      {/* Large CMYK ink blobs */}
      <div className="absolute -top-20 -right-40 w-[600px] h-[600px] ink-blob bg-cyan/10 blur-[80px] animate-cmyk-pulse" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] ink-blob bg-magenta/8 blur-[80px] animate-cmyk-pulse delay-300" />
      <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] ink-blob bg-yellow/10 blur-[60px] animate-cmyk-pulse delay-600" />

      {/* Floating geometric accents */}
      <div className="absolute top-32 right-16 md:right-32">
        <div className="w-20 h-20 border-[3px] border-cyan/30 rounded-full animate-float" />
        <div className="absolute top-2 left-2 w-16 h-16 border-[3px] border-magenta/20 rounded-full animate-float delay-200" />
      </div>
      <div className="absolute bottom-32 left-12 md:left-24 w-16 h-16 bg-yellow/15 rounded-xl rotate-12 animate-float delay-400" />
      <div className="absolute top-1/2 left-8 w-3 h-3 rounded-full bg-magenta/40 animate-float delay-100" />
      <div className="absolute top-1/3 right-12 w-4 h-4 rounded-full bg-cyan/30 animate-float delay-500" />
      <div className="absolute bottom-40 right-24 w-2 h-2 rounded-full bg-yellow/50 animate-float delay-300" />

      {/* Registration marks */}
      <div className="absolute top-24 left-6 registration-mark text-cyan/20 animate-registration" />
      <div className="absolute top-24 right-6 registration-mark text-magenta/20 animate-registration delay-300" />
      <div className="absolute bottom-20 left-6 registration-mark text-yellow/25 animate-registration delay-600" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 border border-border backdrop-blur-sm shadow-sm mb-10">
            <div className="flex -space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-magenta ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-key ring-2 ring-white" />
            </div>
            <span className="text-key text-xs md:text-sm font-bold tracking-wide uppercase">34+ Years in the Sign Industry</span>
          </div>

          <h1 className="animate-fade-up delay-200 font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-key mb-8">
            Quality Signs
            <br />
            <span className="text-cmyk-gradient">For Your</span>
            <br />
            <span className="text-cmyk-gradient">Business</span>
          </h1>

          <p className="animate-fade-up delay-400 text-key/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            We design, manufacture, install, and service all types of signs.
            Creative marketing solutions that help your brand
            <span className="font-bold text-magenta"> stand out</span> and
            <span className="font-bold text-cyan"> grow</span>.
          </p>

          <div className="animate-fade-up delay-600 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contact"
              className="group px-10 py-5 gradient-cmyk text-white font-extrabold text-sm uppercase tracking-widest rounded-full hover:shadow-[0_12px_40px_rgba(233,30,99,0.3)] transition-all duration-500 hover:-translate-y-1"
            >
              Start Your Project
              <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
            <a
              href="tel:4075728947"
              className="px-10 py-5 bg-key text-white font-extrabold text-sm uppercase tracking-widest rounded-full hover:bg-key-light transition-all duration-300"
            >
              (407) 572-8947
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Signs ─── */

function SignsSection() {
  const signs = [
    {
      title: "Channel Letters",
      description: "Illuminated dimensional letters that bring your brand to life day and night. Front-lit, back-lit, and halo-lit.",
      accent: "#00bcd4",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
      ),
    },
    {
      title: "Monument Signs",
      description: "Grand freestanding structures that make a statement at building entrances. Custom stone, concrete, and metal.",
      accent: "#e91e63",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/></svg>
      ),
    },
    {
      title: "Pylon Signs",
      description: "Tall freestanding signs visible from the road. Single or multi-tenant options with full illumination.",
      accent: "#ffc107",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 22l4-18 4 18M6 12h12"/></svg>
      ),
    },
    {
      title: "Vehicle Wraps",
      description: "Turn your fleet into mobile billboards. Full wraps, partial wraps, and custom graphics that drive attention.",
      accent: "#00bcd4",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 17h14V7H5zM2 17h20v2H2z"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>
      ),
    },
    {
      title: "LED Neon Signs",
      description: "Modern energy-efficient neon alternatives. Custom shapes, colors, and dimmable options for any space.",
      accent: "#e91e63",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6h-8c-1.5-1.5-3-3.5-3-6a7 7 0 017-7z"/></svg>
      ),
    },
    {
      title: "Illuminated Boxes",
      description: "Cabinet signs with internal LED lighting for maximum nighttime visibility. Custom sizes, shapes, and finishes.",
      accent: "#ffc107",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>
      ),
    },
  ];

  return (
    <section id="signs" className="relative py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="cmyk-stripe absolute top-0 left-0 right-0"><span /><span /><span /><span /></div>

      {/* Background accent blob */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] ink-blob bg-cyan/5 blur-[60px]" />
      <div className="absolute bottom-20 -left-32 w-[400px] h-[400px] ink-blob bg-magenta/4 blur-[60px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-cyan rounded-full" />
              <div className="w-4 h-1 bg-magenta rounded-full" />
              <div className="w-2 h-1 bg-yellow rounded-full" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-black tracking-tight text-heading">
              Signs That
              <br />
              <span className="text-my-gradient">Stand Out</span>
            </h2>
          </div>
          <p className="text-muted text-base md:text-lg max-w-md leading-relaxed">
            From concept to installation — we build every type of sign your business needs, all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signs.map((sign) => (
            <div
              key={sign.title}
              className="group relative bg-white rounded-2xl border border-border p-8 card-lift overflow-hidden"
            >
              {/* Top color bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ background: sign.accent }} />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: `${sign.accent}15`, color: sign.accent }}
              >
                {sign.icon}
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-heading mb-3">
                {sign.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {sign.description}
              </p>

              {/* Bottom corner blob on hover */}
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-700 group-hover:scale-125"
                style={{ background: sign.accent }}
              />
            </div>
          ))}
        </div>

        {/* Additional services ribbon */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Banners & Flags", "Directory Signs", "Window Clings", "Vehicle Magnets", "Foam Board Signs"].map((item, i) => {
            const colors = ["bg-cyan/8 text-cyan-deep border-cyan/15", "bg-magenta/8 text-magenta border-magenta/15", "bg-yellow/10 text-key border-yellow/20"];
            return (
              <span key={item} className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border ${colors[i % 3]}`}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Clients ─── */

function ClientsSection() {
  const clients = [
    "Walt Disney World",
    "Universal Studios",
    "SeaWorld Parks",
    "Orlando Health",
    "Osceola County",
    "City of Kissimmee",
    "Marriott Hotels",
    "Wyndham Resorts",
  ];

  return (
    <section id="clients" className="relative py-24 md:py-32 px-6 md:px-12 bg-key overflow-hidden">
      {/* Colored overlays */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] ink-blob bg-cyan/8 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] ink-blob bg-magenta/6 blur-[60px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-1 bg-cyan rounded-full" />
            <div className="w-4 h-1 bg-magenta rounded-full" />
            <div className="w-8 h-1 bg-yellow rounded-full" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Trusted by <span className="text-cmyk-gradient">Leading Brands</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            We&apos;re proud to serve businesses across Central Florida — from local shops to world-renowned destinations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {clients.map((client, i) => {
            const accents = ["hover:border-cyan/60", "hover:border-magenta/60", "hover:border-yellow/60"];
            return (
              <div
                key={client}
                className={`group flex items-center justify-center p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 ${accents[i % 3]} transition-all duration-400`}
              >
                <span className="text-white/60 text-center text-sm font-semibold group-hover:text-white transition-colors duration-300">
                  {client}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "34+", label: "Years in Business", bg: "bg-cyan" },
            { value: "5,000+", label: "Signs Installed", bg: "bg-magenta" },
            { value: "100%", label: "Custom Built", bg: "bg-yellow text-key" },
            { value: "24/7", label: "Service & Repair", bg: "bg-white text-key" },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-2xl p-8 text-center ${stat.bg.includes("text-key") ? "" : "text-white"}`}>
              <span className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black block">
                {stat.value}
              </span>
              <p className={`text-sm mt-2 font-medium ${stat.bg.includes("text-key") ? "text-key/60" : "text-white/70"}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-cyan-pale/50 via-white to-magenta-pale/30 overflow-hidden">
      <div className="cmyk-stripe absolute top-0 left-0 right-0"><span /><span /><span /><span /></div>

      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] ink-blob bg-yellow/8 blur-[60px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-magenta rounded-full" />
              <div className="w-4 h-1 bg-yellow rounded-full" />
              <div className="w-2 h-1 bg-cyan rounded-full" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black tracking-tight text-heading mb-6">
              Let&apos;s Build
              <br />
              <span className="text-cmyk-gradient">Something Bold</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Our business helps your business. Tell us what you need — we&apos;ll
              design, manufacture, and install the perfect sign, on time and on budget.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📍", title: "Our Shop", info: "4605 S Orange Blossom Trail, Kissimmee, FL 34746", color: "border-l-cyan" },
                { icon: "📞", title: "Call Us", info: "(407) 572-8947", color: "border-l-magenta" },
                { icon: "✉️", title: "Email", info: "info@high5signs.com", color: "border-l-yellow" },
                { icon: "🕐", title: "Hours", info: "Mon – Fri: 8:00 AM – 5:00 PM", color: "border-l-key" },
              ].map((item) => (
                <div key={item.title} className={`flex items-center gap-4 p-5 bg-white rounded-xl border border-border ${item.color} border-l-4 shadow-sm`}>
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-heading font-bold text-sm">{item.title}</p>
                    <p className="text-muted text-sm">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <LocationMap />
          </div>

          <form className="p-8 md:p-10 bg-white rounded-3xl border border-border shadow-xl shadow-black/5" action="#" method="POST">
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-muted mb-2 font-bold">Name</label>
                  <input
                    type="text" id="name" name="name" required
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-heading placeholder:text-muted/40 focus:border-cyan focus:ring-2 focus:ring-cyan/10 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-muted mb-2 font-bold">Phone</label>
                  <input
                    type="tel" id="phone" name="phone"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-heading placeholder:text-muted/40 focus:border-magenta focus:ring-2 focus:ring-magenta/10 focus:outline-none transition-all"
                    placeholder="(407) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted mb-2 font-bold">Email</label>
                <input
                  type="email" id="email" name="email" required
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-heading placeholder:text-muted/40 focus:border-cyan focus:ring-2 focus:ring-cyan/10 focus:outline-none transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-xs uppercase tracking-wider text-muted mb-2 font-bold">Sign Type</label>
                <select
                  id="project" name="project"
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-heading focus:border-yellow focus:ring-2 focus:ring-yellow/10 focus:outline-none transition-all"
                >
                  <option value="">What do you need?</option>
                  <option value="channel">Channel Letters</option>
                  <option value="monument">Monument Signs</option>
                  <option value="pylon">Pylon Signs</option>
                  <option value="vehicle">Vehicle Wraps</option>
                  <option value="led">LED Neon Signs</option>
                  <option value="box">Illuminated Sign Boxes</option>
                  <option value="banner">Banners & Flags</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-muted mb-2 font-bold">Project Details</label>
                <textarea
                  id="message" name="message" rows={4}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3.5 text-heading placeholder:text-muted/40 focus:border-cyan focus:ring-2 focus:ring-cyan/10 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your project, timeline, and budget..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4.5 gradient-cmyk text-white font-extrabold text-sm uppercase tracking-widest rounded-xl hover:shadow-[0_12px_40px_rgba(233,30,99,0.25)] transition-all duration-500 hover:-translate-y-0.5"
              >
                Get Your Free Quote
              </button>
              <p className="text-center text-muted text-xs font-medium">We respond within 24 hours · No obligation</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="bg-key pt-16 pb-8 px-6 md:px-12">
      <div className="cmyk-stripe mb-12"><span /><span /><span /><span /></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <div className="absolute top-0 left-1 w-6 h-6 rounded-full bg-cyan opacity-80 mix-blend-screen" />
                <div className="absolute top-0 right-1 w-6 h-6 rounded-full bg-magenta opacity-80 mix-blend-screen" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-yellow opacity-80 mix-blend-screen" />
              </div>
              <span className="text-white font-[family-name:var(--font-display)] text-xl font-extrabold">High 5 Signs</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm mb-6">
              A trusted manufacturer with over 34 years in the sign industry.
              Design, fabrication, installation, and repair — all under one roof in Kissimmee, FL.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/High5Signs/", label: "Facebook", hoverColor: "hover:bg-cyan hover:border-cyan", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> },
                { href: "https://www.instagram.com/high5signs/", label: "Instagram", hoverColor: "hover:bg-magenta hover:border-magenta", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/> },
                { href: "https://google.com/maps/place/High+5+Signs", label: "Maps", hoverColor: "hover:bg-yellow hover:border-yellow", icon: <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z"/> },
                { href: "https://www.yelp.com/biz/high-5-signs-kissimmee", label: "Yelp", hoverColor: "hover:bg-white/20 hover:border-white/30", icon: <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206l2.039 1.727c.66.56.49 1.548-.37 2.984zm-7.042 5.13l1.433-4.994c.276-.96 1.63-1.176 2.39-.33l3.086 3.44c.56.62.127 1.62-.82 1.896l-4.71 1.365c-.946.276-1.655-.418-1.38-1.378zM8.63 15.3l-3.34-3.74c-.56-.622-.127-1.62.82-1.896l4.71-1.366c.947-.275 1.656.42 1.38 1.38l-1.433 4.994c-.276.96-1.63 1.176-2.137.63zM11.882 2.75l.117 5.244c.023 1.003-1.155 1.546-1.85.85L6.012 4.77a1.073 1.073 0 01.087-1.61L8.3 1.495c.77-.56 1.796-.078 3.582 1.255z"/> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 border border-white/15 rounded-xl flex items-center justify-center text-white/50 hover:text-white ${social.hoverColor} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs uppercase tracking-widest text-white/30 font-bold mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#signs" className="hover:text-cyan transition-colors">Channel Letters</a></li>
              <li><a href="#signs" className="hover:text-cyan transition-colors">Monument Signs</a></li>
              <li><a href="#signs" className="hover:text-cyan transition-colors">Vehicle Wraps</a></li>
              <li><a href="#signs" className="hover:text-cyan transition-colors">LED Neon Signs</a></li>
              <li><a href="#signs" className="hover:text-cyan transition-colors">Pylon Signs</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-white/30 font-bold mb-5">Service Areas</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>Kissimmee</li>
              <li>Orlando</li>
              <li>Davenport</li>
              <li>Winter Garden</li>
              <li>All of Central FL</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2024 High 5 Signs Inc. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            4605 S Orange Blossom Trail, Kissimmee, FL 34746 · (407) 572-8947
          </p>
        </div>
      </div>
    </footer>
  );
}
