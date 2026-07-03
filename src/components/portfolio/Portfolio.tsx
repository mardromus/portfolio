import { Github, Linkedin, Mail, Phone, ArrowUpRight, FileDown, MapPin, Asterisk } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PUBLICATIONS, PROJECTS } from "@/lib/data";

const NAV = [
  { href: "#work", label: "WORK" },
  { href: "#research", label: "RESEARCH" },
  { href: "#wins", label: "WINS" },
  { href: "#stack", label: "STACK" },
  { href: "#contact", label: "CONTACT" },
];

const MARQUEE = [
  "3 PUBLICATIONS",
  "IEEE XPLORE",
  "MICROSOFT COPILOT CHAMPION",
  "HACKFEST RUNNER-UP",
  "RUST · PYTHON · DART",
  "AGENTIC AI",
  "POST-QUANTUM CRYPTO",
  "QUANTUM ML",
  "OPEN TO INTERNSHIPS",
  "HIRE FOR AI / ML",
];

const HONORS = [
  { rank: "01", title: "Microsoft Copilot Challenge — Winner", note: "Ranked 1st of 2,000+ in a 4-week GenAI challenge (2024)." },
  { rank: "02", title: "HACKFEST 2.0 — Runner Up", note: "Data Policy Compliance Agent, 3,500+ participants. GDG New Delhi × Turgon AI." },
  { rank: "03", title: "Tempo Builder Hackathon — Finalist", note: "Top 5 · Autonomous merchant finance via agentic transaction monitoring." },
  { rank: "04", title: "x402 Protocol Hackathon — Top Ranking", note: "Decentralized AI marketplace with smart-contract micropayments on Aptos." },
  { rank: "05", title: "TrackShift Hackathon — Finalist", note: "Smart File Transfer System. Haas MoneyGram F1 × Mphasis." },
];

const SKILLS = [
  { label: "AI / ML", items: ["Generative AI (GANs)", "Agentic AI", "Multi-Agent", "RAG", "LangChain", "LangGraph", "PyTorch", "RL"] },
  { label: "Specialized Systems", items: ["PQC", "QUIC", "Quantum ML (NISQ)", "Pinecone"] },
  { label: "Languages", items: ["C++", "C", "Python", "Rust", "Dart", "SQL", "Bash", "HTML/CSS", "Java"] },
  { label: "Tools", items: ["Docker", "Firebase", "Git", "React", "Node.js", "Express", "MongoDB", "REST"] },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen text-ink">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Research />
      <Work />
      <Wins />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-bone/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg md:text-xl">
          <span className="inline-block bg-ink px-2 py-1 text-bone">KG</span>
          <span className="hidden md:inline">/ KUSHAGRA.GOYAL</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="border-2 border-transparent px-3 py-1.5 text-xs font-bold uppercase tracking-widest hover:border-ink hover:bg-mustard">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="/Kushagra_Resume.pdf"
          target="_blank"
          rel="noopener"
          className="brutal-border brutal-shadow-sm hover-snap inline-flex items-center gap-2 bg-hot px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
        >
          <FileDown className="h-3.5 w-3.5" /> Résumé
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-[3px] border-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 md:grid-cols-[1.4fr_1fr] md:gap-12 md:px-8 md:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 border-2 border-ink bg-lime px-3 py-1 text-xs font-bold uppercase tracking-widest">
            <span className="h-2 w-2 animate-pulse bg-ink" /> Open to AI / ML internships & roles
          </div>
          <h1 className="font-display text-[14vw] leading-[0.85] md:text-[8.5rem]">
            KUSHAGRA
            <br />
            <span className="text-hot">GOYAL.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg">
            CS undergrad at <span className="bg-mustard px-1">Symbiosis Institute of Technology</span>. AI/ML researcher.
            Systems tinkerer building agentic AI, post-quantum pipelines, and generative medical vision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="brutal-border brutal-shadow hover-snap inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-bold uppercase tracking-widest text-bone">
              GET IN TOUCH <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="https://github.com/mardromus" target="_blank" rel="noopener" className="brutal-border brutal-shadow-sm hover-snap inline-flex items-center gap-2 bg-bone px-5 py-3 text-sm font-bold uppercase tracking-widest">
              <Github className="h-4 w-4" /> GITHUB
            </a>
            <a href="https://www.linkedin.com/in/mardromus/" target="_blank" rel="noopener" className="brutal-border brutal-shadow-sm hover-snap inline-flex items-center gap-2 bg-cobalt px-5 py-3 text-sm font-bold uppercase tracking-widest text-white">
              <Linkedin className="h-4 w-4" /> LINKEDIN
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Pune, IN</span>
            <span>·</span>
            <span>B.TECH CSE · 2023–2027</span>
            <span>·</span>
            <span>3× PUBLISHED</span>
          </div>
        </div>

        <div className="relative">
          <div className="brutal-border brutal-shadow-hot relative bg-bone p-3">
            <img src="/photo.jpg" alt="Kushagra Goyal" className="aspect-square w-full object-cover grayscale contrast-125" />
            <div className="mt-2 flex items-center justify-between border-t-2 border-ink pt-2 text-[10px] font-bold uppercase tracking-widest">
              <span>ID // mardormus</span>
              <span className="bg-ink px-1 text-bone">REC</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-3 -rotate-3 border-2 border-ink bg-hot px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white brutal-shadow-sm">
            ★ IEEE PUBLISHED
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-b-[3px] border-ink bg-ink py-4 text-bone">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-2xl md:text-4xl">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t}
            <Asterisk className="h-6 w-6 text-hot" />
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-10 flex items-end justify-between border-b-2 border-dashed border-ink pb-4">
      <div>
        <div className="mb-2 inline-block border-2 border-ink bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-bone">
          {tag}
        </div>
        <h2 className="font-display text-4xl md:text-6xl">{title}</h2>
      </div>
      <div className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:block">
        //&nbsp;{tag.toLowerCase()}.md
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeader tag="00 // ABOUT" title="THE BRIEF." />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed md:text-2xl">
              I build things that sit at the seams — where <span className="bg-mustard px-1">quantum ML</span>,
              <span className="bg-lime px-1"> agentic systems</span>, and <span className="bg-hot px-1 text-white">post-quantum crypto</span> stop being buzzwords and start shipping.
              Four papers deep, five hackathons in, and currently exploring generative medical imaging.
            </p>
          </div>
          <aside className="brutal-border brutal-shadow-sm bg-card p-5">
            <div className="mb-3 border-b-2 border-ink pb-2 text-xs font-bold uppercase tracking-widest">Education</div>
            <div className="font-display text-xl leading-tight">Symbiosis Institute of Technology</div>
            <div className="mt-1 text-sm">B.Tech · Computer Science & Engineering</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">July 2023 – June 2027 · Pune, MH</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="border-b-[3px] border-ink bg-mustard">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <div className="mb-6 flex items-end justify-between border-b-2 border-dashed border-ink pb-4">
          <div>
            <div className="mb-2 inline-block border-2 border-ink bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-bone">
              01 // VOLUNTEERING
            </div>
            <h2 className="font-display text-3xl md:text-4xl">SIDE STUFF.</h2>
          </div>
        </div>
        <div className="brutal-border brutal-shadow-sm bg-bone p-5 md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <div className="font-display text-xl md:text-2xl">Paws Care Animal Resq (NGO)</div>
              <div className="mt-1 text-sm font-bold uppercase tracking-widest">Volunteer Developer · Pune</div>
            </div>
            <div className="border-2 border-ink bg-hot px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Jul 2025 → Mar 2026</div>
          </div>
          <p className="mt-4 max-w-2xl text-sm">
            Helped build a Flutter + Firebase adoption app with sign-in and cloud workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeader tag="02 // RESEARCH" title="PAPERS & PROOFS." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PUBLICATIONS.map((p, i) => (
            <Link
              key={i}
              to="/papers/$paperId"
              params={{ paperId: p.slug }}
              className="brutal-border brutal-shadow-sm hover-snap group flex flex-col bg-card p-6 text-ink hover:bg-bone transition-colors"
            >
              <article className="flex flex-col h-full">
                <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="border-2 border-ink bg-bone px-2 py-0.5">{p.venue}</span>
                  <span className={`border-2 border-ink px-2 py-0.5 ${p.color}`}>{p.status}</span>
                </div>
                <h3 className="font-display text-2xl leading-tight md:text-3xl">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed">{p.blurb}</p>
                <div className="mt-6 flex items-center justify-between border-t-2 border-dashed border-ink pt-3 text-xs font-bold uppercase tracking-widest">
                  <span>PAPER #{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex items-center gap-1 text-hot">
                    READ DETAILS
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-b-[3px] border-ink bg-cobalt text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-end justify-between border-b-2 border-dashed border-white/60 pb-4">
          <div>
            <div className="mb-2 inline-block border-2 border-white bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink">03 // PROJECTS</div>
            <h2 className="font-display text-4xl md:text-6xl">SHIPPED THINGS.</h2>
          </div>
          <div className="hidden font-mono text-xs uppercase tracking-widest opacity-70 md:block">// projects.md</div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Link
              key={i}
              to="/projects/$projectId"
              params={{ projectId: p.slug }}
              className="border-[3px] border-white bg-bone p-6 text-ink hover:bg-bone/90 transition-colors flex flex-col justify-between"
              style={{ boxShadow: "8px 8px 0 0 #0a0a0a" }}
            >
              <article className="flex flex-col h-full justify-between w-full">
                <div>
                  <div className="mb-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest border-b border-ink pb-2">
                    <span>PROJ / {String(i + 1).padStart(2, "0")}</span>
                    <span className="bg-ink px-2 py-0.5 text-bone">DETAILS</span>
                  </div>
                  <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.org}</div>
                  <p className="mt-4 text-sm">{p.body}</p>
                </div>
                <div className="mt-5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((s) => (
                      <span key={s} className="border-2 border-ink bg-mustard px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-ink pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-ink">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wins() {
  return (
    <section id="wins" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeader tag="04 // WINS" title="HONORS & HACKS." />
        <ul className="brutal-border bg-card">
          {HONORS.map((h, i) => (
            <li
              key={h.rank}
              className={`grid grid-cols-[80px_1fr_auto] items-center gap-4 border-ink px-4 py-5 md:grid-cols-[120px_1fr_auto] md:gap-6 md:px-8 md:py-7 ${i > 0 ? "border-t-2" : ""
                } hover:bg-mustard`}
            >
              <span className="font-display text-4xl md:text-6xl">{h.rank}</span>
              <div>
                <div className="font-display text-lg md:text-2xl">{h.title}</div>
                <div className="mt-1 text-xs md:text-sm">{h.note}</div>
              </div>
              <ArrowUpRight className="h-5 w-5" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-b-[3px] border-ink bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-end justify-between border-b-2 border-dashed border-bone/60 pb-4">
          <div>
            <div className="mb-2 inline-block border-2 border-bone bg-bone px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink">05 // STACK</div>
            <h2 className="font-display text-4xl md:text-6xl">THE TOOLKIT.</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILLS.map((g) => (
            <div key={g.label} className="border-[3px] border-bone p-6">
              <div className="mb-4 border-b-2 border-dashed border-bone/60 pb-2 text-xs font-bold uppercase tracking-widest">
                {g.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="border-2 border-bone bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest hover:bg-hot">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b-[3px] border-ink bg-hot text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
        <div className="mb-6 inline-block border-2 border-white bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-ink">
          06 // CONTACT
        </div>
        <h2 className="font-display text-[16vw] leading-[0.85] md:text-[10rem]">LET'S<br />BUILD.</h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <a href="mailto:kushagragoyal675@gmail.com" className="brutal-border hover-snap flex items-center justify-between bg-bone p-5 text-ink" style={{ boxShadow: "8px 8px 0 0 #0a0a0a" }}>
            <span className="flex items-center gap-3 font-display text-lg md:text-2xl"><Mail className="h-5 w-5" /> kushagragoyal675@gmail.com</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a href="tel:+918800739389" className="brutal-border hover-snap flex items-center justify-between bg-bone p-5 text-ink" style={{ boxShadow: "8px 8px 0 0 #0a0a0a" }}>
            <span className="flex items-center gap-3 font-display text-lg md:text-2xl"><Phone className="h-5 w-5" /> +91 8800 739 389</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/mardromus/" target="_blank" rel="noopener" className="brutal-border hover-snap flex items-center justify-between bg-cobalt p-5 text-white" style={{ boxShadow: "8px 8px 0 0 #0a0a0a" }}>
            <span className="flex items-center gap-3 font-display text-lg md:text-2xl"><Linkedin className="h-5 w-5" /> /in/mardromus</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a href="https://github.com/mardromus" target="_blank" rel="noopener" className="brutal-border hover-snap flex items-center justify-between bg-ink p-5 text-bone" style={{ boxShadow: "8px 8px 0 0 #0a0a0a" }}>
            <span className="flex items-center gap-3 font-display text-lg md:text-2xl"><Github className="h-5 w-5" /> @mardromus</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 md:flex-row md:items-center md:px-8">
        <div className="font-mono text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} KUSHAGRA GOYAL · HAND-CODED IN PUNE ·
          <span className="ml-2 bg-hot px-1 text-white">v1.0</span>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest opacity-70">
          "Ship weird. Ship rigorous."
        </div>
      </div>
    </footer>
  );
}
