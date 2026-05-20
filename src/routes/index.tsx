import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    title: "RENTIFY9JA",
    sub: "Fixing the House Rental Journey",
    tag: "UX Case Study",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/989653248473487.Y3JvcCw1Mzg0LDQyMTIsNjYsMA.png",
    href: "https://www.behance.net/gallery/248473487/RENTIFY9JA-Case-Study-Fixing-House-Rental-Journey",
  },
  {
    title: "School Management System",
    sub: "End-to-end UI/UX case study",
    tag: "Product Design",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/e1fa4e247387999.Y3JvcCwzNTQ3LDI3NzUsMjgxLDA.png",
    href: "https://www.behance.net/gallery/247387999/Schoool-Management-System-UIUX-CASE-STUDY",
  },
  {
    title: "Cybersecurity SaaS",
    sub: "Landing page UI/UX design",
    tag: "Web Design",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/a86d9f247363623.Y3JvcCw0MzE0LDMzNzUsOTYsMA.png",
    href: "https://www.behance.net/gallery/247363623/Cybersecurity-SAAS-landing-page-UIUX-Design",
  },
  {
    title: "Cuvée de Paris",
    sub: "Luxury wine brand website",
    tag: "Brand & Web",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/d9d219247306203.Y3JvcCwzNjU5LDI4NjIsMCww.png",
    href: "https://www.behance.net/gallery/247306203/Cuve-de-Paris-Luxury-Wine-Brand-Website-French",
  },
  {
    title: "Jobtern",
    sub: "Verified hiring platform",
    tag: "Product Design",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/1ab391243366429.Y3JvcCwzMDU2LDIzOTEsMCww.png",
    href: "https://www.behance.net/gallery/243366429/CASE-STUDY-JOBTERN-(Verified-Hiring-Platform)",
  },
  {
    title: "Pizza Heaven",
    sub: "Build your perfect pizza",
    tag: "Mobile UX",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/020aee243358685.Y3JvcCwyOTY4LDIzMjIsMCww.png",
    href: "https://www.behance.net/gallery/243358685/CASE-STUDY-PIZZA-HEAVEN-(Create-your-perfect-pizza)",
  },
  {
    title: "E-Commerce Dashboard",
    sub: "Transaction analytics case study",
    tag: "Dashboard UX",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/ac45d3239425557.Y3JvcCw0Njc5LDM2NjAsMzkzLDA.png",
    href: "https://www.behance.net/gallery/239425557/CASE-STUDY-E-Commerce-Transaction-Dashboard",
  },
  {
    title: "Wandr",
    sub: "A social travel app",
    tag: "Mobile App",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/84344a238165077.690f347dd1936.jpg",
    href: "https://www.behance.net/gallery/238165077/Wandr-A-Social-Travel-App",
  },
  {
    title: "Airbills Pay",
    sub: "Mobile app redesign",
    tag: "Mobile UX",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/17adc7235347857.Y3JvcCw0Mzk5LDM0NDEsNTY2LDA.png",
    href: "https://www.behance.net/gallery/235347857/REDESIGN-OF-AIRBILLS-PAY-MOBILE-APP",
  },
];

const services = [
  { n: "01", t: "Product Design", d: "End-to-end UI/UX for SaaS, mobile and dashboard products — from discovery to handoff." },
  { n: "02", t: "Brand Management", d: "Helping brands find their voice, sharpen positioning, and stay consistent across every touchpoint." },
  { n: "03", t: "Web & Landing Pages", d: "High-converting marketing sites that look the part and back it up with clean UX." },
  { n: "04", t: "Design Systems", d: "Scalable component libraries and visual systems your team can actually build with." },
];

const process = [
  { n: "01", t: "Listen", d: "I start with questions, not screens. Goals, users, constraints, and what success really means." },
  { n: "02", t: "Frame", d: "Map the problem. Sharpen the brief. Decide what to build — and what to leave out." },
  { n: "03", t: "Shape", d: "Wireframes, flows, and visual exploration. Iterate fast, validate early." },
  { n: "04", t: "Ship", d: "Pixel-tight design files, prototypes, and dev handoff that doesn't leak intent." },
];

const tickerWords = [
  "Product Design",
  "UI/UX",
  "Brand Management",
  "Design Systems",
  "Lagos · Remote",
  "Available for work",
];

function Nav() {
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-display text-2xl tracking-tight">
          khadijat<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="text-sm uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground">
              {i.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-background transition hover:bg-accent md:inline-flex"
        >
          Work with me
        </a>
      </div>
    </header>
  );
}

function BottomNav() {
  const items = [
    { label: "Home", href: "#top", icon: "M3 12 12 4l9 8M5 10v10h14V10" },
    { label: "Work", href: "#work", icon: "M4 7h16M4 12h16M4 17h10" },
    { label: "Services", href: "#services", icon: "M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" },
    { label: "About", href: "#about", icon: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-7 8-7s8 3 8 7" },
    { label: "Contact", href: "#contact", icon: "M4 6h16v12H4zM4 6l8 7 8-7" },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <ul className="grid grid-cols-5">
        {items.map((i) => (
          <li key={i.href}>
            <a href={i.href} className="flex flex-col items-center gap-1 py-2.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground transition active:text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d={i.icon} />
              </svg>
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-16 md:grid-cols-12 md:pb-32 md:pt-24">
        <div className="md:col-span-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground animate-rise">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            UI/UX · Product · Brand
          </div>
          <h1 className="mt-8 font-display text-[15vw] leading-[0.95] tracking-tight md:text-[8.5vw] animate-rise">
            Designing<br />
            products that <em className="not-italic text-accent font-display italic">feel</em><br />
            inevitable.
          </h1>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm <span className="text-foreground">Khadijat Momoh</span> — a UI/UX designer, brand manager and product
            designer based in Lagos. I help teams turn fuzzy ideas into digital products that are
            clear, considered and built to convert.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:bg-accent">
              See my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium transition hover:border-foreground">
              Work with me
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-end md:col-span-4">
          <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-border">
            {[
              { v: "15+", l: "Projects shipped" },
              { v: "4+", l: "Years designing" },
              { v: "3", l: "Industries served" },
              { v: "∞", l: "Iterations welcome" },
            ].map((s, i) => (
              <div key={i} className={`p-6 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""} border-border`}>
                <div className="font-display text-4xl">{s.v}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance & full-time
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...tickerWords, ...tickerWords];
  return (
    <div className="border-y border-border bg-foreground py-6 text-background">
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {row.map((w, i) => (
            <span key={i} className="mx-8 font-display text-3xl md:text-5xl">
              {w}
              <span className="ml-16 text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected Work</div>
          <h2 className="mt-4 font-display text-5xl leading-[1] tracking-tight md:text-7xl">
            Work that <em className="not-italic italic text-accent">speaks</em> for itself.
          </h2>
        </div>
        <a href="https://www.behance.net/jael4" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em]">
          View all on Behance
          <span className="transition-transform group-hover:translate-x-1">↗</span>
        </a>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={`group block ${i % 3 === 0 ? "md:col-span-2" : ""}`}
          >
            <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
              <div className={`${i % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"} overflow-hidden`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-background/90 px-4 py-2 text-xs uppercase tracking-[0.16em] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                View case ↗
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-6">
              <div>
                <div className="font-display text-2xl md:text-3xl">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.sub}</div>
              </div>
              <div className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {p.tag}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What I do</div>
            <h2 className="mt-4 font-display text-5xl leading-[1] tracking-tight md:text-6xl">
              A small, focused <em className="not-italic italic text-accent">toolkit</em>.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Four things, done with care. If it doesn't fit one of these, we'll talk about
              who's a better fit — no hard sell.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {services.map((s) => (
                <li key={s.n} className="group grid grid-cols-12 gap-4 py-8 transition-colors">
                  <div className="col-span-2 font-display text-2xl text-muted-foreground md:col-span-1">{s.n}</div>
                  <div className="col-span-10 md:col-span-11">
                    <div className="font-display text-2xl md:text-3xl">
                      <span className="transition-colors group-hover:text-accent">{s.t}</span>
                    </div>
                    <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">{s.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The Framework</div>
        <h2 className="mt-4 font-display text-5xl leading-[1] tracking-tight md:text-7xl">
          How the <em className="not-italic italic text-accent">work</em> gets made.
        </h2>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
        {process.map((p) => (
          <div key={p.n} className="bg-background p-8">
            <div className="font-display text-5xl text-accent">{p.n}</div>
            <div className="mt-8 font-display text-2xl">{p.t}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-background/60">About</div>
          <h2 className="mt-4 font-display text-5xl leading-[1] tracking-tight md:text-6xl">
            A designer wearing <em className="not-italic italic text-accent">multiple hats</em>.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-background/80 md:col-span-7 md:text-lg">
          <p>
            I'm Khadijat Momoh — a versatile creative based in Lagos, Nigeria. As a UI/UX designer
            I craft digital experiences that seamlessly merge beauty and function. As a brand manager
            I help teams find their unique voice and connect with the people they serve.
          </p>
          <p>
            I've designed for hiring platforms, fintech, e-commerce, education and luxury — and led
            design as State Lead for Superteam Nigeria. I care about quiet, considered work that
            lasts longer than a launch week.
          </p>
          <dl className="grid grid-cols-2 gap-6 border-t border-background/15 pt-8 text-sm md:grid-cols-3">
            {[
              ["Based in", "Lagos, Nigeria"],
              ["Currently", "Jobtern"],
              ["Worked with", "Superteam · Geospatial · Jobtern"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-[0.18em] text-background/50">{k}</dt>
                <dd className="mt-2 font-display text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [year, setYear] = useState("");
  useEffect(() => setYear(String(new Date().getFullYear())), []);
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:py-40">
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
      <h2 className="mt-4 font-display text-[14vw] leading-[0.95] tracking-tight md:text-[9vw]">
        Let's build<br />
        something <em className="not-italic italic text-accent">good</em>.
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="max-w-xl text-lg text-muted-foreground">
            Got a product, brand or website you want to take seriously? I'm currently open to
            freelance and full-time roles. Send a note — I reply within 48 hours.
          </p>
          <a
            href="mailto:Khadijatmomoh20@gmail.com"
            className="mt-10 inline-flex items-center gap-3 border-b-2 border-foreground pb-2 font-display text-2xl transition hover:border-accent hover:text-accent md:text-5xl break-all"
          >
            Khadijatmomoh20@gmail.com
            <span>↗</span>
          </a>
        </div>
        <div className="space-y-6 md:col-span-5">
          {[
            { k: "Behance", v: "jael4", h: "https://www.behance.net/jael4" },
            { k: "Twitter / X", v: "@Jasreall", h: "https://twitter.com/Jasreall" },
            { k: "Location", v: "Lagos, Nigeria", h: null },
            { k: "Availability", v: "Freelance & Full-time", h: null },
          ].map((r) => (
            <div key={r.k} className="flex items-baseline justify-between border-b border-border pb-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{r.k}</div>
              {r.h ? (
                <a href={r.h} target="_blank" rel="noreferrer" className="font-display text-xl hover:text-accent">
                  {r.v} ↗
                </a>
              ) : (
                <div className="font-display text-xl">{r.v}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center">
        <div>© {year} Khadijat Momoh. All rights reserved.</div>
        <div>Designed & built with care.</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
