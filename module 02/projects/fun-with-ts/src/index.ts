import { calculateArea, calculateCircumference } from "./calculations";
import { createShapeReport } from "./report";
import { Shape } from "./shapes";

const shapes: Shape[] = [
    { kind: 'circle', radius: 10 }, 
    { kind: 'triangle', base: 4, height: 3 }, 
    { kind: 'rectangle', width: 6, height: 7}
]

const areas = createShapeReport(shapes, calculateArea);
for (const area of areas) {
    console.log(`area of ${area.kind} is ${area.value}`);    
}

const circums = createShapeReport(shapes, calculateCircumference);
for (const cir of circums) {
    console.log(`circumference of ${cir.kind} is ${cir.value}`);    
}
