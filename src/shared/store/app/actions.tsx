import { Locale, LocaleAction } from './types';

export const ActionTypes = {
    SETLOCALE: 'app/set-locale',
};

export const setLocale = (locale: Locale): LocaleAction => ({
    type: ActionTypes.SETLOCALE,
    payload: locale,
});
