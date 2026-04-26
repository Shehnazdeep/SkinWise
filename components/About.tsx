import Link from "next/link";

export default function About() {
    return (
        <main className="min-h-screen bg-[#FBF3F0] font-[family-name:var(--font-dm-sans)]">

            {/* ── Hero ── */}
            <section className="pt-32 pb-16 px-10">
                <div className="max-w-2xl mx-auto">

                    <div className="flex items-center gap-2 mb-6">
                        <span className="block w-7 h-px bg-[#B5838D]" />
                        <span className="text-[11px] tracking-[3px] uppercase text-[#B5838D] font-medium">
                            About SkinWise
                        </span>
                    </div>

                    <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl leading-[1.1]
                                   tracking-tight text-[#3A2F2F] mb-6">
                        Skincare is{" "}
                        <em className="italic text-[#B5838D]">self-care.</em>
                        <br />Full stop.
                    </h1>

                    <p className="text-[15.5px] leading-[1.8] text-[#3A2F2F]/60 font-light
                                  border-l-2 border-[#E6B8C2] pl-5 max-w-xl">
                        People overcomplicate skincare. They make it feel like a chore, a luxury,
                        or something only experts can figure out. SkinWise exists to change that —
                        and bring it back to what it really is: a simple, joyful act of taking
                        care of yourself.
                    </p>
                </div>
            </section>

            <div className="h-px bg-[#E6B8C2]/40 mx-10" />

            {/* ── Pull quote ── */}
            <section className="bg-[#3A2F2F] py-14 px-10 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl
                              text-[#FBF3F0] italic leading-snug">
                    "Skincare isn't{" "}
                    <span className="not-italic text-[#E6B8C2]">extra.</span>
                    <br />
                    It's the smallest, kindest thing<br />
                    you can do for yourself every day."
                </p>
            </section>

            {/* ── Personal / About me ── */}
            <section className="bg-white py-16 px-10">
                <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-10 items-start">

                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-[#E6B8C2] flex items-center justify-center
                                    flex-shrink-0 font-[family-name:var(--font-playfair)] text-3xl text-white">
                        SK
                    </div>

                    <div>
                        {/* <p className="text-[11px] uppercase tracking-[3px] text-[#B5838D] mb-3">
                            The person behind it
                        </p> */}
                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#3A2F2F]
                                       mb-4 leading-snug">
                            Hey, I'm Shehnaz.
                        </h2>
                        <div className="space-y-3 text-[13.5px] leading-[1.8] text-[#3A2F2F]/60 font-light">
                            <p>
                                I'm a self-care enthusiast, skincare lover, and firm believer that wellness
                                starts with the small rituals you show up for every day. For me, a good
                                skincare routine has always been about more than clear skin — it's about
                                slowing down, being present, and treating yourself with a little intention.
                            </p>
                            <p>
                                I built SkinWise because I kept seeing people feel overwhelmed by skincare —
                                too many products, too many conflicting opinions, too much noise. I wanted to
                                create something that cuts through all of that and gives you exactly what you
                                need: a simple, personalised routine that actually fits your life.
                            </p>
                            <p>
                                No 12-step regimens. Just skincare, simplified.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-px bg-[#E6B8C2]/40 mx-10" />

            {/* ── Values ── */}
            <section className="py-16 px-10 bg-[#FBF3F0]">
                <div className="max-w-2xl mx-auto">

                    <p className="text-[11px] uppercase tracking-[3px] text-[#B5838D] mb-8">
                        What SkinWise stands for
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Skincare is self-care",
                                body: "Not a luxury. Not extra. Just a daily act of kindness toward yourself.",
                            },
                            {
                                title: "Simple over complicated",
                                body: "Fewer, better steps that you'll actually stick to — every single day.",
                            },
                            {
                                title: "Personal, not generic",
                                body: "Your skin is yours. Your routine should be too.",
                            },
                            {
                                title: "Accessible to everyone",
                                body: "Free, no sign-up, no upsells. Just honest guidance for all skin types.",
                            },
                        ].map(({ title, body }) => (
                            <div
                                key={title}
                                className="bg-white border border-[#E6B8C2]/50 rounded-2xl p-6"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#B5838D] mb-3" />
                                <p className="text-sm font-medium text-[#3A2F2F] mb-1.5">{title}</p>
                                <p className="text-xs text-[#3A2F2F]/50 leading-relaxed font-light">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-14 px-10 border-t border-[#E6B8C2]/40 text-center
                                 flex flex-col items-center gap-5 bg-[#FBF3F0]">
                <p className="font-[family-name:var(--font-playfair)] text-3xl text-[#3A2F2F]">
                    Your skin deserves a{" "}
                    <em className="italic text-[#B5838D]">little love.</em>
                </p>
                <Link
                    href="/quiz"
                    className="px-8 py-3.5 rounded-full bg-[#3A2F2F] text-[#FBF3F0] text-sm
                               font-medium hover:bg-[#B5838D] transition-colors"
                >
                    Find your routine →
                </Link>
            </section>

        </main>
    );
}
