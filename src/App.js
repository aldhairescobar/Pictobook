import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import Artists from "./pages/Artists";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/artists">
          <Artists />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
