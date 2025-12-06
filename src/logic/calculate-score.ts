import type { ISetting } from "../intrfaces/setting.interface";

function calculateScore(
    setting: ISetting,
    streak: number,
    remiensSeconds: number,
): number {

    const { bonusBase, numToRemoveFromTimeRemienQuestion } = setting;

    const score = bonusBase + streak + Math.max(0, remiensSeconds - numToRemoveFromTimeRemienQuestion);
    return score;
}


export default calculateScore;