export const GameDifficulty = {
    veryEasy: 'veryEasy',
    easy: 'easy',
    medium: 'medium',
    hard: 'hard'
} as const;

export type GameDifficulty = typeof GameDifficulty[keyof typeof GameDifficulty];