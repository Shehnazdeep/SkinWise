export default function Header() {
    return (
        <header className="w-full border-b bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-900">
                    SkinWise
                </h1>

                <nav className="space-x-6 text-gray-600">
                    <a href="#" className="hover:text-gray-900">Home</a>
                    <a href="#" className="hover:text-gray-900">About</a>
                </nav>
            </div>
        </header>
    );
}