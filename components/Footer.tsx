export default function Footer() {
    return (
        <footer className="w-full border-t border-[#E6B8C2]/40 bg-[#FBF3F0]">
            <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-center text-[#3A2F2F]/70">

                <p>
                    © {new Date().getFullYear()} <span className="font-medium text-[#3A2F2F]">SkinWise</span>.
                    Educational use only.
                </p>

                {/* Optional links */}
                <div className="mt-3 flex justify-center gap-6 text-xs">
                    <a href="#" className="hover:text-[#B5838D] transition">
                        Privacy
                    </a>
                    <a href="#" className="hover:text-[#B5838D] transition">
                        Terms
                    </a>
                    <a href="#" className="hover:text-[#B5838D] transition">
                        Contact
                    </a>
                </div>

            </div>
        </footer>
    );
}