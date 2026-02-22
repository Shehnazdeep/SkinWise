export default function Footer() {
    return (
        <footer className="w-full border-t bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} SkinWise. Educational use only.
            </div>
        </footer>
    );
}