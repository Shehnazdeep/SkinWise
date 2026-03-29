// "use client";

// import { useState } from "react";
// import { skinQuizQuestions } from "@/data/skinQuizQuestions";

// export default function SkinQuiz() {
//     const questions = skinQuizQuestions;

//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [answers, setAnswers] = useState<string[]>([]);

//     const question = questions[currentQuestion];

//     function handleAnswer(option: string) {
//         const updatedAnswers = [...answers];
//         updatedAnswers[currentQuestion] = option;
//         setAnswers(updatedAnswers);
//     }

//     function nextQuestion() {
//         if (currentQuestion < questions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//         } else {
//             console.log("Quiz completed:", answers);
//             // Later → redirect to results page
//         }
//     }

//     return (
//         <div className="max-w-xl mx-auto bg-[#FFF6EC] p-8 rounded-2xl shadow-sm">

//             {/* Progress */}
//             <p className="text-sm text-[#3A2F2F]/60 mb-4">
//                 Question {currentQuestion + 1} of {questions.length}
//             </p>

//             {/* Question */}
//             <h2 className="text-2xl font-semibold text-[#3A2F2F] mb-6">
//                 {question.question}
//             </h2>

//             {/* Options */}
//             <div className="space-y-3">
//                 {question.options.map((option) => (
//                     <button
//                         key={option}
//                         onClick={() => handleAnswer(option)}
//                         className={`w-full text-left px-5 py-3 rounded-xl border transition
//               ${answers[currentQuestion] === option
//                                 ? "border-[#B5838D] bg-[#E6B8C2]/40"
//                                 : "border-[#E6B8C2]/40 hover:bg-[#FBF3F0]"
//                             }`}
//                     >
//                         {option}
//                     </button>
//                 ))}
//             </div>

//             {/* Next Button */}
//             <button
//                 onClick={nextQuestion}
//                 disabled={!answers[currentQuestion]}
//                 className="mt-8 w-full py-3 rounded-full text-white font-medium
//           bg-[#E6B8C2] hover:bg-[#B5838D] transition disabled:opacity-40"
//             >
//                 {currentQuestion === questions.length - 1
//                     ? "See My Routine"
//                     : "Next"}
//             </button>
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { skinQuizQuestions } from "@/data/skinQuizQuestions";

export default function SkinQuiz() {
    const questions = skinQuizQuestions;
    const router = useRouter();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const question = questions[currentQuestion];
    const selectedValue = answers[question.id];
    const progress = (currentQuestion / questions.length) * 100;
    const isLast = currentQuestion === questions.length - 1;

    function handleSelect(value: string) {
        setAnswers((prev) => ({ ...prev, [question.id]: value }));
    }

    function handleNext() {
        if (!selectedValue) return;
        if (isLast) {
            const params = new URLSearchParams(answers).toString();
            router.push(`/results?${params}`);
        } else {
            setCurrentQuestion((q) => q + 1);
        }
    }

    function handleBack() {
        if (currentQuestion > 0) setCurrentQuestion((q) => q - 1);
    }

    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#E6B8C2]/40 overflow-hidden">

            {/* Progress bar */}
            <div className="h-1 bg-[#E6B8C2]/20">
                <div
                    className="h-1 bg-[#E6B8C2] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="p-8">

                {/* Step counter */}
                <p className="text-xs text-[#3A2F2F]/40 tracking-widest uppercase mb-2">
                    Question {currentQuestion + 1} of {questions.length}
                </p>

                {/* Question */}
                <h2 className="text-2xl font-semibold text-[#3A2F2F] mb-1">
                    {question.question}
                </h2>
                {question.subtext && (
                    <p className="text-sm text-[#3A2F2F]/50 mb-7">{question.subtext}</p>
                )}

                {/* Options */}
                <div className="space-y-3 mb-8">
                    {question.options.map((option) => {
                        const isSelected = selectedValue === option.value;
                        return (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-150
                  ${isSelected
                                        ? "border-[#B5838D] bg-[#E6B8C2]/20 shadow-sm"
                                        : "border-[#E6B8C2]/40 hover:border-[#E6B8C2] hover:bg-[#FBF3F0]"
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className={`font-medium text-sm ${isSelected ? "text-[#3A2F2F]" : "text-[#3A2F2F]/80"}`}>
                                            {option.label}
                                        </p>
                                        {option.description && (
                                            <p className="text-xs text-[#3A2F2F]/45 mt-0.5">
                                                {option.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Radio indicator */}
                                    <span
                                        className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all
                      ${isSelected
                                                ? "border-[#B5838D] bg-[#B5838D]"
                                                : "border-[#E6B8C2]"
                                            }`}
                                    />
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                    {currentQuestion > 0 && (
                        <button
                            onClick={handleBack}
                            className="px-5 py-3 rounded-full text-sm text-[#3A2F2F]/60
                hover:text-[#3A2F2F] hover:bg-[#FBF3F0] transition border border-transparent
                hover:border-[#E6B8C2]/40"
                        >
                            ← Back
                        </button>
                    )}
                    <button
                        onClick={handleNext}
                        disabled={!selectedValue}
                        className={`flex-1 py-3 rounded-full text-sm font-medium transition
              ${selectedValue
                                ? "bg-[#E6B8C2] hover:bg-[#B5838D] text-white shadow-sm cursor-pointer"
                                : "bg-[#E6B8C2]/30 text-white/60 cursor-not-allowed"
                            }`}
                    >
                        {isLast ? "See my routine →" : "Next →"}
                    </button>
                </div>

            </div>
        </div>
    );
}