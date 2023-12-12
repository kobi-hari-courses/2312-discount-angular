// shapes.ts

// Interfaces for specific shapes
export interface Circle {
    kind: 'circle';
    radius: number;
  }
  
  export interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
  }
  
  export interface Triangle {
    kind: 'triangle';
    base: number;
    height: number;
  }
  
  // Union type of the specific shapes
  export type Shape = Circle | Rectangle | Triangle;
  
  // Mapped type to extract the kind property values
  export type ShapeKind = Shape['kind'];
  