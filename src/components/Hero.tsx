"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import SplineScene from "./SplineScene";

export default function Hero() {
    return (
        <section
            className="relative pt-20 pb-20 lg:pt-24 lg:pb-24 flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-[#faf8f5] to-background overflow-hidden"
        >
            {/* Background Decor Glows */}
            <div className="absolute top-1/4 right-0 md:right-1/4 -translate-y-1/2 translate-x-1/3 opacity-25 pointer-events-none">
                <div className="w-[700px] h-[800px] rounded-[100%] bg-accent blur-[160px] mix-blend-multiply" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 opacity-25 pointer-events-none">
                <div className="w-[700px] h-[700px] rounded-full bg-primary blur-[150px] mix-blend-multiply" />
            </div>
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-20 pointer-events-none">
                <div className="w-[800px] h-[800px] rounded-full bg-gold blur-[180px] mix-blend-multiply" />
            </div>

            {/* ── Spline: absolute inset-0, z-0, volle pointer-events ──
                ✅ KEIN pointerEvents: none → Spline empfängt alle Maus-Events
                ✅ KEIN mix-blend-mode → Roboter behält seine Originalfarben */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div style={{ width: "75%", height: "75%" }}>
                    <SplineScene
                        scene="https://prod.spline.design/OA2pS2iEoa9BG85x/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>

            {/* ── Content-Ebene: z-20, pointer-events: none ──
                Maus-Events gehen durch → treffen den Spline-Canvas darunter ✅ */}
            <div
                className="container mx-auto px-6 lg:px-12 relative z-20"
                style={{ pointerEvents: "none" }}
            >
                <div className="flex flex-col items-center max-w-7xl mx-auto w-full">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8"
                        style={{ pointerEvents: "none" }}
                    >
                        <Sparkles size={16} />
                        <span>Neues Video online!</span>
                    </motion.div>

                    {/* 3 Column Layout */}
                    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                        {/* Column 1: Left Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex-1 w-full text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start"
                            style={{ pointerEvents: "none" }}
                        >
                            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 mb-4 drop-shadow-sm">
                                KI für alle —
                            </h1>
                            <p className="text-3xl md:text-4xl xl:text-5xl font-light text-neutral-800 mb-12 drop-shadow-sm">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-accent font-semibold tracking-wide">
                                    verständlich, praktisch, alltagsnah
                                </span>
                            </p>

                            {/* Logo Marquee — Breite = original 3 Kacheln (~320px) */}
                            <div
                                className="marquee-wrapper mt-4 md:mt-12"
                                style={{ pointerEvents: "auto", width: "320px", maxWidth: "100%" }}
                            >
                                <div className="marquee-track">
                                    {/* Erste Kopie */}
                                    {[
                                        { src: "/images/anthropic.svg", alt: "Anthropic", bg: "white" },
                                        { src: "/images/antigravity.jpg", alt: "Antigravity", bg: "white" },
                                        { src: "/images/chatgpt.webp", alt: "ChatGPT", bg: "white" },
                                        { src: "/images/spline.jpg", alt: "Spline", bg: "white" },
                                    ].concat([
                                        { src: "/images/anthropic.svg", alt: "Anthropic", bg: "white" },
                                        { src: "/images/antigravity.jpg", alt: "Antigravity", bg: "white" },
                                        { src: "/images/chatgpt.webp", alt: "ChatGPT", bg: "white" },
                                        { src: "/images/spline.jpg", alt: "Spline", bg: "white" },
                                    ]).map((logo, i) => (
                                        <div
                                            key={i}
                                            className="group flex-shrink-0 mx-3"
                                            title={logo.alt}
                                            style={{ pointerEvents: "auto" }}
                                        >
                                            <div
                                                className="w-20 h-14 md:w-28 md:h-18 rounded-xl flex items-center justify-center px-3 py-2 transition-all duration-300 cursor-pointer"
                                                style={{
                                                    background: "rgba(255,255,255,0.75)",
                                                    backdropFilter: "blur(12px)",
                                                    WebkitBackdropFilter: "blur(12px)",
                                                    border: "1px solid rgba(255,255,255,0.4)",
                                                    boxShadow: "0 4px 20px -4px rgba(0,0,0,0.08)",
                                                }}
                                            >
                                                <img
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]"
                                                    style={{ height: "36px", width: "auto" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Column 2: Spacer — Roboter liegt absolut hinter dem Layout */}
                        <div className="flex-[1.2] w-full order-1 lg:order-2 lg:min-h-[600px] hidden lg:block" />

                        {/* Column 3: Right Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex-1 w-full order-3 flex flex-col items-start"
                            style={{ pointerEvents: "none" }}
                        >
                            {/* Dark Glass Card: pointer-events: none → Maus geht durch ✅ */}
                            <div
                                className="rounded-2xl px-6 py-5 w-full max-w-sm"
                                style={{
                                    background: "rgba(15,15,20,0.50)",
                                    backdropFilter: "blur(16px)",
                                    WebkitBackdropFilter: "blur(16px)",
                                    border: "1px solid rgba(255,255,255,0.10)",
                                    pointerEvents: "none",
                                }}
                            >
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                                    Willkommen in der AI Stube
                                </h3>
                                <p className="text-xs md:text-sm text-neutral-200 leading-relaxed mb-6">
                                    Willkommen in der AI Stube – dem Ort, an dem Künstliche Intelligenz endlich verständlich, praktisch und alltagsnah wird. <br /><br />
                                    Du willst KI-Tools wie Google AI Studio, ChatGPT oder Claude wirklich täglich nutzen, um dir Apps zu bauen, Informationen zu sammeln oder Arbeit zu automatisieren – aber ohne kompliziertes Programmieren? Dann bist du hier genau richtig.
                                </p>

                                {/* pointer-events: auto → Link bleibt klickbar ✅ */}
                                <Link
                                    href="#videos"
                                    style={{ pointerEvents: "auto" }}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-sm backdrop-blur-sm"
                                >
                                    Jetzt entdecken
                                    <ArrowRight size={14} className="ml-1 -rotate-45" />
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
