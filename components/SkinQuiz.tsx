"use client";

import { useState } from "react";
import { skinQuizQuestions } from "@/data/skinQuizQuestions";

export default function SkinQuiz() {
    const questions = skinQuizQuestions;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    const question = questions[currentQuestion];

    function handleAnswer(option: string) {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = option;
        setAnswers(updatedAnswers);
    }

    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log("Quiz completed:", answers);
            // Later → redirect to results page
        }
    }

    return (
        <div className="max-w-xl mx-auto bg-[#FFF6EC] p-8 rounded-2xl shadow-sm">

            {/* Progress */}
            <p className="text-sm text-[#3A2F2F]/60 mb-4">
                Question {currentQuestion + 1} of {questions.length}
            </p>

            {/* Question */}
            <h2 className="text-2xl font-semibold text-[#3A2F2F] mb-6">
                {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
                {question.options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className={`w-full text-left px-5 py-3 rounded-xl border transition
              ${answers[currentQuestion] === option
                                ? "border-[#B5838D] bg-[#E6B8C2]/40"
                                : "border-[#E6B8C2]/40 hover:bg-[#FBF3F0]"
                            }`}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={nextQuestion}
                disabled={!answers[currentQuestion]}
                className="mt-8 w-full py-3 rounded-full text-white font-medium
          bg-[#E6B8C2] hover:bg-[#B5838D] transition disabled:opacity-40"
            >
                {currentQuestion === questions.length - 1
                    ? "See My Routine"
                    : "Next"}
            </button>
        </div>
    );
}