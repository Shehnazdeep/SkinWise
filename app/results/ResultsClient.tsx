"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buildSkinProfile, SkinAnswers, SkinProfile } from "@/lib/skinProfile";
// Add this after your existing imports

type Product = {
    id: string;
    name: string;
    brand: string;
    category: string;
    description: string;
    ingredients: string[];
    skin_type: string[];
    buy_links: {
        amazon: string;
        sephora: string;
        ulta: string;
    };
};
// ── Name prompt ──────────────────────────────────────────────────────────────

function NamePrompt({ onSubmit }: { onSubmit: (name: string | null) => void }) {
    const [name, setName] = useState("");
    return (
        <div className="min-h-screen bg-[#FBF3F0] flex items-center justify-center px-6">
            <div className="w-full max-w-sm text-center">
                <p className="text-[11px] uppercase tracking-[3px] text-[#B5838D] mb-4">
                    Almost there
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#3A2F2F] mb-2">
                    What should we call you?
                </h2>
                <p className="text-sm text-[#3A2F2F]/50 font-light mb-8">
                    So your routine feels a little more personal.
                </p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onSubmit(name.trim() || null)}
                    placeholder="Your name"
                    className="w-full px-5 py-3.5 rounded-full border border-[#E6B8C2]/60
                               bg-white text-[#3A2F2F] text-sm placeholder:text-[#3A2F2F]/30
                               focus:outline-none focus:border-[#B5838D] transition mb-3"
                />
                <button
                    onClick={() => onSubmit(name.trim() || null)}
                    className="w-full py-3.5 rounded-full bg-[#3A2F2F] text-[#FBF3F0] text-sm
                               font-medium hover:bg-[#B5838D] transition mb-3"
                >
                    See my routine →
                </button>
                <button
                    onClick={() => onSubmit(null)}
                    className="text-xs text-[#3A2F2F]/35 underline underline-offset-2
                               hover:text-[#B5838D] transition"
                >
                    Skip — show me my results
                </button>
            </div>
        </div>
    );
}

// ── Routine card ─────────────────────────────────────────────────────────────

function RoutineCard({
    title,
    steps,
    accent,
}: {
    title: string;
    steps: SkinProfile["morning"];
    accent: string;
}) {
    return (
        <div className="bg-white border border-[#E6B8C2]/40 rounded-2xl overflow-hidden">
            <div className={`px-6 py-4 ${accent}`}>
                <p className="text-sm font-medium text-[#3A2F2F]">{title}</p>
            </div>
            <div className="divide-y divide-[#E6B8C2]/20">
                {steps.map((s, i) => (
                    <div key={i} className="px-6 py-4 flex gap-4 items-start">
                        <span className="text-[11px] font-medium text-[#B5838D] uppercase tracking-widest
                                         w-6 text-center mt-0.5 flex-shrink-0">
                            {i + 1}
                        </span>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-[#3A2F2F]/40 mb-0.5">
                                {s.step}
                            </p>
                            <p className="text-sm font-medium text-[#3A2F2F] mb-1">{s.product}</p>
                            <p className="text-xs text-[#3A2F2F]/50 font-light leading-relaxed">{s.why}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Loading state ────────────────────────────────────────────────────────────

function LoadingIntro() {
    return (
        <div className="bg-white/70 border border-[#E6B8C2]/40 rounded-2xl p-6 mb-6 animate-pulse">
            <div className="h-3 w-24 bg-[#E6B8C2]/40 rounded mb-4" />
            <div className="space-y-2">
                <div className="h-3 bg-[#E6B8C2]/30 rounded w-full" />
                <div className="h-3 bg-[#E6B8C2]/30 rounded w-5/6" />
                <div className="h-3 bg-[#E6B8C2]/30 rounded w-4/6" />
            </div>
        </div>
    );
}

// ── Main results view ─────────────────────────────────────────────────────────

function ResultsView({ profile, name }: { profile: SkinProfile; name: string | null }) {
    const [intro, setIntro] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState<Product[]>([]);
    const [productsLoading, setProductsLoading] = useState(true);

    useEffect(() => {
        async function fetchIntro() {
            try {
                const prompt = `You are SkinWise — a warm, knowledgeable skincare assistant created by Shehnaz, a self-care enthusiast who believes skincare is self-care.

A user just completed a skin quiz. Here are their results:
- Skin type: ${profile.skinTypeLabel}
- Main concern: ${profile.concernLabel}
- Skin sensitivity: ${profile.sensitivity}
- Current routine level: ${profile.routineLevel}
- Lifestyle: ${profile.lifestyle}
- Key ingredients recommended: ${profile.keyIngredients.join(", ")}
${name ? `- Their name: ${name}` : ""}

Write a short, warm, conversational intro paragraph (3–4 sentences max) that:
1. ${name ? `Addresses them by name (${name})` : "Addresses them warmly without a name"}
2. Summarises their skin profile in plain language
3. Briefly explains WHY this routine was chosen for them
4. Feels encouraging and personal — not clinical

Do not use bullet points. Do not use markdown. Just plain, warm prose.`;

                const res = await fetch("/api/skin-intro", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        model: "claude-sonnet-4-6",
                        max_tokens: 1000,
                        messages: [{ role: "user", content: prompt }],
                    }),
                });

                const data = await res.json();
                const text = data.content?.find((b: { type: string }) => b.type === "text")?.text ?? null;
                setIntro(text);
            } catch {
                setIntro(null);
            } finally {
                setLoading(false);
            }
        }

        fetchIntro();
    }, [profile, name]);

    //Use Effect for Products
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(`/api/products?skin_type=${profile.skinType}`)
                const data = await res.json()
                setProducts(data.products.slice(0, 6))
            } catch {
                setProducts([])
            } finally {
                setProductsLoading(false)
            }
        }
        fetchProducts()
    }, [profile.skinType])

    return (
        <main className="min-h-screen bg-[#FBF3F0] pt-24 pb-16 px-6">
            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-[11px] uppercase tracking-[3px] text-[#B5838D] mb-2">
                        Your skin profile
                    </p>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl text-[#3A2F2F] mb-1">
                        {profile.skinTypeLabel} skin
                    </h1>
                    <p className="text-sm text-[#3A2F2F]/50 font-light">
                        Main concern: {profile.concernLabel}
                    </p>
                </div>

                {/* Key ingredients */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {profile.keyIngredients.map((ing) => (
                        <span
                            key={ing}
                            className="bg-white border border-[#E6B8C2] rounded-full px-4 py-1.5
                                       text-xs text-[#B5838D]"
                        >
                            {ing}
                        </span>
                    ))}
                </div>

                {/* AI intro */}
                {loading ? (
                    <LoadingIntro />
                ) : intro ? (
                    <div className="bg-white/70 border border-[#E6B8C2]/40 rounded-2xl p-6 mb-8">
                        <p className="text-[11px] uppercase tracking-[3px] text-[#B5838D] mb-3">
                            Your personal note
                        </p>
                        <p className="text-sm text-[#3A2F2F]/75 leading-relaxed font-light">
                            {intro}
                        </p>
                    </div>
                ) : null}

                {/* Routine cards */}
                <div className="space-y-5 mb-10">
                    <RoutineCard
                        title="☀️  Morning routine"
                        steps={profile.morning}
                        accent="bg-[#FBF3F0]"
                    />
                    <RoutineCard
                        title="🌙  Evening routine"
                        steps={profile.evening}
                        accent="bg-[#F0E4DF]"
                    />

                </div>
                {/* Recommended Products */}
                <div className="mb-10">
                    <p className="text-[11px] uppercase tracking-[3px] text-[#B5838D] mb-2">
                        Recommended for you
                    </p>
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#3A2F2F] mb-6">
                        Products that suit your skin
                    </h2>

                    {productsLoading ? (
                        <div className="space-y-5">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white/70 border border-[#E6B8C2]/30 rounded-2xl p-5 animate-pulse">
                                    <div className="h-3 w-24 bg-[#E6B8C2]/40 rounded mb-3" />
                                    <div className="h-4 bg-[#E6B8C2]/30 rounded w-3/4 mb-2" />
                                    <div className="h-3 bg-[#E6B8C2]/20 rounded w-full" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-5">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white border border-[#E6B8C2]/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition min-h-[280px]"
                                >

                                    {/* Category + Brand */}
                                    <div className="flex items-center justify-between pt-3 mb-2 px-4 py-2">
                                        <span className="text-[10px] uppercase tracking-[2px] text-[#B5838D]">
                                            {product.category}
                                        </span>
                                        <span className="text-[10px] text-[#3A2F2F]/40">
                                            {product.brand}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <p className="text-sm font-medium text-[#3A2F2F] mb-2 px-4">
                                        {product.name}
                                    </p>

                                    {/* Description */}
                                    <p className="text-xs text-[#3A2F2F]/50 font-light leading-relaxed mb-4 px-4">
                                        {product.description}
                                    </p>

                                    {/* Buy links */}
                                    <div className="flex gap-2 flex-wrap px-4 mb-4">
                                        {Object.entries(product.buy_links).map(([retailer, url]) => (
                                            <a
                                                key={retailer}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-1.5 rounded-full border border-[#E6B8C2] text-[11px]
                                                text-[#B5838D] hover:bg-[#3A2F2F] hover:text-white
                                                hover:border-[#3A2F2F] transition-colors capitalize">


                                                {retailer} →
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Retake */}
                <div className="text-center">
                    <Link
                        href="/quiz"
                        className="text-xs text-[#3A2F2F]/40 underline underline-offset-2
                                   hover:text-[#B5838D] transition"
                    >
                        Retake the quiz
                    </Link>
                </div>

            </div>
        </main>
    );
}

// ── Root export ──────────────────────────────────────────────────────────────

export default function ResultsClient({ answers }: { answers: SkinAnswers }) {
    const [name, setName] = useState<string | null | undefined>(undefined);
    const profile = buildSkinProfile(answers);

    if (name === undefined) {
        return <NamePrompt onSubmit={setName} />;
    }

    return <ResultsView profile={profile} name={name} />;
}
