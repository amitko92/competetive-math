export const MathOperator = {
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/',
    mod: '%'
} as const;

export type MathOperator = typeof MathOperator[keyof typeof MathOperator];