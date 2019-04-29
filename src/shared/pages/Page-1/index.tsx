import React from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../../store/cats/actions';
import { CatsState } from '../../store/cats/types';

interface PropsT {
    fetchingCat: boolean;
    catError: string | null;
    catSrc: string | null;
    fetchCats: typeof fetchCats;
}

const Page = ({ fetchingCat, catError, catSrc, fetchCats }: PropsT) => (
    <div>
        {catSrc}
        {catSrc ? (
            <div>
                <img src={catSrc} className="cat-pic" alt="A pic of the bestest kitty cat evar!" />
                <p className="App-intro">Keep clicking for new cats</p>
            </div>
        ) : (
            <div>
                <p className="App-intro">Replace the logo with a cat!</p>
            </div>
        )}

        {catError && <div>{catError}</div>}

        {fetchingCat ? (
            <button disabled>Fetching...</button>
        ) : (
            <button onClick={fetchCats}>Request a Cat</button>
        )}
    </div>
);

Object.assign(Page, { serverFetch: fetchCats });

const mapDispatchToProps = {
    fetchCats,
};

const mapStateToProps = ({ cats }: { cats: CatsState }) => ({
    fetchingCat: cats.fetching,
    catError: cats.error,
    catSrc: cats.src,
});

/* tslint:disable-next-line */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);
