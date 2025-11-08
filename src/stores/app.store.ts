import { create } from 'zustand';
import type { IApp } from '../intrfaces/app.interface';
import appData from '../assets/data/app.data';
import type { CurrentPage } from '../types/current-page.type';
import type { IGame, IGameLevel, IQuestion } from '../intrfaces/game.interface';
import gameData from '../assets/data/game.data';
import { GameActiveState } from '../types/game-active-state.type';


type AppState = {
    app: IApp;
    game: IGame;
    setCurrentPage: (page: CurrentPage) => void;
    setUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    resetGame: () => void;
    startNewGame: (firstLevel: IGameLevel, timeRemaining: number) => void;
}

const useAppStore = create<AppState>((set) => ({
    app: { ...appData },
    game: { ...gameData },
    setCurrentPage: (page: CurrentPage) => set((state) => ({
        ...state,
        game: { ...gameData },
        app: {
            ...state.app,
            currentPage: page,
        }
    })),
    setUserInput: (e: React.ChangeEvent<HTMLInputElement>) => set((state) => ({
        ...state,
        game: {
            ...state.game,
            currentLevel: {
                ...state.game.currentLevel,
                questions: state.game.currentLevel.questions.map((q: IQuestion, index: number) => {
                    if (index === state.game.currentLevel.currentQuestionIndex) {
                        return {
                            ...q,
                            userAnswer: e.currentTarget.value,
                        };
                    }

                    return q;
                })
            }
        }
    })),
    resetGame: () => set((state) => ({
        ...state,
        game: { ...gameData },
    })),
    startNewGame: (firstLevel: IGameLevel, timeRemaining: number) => set((state) => ({
        ...state,
        game: {
            ...gameData,
            gameActiveState: GameActiveState.active,
            timeRemaining: timeRemaining,
            currentLevel: {...firstLevel}
        },
    })),
}));

export const useSetCurrentPage = () => useAppStore((state) => state.setCurrentPage);
export const useApp = () => useAppStore((state) => state.app);
export const useGame = () => useAppStore((state) => state.game);
export const useSetUserInput = () => useAppStore((state) => state.setUserInput);
export const useStartNewGame = () => useAppStore((state) => state.startNewGame);

export default useAppStore;