import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-xl text-center p-6">
        <h1 className="text-4xl font-semibold text-gray-900">
          SkinWise
        </h1>
        <p className="mt-4 text-gray-600">
          Build a simple, safe skincare routine tailored to your skin type and concerns.
        </p>

        <button className="mt-6 px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
