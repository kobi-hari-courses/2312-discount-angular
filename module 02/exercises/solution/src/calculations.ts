// calculations.ts

import { Shape } from "./shapes";


// Type for the shape calculator function
export type ShapeCalculator = (shape: Shape) => number;

// Function to calculate the area of a shape
export const calculateArea: ShapeCalculator = (shape) => {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * Math.pow(shape.radius, 2);
    case 'rectangle':
      return shape.width * shape.height;
    case 'triangle':
      return (shape.base * shape.height) / 2;
  }
};

// Function to calculate the circumference of a shape
export const calculateCircumference: ShapeCalculator = (shape) => {
  switch (shape.kind) {
    case 'circle':
      return 2 * Math.PI * shape.radius;
    case 'rectangle':
      return 2 * (shape.width + shape.height);
    case 'triangle':
      return shape.base + shape.height + Math.sqrt(Math.pow(shape.base, 2) + Math.pow(shape.height, 2));
  }
};
