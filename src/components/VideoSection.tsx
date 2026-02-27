"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const videos = [
    {
        id: 1,
        title: "Google AI Studio Tutorial für Anfänger",
        tag: "Tutorial",
        duration: "12:45",
    },
    {
        id: 2,
        title: "KI-Agenten selbst bauen ohne Code",
        tag: "No-Code",
        duration: "18:20",
    },
    {
        id: 3,
        title: "ChatGPT Prompts für den Alltag",
        tag: "Praxis",
        duration: "09:15",
    },
];

export default function VideoSection() {
    return (
        <section id="videos" className="py-24 bg-muted/30 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                            Meine neuesten <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Videos</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Praxisnahe Tutorials, ehrliche Tests und Prompt-Engineering – direkt aus der AI Stube auf deinen Bildschirm.
                        </p>
                    </div>
                    <button className="text-primary font-semibold hover:text-primary-hover flex items-center gap-2 group transition-colors">
                        Alle ansehen
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            {/* Thumbnail Container */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-card-border mb-4 soft-shadow">
                                {/* Placeholder for actual Youtube Thumbnail */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-muted to-muted/50 group-hover:scale-105 transition-transform duration-700" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white/90 glass flex items-center justify-center text-primary shadow-xl scale-75 group-hover:scale-100 transition-all duration-300">
                                        <Play fill="currentColor" size={24} className="ml-1" />
                                    </div>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-2 py-1 rounded-md">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className="space-y-2 px-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                                    {video.tag}
                                </span>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                    {video.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
