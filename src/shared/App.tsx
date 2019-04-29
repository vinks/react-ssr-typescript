import React, { MouseEvent } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLocale } from './store/app/actions';
import { NavLink, Switch, Route } from 'react-router-dom';
import routes from '../shared/routes';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import Features from './components/Features';
import css from './App.module.css';

interface PropsT {
    setLocale: typeof setLocale;
}

function App(props: PropsT) {
    const [t] = useTranslation();
    const setLanguage = React.useCallback((e: MouseEvent<HTMLButtonElement>) => {
        props.setLocale(e.currentTarget.value);
    }, []);
    return (
        <div className={css.wrapper}>
            <nav>
                <NavLink to="/page1">Page 1</NavLink>
                <NavLink to="/page2">Page 2</NavLink>
            </nav>

            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Switch>

            <Helmet defaultTitle="React SSR Starter" titleTemplate="%s – React SSR Starter" />

            <h1>
                <ReactLogo className={css.reactLogo} /> React + Express – SSR Starter
            </h1>

            <Features />

            <h2>{t('i18n-example')}</h2>
            <p>
                <button value="de_DE" onClick={setLanguage}>
                    Deutsch
                </button>
                <button value="en_US" onClick={setLanguage}>
                    English
                </button>
            </p>
        </div>
    );
}

const mapDispatchToProps = {
    setLocale,
};

export default connect(
    null,
    mapDispatchToProps
)(App);
