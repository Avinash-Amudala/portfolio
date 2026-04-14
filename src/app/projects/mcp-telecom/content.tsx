"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";

function ArchitectureDiagram() {
  return (
    <div className="font-[family-name:var(--font-mono)] text-xs text-[hsl(var(--muted))]">
      <pre className="whitespace-pre overflow-x-auto leading-relaxed">
{`┌─────────────────────────────────────────────────────────┐
│                    LLM / AI Agent                       │
│              (Claude, GPT, local models)                │
└──────────────────────┬──────────────────────────────────┘
                       │ MCP Protocol (stdio / SSE)
┌──────────────────────▼──────────────────────────────────┐
│                  MCP-Telecom Server                      │
│  ┌────────────────────────────────────────────────────┐ │
│  │              60+ MCP Tools                         │ │
│  │  show_interfaces · get_bgp_neighbors · get_vlans   │ │
│  │  get_routes · get_lldp_neighbors · get_snmp_data   │ │
│  │  get_running_config · topology_discover · ...      │ │
│  └────────────────────┬───────────────────────────────┘ │
│  ┌────────────────────▼───────────────────────────────┐ │
│  │           Safety Gate (20+ rules)                  │ │
│  │  Blocked: reload, write erase, format, shutdown    │ │
│  │  Blocked: rm, delete, certificate, crypto key      │ │
│  └────────────────────┬───────────────────────────────┘ │
│  ┌────────────────────▼───────────────────────────────┐ │
│  │          Connection Pool + Parallel Executor       │ │
│  └──┬──────────┬──────────┬──────────┬────────────────┘ │
│     │          │          │          │                   │
│  ┌──▼───┐  ┌──▼────┐  ┌──▼───┐  ┌──▼────┐              │
│  │ SSH  │  │NETCONF│  │ SNMP │  │ gNMI  │              │
│  │Netmi-│  │ncclie-│  │pysnmp│  │ gRPC  │              │
│  │ ko   │  │ nt    │  │  v7  │  │       │              │
│  └──┬───┘  └──┬────┘  └──┬───┘  └──┬────┘              │
└─────┼─────────┼──────────┼─────────┼────────────────────┘
      │         │          │         │
┌─────▼─────────▼──────────▼─────────▼────────────────────┐
│              Network Equipment (7 Vendors)               │
│  Nokia SR OS · Cisco IOS/IOS-XE/IOS-XR/NX-OS           │
│  Juniper Junos · Arista EOS                             │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>
  );
}

function VendorMatrix() {
  const vendors: { name: string; ssh: boolean; netconf: boolean; snmp: boolean; gnmi: boolean }[] = [
    { name: "Nokia SR OS", ssh: true, netconf: true, snmp: true, gnmi: true },
    { name: "Cisco IOS", ssh: true, netconf: false, snmp: true, gnmi: false },
    {
      name: "Cisco IOS-XE",
      ssh: true,
      netconf: true,
      snmp: true,
      gnmi: true,
    },
    {
      name: "Cisco IOS-XR",
      ssh: true,
      netconf: true,
      snmp: true,
      gnmi: true,
    },
    {
      name: "Cisco NX-OS",
      ssh: true,
      netconf: true,
      snmp: true,
      gnmi: false,
    },
    {
      name: "Juniper Junos",
      ssh: true,
      netconf: true,
      snmp: true,
      gnmi: true,
    },
    { name: "Arista EOS", ssh: true, netconf: true, snmp: true, gnmi: true },
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-[hsl(var(--border))]">
            <th className="pb-3 font-semibold text-[hsl(var(--fg))]">Vendor Platform</th>
            <th className="pb-3 font-semibold text-[hsl(var(--fg))] text-center">SSH</th>
            <th className="pb-3 font-semibold text-[hsl(var(--fg))] text-center">
              NETCONF
            </th>
            <th className="pb-3 font-semibold text-[hsl(var(--fg))] text-center">SNMP</th>
            <th className="pb-3 font-semibold text-[hsl(var(--fg))] text-center">gNMI</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((v) => (
            <tr
              key={v.name}
              className="border-b border-[hsl(var(--border))]"
            >
              <td className="py-2.5 text-[hsl(var(--muted))] font-[family-name:var(--font-mono)] text-xs">
                {v.name}
              </td>
              {[v.ssh, v.netconf, v.snmp, v.gnmi].map((supported, i) => (
                <td key={i} className="py-2.5 text-center">
                  {supported ? (
                    <span className="text-[hsl(var(--success))]">&#10003;</span>
                  ) : (
                    <span className="text-[hsl(var(--muted))]">
                      &mdash;
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MCPTelecomContent() {
  return (
    <CaseStudyLayout
      title="MCP-Telecom"
      subtitle="The first Model Context Protocol server for network equipment."
      status="Active — v0.2.0 on PyPI"
      problem="LLM agents have no standardized way to interact with network equipment. Each vendor has different CLIs, APIs, and protocols. Existing automation tools (Ansible, Nornir) are designed for scripts, not conversational AI. There is no Model Context Protocol server for the telecom domain — meaning AI agents are locked out of network operations entirely."
      approach="MCP-Telecom is a production-grade MCP server that exposes 60+ tools for multi-vendor network equipment via four transport protocols (SSH, NETCONF, SNMP, gNMI). It includes a 20+ blocked-pattern safety layer that prevents destructive commands, connection pooling for efficient device reuse, a parallel executor for multi-device operations, and LLDP/CDP topology discovery with BFS traversal. The entire system is published on PyPI as a pip-installable package."
      diagram={<ArchitectureDiagram />}
      sections={[
        {
          title: "Transport Layer",
          content: (
            <>
              <p className="mb-4">
                Four transport protocols cover the full spectrum of network
                management interfaces. SSH via Netmiko handles CLI-based
                interactions (show commands, configuration). NETCONF via
                ncclient provides structured XML-based config retrieval and
                editing over YANG models. SNMP via pysnmp v7 handles monitoring
                data (interface counters, system info). gNMI via gRPC enables
                streaming telemetry and model-driven management.
              </p>
              <VendorMatrix />
            </>
          ),
        },
        {
          title: "Safety Gate",
          content: (
            <p>
              Every command is validated against 20+ blocked patterns before
              execution. Patterns include destructive operations (reload, write
              erase, format disk), security-sensitive commands (crypto key
              generate, certificate), and system-altering commands (shutdown,
              delete). The safety layer also enforces 20+ compliance rules
              covering authentication, session management, and audit logging.
              All blocked attempts are logged with JSONL audit trails.
            </p>
          ),
        },
        {
          title: "Connection Pooling & Parallel Execution",
          content: (
            <p>
              Device connections are pooled and reused across tool invocations,
              avoiding the overhead of SSH handshake per command. The parallel
              executor enables multi-device operations (e.g., &quot;show
              interfaces on all routers&quot;) with concurrent execution and
              result aggregation.
            </p>
          ),
        },
        {
          title: "Topology Discovery",
          content: (
            <p>
              LLDP and CDP neighbor data is collected from each device and
              assembled into a network topology graph using BFS traversal. This
              enables AI agents to understand the physical and logical network
              layout without manual input.
            </p>
          ),
        },
        {
          title: "Observability",
          content: (
            <p>
              A FastAPI dashboard provides real-time visibility into server
              state. Prometheus metrics expose tool invocation counts, latency
              histograms, and error rates. JSONL audit logging captures every
              command executed, which device, which user, and whether it was
              blocked.
            </p>
          ),
        },
      ]}
      metrics={[
        { label: "Lines of Code", value: "5,500" },
        { label: "MCP Tools", value: "60+" },
        { label: "Test Cases", value: "157" },
        { label: "Vendor Platforms", value: "7" },
        { label: "Transport Protocols", value: "4" },
        { label: "Safety Rules", value: "20+" },
        { label: "Source Files", value: "28" },
        { label: "MCP Resources", value: "8" },
        { label: "MCP Prompts", value: "4" },
      ]}
      techStack={[
        {
          layer: "Core",
          items: ["Python 3.10–3.12", "MCP SDK", "asyncio"],
        },
        {
          layer: "Transport",
          items: ["Netmiko (SSH)", "ncclient (NETCONF)", "pysnmp v7 (SNMP)", "gRPC (gNMI)"],
        },
        {
          layer: "Observability",
          items: ["FastAPI", "Prometheus", "JSONL Audit Log"],
        },
        {
          layer: "Testing & CI",
          items: ["pytest", "GitHub Actions", "Python 3.10/3.11/3.12 matrix"],
        },
        {
          layer: "Packaging",
          items: ["PyPI", "pip", "setuptools"],
        },
        {
          layer: "Lab",
          items: ["Containerlab", "Docker", "cEOS / cSRX / vSROS images"],
        },
      ]}
      links={[
        {
          label: "GitHub",
          href: "https://github.com/Avinash-Amudala/MCP-Telecom",
          icon: "github",
        },
        {
          label: "PyPI — pip install mcp-telecom",
          href: "https://pypi.org/project/mcp-telecom/",
          icon: "pypi",
        },
      ]}
      lessonsLearned="Building for the MCP spec while it was still evolving meant re-fitting tool schemas more than once. The bigger lesson was on the safety side: I underestimated how often an LLM will confidently suggest a command that would take down a box. The safety gate started as one file of regexes and grew into a proper policy layer. If I were starting over, I'd build the policy layer first and the tool surface second."
      timeline="Started March 2025. v0.1.0 released April 2025. v0.2.0 (current) released May 2025 with gNMI support, expanded vendor coverage, and Containerlab integration. v0.3 in development with RESTCONF transport."
    />
  );
}
