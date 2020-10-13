import React from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import Artists from "./pages/Artists";
import ArtistCollection from "./pages/ArtistCollection";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route exact path="/artists">
          <Artists />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/artists/:artistName">
          <ArtistCollection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
