export default function Contact() {
    return (
        <main className="min-h-screen bg-[#FBF3F0] flex items-center justify-center px-6">
            <div className="max-w-lg w-full">

                <div className="flex items-center gap-2 mb-6">
                    <span className="block w-7 h-px bg-[#B5838D]" />
                    <span className="text-[11px] tracking-[3px] uppercase text-[#B5838D] font-medium">
                        Get in touch
                    </span>
                </div>

                <h1 className="font-[family-name:var(--font-playfair)] text-4xl text-[#3A2F2F] mb-3">
                    Contact
                </h1>
                <p className="text-sm text-[#3A2F2F]/55 font-light leading-relaxed mb-12">
                    Have a question, a suggestion, or just want to talk skincare? I'd love to hear
                    from you. SkinWise is a personal project and every message is read by a real person.
                </p>

                <div className="bg-white/70 border border-[#E6B8C2]/40 rounded-2xl p-8 space-y-5">

                    <div>
                        <label className="block text-[11px] uppercase tracking-[2px] text-[#B5838D] mb-2">
                            Your name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Sarah"
                            className="w-full px-4 py-3 rounded-xl border border-[#E6B8C2]/50 bg-white
                                       text-sm text-[#3A2F2F] placeholder:text-[#3A2F2F]/25
                                       focus:outline-none focus:border-[#B5838D] transition font-light"
                        />
                    </div>

                    <div>
                        <label className="block text-[11px] uppercase tracking-[2px] text-[#B5838D] mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#E6B8C2]/50 bg-white
                                       text-sm text-[#3A2F2F] placeholder:text-[#3A2F2F]/25
                                       focus:outline-none focus:border-[#B5838D] transition font-light"
                        />
                    </div>

                    <div>
                        <label className="block text-[11px] uppercase tracking-[2px] text-[#B5838D] mb-2">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            placeholder="What's on your mind?"
                            className="w-full px-4 py-3 rounded-xl border border-[#E6B8C2]/50 bg-white
                                       text-sm text-[#3A2F2F] placeholder:text-[#3A2F2F]/25
                                       focus:outline-none focus:border-[#B5838D] transition font-light
                                       resize-none"
                        />
                    </div>

                    <button
                        className="w-full py-3.5 rounded-full bg-[#3A2F2F] text-[#FBF3F0] text-sm
                                   font-medium hover:bg-[#B5838D] transition-colors"
                    >
                        Send message
                    </button>

                </div>

                {/* <p className="text-xs text-[#3A2F2F]/35 text-center mt-6">
                    Or reach out directly at{" "}
                    <a
                        href="mailto:hello@skinwise.com"
                        className="underline underline-offset-2 hover:text-[#B5838D] transition"
                    >
                        hello@skinwise.com
                    </a>
                </p> */}

            </div>
        </main>
    );
}