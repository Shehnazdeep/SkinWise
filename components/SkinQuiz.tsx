
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { skinQuizQuestions } from "@/data/skinQuizQuestions";

const SKIPPED = "skipped";

export default function SkinQuiz() {
    const questions = skinQuizQuestions;
    const router = useRouter();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const question = questions[currentQuestion];
    const selectedValue = answers[question.id];
    const isSkipped = selectedValue === SKIPPED;
    const hasAnswer = selectedValue && !isSkipped;
    const progress = (currentQuestion / questions.length) * 100;
    const isLast = currentQuestion === questions.length - 1;

    function handleSelect(value: string) {
        setAnswers((prev) => ({ ...prev, [question.id]: value }));
    }

    function handleNext() {
        if (!hasAnswer) return;
        if (isLast) {
            // Strip skipped answers before sending to results
            const filtered = Object.fromEntries(
                Object.entries(answers).filter(([, v]) => v !== SKIPPED)
            );
            const params = new URLSearchParams(filtered).toString();
            router.push(`/results?${params}`);
        } else {
            setCurrentQuestion((q) => q + 1);
        }
    }

    function handleSkip() {
        setAnswers((prev) => ({ ...prev, [question.id]: SKIPPED }));
        if (!isLast) setCurrentQuestion((q) => q + 1);
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

                {/* Skipped note */}
                {isSkipped && (
                    <p className="text-xs text-[#3A2F2F]/40 italic mb-4">
                        You skipped this one — go back anytime to answer it.
                    </p>
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
                        disabled={!hasAnswer}
                        className={`flex-1 py-3 rounded-full text-sm font-medium transition
                            ${hasAnswer
                                ? "bg-[#E6B8C2] hover:bg-[#B5838D] text-white shadow-sm cursor-pointer"
                                : "bg-[#E6B8C2]/30 text-white/60 cursor-not-allowed"
                            }`}
                    >
                        {isLast ? "See my routine →" : "Next →"}
                    </button>

                    {!isLast && (
                        <button
                            onClick={handleSkip}
                            className="text-xs text-[#3A2F2F]/90 hover:text-[#B5838D] transition
                                 underline-offset-2 whitespace-nowrap"
                        >
                            Skip
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}
