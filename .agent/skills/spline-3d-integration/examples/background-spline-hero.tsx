/**
 * background-spline-hero.tsx
 *
 * Pattern: Spline 3D scene as a fullscreen background behind hero text,
 * with the scene's native mouse tracking fully working.
 *
 * Key insight:
 *   - Spline MUST receive pointer events to track the mouse internally
 *   - The overlaying content layer gets `pointer-events: none`
 *   - Interactive elements (buttons, links) explicitly get `pointer-events: auto`
 *
 * Layer stack:
 *   z-index: 20 → Content (pointer-events: none  → mouse passes through)
 *                   └── buttons/links (pointer-events: auto → clickable ✅)
 *   z-index:  0 → Spline  (pointer-events: auto  → scene reacts to mouse ✅)
 */

// ─────────────────────────────────────────────────────────────────
// 1. SplineBackground component (replaces RobotCanvas / similar)
// ─────────────────────────────────────────────────────────────────
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => <div />,
});

export function SplineBackground({ scene }: { scene: string }) {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    if (!isMounted) return null;

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 1.2s ease",
                // ✅ DO NOT set pointerEvents: 'none' here!
                // Spline needs to receive native mouse events for internal tracking.
            }}
        >
            <Spline
                style={{ width: "100%", height: "100%" }}
                // ✅ DO NOT set pointerEvents: 'none' on Spline itself!
                scene={scene}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────
// 2. Hero section in page.tsx
// ─────────────────────────────────────────────────────────────────

import Link from "next/link";

export function HeroWithSplineBackground() {
    return (
        <main
            className="relative flex min-h-[80vh] items-center"
            style={{ overflow: "hidden" }}
        >
            {/* ── Spline canvas: absolute background, full pointer-events ── */}
            <div className="absolute inset-0 z-0">
                <SplineBackground scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode" />
            </div>

            {/*
             * ── Content layer: pointer-events NONE ──
             * This makes all mouse events "fall through" to the Spline canvas below.
             * The scene reacts to mouse movement while the content stays readable.
             */}
            <div
                className="relative z-20 mx-auto max-w-5xl px-8 py-24"
                style={{ pointerEvents: "none" }}
            >
                {/* Non-interactive text — no pointer-events needed */}
                <h1 className="text-6xl font-bold text-foreground">
                    Willkommen bei <span className="text-brand-orange">AI Stube</span>
                </h1>
                <p className="mt-4 text-xl text-foreground/70">
                    KI für alle – verständlich, praktisch, alltagsnah.
                </p>

                {/*
                 * ── Interactive elements: pointer-events AUTO ──
                 * Re-enable pointer events only where the user needs to interact.
                 * This creates a "hole" in the pointer-events: none layer.
                 */}
                <div className="mt-8 flex gap-4">
                    <button
                        style={{ pointerEvents: "auto" }}  /* ← required! */
                        className="rounded-full bg-foreground px-8 py-4 font-semibold text-background hover:bg-brand-orange"
                    >
                        Jetzt entdecken
                    </button>

                    <Link
                        href="#videos"
                        style={{ pointerEvents: "auto" }}  /* ← required! */
                        className="rounded-full border px-8 py-4 font-semibold hover:border-brand-orange"
                    >
                        Mehr erfahren
                    </Link>
                </div>
            </div>
        </main>
    );
}

/*
 * ─── COMMON MISTAKES ─────────────────────────────────────────────
 *
 * ❌ Setting pointer-events: none on the Spline wrapper or component
 *    → Spline won't detect mouse → no internal tracking
 *
 * ❌ Using CSS transform on the Spline wrapper div to fake mouse tracking
 *    → Moves the whole DOM container, not the 3D objects inside
 *
 * ❌ Dispatching synthetic MouseEvents to the canvas via dispatchEvent()
 *    → Unreliable with Spline's internal WebGL event system
 *
 * ✅ The only reliable approach: Let Spline receive native events,
 *    and use pointer-events: none / auto layering on the content side.
 */
