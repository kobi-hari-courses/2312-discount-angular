import { Card } from "./card.model";

export interface Player {
    readonly name: string;
    readonly collectedPairs: Card[];
}