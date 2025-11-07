import { create } from 'zustand';
import type { ISetting } from '../intrfaces/setting.interface';
import { settingMediumData } from '../assets/data/setting.data';
import { GameDifficulty } from '../types/game-difficulty.type';
import { calculateGameSetting } from '../logic/calculate-game-setting';

type SettingState = {
    setting: ISetting;
    setGameDifficulty: (difficulty: GameDifficulty) => void;
}

const useSettingStore = create<SettingState>((set) => ({
    setting: settingMediumData,
    setGameDifficulty: (difficulty: GameDifficulty) => set((state) => {

        return {
            ...state,
            setting: calculateGameSetting(difficulty)
        };
    }),
}));

export const useSetGameDifficulty = () => useSettingStore((state) => state.setGameDifficulty);
export const useSetting = () => useSettingStore((state) => state.setting);


export default useSettingStore;