import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login/index";
import Home from "../pages/Home/index";
import Repos from "../pages/Repos";
import Followers from "../pages/Follower";
import Following from "../pages/Following";
import Details from "../pages/Details";
import { BottomNavBar } from "../components/BottomNavBar";

export default function MainRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <>
      <Route path="/home" component={Home} />
      <Route path="/repos" component={Repos} />
      <Route path="/follower" component={Followers} />
      <Route path="/following" component={Following} />
      <Route path="/details/:login" component={Details} />
      <BottomNavBar/>
      </>
    </Switch>
  );
}
