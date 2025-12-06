export const GameActiveState = {
    active: 'active',
    betweenLevels: 'betweenLevels',
    finshed: 'finshed',
    start: 'start'
} as const;

export type GameActiveState = typeof GameActiveState[keyof typeof GameActiveState];