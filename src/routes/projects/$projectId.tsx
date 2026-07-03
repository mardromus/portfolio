import { createFileRoute, Link } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/data";
import { ArrowLeft, ArrowUpRight, Code, ShieldCheck, Github } from "lucide-react";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.projectId);
    if (!project) {
      throw new Response("Not Found", { status: 404 });
    }
    return { project };
  },
  errorComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bone px-4 text-ink">
      <div className="brutal-border brutal-shadow bg-hot p-8 text-center text-white max-w-md">
        <h1 className="font-display text-4xl mb-4">404 - PROJECT NOT FOUND</h1>
        <p className="font-mono text-sm mb-6">The project you are looking for could not be found in our records.</p>
        <Link to="/" className="brutal-border brutal-shadow-sm inline-flex items-center gap-2 bg-bone px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink hover-snap">
          <ArrowLeft className="h-4 w-4" /> BACK TO HOME
        </Link>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-bone text-ink selection:bg-hot selection:text-white">
      {/* Back Header */}
      <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-bone/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 font-display text-sm md:text-base border-2 border-ink bg-mustard px-3 py-1.5 brutal-shadow-sm hover-snap">
            <ArrowLeft className="h-4 w-4" /> KG / PORTFOLIO
          </Link>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground hidden md:block">
            // projects_archive // {project.slug}.md
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16">
        {/* Title Block */}
        <div className="brutal-border brutal-shadow-hot bg-card p-6 md:p-10 mb-10">
          <div className="mb-4 inline-block border-2 border-ink bg-ink px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-bone">
            {project.org}
          </div>
          <h1 className="font-display text-3xl leading-tight md:text-5xl md:leading-[1.1] text-ink">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="border-2 border-ink bg-mustard px-2.5 py-1 text-xs font-bold uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column: Metadata & Features */}
          <div className="md:col-span-1 space-y-6">
            {/* Project Info Box */}
            <div className="brutal-border brutal-shadow-sm bg-lime p-5">
              <h3 className="font-display text-lg mb-3 border-b border-ink pb-2 flex items-center gap-2">
                <Code className="h-4 w-4" /> SPECS
              </h3>
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider text-ink font-bold">
                <li>
                  <span className="text-muted-foreground block text-[10px]">Timeline</span>
                  {project.org.split(" · ")[1] || "2025"}
                </li>
                <li>
                  <span className="text-muted-foreground block text-[10px]">Role</span>
                  Lead Developer
                </li>
              </ul>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 brutal-border brutal-shadow-sm inline-flex w-full items-center justify-between bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-bone hover-snap"
                >
                  LIVE DEMO <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <a
                  href="https://github.com/mardromus"
                  target="_blank"
                  rel="noopener"
                  className="mt-6 brutal-border brutal-shadow-sm inline-flex w-full items-center justify-between bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-bone hover-snap"
                >
                  <span className="flex items-center gap-2"><Github className="h-4 w-4" /> GITHUB LINK</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>

            {/* Core Features */}
            <div className="brutal-border brutal-shadow-sm bg-bone p-5">
              <h3 className="font-display text-lg mb-3 border-b border-ink pb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cobalt" /> CORE FEATURES
              </h3>
              <ul className="space-y-3 list-inside list-disc text-xs leading-relaxed font-bold">
                {project.features.map((f, idx) => (
                  <li key={idx} className="marker:text-hot">{f}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Deep Dive */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <div className="brutal-border brutal-shadow-sm bg-card p-6 md:p-8">
              <h2 className="font-display text-2xl mb-4 border-b-2 border-dashed border-ink pb-2 text-hot">
                PROJECT OVERVIEW.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-ink font-bold whitespace-pre-line">
                {project.body}
              </p>
            </div>

            {/* Architecture / Impact */}
            <div className="brutal-border brutal-shadow-sm bg-card p-6 md:p-8">
              <h2 className="font-display text-2xl mb-4 border-b-2 border-dashed border-ink pb-2 text-cobalt">
                DEVELOPMENT & SYSTEM ARCHITECTURE.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-ink font-bold">
                Built from the ground up prioritizing speed, reliability, and modular abstractions. Employs modern pipelines to handle telemetry data, neural state machines, and real-time inputs, verifying constraints at build-time and ensuring minimal runtime overhead.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
