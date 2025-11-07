import { settingEasyData, settingHardData, settingMediumData, settingVeryEasyData } from "../assets/data/setting.data";
import type { ISetting } from "../intrfaces/setting.interface";
import { GameDifficulty } from "../types/game-difficulty.type";

export function calculateGameSetting(gameDifficulty: GameDifficulty): ISetting {

    switch (gameDifficulty) {
        case GameDifficulty.veryEasy:
            return { ...settingVeryEasyData};
        case GameDifficulty.easy:
            return { ...settingEasyData};
        case GameDifficulty.medium:
            return { ...settingMediumData};
        case GameDifficulty.hard:
            return { ...settingHardData};
        default:
            return { ...settingMediumData};
    }
}