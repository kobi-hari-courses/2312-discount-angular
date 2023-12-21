import { GuessState } from "./guess-state.model";

export interface Guess {
    value: number;
    state: GuessState;
}