export type Locale = string;

export interface LocaleState {
    locale: string;
}

interface SetLocaleAction {
    type: string;
    payload: Locale;
}

export type LocaleAction = SetLocaleAction;

export interface AppState {
    app: LocaleState;
}
