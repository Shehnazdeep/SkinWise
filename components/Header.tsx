
// export default function Header() {
//     return (
//         <header className="fixed top-0 left-0 w-full z-50 border-b bg-[#FBF3F0]">
//             <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

//                 {/* Logo */}
//                 <h1 className="text-xl font-semibold text-[#3A2F2F]">
//                     SkinWise
//                 </h1>

//                 {/* Navigation */}
//                 <nav className="hidden md:flex space-x-8 text-[#3A2F2F]/70 font-medium">
//                     <a href="#" className="hover:text-[#3A2F2F] transition">
//                         Home
//                     </a>
//                     <a href="#" className="hover:text-[#3A2F2F] transition">
//                         Skin Quiz
//                     </a>
//                     <a href="#" className="hover:text-[#3A2F2F] transition">
//                         About
//                     </a>
//                 </nav>

//                 {/* Actions */}
//                 <div className="flex items-center gap-4">
//                     <button className="text-sm font-medium text-[#3A2F2F] hover:opacity-80 transition">
//                         Sign In
//                     </button>

//                     <button className="hidden sm:inline-flex px-5 py-2 text-sm font-medium text-white rounded-full
//             bg-[#E6B8C2] hover:bg-[#B5838D] transition">
//                         Start Quiz
//                     </button>
//                 </div>

//             </div>
//         </header>
//     );
// }
"use client";
import Link from "next/link";

import { useEffect, useState } from "react";


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50  transition-all duration-300
            ${scrolled
                    ? "bg-[#FBF3F0]/80 backdrop-blur-md shadow-sm"
                    : "bg-[#FBF3F0]"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                {/* <h1 className="text-xl font-semi-bold text-[#3A2F2F]"> */}
                <h1 className="text-xl font-[family-name:var(--font-playfair)] text-[#3A2F2F]">
                    <Link href="/">
                        SkinWise </Link>

                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-[#3A2F2F]/70 font-medium">
                    <a href="/" className="hover:text-[#9C6871] transition">Home</a>
                    <Link href="/quiz" className="hover:text-[#9C6871] transition">
                        Skin Quiz
                    </Link>
                    <a href="/about" className="hover:text-[#9C6871] transition">About</a>
                </nav>

                {/* Actions + Hamburger */}
                <div className="flex items-center gap-4">

                    {/* Desktop buttons */}
                    <button className="hidden md:inline text-sm font-medium text-[#3A2F2F] hover:opacity-80 transition">
                        Sign In
                    </button>
                    <Link href="/quiz">
                        <button className="hidden md:inline-flex px-5 py-2 text-sm font-medium text-white rounded-full
                        bg-[#E6B8C2] hover:bg-[#B5838D] transition">
                            Start Quiz
                        </button>
                    </Link>
                    {/* Hamburger (mobile only) */}
                    {/* <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col gap-1"
                        aria-label="Toggle menu"
                    >
                        <span className="w-6 h-[2px] bg-[#3A2F2F]" />
                        <span className="w-6 h-[2px] bg-[#3A2F2F]" />
                        <span className="w-6 h-[2px] bg-[#3A2F2F]" />
                    </button> */}
                    {/* Hamburger (mobile only) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden relative w-8 h-8 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        {/* Top line */}
                        <span
                            className={`absolute w-6 h-[2px] bg-[#3A2F2F] transition-all duration-300
        ${menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}
        `}
                        />

                        {/* Middle line */}
                        <span
                            className={`absolute w-6 h-[2px] bg-[#3A2F2F] transition-all duration-300
        ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100"}
        `}
                        />

                        {/* Bottom line */}
                        <span
                            className={`absolute w-6 h-[2px] bg-[#3A2F2F] transition-all duration-300
        ${menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}
        `}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t bg-[#FBF3F0]/90 backdrop-blur-md">
                    <nav className="flex flex-col px-6 py-4 space-y-4 text-[#3A2F2F]/80 font-medium">
                        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#9C6871]">Home</a>
                        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#9C6871]">Skin Quiz</a>
                        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#9C6871]">About</a>

                        <hr className="border-[#3A2F2F]/10" />

                        <button className="text-left text-sm font-medium">Sign In</button>
                        <button className="mt-5 px-4 py-2 text-sm font-medium text-white rounded-full
                            bg-[#E6B8C2] hover:bg-[#B5838D] transition">
                            Start Quiz
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}

// "use client";

// import { useEffect, useState } from "react";

// export default function Header() {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <header
//             className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300
//             ${scrolled
//                     ? "bg-[#FBF3F0]/80 backdrop-blur-md shadow-sm"
//                     : "bg-[#FBF3F0]"
//                 }`}
//         >
//             <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

//                 {/* Logo */}
//                 <h1 className="text-xl font-semibold text-[#3A2F2F]">
//                     SkinWise
//                 </h1>

//                 {/* Navigation */}
//                 <nav className="hidden md:flex space-x-8 text-[#3A2F2F]/70 font-medium">
//                     <a href="#" className="hover:text-[#3A2F2F] transition">
//                         Home
//                     </a>
//                     <a href="#" className="hover:text-[#3A2F2F] transition">
//                         Skin Quiz
//                     </a>
//                     <a href="#" className="hover:text-[#3A2F2F] transition">
//                         About
//                     </a>
//                 </nav>

//                 {/* Actions */}
//                 <div className="flex items-center gap-4">
//                     <button className="text-sm font-medium text-[#3A2F2F] hover:opacity-80 transition">
//                         Sign In
//                     </button>

//                     <button className="hidden sm:inline-flex px-5 py-2 text-sm font-medium text-white rounded-full
//                         bg-[#E6B8C2] hover:bg-[#B5838D] transition">
//                         Start Quiz
//                     </button>
//                 </div>

//             </div>
//         </header>
//     );
// }