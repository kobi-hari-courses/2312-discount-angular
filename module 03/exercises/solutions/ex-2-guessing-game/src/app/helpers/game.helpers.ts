import { GuessState } from "../models/guess-state.model";

export function calcGuessState(guess: number, secret: number): GuessState {
    if (guess === secret) return 'Exact';
    if (guess > secret) return 'Too High';
    return 'Too Low';
  }
