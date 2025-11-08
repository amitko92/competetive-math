export const CurrentPage = {
    game: 'game',
    setting: 'setting',
    scoreboard: 'scoreboard',
    about: 'about',
} as const;

export type CurrentPage = typeof CurrentPage[keyof typeof CurrentPage];