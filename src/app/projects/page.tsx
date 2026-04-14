import type { Metadata } from "next";
import ProjectsIndex from "./content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Every production system, research artifact, and side project by Avinash Amudala — MCP-Telecom, PROXIMA, LLM Incident Copilot, and more.",
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}
