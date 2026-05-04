


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buildSkinProfile, SkinAnswers, SkinProfile } from "@/lib/skinProfile";

// ── Types ─────────────────────────────────────────────────────────────────────

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

const retailerIcons: Record<string, string> = {
    amazon: "/logos/Amazon_icon.png",
    ulta: "/logos/ulta.png",
    sephora: "/logos/sephora.png",
};

const stepToCategoryMap: Record<string, string> = {
    "Cleanser": "cleanser",
    "Moisturiser": "moisturizer",
    "Moisturizer": "moisturizer",
    "Serum": "serum",
    "SPF": "spf",
    "Toner": "toner",
    "Eye cream": "eye-cream",
    "Treatment": "serum",
};

// ── Buy Links ─────────────────────────────────────────────────────────────────

function BuyLinks({ buy_links }: { buy_links: Product["buy_links"] }) {
    return (
        <div className="flex gap-3 flex-wrap mt-4">
            {Object.entries(buy_links).map(([retailer, url]) => (
                <a
                    key={retailer}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#E6B8C2]
                    hover:bg-[#3A2F2F] hover:border-[#3A2F2F]
                    transition flex items-center justify-center overflow-hidden"
                >
                    <img
                        src={retailerIcons[retailer]}
                        alt={retailer}
                        className="w-6 h-6 object-contain"
                    />
                </a>
            ))}
        </div>
    );
}

// ── Step Products ─────────────────────────────────────────────────────────────

function StepProducts({ step, products }: { step: string; products: Product[] }) {
    const category = stepToCategoryMap[step];
    if (!category) return null;

    const filtered = products.filter((p) => p.category === category);
    if (!filtered.length) return null;

    const topPick = filtered[0];
    const alternatives = filtered.slice(1, 3);

    return (
        <div className="mt-6 space-y-4">

            {/* Top Pick */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E6B8C2]/30 flex gap-6 hover:-translate-y-1 transition">

                <div className="w-24 h-32 bg-[#F5E6E2] rounded-xl" />

                <div className="flex-1">
                    <span className="text-xs bg-[#B5838D] text-white px-3 py-1 rounded-full">
                        ⭐ Top Pick
                    </span>

                    <p className="text-sm text-[#3A2F2F]/50 mt-3">
                        {topPick.brand}
                    </p>

                    <p className="text-lg font-medium text-[#3A2F2F]">
                        {topPick.name}
                    </p>

                    <p className="text-sm text-[#3A2F2F]/75 mt-2">
                        {topPick.description}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <BuyLinks buy_links={topPick.buy_links} />

                        <button className="px-5 py-2 rounded-full bg-[#B5838D] text-white text-sm hover:opacity-90 transition">
                            View Product →
                        </button>
                    </div>
                </div>
            </div>

            {/* Alternatives */}
            {alternatives.length > 0 && (
                <div>
                    <p className="text-xs uppercase tracking-widest text-[#3A2F2F]/40 mb-2">
                        Also great
                    </p>

                    <div className="space-y-3">
                        {alternatives.map((p) => (
                            <div
                                key={p.id}
                                className="bg-white border border-[#E6B8C2]/70 rounded-xl px-6 py-4 flex justify-between items-center hover:shadow-md transition"
                            >
                                <div>
                                    <p className="text-sm text-[#3A2F2F]/50 font-medium">{p.name}</p>

                                    <p className="text-md text-[#3A2F2F]/75 mt-2">{p.brand}</p>
                                </div>
                                <BuyLinks buy_links={p.buy_links} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// ── Routine Card ──────────────────────────────────────────────────────────────

function RoutineCard({
    title,
    steps,
    products,
    productsLoading,
}: {
    title: string;
    steps: SkinProfile["morning"];
    products: Product[];
    productsLoading: boolean;
}) {
    return (
        <div className="bg-white border border-[#E6B8C2]/60 rounded-3xl p-8 shadow-sm">

            <h2 className="text-lg font-medium text-[#3A2F2F] mb-6">
                {title}
            </h2>

            <div className="space-y-8">
                {steps.map((s, i) => (
                    <div key={i} className="flex gap-6">

                        {/* Timeline */}
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-[#B5838D] text-white flex items-center justify-center text-sm">
                                {i + 1}
                            </div>
                            {i !== steps.length - 1 && (
                                <div className="w-[2px] flex-1 bg-[#E6B8C2]/50 mt-2" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <p className="text-xs uppercase tracking-widest text-[#3A2F2F]/50 mb-1">
                                {s.step}
                            </p>

                            <p className="text-lg font-medium text-[#3A2F2F] mb-1">
                                {s.product}
                            </p>

                            <p className="text-sm text-[#3A2F2F]/55">
                                {s.why}
                            </p>

                            {productsLoading ? (
                                <div className="mt-4 h-24 bg-[#E6B8C2]/50 rounded-xl animate-pulse" />
                            ) : (
                                <StepProducts step={s.step} products={products} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Name Prompt ───────────────────────────────────────────────────────────────


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

// ── Results View ──────────────────────────────────────────────────────────────

function ResultsView({ profile, name }: { profile: SkinProfile; name: string | null }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsLoading, setProductsLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(`/api/products?skin_type=${profile.skinType}`);
                const data = await res.json();
                setProducts(data.products);
            } catch {
                setProducts([]);
            } finally {
                setProductsLoading(false);
            }
        }
        fetchProducts();
    }, [profile.skinType]);

    return (
        <main className="min-h-screen bg-[#FBF3F0] pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* HERO */}
                {/* <div className="grid md:grid-cols-2 gap-30 mb-14">

                    <div>
                        <p className="text-[#B5838D]">Your skin profile</p>
                      
                        <h1 className="font-[family-name:var(--font-playfair)] text-4xl text-[#3A2F2F] mb-1">
                            {profile.skinTypeLabel} skin
                        </h1>

                        <p className="text-sm mb-6 text-[#B5838D]">
                            Main concern: {profile.concernLabel}
                        </p>

                        <div className="flex flex-wrap gap-2 text-[#B5838D]">
                            {profile.keyIngredients.map((i) => (
                                <span key={i} className="border px-3 py-1 rounded-full text-xs">
                                    {i}
                                </span>
                            ))}
                        </div>
                    </div>
                   

                    <div className="bg-[#FBF7F8] p-6 rounded-6xl shadow-sm text-[#3A2F2F] mb-6 pr-0">
                        <p className="text-lg font-semibold mb-6">✨ Quick tips for your skin</p>
                        <ul className="space-y-5">
                            {[
                                { icon: "🧴", text: "Use a gentle, hydrating cleanser" },
                                { icon: "🚿", text: "Avoid hot water – it can dry you out" },
                                { icon: "🔒", text: "Moisturize while skin is still damp" },
                                { icon: "☀️", text: "Don't skip sunscreen (even indoors)" },
                            ].map(({ icon, text }) => (
                                <li key={text} className="flex items-center gap-2 text-sm">
                                    <span className="w-8 h-8 rounded-xl border border-[#E6B8C2] flex items-center
                                 justify-center text-[#B5838D] flex-shrink-0 text-base">
                                        {icon}
                                    </span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> */}
                <div className="grid md:grid-cols-2 gap-8 items-start">

                    <div className="bg-[#FBF7F8] rounded-3xl p-8 flex flex-col justify-center">
                        <p className="text-[#B5838D] text-[11px] uppercase tracking-[3px] mb-3">Your skin profile</p>
                        <h1 className="font-[family-name:var(--font-playfair)] text-4xl text-[#3A2F2F] mb-2">
                            {profile.skinTypeLabel} skin
                        </h1>
                        <p className="text-sm mb-6 text-[#B5838D]">
                            Main concern: {profile.concernLabel}
                        </p>
                        <div className="flex flex-wrap gap-2 text-[#B5838D]">
                            {profile.keyIngredients.map((i) => (
                                <span key={i} className="border border-[#E6B8C2] px-3 py-1 rounded-full text-xs">
                                    {i}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl text-[#3A2F2F]">
                        <div className="border border-[#E6B8C2] p-4">
                            <p className="text-lg font-semibold mb-6">✨ Quick tips for your skin</p>
                            <ul className="space-y-5 list-none pl-0 ml-0">
                                {[
                                    { icon: "🧴", text: "Use a gentle, hydrating cleanser" },
                                    { icon: "🚿", text: "Avoid hot water – it can dry you out" },
                                    { icon: "🔒", text: "Moisturize while skin is still damp" },
                                    { icon: "☀️", text: "Don't skip sunscreen (even indoors)" },
                                ].map(({ icon, text }) => (
                                    <li key={text} className="flex items-center gap-4 text-sm">
                                        <span className="w-10 h-10 rounded-full border border-[#E6B8C2] flex items-center justify-center text-[#B5838D] flex-shrink-0">
                                            {icon}
                                        </span>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>


                {/* ROUTINES */}
                <div className="space-y-8">
                    <RoutineCard
                        title="☀️ Morning Routine"
                        steps={profile.morning}
                        products={products}
                        productsLoading={productsLoading}
                    />

                    <RoutineCard
                        title="🌙 Evening Routine"
                        steps={profile.evening}
                        products={products}
                        productsLoading={productsLoading}
                    />
                </div>

                <div className="text-center mt-10">
                    <Link href="/quiz">Retake Quiz</Link>
                </div>
            </div>
        </main>
    );
}

// ── Root ──────────────────────────────────────────────────────────────────────

export default function ResultsClient({ answers }: { answers: SkinAnswers }) {
    const [name, setName] = useState<string | null | undefined>(undefined);
    const profile = buildSkinProfile(answers);

    if (name === undefined) {
        return <NamePrompt onSubmit={setName} />;
    }

    return <ResultsView profile={profile} name={name} />;
}