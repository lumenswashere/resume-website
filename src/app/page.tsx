import { AiNative } from "@/components/AiNative";
import { Contact } from "@/components/Contact";
import { CustomerFacing } from "@/components/CustomerFacing";
import { Direction } from "@/components/Direction";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { ForwardDeployed } from "@/components/ForwardDeployed";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Projects } from "@/components/Projects";
import { Recognition } from "@/components/Recognition";
import { Skills } from "@/components/Skills";
import { profile } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Impact />
        <Experience />
        <AiNative />
        <ForwardDeployed />
        <CustomerFacing />
        <Recognition />
        <Skills />
        <Projects />
        <Education />
        <Direction />
        <Contact />
      </main>
      <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted sm:px-8">
        {profile.name} · {profile.location}
      </footer>
    </>
  );
}
