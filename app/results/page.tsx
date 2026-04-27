import ResultsClient from "./ResultsClient";
import { SkinAnswers } from "@/lib/skinProfile";

export default async function ResultsPage({
    searchParams,
}: {
    searchParams: Promise<Record<string, string>>;
}) {
    const params = await searchParams;

    const answers: SkinAnswers = {
        skin_type: params.skin_type,
        concerns: params.concerns,
        sensitivity: params.sensitivity,
        routine: params.routine,
        lifestyle: params.lifestyle,
    };

    return <ResultsClient answers={answers} />;
}
