import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { authentication } from './components/authentication';
import HomePage from './components/HomePage/HomePage';
import SignInPage from './components/SignIn/SignInPage';
import SignUpPage from './components/SignIn/SignUpPage';
// import UserProfilePage from './components/UserProfilePage';
import NewCardPage from './components/UserCards/NewCardPage';
import UserCardsPage from './components/UserCards/UserCardsPage';
import PageNotFound from './components/PageNotFound';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route exact path ="/sign-in" component={SignInPage} />
		<Route exact path="/sign-up" component={SignUpPage} />
		{/* <Route path="/:user_id/profile" component={authentication(UserProfilePage)} /> */}
		<Route exact path="/card/new" component={authentication(NewCardPage)} />
		<Route exact path="/:user_id/cards" component={authentication(UserCardsPage)} />
		<Route component={PageNotFound} />
	</Switch>
);

export default Routes;