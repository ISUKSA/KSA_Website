import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  ShieldAlert,
  ChevronRight,
  Terminal,
  MousePointer2,
  LayoutGrid,
  Plug,
  Copy,
  Check,
  ArrowLeft,
  AlertTriangle,
  Clock,
  User,
} from "lucide-react";

const sections = [
  { id: "sidebar", label: "사이드바 메뉴 업데이트", sub: "Sidebar Management" },
  { id: "scroll", label: "스크롤 네비게이션 연결", sub: "Wiring the Prototype" },
  { id: "cards", label: "앱 아이콘 및 식당 카드 수정", sub: "Editing Content Cards" },
  { id: "integrations", label: "실제 서비스 연동", sub: "External Widgets" },
];

function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="relative group mt-3 mb-1">
      <pre className="bg-[#0d1117] border border-[#30363d] rounded text-[#79c0ff] text-xs font-mono px-4 py-3 overflow-x-auto whitespace-pre-wrap leading-relaxed">
        {children}
      </pre>
      <button
        onClick={copy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#21262d] border border-[#30363d] rounded px-2 py-1 text-[10px] text-[#8b949e] hover:text-[#e6edf3] flex items-center gap-1"
      >
        {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-3 space-y-2">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span className="flex-shrink-0 w-5 h-5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[10px] font-mono font-bold flex items-center justify-center mt-0.5">
            {i + 1}
          </span>
          <span className="text-[#adbac7] text-sm leading-relaxed">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
      <Lock className="w-2.5 h-2.5" /> {label}
    </span>
  );
}

export function AdminManualPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("sidebar");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#010409] text-[#e6edf3]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Top bar */}
      <div className="border-b border-[#21262d] bg-[#0d1117] px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-[#8b949e] hover:text-[#e6edf3] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="text-[#30363d]">|</span>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs text-[#8b949e] tracking-wider uppercase">
              isu-ksa / admin-manual
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-mono text-[#8b949e]">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Updated May 2026</span>
          <span className="flex items-center gap-1"><User className="w-3 h-3" /> KSA Officers Only</span>
        </div>
      </div>

      {/* Warning banner */}
      <div className="bg-[#2d1c00] border-b border-amber-500/40 px-6 py-3 flex items-center gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 animate-pulse" />
        <p className="text-amber-300 text-xs font-mono tracking-wide">
          <span className="font-bold text-amber-400">RESTRICTED AREA:</span>{" "}
          Only authorized KSA officers with edit permissions can access this file. Do not share publicly.
        </p>
      </div>

      <div className="flex h-[calc(100vh-97px)] overflow-hidden">

        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 bg-[#0d1117] border-r border-[#21262d] overflow-y-auto flex flex-col">
          <div className="px-4 pt-6 pb-3">
            <div className="flex items-center gap-2 mb-1">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8b949e]">Admin Manual</span>
            </div>
            <h1 className="text-sm font-bold text-[#e6edf3] leading-tight">
              ISU KSA Website<br />
              <span className="text-amber-400">Admin Manual 🔒</span>
            </h1>
          </div>

          <nav className="px-2 pb-6 mt-2 flex-1">
            <p className="px-2 mb-2 text-[10px] font-mono uppercase tracking-widest text-[#484f58]">Sections</p>
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`w-full text-left px-3 py-2.5 rounded mb-0.5 transition-all group flex items-start gap-2.5 ${
                  activeSection === s.id
                    ? "bg-amber-500/10 border border-amber-500/30"
                    : "hover:bg-[#161b22] border border-transparent"
                }`}
              >
                <span className={`text-[10px] font-mono mt-0.5 flex-shrink-0 ${activeSection === s.id ? "text-amber-400" : "text-[#484f58]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className={`text-xs font-medium leading-snug ${activeSection === s.id ? "text-amber-300" : "text-[#adbac7] group-hover:text-[#e6edf3]"}`}>
                    {s.label}
                  </div>
                  <div className="text-[10px] text-[#484f58] mt-0.5">{s.sub}</div>
                </div>
              </button>
            ))}
          </nav>

          <div className="border-t border-[#21262d] px-4 py-3">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-mono text-[#484f58]">v1.0 · Confidential</span>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto px-8 py-10 max-w-4xl">

          {/* Page title */}
          <div className="mb-10 pb-6 border-b border-[#21262d]">
            <div className="flex items-center gap-2 mb-3">
              <SectionTag label="Restricted" />
              <SectionTag label="Internal Use Only" />
            </div>
            <h1 className="text-2xl font-bold text-[#e6edf3] mb-2 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-amber-400" />
              ISU KSA Website Admin Manual
            </h1>
            <p className="text-[#8b949e] text-sm max-w-2xl leading-relaxed">
              This document covers operational procedures for maintaining the ISU KSA Student Guidebook website.
              Follow each section carefully. Changes made incorrectly may break live functionality.
            </p>
          </div>

          {/* Section 1 */}
          <section id="sidebar" className="mb-12 scroll-mt-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#484f58] uppercase tracking-widest mb-0.5">Section 01</div>
                <h2 className="text-base font-bold text-[#e6edf3]">
                  사이드바 메뉴 업데이트{" "}
                  <span className="text-[#8b949e] font-normal text-sm">— Sidebar Management</span>
                </h2>
              </div>
            </div>
            <div className="bg-[#0d1117] border border-[#21262d] rounded-lg p-5 space-y-4">
              <p className="text-[#adbac7] text-sm leading-relaxed">
                The sticky left sidebar navigation uses a nested layer hierarchy with carets (▶) and document icons to indicate sections and sub-items.
                To add a new sidebar entry without breaking this structure:
              </p>
              <StepList steps={[
                "Open the Figma file and locate the left sidebar component in the Layers panel.",
                "Find an existing text layer at the same nesting level as the item you want to add (e.g. 'Housing', 'Transportation').",
                "Duplicate that layer (Ctrl+D / ⌘D) — this preserves the caret icon, indentation, and Auto Layout spacing.",
                "Rename the duplicate text to your new section title (both English and Korean if applicable).",
                "Reorder the layer in the Layers panel to match the intended sidebar order.",
                "Do NOT create a new text element from scratch — it will lose the icon and hierarchy styling.",
              ]} />
              <div className="bg-[#161b22] border border-[#30363d] rounded p-3 flex gap-2 items-start mt-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#8b949e]">
                  <span className="text-amber-400 font-semibold">Warning:</span> Never ungroup the sidebar's Auto Layout frame. Doing so will misalign all spacing and require manual repair.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="scroll" className="mb-12 scroll-mt-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <MousePointer2 className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#484f58] uppercase tracking-widest mb-0.5">Section 02</div>
                <h2 className="text-base font-bold text-[#e6edf3]">
                  스크롤 네비게이션 연결{" "}
                  <span className="text-[#8b949e] font-normal text-sm">— Wiring the Prototype</span>
                </h2>
              </div>
            </div>
            <div className="bg-[#0d1117] border border-[#21262d] rounded-lg p-5 space-y-4">
              <p className="text-[#adbac7] text-sm leading-relaxed">
                If a sidebar link stops scrolling to its content section (e.g. clicking "Housing" does nothing), the prototype connection has been broken.
                Follow these exact steps to rewire it:
              </p>
              <StepList steps={[
                'Switch to the [Prototype] tab in the right-hand Figma panel.',
                'Click the sidebar text element you want to fix (e.g. "Housing").',
                "A blue '+' node appears on the right edge of the selected element — drag it toward the canvas.",
                "Drop it onto the specific content frame for that section in the right scrollable area (e.g. the Housing content frame).",
                'Set the interaction to: On Click → Scroll to → Animate (Ease Out, 300ms).',
                "Test by entering Preview mode (Ctrl+Alt+Enter / ⌥⌘P) and clicking the sidebar link.",
              ]} />
              <div className="mt-3">
                <p className="text-[10px] font-mono text-[#484f58] uppercase tracking-widest mb-2">Interaction settings</p>
                <CodeBlock>{`Trigger:    On Click
Action:     Scroll to
Target:     [Housing Frame] (or relevant section frame)
Animation:  Ease Out
Duration:   300ms`}</CodeBlock>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="cards" className="mb-12 scroll-mt-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <LayoutGrid className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#484f58] uppercase tracking-widest mb-0.5">Section 03</div>
                <h2 className="text-base font-bold text-[#e6edf3]">
                  앱 아이콘 및 식당 카드 수정{" "}
                  <span className="text-[#8b949e] font-normal text-sm">— Editing Content Cards</span>
                </h2>
              </div>
            </div>
            <div className="bg-[#0d1117] border border-[#21262d] rounded-lg p-5 space-y-4">
              <p className="text-[#adbac7] text-sm leading-relaxed">
                The "Essential Apps" and "Local Restaurants" sections use Auto Layout card grids. To edit icons or text without breaking the grid:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
                  <div className="text-xs font-semibold text-[#e6edf3] mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    Essential Apps — Squircle Icons
                  </div>
                  <StepList steps={[
                    "Double-click the app card to enter the Auto Layout group.",
                    "Double-click again on the squircle icon layer.",
                    "Use Fill → Image and upload a new app icon PNG (1:1 ratio, min 256×256px).",
                    "Press Escape twice to exit back to the grid level.",
                  ]} />
                </div>
                <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
                  <div className="text-xs font-semibold text-[#e6edf3] mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    Local Restaurants — Price / Info
                  </div>
                  <StepList steps={[
                    "Double-click into the restaurant card.",
                    "Select the price indicator text ($ / $$ / $$$) and type to replace.",
                    "For the thumbnail image, double-click the image layer and use Fill → Image.",
                    "Press Escape twice when done.",
                  ]} />
                </div>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded p-3 flex gap-2 items-start mt-1">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#8b949e]">
                  <span className="text-amber-400 font-semibold">Important:</span> Never drag cards out of the grid frame — Auto Layout will recalculate spacing automatically as long as you stay inside the parent frame.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="integrations" className="mb-16 scroll-mt-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <Plug className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#484f58] uppercase tracking-widest mb-0.5">Section 04</div>
                <h2 className="text-base font-bold text-[#e6edf3]">
                  실제 서비스 연동{" "}
                  <span className="text-[#8b949e] font-normal text-sm">— External Widgets</span>
                </h2>
              </div>
            </div>
            <div className="bg-[#0d1117] border border-[#21262d] rounded-lg p-5 space-y-6">
              <p className="text-[#adbac7] text-sm leading-relaxed">
                Two live services require special handling because they cannot function as static Figma layers — they need to be embedded or linked in the deployed React code.
              </p>

              {/* Instagram */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-pink-500" />
                  <h3 className="text-sm font-semibold text-[#e6edf3]">Instagram Integration</h3>
                </div>
                <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 space-y-3">
                  <p className="text-[#adbac7] text-xs leading-relaxed">
                    <span className="text-[#e6edf3] font-medium">In Figma (prototype links):</span> Select the Instagram contact icon, press{" "}
                    <kbd className="bg-[#0d1117] border border-[#30363d] rounded px-1.5 py-0.5 text-[10px] font-mono text-[#79c0ff]">Ctrl+K</kbd>{" "}
                    (or <kbd className="bg-[#0d1117] border border-[#30363d] rounded px-1.5 py-0.5 text-[10px] font-mono text-[#79c0ff]">⌘K</kbd>), and paste the KSA Instagram profile URL.
                  </p>
                  <p className="text-[#adbac7] text-xs leading-relaxed">
                    <span className="text-[#e6edf3] font-medium">In React (live feed):</span> To embed an actual feed, use a third-party widget like <span className="text-[#79c0ff] font-mono text-[10px]">Elfsight</span> or <span className="text-[#79c0ff] font-mono text-[10px]">Behold</span>, or the official Instagram Basic Display API, and drop the embed script into the React component:
                  </p>
                  <CodeBlock>{`// Example: Behold Instagram feed widget
<div
  className="behold-widget"
  data-feed-id="YOUR_FEED_ID"
/>
// Add <script src="https://w.behold.so/widget.js" /> to index.html`}</CodeBlock>
                </div>
              </div>

              {/* Google Calendar */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <h3 className="text-sm font-semibold text-[#e6edf3]">Google Calendar Integration</h3>
                </div>
                <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 space-y-3">
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded p-3 flex gap-2 items-start">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-300/80">
                      A live Google Calendar <strong>cannot</strong> be embedded inside Figma — Figma does not support live iframes. It must be wired in the React web code only.
                    </p>
                  </div>
                  <p className="text-[#adbac7] text-xs leading-relaxed">
                    To embed the KSA Google Calendar into the React site:
                  </p>
                  <StepList steps={[
                    "Open Google Calendar → Settings → the KSA calendar → Integrate calendar.",
                    'Copy the "Embed code" (an <iframe> snippet).',
                    "Paste it into the CalendarSection.tsx component, replacing the placeholder.",
                    "Make sure the calendar is set to Public visibility, or the iframe will show a blank page.",
                  ]} />
                  <CodeBlock>{`{/* CalendarSection.tsx */}
<iframe
  src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America/Chicago"
  className="w-full h-[600px] rounded-lg border border-border"
  frameBorder="0"
  scrolling="no"
  title="KSA Event Calendar"
/>`}</CodeBlock>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-[#21262d] pt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#484f58]" />
              <span className="text-[10px] font-mono text-[#484f58]">ISU KSA — CONFIDENTIAL — Internal Use Only</span>
            </div>
            <span className="text-[10px] font-mono text-[#484f58]">v1.0 · May 2026</span>
          </div>
        </main>
      </div>
    </div>
  );
}
