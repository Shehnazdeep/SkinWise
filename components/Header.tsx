// export default function Header() {
//     return (
//         <header className="w-full border-b bg-white">
//             <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//                 <h1 className="text-xl font-semibold text-gray-900">
//                     SkinWise
//                 </h1>

//                 <nav className="space-x-6 text-gray-600">
//                     <a href="#" className="hover:text-gray-900">Home</a>
//                     <a href="#" className="hover:text-gray-900">Skin Quiz</a>
//                     <a href="#" className="hover:text-gray-900">About</a>
//                 </nav>
//                 <button className="text-gray-800">Sign In</button>
//             </div>
//         </header>
//     );
// }
export default function Header() {
    return (
        <header className="w-full border-b bg-[#FBF3F0]">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-semibold text-[#3A2F2F]">
                    SkinWise
                </h1>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 text-[#3A2F2F]/70 font-medium">
                    <a href="#" className="hover:text-[#3A2F2F] transition">
                        Home
                    </a>
                    <a href="#" className="hover:text-[#3A2F2F] transition">
                        Skin Quiz
                    </a>
                    <a href="#" className="hover:text-[#3A2F2F] transition">
                        About
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-[#3A2F2F] hover:opacity-80 transition">
                        Sign In
                    </button>

                    <button className="hidden sm:inline-flex px-5 py-2 text-sm font-medium text-white rounded-full
            bg-[#E6B8C2] hover:bg-[#B5838D] transition">
                        Start Quiz
                    </button>
                </div>

            </div>
        </header>
    );
}