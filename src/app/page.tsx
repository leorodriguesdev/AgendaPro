// src/app/page.tsx
import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Conta Dev</title>
        <meta name="description" content="Cuide do software. A gente cuida da contabilidade!" />
      </Head>
      <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
