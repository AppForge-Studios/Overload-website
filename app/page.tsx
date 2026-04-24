import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Protocol } from "@/components/Protocol";
import { Insights } from "@/components/Insights";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-bg text-fg">
      <Nav />
      <Hero />
      <Features />
      <Protocol />
      <Insights />
      <CTA />
      <Footer />
    </main>
  );
}
