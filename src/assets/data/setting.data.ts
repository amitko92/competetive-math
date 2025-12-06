import type { ISetting } from "../../intrfaces/setting.interface";
import { GameDifficulty } from "../../types/game-difficulty.type";

const settingVeryEasyData: ISetting = {
    difficulty: GameDifficulty.veryEasy,
    numOfQuestions: 6,
    timeLimitOfQuestion: 30,
    startMin: 1,
    startMax: 10,
    maxStartMax: 500,
    additionPercentagePerLevel: 10,
    numToRemoveFromTimeRemienQuestion: 27,
    bonusBase: 10,
    maxHearts: 4,
}

const settingEasyData: ISetting = {
    difficulty: GameDifficulty.easy,
    numOfQuestions: 7,
    timeLimitOfQuestion: 22,
    startMin: 1,
    startMax: 15,
    maxStartMax: 1000,
    additionPercentagePerLevel: 17,
    numToRemoveFromTimeRemienQuestion: 7,
    bonusBase: 12,
    maxHearts: 4,
}

const settingMediumData: ISetting = {
    difficulty: GameDifficulty.medium,
    numOfQuestions: 8,
    timeLimitOfQuestion: 15,
    startMin: 1,
    startMax: 20,
    maxStartMax: 1500,
    additionPercentagePerLevel: 20,
    numToRemoveFromTimeRemienQuestion: 7,
    bonusBase: 15,
    maxHearts: 4,
}

const settingHardData: ISetting = {
    difficulty: GameDifficulty.hard,
    numOfQuestions: 10,
    timeLimitOfQuestion: 10,
    startMin: 1,
    startMax: 40,
    maxStartMax: 2000,
    additionPercentagePerLevel: 20,
    numToRemoveFromTimeRemienQuestion: 0,
    bonusBase: 17,
    maxHearts: 4,
}


export { settingMediumData, settingHardData, settingEasyData, settingVeryEasyData };