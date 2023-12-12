// report.ts

import { Shape } from './shapes';
import { ShapeCalculator } from './calculations';

// Type alias for a shape report record
export type ShapeReportRecord = {
  shape: Shape;
  value: number;
};

// Type alias for the shape report
export type ShapeReport = ShapeReportRecord[];

// Service function to create a shape report
export function createShapeReport(
  shapes: Shape[],
  calculateFn: ShapeCalculator
): ShapeReport {
  return shapes.map((shape) => ({
    shape: shape,
    value: Number(calculateFn(shape).toFixed(2)),
  }));
}
