import { Color } from "../models/color.model";

export function randomColor(): Color {
    const r = randomRange(0, 255);
    const g = randomRange(0, 255);
    const b = randomRange(0, 255);

    return {r, g, b}
}

export function randomRange(min: number, max: number): number {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

export function distanceBetweenColors(clr1: Color, clr2: Color): number {
    return Math.abs(clr1.r - clr2.r) 
        + Math.abs(clr1.g - clr2.g) 
        + Math.abs(clr1.b - clr2.b)

}