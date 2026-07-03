import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kushagra Goyal — AI/ML Researcher & Systems Builder" },
      { name: "description", content: "Portfolio of Kushagra Goyal: IEEE-published research on quantum ML, agentic AI courtroom simulators, PQC pipelines, and hackathon wins." },
      { property: "og:title", content: "Kushagra Goyal — Portfolio" },
      { property: "og:description", content: "AI/ML researcher & systems builder. Publications, projects, and wins." },
    ],
  }),
  component: Portfolio,
});
