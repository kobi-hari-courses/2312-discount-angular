export interface Joke {
    id:        number;
    text:      string;
    question?: string;
    answer?:   string;
    author:    string;
    created:   string;
    tags:      string[];
    rating:    number;
}
