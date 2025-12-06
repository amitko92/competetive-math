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
    startNewLevel: (level: IGameLevel, hearts: number, scorePointsToAdd: number) => void;
    updateLevel: (newGameLevel: IGameLevel) => void;
    updateGame: (newGame: IGame) => void;
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
    startNewLevel: (level: IGameLevel, hearts: number, scorePointsToAdd: number) => set((state) => ({
        ...state,
        game: {
            ...gameData,
            hearts: hearts,
            gameActiveState: GameActiveState.active,
            currentLevel: { ...level },
            gameScore: state.game.gameScore + scorePointsToAdd
        },
    })),
    updateLevel: (newGameLevel: IGameLevel) => set((state) => ({
        ...state,
        game: {
            ...gameData,
            gameActiveState: GameActiveState.active,
            currentLevel: { ...newGameLevel },
        },
    })),
    updateGame: (newGame: IGame) => set((state) => ({
        ...state,
        game: {
            ...newGame,
        },
    })),
}));

export const useSetCurrentPage = () => useAppStore((state) => state.setCurrentPage);
export const useApp = () => useAppStore((state) => state.app);
export const useGame = () => useAppStore((state) => state.game);
export const useSetUserInput = () => useAppStore((state) => state.setUserInput);
export const useStartNewLevel = () => useAppStore((state) => state.startNewLevel);
export const useUpdateLevel = () => useAppStore((state) => state.updateLevel);
export const useUpdateGame = () => useAppStore((state) => state.updateGame);

export default useAppStore;