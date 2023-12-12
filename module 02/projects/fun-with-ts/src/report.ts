import { ShapeCalculator } from "./calculations";
import { Shape, ShapeKind } from "./shapes";

export interface ShapeReport  {
    kind: ShapeKind;
    value: number;
}

export function createShapeReport(shapes: Shape[], func: ShapeCalculator): ShapeReport[] {
    const res: ShapeReport[] = [];

    for (const shape of shapes) {
        res.push({
            kind: shape.kind, 
            value: func(shape)
        });
    }

    return res;
}