import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBF3F0] flex items-center justify-center">
      <div className="max-w-xl text-center p-6">

        {/* Brand Name */}
        <h1 className="text-5xl font-semibold text-[#3A2F2F]">
          SkinWise
        </h1>

        {/* Tagline */}
        <p className="mt-5 text-[#3A2F2F]/70 text-lg leading-relaxed">
          Build a simple, safe skincare routine tailored to your skin type and concerns.
        </p>

        {/* Primary CTA */}
        <button
          className="mt-8 px-8 py-3 rounded-full
          bg-[#E6B8C2] text-white font-medium
          hover:bg-[#B5838D] transition shadow-sm"
        >
          Start Skin Quiz
        </button>

        {/* Secondary trust text */}
        <p className="mt-4 text-xs text-[#3A2F2F]/50">
          No sign-up required • Personalized in minutes
        </p>
      </div>
    </main>
  );
}