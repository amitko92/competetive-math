export const GameActiveState = {
    active: 'active',
    betweenLevels: 'betweenLevels',
    finsh: 'finsh',
    start: 'start'
} as const;

export type GameActiveState = typeof GameActiveState[keyof typeof GameActiveState];