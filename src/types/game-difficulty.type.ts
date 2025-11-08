export const GameDifficulty = {
    veryEasy: 1,
    easy: 2,
    medium: 3,
    hard: 4,
} as const;

export type GameDifficulty = typeof GameDifficulty[keyof typeof GameDifficulty];