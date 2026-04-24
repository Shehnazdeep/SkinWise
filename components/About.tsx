export default function About() {
    return (
        <main className="min-h-screen bg-[#FBF3F0] flex items-center justify-center px-6">
            <div className="max-w-2xl bg-white/70 backdrop-blur-sm border border-[#E6B8C2]/40 rounded-2xl p-8 shadow-sm">

                <h1 className="text-3xl font-semibold text-[#3A2F2F] mb-4">
                    About SkinWise
                </h1>

                <p className="text-[#3A2F2F]/70 text-sm leading-relaxed mb-4">
                    SkinWise is designed to help you better understand your skin and build a routine that actually works for you.
                    Instead of overwhelming you with products, we guide you through a simple quiz to identify your skin type,
                    concerns, and preferences.
                </p>

                <p className="text-[#3A2F2F]/70 text-sm leading-relaxed mb-4">
                    Based on your answers, we provide personalized recommendations tailored to your unique needs —
                    whether you're dealing with dryness, acne, sensitivity, or just looking to improve your routine.
                </p>

                <p className="text-[#3A2F2F]/60 text-sm leading-relaxed">
                    Our goal is to make skincare simple, accessible, and personalized — so you can feel confident in your skin every day.
                </p>

            </div>
        </main>
    );
}