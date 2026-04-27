import SkinQuiz from "@/components/SkinQuiz";

export default function QuizPage() {
    return (
        <main className="min-h-screen bg-[#FBF3F0] flex items-center justify-center px-4">
            <SkinQuiz />
        </main>
        // <main className="min-h-screen bg-[#FBF3F0] flex items-center justify-center px-4 py-24">
        //     <div className="w-full max-w-lg max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl">
        //         <SkinQuiz />
        //     </div>
        // </main>
    );
}