import React from 'react';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={HomePage} exact={true}></Route>
        <Route path="/portfolio" component={PortfolioPage} exact={true}></Route>
        <Route path="/portfolio/:id" component={PortfolioItemPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;