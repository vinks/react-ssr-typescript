/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { connect } from 'react-redux';
import { getLocale } from '../store/app/selectors';

import de_DE from './locales/de_DE.json';
import en_US from './locales/en_US.json';
import { AppState } from '../store/app/types';

const resources = {
    de_DE,
    en_US,
};

i18next.init({
    fallbackLng: 'en_US',
    fallbackNS: ['translation'],
    resources,
    parseMissingKeyHandler: (missing) => {
        if (process.env.NODE_ENV === 'development') {
            console.warn('MISSING TRANSLATION:', missing);
        }
        return missing;
    },
});

i18next.languages = ['de_DE', 'en_US'];

interface StateFromProps {
    locale: string;
}

class I18N extends React.PureComponent<StateFromProps> {
    componentDidMount() {
        i18next.changeLanguage(this.props.locale);
    }

    componentDidUpdate(prevProps: StateFromProps) {
        const { locale: newLocale } = this.props;
        const { locale: oldLocale } = prevProps;

        if (oldLocale !== newLocale) {
            i18next.changeLanguage(newLocale);
        }
    }

    render() {
        return <I18nextProvider i18n={i18next}>{this.props.children}</I18nextProvider>;
    }
}

const mapStateToProps = (state: AppState) => ({
    locale: getLocale(state),
});

export default withRouter(
    connect<StateFromProps, void, void>(
        mapStateToProps,
        null,
        null,
        { pure: false }
    )(I18N)
);
/* eslint-enable @typescript-eslint/camelcase */
