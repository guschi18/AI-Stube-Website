import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <VideoSection />

      {/* Simple Footer */}
      <footer className="py-8 bg-card border-t border-card-border text-center">
        <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
          © {new Date().getFullYear()} AI Stube.
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
          Holt KI ins Wohnzimmer.
        </p>
      </footer>
    </main>
  );
}
