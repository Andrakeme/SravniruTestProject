import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import OfferPageContainer from '../OfferPage/OfferPageContainer';
import OffersListContainer from '../offersList/OffersListContainer';

const MainPage = () => {
    return (
        <div>
            <Switch>
                <Route exact path={'/mainPage'}>
                    <OffersListContainer />
                </Route>
                <Route exact path={'/offerPage/:id'}>
                    <OfferPageContainer />
                </Route>
                <Redirect to={'/mainPage'} />
            </Switch>
        </div>
    )
}

export default MainPage