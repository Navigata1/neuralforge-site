import { Stack } from "@phosphor-icons/react/dist/ssr";

export default function SiteLogo() {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="glass-panel inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/70">
        <Stack size={20} weight="duotone" className="text-[var(--color-accent)]" />
      </span>
      <span className="text-lg font-semibold tracking-tight text-slate-950">
        NeuralForge<span className="text-[var(--color-accent)]">.fm</span>
      </span>
    </span>
  );
}
