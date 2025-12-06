export const GameDifficulty = {
    veryEasy: 1,
    easy: 2,
    medium: 3,
    hard: 4,
} as const;

export type GameDifficulty = typeof GameDifficulty[keyof typeof GameDifficulty];

export function codeToTag(code: GameDifficulty): string {

    if (GameDifficulty.veryEasy === code)
        return 'very easy';

    if (GameDifficulty.easy === code)
        return 'easy';

    if (GameDifficulty.medium === code)
        return 'medium';

    if (GameDifficulty.hard === code)
        return 'hard';

    throw new Error('Illegal GameDifficulty code')
}