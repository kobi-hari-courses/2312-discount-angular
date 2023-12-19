import { GuessState } from "../models/guess-state.model";

export function calcGuessState(guess: number, secret: number): GuessState {
    if (guess === secret) return 'Exact';
    else if (guess > secret) return 'Too High'
    else return 'Too Low';
}