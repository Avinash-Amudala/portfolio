import type { Metadata } from "next";
import MCPTelecomContent from "./content";
import { SoftwareJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "MCP-Telecom — First MCP Server for Network Equipment",
  description:
    "Production-grade Model Context Protocol server for multi-vendor network equipment. 60+ tools, 7 vendors, SSH/NETCONF/SNMP/gNMI, safety layer, on PyPI.",
};

export default function MCPTelecomPage() {
  return (
    <>
      <SoftwareJsonLd
        name="MCP-Telecom"
        description="The first Model Context Protocol server for multi-vendor network equipment. 60+ tools, 7 vendors, on PyPI."
        url="https://avinash-amudala.com/projects/mcp-telecom"
        codeRepository="https://github.com/Avinash-Amudala/MCP-Telecom"
      />
      <MCPTelecomContent />
    </>
  );
}
