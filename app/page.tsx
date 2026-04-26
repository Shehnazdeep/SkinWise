import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBF3F0] font-[family-name:var(--font-dm-sans)]">

      {/* ── Hero ── */}
      <section className="grid md:grid-cols-2 min-h-[540px]">

        {/* Left */}
        <div className="flex flex-col justify-center px-10 py-20 md:pl-16">

          <div className="flex items-center gap-2 mb-5">
            <span className="block w-7 h-px bg-[#B5838D]" />
            <span className="text-[11px] tracking-[3px] uppercase text-[#B5838D] font-medium">
              Personalized Skincare
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl leading-[1.12] tracking-tight text-[#3A2F2F] mb-5">
            Know your skin,{" "}
            <em className="text-[#B5838D] not-italic font-normal italic">
              build your routine
            </em>
          </h1>

          <p className="text-[15px] leading-relaxed text-[#3A2F2F]/60 max-w-sm mb-10 font-light">
            Answer 5 quick questions and get a routine that's actually right
            for your skin — no guesswork, no overwhelm.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/quiz"
              className="px-8 py-3.5 rounded-full bg-[#3A2F2F] text-[#FBF3F0] text-sm
                                       font-medium hover:bg-[#B5838D] transition-colors"
            >
              Take the Skin Quiz →
            </Link>
            <Link
              href="/about"
              className="px-6 py-3.5 rounded-full border border-[#3A2F2F]/25 text-[#3A2F2F]
                                       text-sm hover:border-[#B5838D] hover:text-[#B5838D] transition-colors"
            >
              Learn more
            </Link>
          </div>

          <div className="mt-6 flex gap-5 text-[11.5px] text-[#3A2F2F]/40">
            {["No sign-up", "Takes 2 minutes", "Free forever"].map((t) => (
              <span key={t} className="before:content-['✓_'] before:text-[#B5838D]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — decorative result card */}
        <div className="hidden md:flex relative items-center justify-center bg-[#F0E4DF] overflow-hidden">

          {/* Blobs */}
          <div
            className="absolute w-80 h-80 rounded-[60%_40%_70%_30%/50%_60%_40%_70%]
                                   bg-[#E6B8C2] opacity-45 -top-14 -right-14 pointer-events-none"
          />
          <div
            className="absolute w-56 h-56 rounded-[60%_40%_70%_30%/50%_60%_40%_70%]
                                   bg-[#D4A0A8] opacity-30 -bottom-10 left-10 pointer-events-none"
          />

          {/* Floating card */}
          <div className="relative z-10 bg-white rounded-2xl p-6 w-60 shadow-[0_8px_40px_rgba(58,47,47,0.12)]">

            {/* Badge */}
            <span className="absolute -top-4 -right-4 bg-[#B5838D] text-white text-[11px]
                                         font-medium px-3.5 py-1.5 rounded-full shadow-md">
              Your result
            </span>

            <p className="text-[10px] uppercase tracking-[2.5px] text-[#B5838D] mb-3">
              Skin profile
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-3xl text-[#3A2F2F] leading-tight">
              Combination
            </p>
            <p className="text-xs text-[#3A2F2F]/50 mt-0.5 mb-4">
              Oily T-zone, normal cheeks
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {["Acne-prone", "Dehydrated", "Sensitive"].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#FBF3F0] border border-[#E6B8C2] rounded-full
                                               px-3 py-1 text-[11px] text-[#B5838D]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {[
              ["Morning", "3 steps"],
              ["Evening", "4 steps"],
              ["Key actives", "Niacinamide, AHA"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-center py-1.5
                                           border-t border-[#E6B8C2]/30 text-xs"
              >
                <span className="text-[#3A2F2F]/50">{label}</span>
                <span className="text-[#3A2F2F] font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white py-16 px-10">
        <p className="text-[11px] uppercase tracking-[3px] text-[#B5838D] text-center mb-10">
          How it works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-2xl mx-auto text-center">
          {[
            {
              n: "1",
              title: "Take the quiz",
              body: "5 questions about your skin, lifestyle, and current routine.",
            },
            {
              n: "2",
              title: "Get your profile",
              body: "We identify your skin type, concerns, and sensitivities.",
            },
            {
              n: "3",
              title: "See your routine",
              body: "A tailored morning and evening routine built just for you.",
            },
          ].map(({ n, title, body }) => (
            <div key={n}>
              <p className="font-[family-name:var(--font-playfair)] text-5xl italic
                                          text-[#E6B8C2] leading-none mb-3">
                {n}
              </p>
              <p className="text-sm font-medium text-[#3A2F2F] mb-1.5">{title}</p>
              <p className="text-[12.5px] text-[#3A2F2F]/55 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Concerns ── */}
      <section className="py-14 px-10 bg-[#FBF3F0]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#3A2F2F] mb-6">
            We help with every skin concern
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Acne & breakouts",
              "Dryness",
              "Oiliness",
              "Aging",
              "Hyperpigmentation",
              "Sensitivity",
              "Redness",
            ].map((concern) => (
              <span
                key={concern}
                className="bg-white border border-[#E6B8C2] rounded-full px-4 py-2
                                           text-sm text-[#3A2F2F] hover:bg-[#3A2F2F] hover:text-white
                                           hover:border-[#3A2F2F] transition-colors cursor-default
                                           before:content-[''] before:inline-block before:w-1.5 before:h-1.5
                                           before:rounded-full before:bg-[#B5838D] before:mr-2
                                           before:align-middle"
              >
                {concern}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-[#3A2F2F] py-14 px-10 flex flex-col items-center gap-5 text-center">
        <p className="font-[family-name:var(--font-playfair)] text-3xl text-[#FBF3F0]">
          Ready to find your{" "}
          <em className="text-[#E6B8C2]">perfect routine?</em>
        </p>
        <Link
          href="/quiz"
          className="px-8 py-3.5 rounded-full bg-[#E6B8C2] text-white text-sm
                               font-medium hover:bg-[#B5838D] transition-colors"
        >
          Start the free quiz →
        </Link>
      </section>

    </main>
  );
}
