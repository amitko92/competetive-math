export const MathOperator = {
    plus: '+',
    minus: '-',
    power: '*',
    division: '/',
    mod: '%'
} as const;

export type MathOperator = typeof MathOperator[keyof typeof MathOperator];