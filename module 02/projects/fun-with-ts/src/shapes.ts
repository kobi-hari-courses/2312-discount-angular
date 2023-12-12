export interface Rectangle {
    readonly kind: 'rectangle';
    readonly width: number;
    readonly height: number;
}

export interface Triangle {
    readonly kind: 'triangle';
    readonly base: number;
    readonly height: number;

}

export interface Circle {
    readonly kind: 'circle';
    readonly radius: number;
}

export type Shape = Circle | Triangle | Rectangle;
export type ShapeKind = Shape['kind'];