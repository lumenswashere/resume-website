import { AiNative } from "@/components/AiNative";
import { Compliments } from "@/components/Compliments";
import { Contact } from "@/components/Contact";
import { CustomerFacing } from "@/components/CustomerFacing";
import { ForwardDeployed } from "@/components/ForwardDeployed";
import { Founder } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { SkillsAndPath } from "@/components/SkillsAndPath";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofStrip />
      <AiNative />
      <ForwardDeployed />
      <CustomerFacing />
      <Founder />
      <Compliments />
      <SkillsAndPath />
      <Contact />
      <footer
        className="border-t px-5 py-8 text-center text-sm sm:px-8"
        style={{ borderColor: "var(--border)", color: "var(--muted)" }}
      >
        Josiah Woltjer · Durham, NC
      </footer>
    </main>
  );
}
