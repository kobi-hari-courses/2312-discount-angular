// index.ts

import { Shape } from './shapes';
import { calculateArea, calculateCircumference } from './calculations';
import { createShapeReport, ShapeReport } from './report';

// Create some sample shapes
const shapes: Shape[] = [
  { kind: 'circle', radius: 5 },
  { kind: 'rectangle', width: 10, height: 8 },
  { kind: 'triangle', base: 6, height: 4 },
];

// Calculate area report
const areaReport: ShapeReport = createShapeReport(shapes, calculateArea);

console.log('Area Report:');
for (const { shape, value } of areaReport) {
  console.log(`${shape.kind}: Area = ${value}`);
}

// Calculate circumference report
const circumferenceReport: ShapeReport = createShapeReport(
  shapes,
  calculateCircumference
);

console.log('\nCircumference Report:');
for (const { shape, value } of circumferenceReport) {
  console.log(`${shape.kind}: Circumference = ${value}`);
}
