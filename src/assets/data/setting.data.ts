import { GameDifficulty } from "../../types/game-difficulty.type";

const settingMediumData = {
    difficulty: GameDifficulty.medium,
    numOfQuestions: 10,
    timeLimitOfQuestion: 30,
}

const settingHardData = {
    difficulty: GameDifficulty.hard,
    numOfQuestions: 10,
    timeLimitOfQuestion: 30,
}

const settingEasyData = {
    difficulty: GameDifficulty.easy,
    numOfQuestions: 10,
    timeLimitOfQuestion: 30,
}

const settingVeryEasyData = {
    difficulty: GameDifficulty.veryEasy,
    numOfQuestions: 10,
    timeLimitOfQuestion: 30,
}

export { settingMediumData, settingHardData, settingEasyData, settingVeryEasyData };