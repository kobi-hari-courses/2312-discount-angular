import { Shape } from './shapes';

export type ShapeCalculator = (shape: Shape) => number;


export const calculateArea: ShapeCalculator = (shape: Shape): number => {
    switch (shape.kind) {
        case 'circle':
            return shape.radius * shape.radius * Math.PI;
        case 'rectangle':
            return shape.width * shape.height;
        case 'triangle':
            return shape.base * shape.height / 2;
    }
}

export const calculateCircumference: ShapeCalculator = (shape: Shape): number => {
    switch (shape.kind) {
        case 'circle':
            return 2 * shape.radius * Math.PI;
        case 'rectangle':
            return 2 * (shape.width + shape.height);
        case 'triangle':
            const yeter = Math.sqrt(shape.base * shape.base + shape.height * shape.height);
            return shape.base + shape.height + yeter;
    }
}