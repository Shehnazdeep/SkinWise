export type SkinAnswers = {
    skin_type?: string;
    concerns?: string;
    eye_concern?: string;
    sensitivity?: string;
    routine?: string;
    lifestyle?: string;
};

export type RoutineStep = {
    step: string;
    product: string;
    why: string;
};

export type SkinProfile = {
    skinType: string;
    skinTypeLabel: string;
    concern: string;
    concernLabel: string;
    sensitivity: string;
    routineLevel: string;
    lifestyle: string;
    keyIngredients: string[];
    morning: RoutineStep[];
    evening: RoutineStep[];
};

function getMorningSteps(answers: SkinAnswers): RoutineStep[] {
    const { skin_type, concerns, sensitivity, routine } = answers;

    const isGentle = sensitivity === "very_sensitive" || sensitivity === "sensitive";

    const isBeginner = routine === "none" || routine === "basic";

    const cleanser: RoutineStep =
        skin_type === "oily" || skin_type === "combination"
            ? { step: "Cleanser", product: "Foaming cleanser Or Cleanser with an active ingrediant", why: "Removes overnight oil without stripping moisture" }
            : { step: "Cleanser", product: "Foaming cleanser", why: "Gently cleanses while preserving your skin barrier" };

    const toner: RoutineStep =
        concerns === "acne"
            ? { step: "Toner", product: "BHA toner (e.g. salicylic acid 0.5–1%)", why: "Keeps pores clear and reduces breakout-causing bacteria" }
            : { step: "Toner", product: "Hydrating toner (e.g. hyaluronic acid mist)", why: "Preps skin to absorb the next steps better" };

    const serum: RoutineStep = (() => {
        if (concerns === "pigmentation") return { step: "Serum", product: "Vitamin C serum (10–15%)", why: "Brightens dark spots and protects against UV-induced damage" };
        if (concerns === "aging") return { step: "Serum", product: "Peptides", why: "Supports collagen production and firms skin over time" };
        if (concerns === "acne") return { step: "Serum", product: "Niacinamide serum (5–10%)", why: "Regulates sebum and calms redness without irritation" };
        if (concerns === "dryness") return { step: "Serum", product: "Hyaluronic acid serum", why: "Draws moisture into the skin for all-day hydration" };
        return { step: "Serum", product: "Niacinamide serum (5%)", why: "Balances skin tone and strengthens the barrier" };
    })();

    const moisturiser: RoutineStep =
        skin_type === "oily"
            ? { step: "Moisturiser", product: "Lightweight gel moisturiser", why: "Hydrates without clogging pores or adding shine" }
            : skin_type === "dry"
                ? { step: "Moisturiser", product: "Rich cream moisturiser", why: "Locks in moisture and prevents tightness throughout the day" }
                : { step: "Moisturiser", product: "Balanced lotion or fluid", why: "Keeps combination skin comfortable without overloading the T-zone" };
    const eyeCream: RoutineStep = (() => {
        if (answers.eye_concern === "dark_circles") {
            return {
                step: "Eye cream",
                product: "Caffeine or Vitamin C eye cream",
                why: "Helps reduce dark circles and brighten under-eye tone"
            };
        }
        if (answers.eye_concern === "wrinkles") {
            return {
                step: "Eye cream",
                product: "Retinol or peptide eye cream",
                why: "Smooths fine lines and boosts collagen production"
            };
        }
        if (answers.eye_concern === "puffiness") {
            return {
                step: "Eye cream",
                product: "Caffeine cooling eye gel",
                why: "Reduces puffiness and improves circulation"
            };
        }
        return {
            step: "Eye cream",
            product: "Hydrating eye cream",
            why: "Maintains hydration in the delicate eye area"
        };
    })();

    const spf: RoutineStep = { step: "SPF", product: "Broad-spectrum SPF 30–50", why: "The most important anti-aging and pigmentation step — non-negotiable" };

    if (isBeginner) return [cleanser, moisturiser, eyeCream, spf];
    if (isGentle) return [cleanser, toner, moisturiser, spf];
    return [cleanser, toner, serum, eyeCream, moisturiser, spf];
}

function getEveningSteps(answers: SkinAnswers): RoutineStep[] {
    const { skin_type, concerns, sensitivity, routine } = answers;
    const isGentle = sensitivity === "very_sensitive" || sensitivity === "sensitive";
    const isBeginner = routine === "none" || routine === "basic";

    const cleanser: RoutineStep =
        skin_type === "oily" || skin_type === "combination"
            ? { step: "Cleanser", product: "Double cleanse — oil cleanser then foaming cleanser", why: "Removes SPF and makeup thoroughly, then deep cleans pores" }
            : { step: "Cleanser", product: "Gentle foaming cleanser", why: "Removes the day without disrupting your moisture barrier overnight" };

    const treatment: RoutineStep = (() => {
        if (isGentle) return { step: "Treatment", product: "Centella asiatica or Ceramide serum", why: "Soothes and repairs the barrier while you sleep" };
        if (concerns === "acne") return { step: "Treatment", product: "Retinol (0.025–0.05%) or Benzoyl peroxide spot treatment", why: "Speeds cell turnover and clears blocked pores overnight" };
        if (concerns === "aging") return { step: "Treatment", product: "Retinol serum (0.05–0.1%)", why: "Boosts collagen and smooths fine lines while you sleep" };
        if (concerns === "pigmentation") return { step: "Treatment", product: "Alpha Arbutin or Azelaic Acid serum", why: "Fades dark spots gradually with consistent overnight use" };
        return { step: "Treatment", product: "AHA exfoliant (2–3x per week)", why: "Resurfaces skin and improves texture and tone over time" };
    })();

    const moisturiser: RoutineStep =
        skin_type === "dry"
            ? { step: "Moisturiser", product: "Rich night cream or sleeping mask", why: "Repairs the barrier and prevents overnight water loss" }
            : { step: "Moisturiser", product: "Hydrating gel-cream", why: "Seals in your treatment layer without feeling heavy" };

    const eyeCream: RoutineStep = (() => {
        if (answers.eye_concern === "dark_circles") {
            return {
                step: "Eye cream",
                product: "Caffeine or Vitamin C eye cream",
                why: "Helps reduce dark circles and brighten under-eye tone"
            };
        }
        if (answers.eye_concern === "wrinkles") {
            return {
                step: "Eye cream",
                product: "Retinol or peptide eye cream",
                why: "Smooths fine lines and boosts collagen production"
            };
        }
        if (answers.eye_concern === "puffiness") {
            return {
                step: "Eye cream",
                product: "Caffeine cooling eye gel",
                why: "Reduces puffiness and improves circulation"
            };
        }
        return {
            step: "Eye cream",
            product: "Hydrating eye cream",
            why: "Maintains hydration in the delicate eye area"
        };
    })();
    if (isBeginner) return [cleanser, moisturiser, eyeCream];
    if (isGentle) return [cleanser, treatment, moisturiser, eyeCream];
    return [cleanser, treatment, moisturiser, eyeCream];
}

function getKeyIngredients(answers: SkinAnswers): string[] {
    const { concerns, sensitivity, skin_type } = answers;
    const ingredients: string[] = [];

    if (concerns === "acne") ingredients.push("Niacinamide", "Salicylic Acid", "Benzoyl Peroxide");
    else if (concerns === "dryness") ingredients.push("Hyaluronic Acid", "Ceramides", "Squalane");
    else if (concerns === "aging") ingredients.push("Retinol", "Peptides", "Vitamin C");
    else if (concerns === "pigmentation") ingredients.push("Vitamin C", "Alpha Arbutin", "Azelaic Acid");
    else if (concerns === "oiliness") ingredients.push("Niacinamide", "BHA", "Zinc");
    else if (concerns === "sensitivity") ingredients.push("Centella Asiatica", "Ceramides", "Allantoin");
    else ingredients.push("Niacinamide", "Hyaluronic Acid", "SPF");

    if (sensitivity === "very_sensitive" || sensitivity === "sensitive") {
        if (!ingredients.includes("Ceramides")) ingredients.push("Ceramides");
    }
    if (skin_type === "oily" && !ingredients.includes("Niacinamide")) ingredients.push("Niacinamide");

    return ingredients.slice(0, 4);
}

const skinTypeLabels: Record<string, string> = {
    dry: "Dry", oily: "Oily", combination: "Combination", normal: "Normal",
};
const concernLabels: Record<string, string> = {
    acne: "Acne & Breakouts", dryness: "Dryness & Dehydration",
    oiliness: "Oiliness", aging: "Aging & Fine Lines",
    pigmentation: "Hyperpigmentation", sensitivity: "Sensitivity & Redness",
};

// ── Main export ────────────────────────────────────────────────────────────

export function buildSkinProfile(answers: SkinAnswers): SkinProfile {
    return {
        skinType: answers.skin_type ?? "normal",
        skinTypeLabel: skinTypeLabels[answers.skin_type ?? "normal"] ?? "Normal",
        concern: answers.concerns ?? "dryness",
        concernLabel: concernLabels[answers.concerns ?? "dryness"] ?? "General Care",
        sensitivity: answers.sensitivity ?? "normal_sensitivity",
        routineLevel: answers.routine ?? "basic",
        lifestyle: answers.lifestyle ?? "balanced",
        keyIngredients: getKeyIngredients(answers),
        morning: getMorningSteps(answers),
        evening: getEveningSteps(answers),
    };
}
