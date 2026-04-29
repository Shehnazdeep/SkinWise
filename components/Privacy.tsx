export default function Privacy() {
    return (
        <main className="min-h-screen bg-[#FBF3F0] pt-32 pb-16 px-6">
            <div className="max-w-2xl mx-auto">

                {/* <div className="flex items-center gap-2 mb-6">
                    <span className="block w-7 h-px bg-[#B5838D]" />
                    <span className="text-[11px] tracking-[3px] uppercase text-[#B5838D] font-medium">
                        Legal
                    </span>
                </div> */}

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl text-[#3A2F2F] mb-3">
                    Privacy Policy
                </h1>
                <p className="text-xs text-[#3A2F2F]/40 mb-12">Last updated: April 2026</p>

                <div className="space-y-10 text-sm text-[#3A2F2F]/70 font-light leading-relaxed">

                    <section>
                        <h2 className="font-[family-name:var(--font-playfair)] text-xl text-[#3A2F2F] mb-3">
                            Overview
                        </h2>
                        <p>
                            SkinWise is a personal, educational project. We take your privacy seriously
                            and keep things simple — we collect as little data as possible and we never
                            sell or share your information with third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-playfair)] text-xl text-[#3A2F2F] mb-3">
                            What we collect
                        </h2>
                        <p className="mb-3">
                            When you take the skin quiz, your answers are passed directly to the results
                            page via URL parameters. We do not store your quiz answers in any database.
                        </p>
                        <p>
                            If you choose to enter your name on the results page, it is used solely to
                            personalise your results in that session and is not stored or retained.
                        </p>
                    </section>

                    {/* <section>
                        <h2 className="font-[family-name:var(--font-playfair)] text-xl text-[#3A2F2F] mb-3">
                            Third-party services
                        </h2>
                        <p className="mb-3">
                            SkinWise uses the Anthropic Claude API to generate your personalised routine
                            intro. Your skin profile data (skin type, concerns, sensitivity, lifestyle)
                            is sent to Anthropic's API to generate this response. Please refer to
                            Anthropic's own privacy policy for details on how they handle data.
                        </p>
                        <p>
                            We do not use any advertising, analytics, or tracking services.
                        </p>
                    </section> */}

                    <section>
                        <h2 className="font-[family-name:var(--font-playfair)] text-xl text-[#3A2F2F] mb-3">
                            Cookies
                        </h2>
                        <p>
                            SkinWise does not use cookies or any form of local storage to track you
                            across sessions.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-[family-name:var(--font-playfair)] text-xl text-[#3A2F2F] mb-3">
                            Questions
                        </h2>
                        <p>
                            If you have any questions about this privacy policy, feel free to reach out
                            via the contact page.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}