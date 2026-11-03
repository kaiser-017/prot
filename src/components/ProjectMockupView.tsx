import { useState } from 'react';
import { Project } from '../types/portfolio';
import { ExternalLink, Terminal, Play, Volume2, ShieldCheck, Check } from 'lucide-react';

interface ProjectMockupViewProps {
  project: Project;
  interactive?: boolean;
}

export default function ProjectMockupView({ project, interactive = false }: ProjectMockupViewProps) {
  // States for interactive simulations
  const [bloomAdded, setBloomAdded] = useState(false);
  const [nexoraRunning, setNexoraRunning] = useState(false);
  const [terminalCopied, setTerminalCopied] = useState(false);
  const [typeWeight, setTypeWeight] = useState(500);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [kycStep, setKycStep] = useState(2);

  // 1. Bloom Studio (Editorial Floral Lookbook)
  if (project.previewType === 'bloom') {
    return (
      <div className="w-full h-full bg-[#f6f2ec] text-[#1c1917] p-5 flex flex-col justify-between select-none relative overflow-hidden group">
        <div className="flex items-center justify-between border-b border-[#e7e1d6] pb-3 text-xs">
          <span className="font-serif tracking-widest uppercase font-semibold text-sm">BLOOM</span>
          <span className="text-[#78716c] font-sans text-[11px]">Vol. 04 · Lookbook 2026</span>
          <span className="font-mono text-[11px] text-[#c65d3a]">NY / PARIS</span>
        </div>

        <div className="my-auto py-4 flex flex-col items-center text-center">
          <div className="w-20 h-28 bg-[#eae2d5] rounded-t-full border border-[#ded5c6] shadow-sm flex items-center justify-center mb-3 relative overflow-hidden">
            <div className="w-1.5 h-16 bg-[#b45309]/60 rounded-full" />
            <div className="absolute top-4 w-10 h-10 rounded-full bg-[#c65d3a]/30 blur-[2px]" />
          </div>
          <h4 className="font-serif text-lg tracking-tight font-medium text-[#292524]">
            Sculptural Botanical 08
          </h4>
          <p className="text-xs text-[#78716c] mt-0.5 max-w-[200px]">
            Preserved pampas & architectural ceramic vase
          </p>
          <div className="mt-2 text-xs font-mono font-medium text-[#1c1917]">
            $240.00 USD
          </div>
        </div>

        <div className="pt-3 border-t border-[#e7e1d6] flex items-center justify-between text-xs">
          <span className="text-[#a8a29e] text-[11px]">Direct Order · Limited Run</span>
          {interactive ? (
            <button
              onClick={() => setBloomAdded(!bloomAdded)}
              className="px-3 py-1 bg-[#1c1917] text-[#f6f2ec] text-xs rounded-full hover:bg-[#44403c] transition-colors"
            >
              {bloomAdded ? '✓ Added to Cart' : 'Instant Checkout →'}
            </button>
          ) : (
            <span className="font-medium text-[#1c1917]">Instant Checkout →</span>
          )}
        </div>
      </div>
    );
  }

  // 2. Nexora AI (Developer Platform Terminal)
  if (project.previewType === 'nexora') {
    return (
      <div className="w-full h-full bg-[#0a0c10] text-[#e2e8f0] p-5 flex flex-col justify-between font-mono-code text-xs select-none relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#1e293b] pb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
            <span className="ml-2 text-[11px] text-[#64748b]">nexora-inference-v2</span>
          </div>
          <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
            99.99% SLA
          </span>
        </div>

        {/* Terminal Body */}
        <div className="my-auto py-3 space-y-2">
          <div className="flex items-center justify-between bg-[#111827] px-3 py-2 rounded border border-[#1f2937]">
            <span className="text-cyan-400 truncate text-[11px]">
              $ nexora deploy --cluster=gpu-h100-sxm
            </span>
            {interactive && (
              <button
                onClick={() => {
                  setTerminalCopied(true);
                  setTimeout(() => setTerminalCopied(false), 2000);
                }}
                className="text-[10px] text-[#94a3b8] hover:text-white px-2 py-0.5 bg-[#1f2937] rounded"
              >
                {terminalCopied ? 'Copied!' : 'Copy'}
              </button>
            )}
          </div>

          <div className="text-[11px] text-[#94a3b8] space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Cluster allocated: 8x NVIDIA H100 (80GB)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Inference latency: <span className="text-white font-bold">14.2ms</span> (TTFT)</span>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="pt-3 border-t border-[#1e293b] flex items-center justify-between text-[11px] text-[#64748b]">
          <span>Endpoint: api.nexora.tech/v1</span>
          <span className="text-cyan-400">Live Metric →</span>
        </div>
      </div>
    );
  }

  // 3. Monolith Atelier (Minimalist Architectural Monograph)
  if (project.previewType === 'monolith') {
    return (
      <div className="w-full h-full bg-[#ebe7e0] text-[#171717] p-5 flex flex-col justify-between select-none relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#d8d3c8] pb-3 text-xs">
          <span className="font-semibold tracking-wider uppercase font-geist">MONOLITH</span>
          <span className="text-[#78716c] font-mono text-[11px]">CH-8001 ZÜRICH</span>
          <span className="text-[11px] font-medium text-[#c65d3a]">PROJECT 14</span>
        </div>

        <div className="my-auto py-3 flex items-center justify-center gap-3">
          {/* Architectural Concrete / Stone Pillar Graphic */}
          <div className="w-16 h-28 bg-[#d8d2c5] border border-[#c4beaf] shadow-md flex flex-col justify-between p-2">
            <span className="text-[9px] font-mono text-[#78716c]">AXIS A</span>
            <div className="w-full h-0.5 bg-[#171717]/20" />
            <span className="text-[9px] font-mono text-[#78716c]">47.37° N</span>
          </div>
          <div className="w-24 h-32 bg-[#c9c2b3] border border-[#b8b0a0] shadow-lg flex flex-col justify-between p-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            <span className="relative z-10 text-[9px] font-mono text-[#57534e]">PAVILION III</span>
            <span className="relative z-10 text-[10px] font-medium text-[#171717]">Travertine & Glass</span>
          </div>
        </div>

        <div className="pt-3 border-t border-[#d8d3c8] flex items-center justify-between text-xs text-[#525252]">
          <span className="text-[11px]">Residential Exhibition</span>
          <span className="font-medium text-[#171717]">View Monograph →</span>
        </div>
      </div>
    );
  }

  // 4. Aura Sound Labs (Spatial Audio Configurator)
  if (project.previewType === 'aura') {
    return (
      <div className="w-full h-full bg-[#111113] text-[#ffffff] p-5 flex flex-col justify-between select-none relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#27272a] pb-3 text-xs">
          <div className="flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-[#c65d3a]" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">AURA ONE</span>
          </div>
          <span className="font-mono text-[10px] text-[#a1a1aa]">32-BIT / 384KHZ</span>
        </div>

        <div className="my-auto py-3 flex flex-col items-center">
          {/* Dynamic sound wave visualization */}
          <div className="flex items-center gap-1 h-14 mb-2">
            {[40, 75, 55, 90, 60, 30, 85, 45, 95, 65, 35, 70].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`w-1 rounded-full transition-all duration-300 ${
                  i % 3 === 0 ? 'bg-[#c65d3a]' : 'bg-[#525252]'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-mono text-[#a1a1aa]">Binaural Spatial Acoustics</span>
          {interactive && (
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#27272a] hover:bg-[#3f3f46] text-xs rounded-full transition-colors"
            >
              <Play className="w-3 h-3 text-[#c65d3a]" />
              <span>{isPlayingAudio ? 'Mute Acoustic Room' : 'Simulate Soundscape'}</span>
            </button>
          )}
        </div>

        <div className="pt-3 border-t border-[#27272a] flex items-center justify-between text-xs text-[#a1a1aa]">
          <span className="text-[11px]">Hardware Batch 01</span>
          <span className="text-white font-medium">Pre-order $380 →</span>
        </div>
      </div>
    );
  }

  // 5. Vanguard Capital (Fintech Institutional Flow)
  if (project.previewType === 'vanguard') {
    return (
      <div className="w-full h-full bg-[#ffffff] text-[#171717] p-5 flex flex-col justify-between border border-[#e5e7eb] select-none relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#f4f4f5] pb-3 text-xs">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-bold tracking-tight text-xs">VANGUARD</span>
          </div>
          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
            SOC2 Verified
          </span>
        </div>

        <div className="my-auto py-3 space-y-2.5">
          <div className="text-xs font-semibold text-[#171717]">
            Institutional Treasury Verification
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] p-2 bg-[#f8fafc] rounded border border-[#e2e8f0]">
              <span className="flex items-center gap-1.5 text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Entity Incorporation
              </span>
              <span className="font-mono text-emerald-600 text-[10px]">Verified</span>
            </div>
            <div className="flex items-center justify-between text-[11px] p-2 bg-[#f8fafc] rounded border border-[#e2e8f0]">
              <span className="flex items-center gap-1.5 text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Liquidity Proof ($25M+)
              </span>
              <span className="font-mono text-emerald-600 text-[10px]">Approved</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[#f4f4f5] flex items-center justify-between text-xs text-[#525252]">
          <span className="text-[11px]">Average Onboarding: 3 mins</span>
          <span className="font-medium text-[#171717]">Enter Portal →</span>
        </div>
      </div>
    );
  }

  // 6. Kinetic Type (Variable Specimen)
  return (
    <div className="w-full h-full bg-[#18181b] text-[#fafafa] p-5 flex flex-col justify-between select-none relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#27272a] pb-3 text-xs">
        <span className="font-mono text-xs tracking-wider uppercase">KINETIC TYPE</span>
        <span className="font-mono text-[11px] text-[#f59e0b]">WEIGHT: {typeWeight}</span>
      </div>

      <div className="my-auto py-3 text-center">
        <div
          style={{ fontWeight: typeWeight }}
          className="text-4xl tracking-tight transition-all duration-150 text-[#ffffff]"
        >
          Aa Bb Gg
        </div>
        <p className="text-xs text-[#a1a1aa] mt-1 font-mono">
          Geometric Neo-Grotesque Specimen
        </p>

        {interactive && (
          <div className="mt-3 px-2">
            <input
              type="range"
              min="200"
              max="800"
              step="50"
              value={typeWeight}
              onChange={(e) => setTypeWeight(Number(e.target.value))}
              className="w-full accent-[#f59e0b] cursor-pointer"
            />
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-[#27272a] flex items-center justify-between text-xs text-[#a1a1aa]">
        <span className="text-[11px]">OTF / WOFF2 Available</span>
        <span className="text-white font-medium">Test Glyph Matrix →</span>
      </div>
    </div>
  );
}
