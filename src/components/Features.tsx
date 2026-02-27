"use client";

import { motion } from "framer-motion";
import { Wrench, Sparkles, Youtube, Users } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Täglich nutzbare KI-Tools",
        description: "Keine nutzlosen Spielereien, sondern echte Lösungen für den Alltag und die Arbeit.",
        icon: <Wrench className="w-6 h-6 text-primary" />,
        className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-card to-muted",
    },
    {
        id: 2,
        title: "No-Code & Low-Code",
        description: "Lerne, wie du dir eigene Apps baust, ohne überhaupt programmieren zu können.",
        icon: <Sparkles className="w-6 h-6 text-accent" />,
        className: "bg-card",
    },
    {
        id: 3,
        title: "Community & Challenges",
        description: "Lerne nicht alleine, sondern mit anderen KI-Enthusiasten zusammen.",
        icon: <Users className="w-6 h-6 text-primary" />,
        className: "bg-card",
    },
    {
        id: 4,
        title: "Ehrliche Praxis-Tests",
        description: "Welches der neuen 1000 KI-Tools lohnt sich wirklich? Ich zeige es dir.",
        icon: <Youtube className="w-6 h-6 text-accent" />,
        className: "md:col-span-2 bg-gradient-to-r from-muted to-card",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-background z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Smartes <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Design</span>, smarte Inhalte
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Hol die KI aus der abstrakten Technik-Ecke direkt in dein Wohnzimmer. Verständlich erklärt und sofort umsetzbar.
                    </p>
                </div>

                {/* Bento Grid layout inspired by "Smart Design" from the screenshot */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`rounded-3xl p-8 border border-card-border soft-shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${feature.className}`}
                        >
                            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
