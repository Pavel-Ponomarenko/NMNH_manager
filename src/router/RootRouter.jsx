import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import styles from "./RootRouter.module.css";

import { Converter } from "../components/Converter/";
import { Earnings } from "../components/Earnings/";
import { Spendings } from "../components/Spendings/";
import { MainPage } from "../components/MainPage/"

export function RootRouter() {
  return (
    <BrowserRouter>
      <div className = {styles.nav}>
        <Link className = {styles.nav__link} to="/" >Main page</Link>
        <Link className = {styles.nav__link} to="/earnings" >Earnings</Link>
        <Link className = {styles.nav__link} to="/spendings" >Spendings</Link>
        <Link className = {styles.nav__link} to="/converter" >Converter</Link>
      </div>
        <Switch>
          <Route exact={true} path="/">
            <MainPage />
          </Route>
          <Route exact={true} path="/earnings">
            <Earnings />
          </Route>
          <Route exact={true} path="/spendings">
            <Spendings />
          </Route>
          <Route exact={true} path="/converter">
            <Converter />
          </Route>
        </Switch>
      
    </BrowserRouter>
  );
}