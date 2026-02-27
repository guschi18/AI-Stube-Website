"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Start", href: "#" },
        { name: "Videos", href: "#videos" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg group-hover:shadow-primary/50 transition-shadow">
                        <span className="font-bold text-xl">AI</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-neutral-900 group-hover:text-primary transition-colors">
                        Stube
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex flex-1 justify-center items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors hover:-translate-y-0.5 transform inline-block"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center">
                    <Link
                        href="https://youtube.com/@ai-stube"
                        target="_blank"
                        className="flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors shadow-md hover:shadow-primary/30"
                    >
                        <PlayCircle size={18} />
                        Kanal abonnieren
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-neutral-900 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 glass shadow-lg border-b border-card-border transform origin-top"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-neutral-900 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://youtube.com/@ai-stube"
                            target="_blank"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 flex items-center justify-center gap-2 bg-primary text-white w-full py-3 rounded-xl font-medium"
                        >
                            <PlayCircle size={20} />
                            Kanal abonnieren
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
