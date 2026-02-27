"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// next/dynamic mit ssr: false ist für Spline in Next.js zwingend nötig
const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => <div />,
});

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export default function SplineScene({ scene, className }: SplineSceneProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div
            className={className}
            style={{
                width: "100%",
                height: "100%",
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 1.2s ease",
                // ✅ KEIN pointerEvents: 'none' — Spline muss Maus-Events empfangen!
            }}
        >
            <Spline
                style={{ width: "100%", height: "100%" }}
                scene={scene}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
}
