export interface Cats {
    fetching: boolean;
    src: string | null;
    error: string | null;
}

export interface CatsState {
    fetching: boolean;
    src: string | null;
    error: string | null;
}

export interface CatsAction {
    type: string;
    payload: Cats;
}
