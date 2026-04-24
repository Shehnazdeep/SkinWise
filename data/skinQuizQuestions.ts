
export type Question = {
    id: string;
    question: string;
    subtext?: string;
    options: {
        label: string;
        value: string;
        description?: string;
    }[];
};

export const skinQuizQuestions: Question[] = [
    {
        id: "skin_type",
        question: "How does your skin feel by midday?",
        subtext: "Think about a typical day, a few hours after your morning routine.",
        options: [
            { label: "Tight & dry", value: "dry", description: "Flaky patches, pulling sensation" },
            { label: "Shiny all over", value: "oily", description: "Visible shine on forehead, nose & cheeks" },
            { label: "Mixed — oily T-zone", value: "combination", description: "Oily centre, normal or dry on the sides" },
            { label: "Comfortable & balanced", value: "normal", description: "No extreme dryness or shine" },
        ],
    },
    {
        id: "concerns",
        question: "Which concerns bother you most?",
        subtext: "Select the one that feels most urgent right now.",
        options: [
            { label: "Acne & breakouts", value: "acne", description: "Blackheads, whiteheads, or cysts" },
            { label: "Dryness & dehydration", value: "dryness", description: "Flaking, dullness, or tightness" },
            { label: "Oiliness", value: "oiliness", description: "Excess sebum and enlarged pores" },
            { label: "Aging & wrinkles", value: "aging", description: "Fine lines and loss of firmness" },
            { label: "Hyperpigmentation", value: "pigmentation", description: "Dark spots or uneven skin tone" },
            { label: "Sensitivity & redness", value: "sensitivity", description: "Reactive, easily irritated skin" },
        ],
    },
    {
        id: "sensitivity",
        question: "How does your skin react to new products?",
        subtext: "This helps us suggest gentler or stronger actives.",
        options: [
            { label: "Very reactive", value: "very_sensitive", description: "Burns, itches, or breaks out easily" },
            { label: "Somewhat sensitive", value: "sensitive", description: "Occasional mild reactions" },
            { label: "Usually tolerates well", value: "normal_sensitivity", description: "Rarely reacts to new products" },
            { label: "Very resilient", value: "resilient", description: "Can handle strong actives with no issue" },
        ],
    },
    {
        id: "routine",
        question: "What does your current routine look like?",
        subtext: "Be honest — there's no wrong answer here.",
        options: [
            { label: "No routine", value: "none", description: "I just use water, or whatever's around" },
            { label: "Basics only", value: "basic", description: "Cleanser and maybe a moisturiser" },
            { label: "A few steps", value: "moderate", description: "Cleanser, toner, serum, moisturiser" },
            { label: "Full routine", value: "full", description: "Multiple actives, SPF, eye cream, etc." },
        ],
    },
    {
        id: "lifestyle",
        question: "How would you describe your lifestyle?",
        subtext: "Your environment shapes your skin as much as genetics.",
        options: [
            { label: "Urban & busy", value: "urban", description: "High pollution, stress, minimal sleep" },
            { label: "Active & outdoors", value: "active", description: "Lots of sun exposure, sport, sweat" },
            { label: "Desk-bound", value: "desk", description: "Dry air, screen time, irregular sleep" },
            { label: "Relaxed & balanced", value: "balanced", description: "Good sleep, nutrition, low stress" },
        ],
    },
];