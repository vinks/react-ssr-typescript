// @flow
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import css from './Features.module.css';

interface PropsT {
    t: (string: string) => string;
}

const Features = ({ t }: PropsT) => (
    <>
        <h2>{t('features')}</h2>
        <ul className={css.wrapper}>
            <li className={css.hot}>Webpack 4</li>
            <li className={css.hot}>Babel 7</li>
            <li className={css.hot}>ESLint 5</li>
            <li className={css.hot}>Flow Type</li>
            <li className={css.hot}>Jest 24</li>
            <li className={css.react}>React 16.x (latest), with Hooks!</li>
            <li>React Router 5</li>
            <li>Redux (+ Thunk)</li>
            <li>Immer</li>
            <li>Reselect</li>
            <li>React Helmet</li>
            <li>Express Webserver + Server Side Rendering</li>
            <li>{t('i18n-support')}</li>
            <li>CSS Modules</li>
            <li>PostCSS</li>
            <li>Prettier (incl. precommit-hook via lint-staged + husky)</li>
            <li>Hot Module Reloading (HMR)</li>
        </ul>
    </>
);

export default withTranslation()(Features);
