import {
  Navbar,
  Hero,
  Ticker,
  Services,
  Guarantees,
  Plans,
  Process,
  Industries,
  Tech,
  CTA,
  Footer,
  WhatsAppFloat,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Guarantees />
      <Plans />
      <Process />
      <Industries />
      <Tech />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}