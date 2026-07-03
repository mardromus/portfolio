import { createFileRoute, Link } from "@tanstack/react-router";
import { PUBLICATIONS } from "@/lib/data";
import { ArrowLeft, ArrowUpRight, BookOpen, ShieldCheck, Award } from "lucide-react";

export const Route = createFileRoute("/papers/$paperId")({
  component: PaperDetail,
  loader: ({ params }) => {
    const paper = PUBLICATIONS.find((p) => p.slug === params.paperId);
    if (!paper) {
      throw new Response("Not Found", { status: 404 });
    }
    return { paper };
  },
  errorComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bone px-4 text-ink">
      <div className="brutal-border brutal-shadow bg-hot p-8 text-center text-white max-w-md">
        <h1 className="font-display text-4xl mb-4">404 - PAPER NOT FOUND</h1>
        <p className="font-mono text-sm mb-6">The scientific publication you are looking for does not exist in the archives.</p>
        <Link to="/" className="brutal-border brutal-shadow-sm inline-flex items-center gap-2 bg-bone px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink hover-snap">
          <ArrowLeft className="h-4 w-4" /> BACK TO HOME
        </Link>
      </div>
    </div>
  ),
});

function PaperDetail() {
  const { paper } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-bone text-ink selection:bg-hot selection:text-white">
      {/* Back Header */}
      <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-bone/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 font-display text-sm md:text-base border-2 border-ink bg-mustard px-3 py-1.5 brutal-shadow-sm hover-snap">
            <ArrowLeft className="h-4 w-4" /> KG / PORTFOLIO
          </Link>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground hidden md:block">
            // research_archive // {paper.slug}.pdf
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16">
        {/* Title Block */}
        <div className="brutal-border brutal-shadow-hot bg-card p-6 md:p-10 mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="border-2 border-ink bg-ink px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-bone">
              {paper.venue}
            </span>
            <span className={`border-2 border-ink px-2.5 py-1 text-xs font-bold uppercase tracking-widest ${paper.color}`}>
              {paper.status}
            </span>
          </div>
          <h1 className="font-display text-3xl leading-tight md:text-5xl md:leading-[1.1] text-ink">
            {paper.title}
          </h1>
          <div className="mt-6 border-t-2 border-ink pt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1"><Award className="h-4 w-4 text-hot" /> AUTHOR // KUSHAGRA GOYAL</span>
            <span>·</span>
            <span>NISQ & SYSTEM LABS</span>
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column: Metadata & Contributions */}
          <div className="md:col-span-1 space-y-6">
            {/* Paper Info Box */}
            <div className="brutal-border brutal-shadow-sm bg-lime p-5">
              <h3 className="font-display text-lg mb-3 border-b border-ink pb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> INFORMATION
              </h3>
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider text-ink font-bold">
                <li>
                  <span className="text-muted-foreground block text-[10px]">Type</span>
                  Research Paper
                </li>
                <li>
                  <span className="text-muted-foreground block text-[10px]">Venue</span>
                  {paper.venue}
                </li>
                <li>
                  <span className="text-muted-foreground block text-[10px]">Index Status</span>
                  {paper.status}
                </li>
              </ul>
              {paper.link && (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 brutal-border brutal-shadow-sm inline-flex w-full items-center justify-between bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-bone hover-snap"
                >
                  IEEE XPLORE LINK <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>

            {/* Key Contributions */}
            <div className="brutal-border brutal-shadow-sm bg-bone p-5">
              <h3 className="font-display text-lg mb-3 border-b border-ink pb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cobalt" /> CONTRIBUTIONS
              </h3>
              <ul className="space-y-3 list-inside list-disc text-xs leading-relaxed font-bold">
                {paper.contributions.map((c, idx) => (
                  <li key={idx} className="marker:text-hot">{c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Abstract & Methodology */}
          <div className="md:col-span-2 space-y-8">
            {/* Abstract */}
            <div className="brutal-border brutal-shadow-sm bg-card p-6 md:p-8">
              <h2 className="font-display text-2xl mb-4 border-b-2 border-dashed border-ink pb-2 text-hot">
                ABSTRACT.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-ink font-bold">
                {paper.abstract}
              </p>
            </div>

            {/* Methodology */}
            <div className="brutal-border brutal-shadow-sm bg-card p-6 md:p-8">
              <h2 className="font-display text-2xl mb-4 border-b-2 border-dashed border-ink pb-2 text-cobalt">
                METHODOLOGY.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-ink font-bold">
                {paper.methodology}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
