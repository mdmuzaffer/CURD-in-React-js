import React from "react";
import About from "./component/pages/About";
import Blog from "./component/pages/Blog";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import Nave from "./layout/Nave";
import 'bootstrap/dist/css/bootstrap.min.css';
import pageNotfound from "./component/pages/404";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Insert from "./component/pages/Insert";
import Update from "./component/pages/Update";
import Delete from "./component/pages/Delete";

function App() {
  return (
      <>
      <Router>
        <Nave />
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route  exact path="/home" component={Home} />
            <Route  exact path="/about" component={About} />
            <Route  exact path="/blog" component={Blog} />
            <Route  exact path="/contact" component={Contact} />
            <Route  exact path="/insert" component={Insert} />
            <Route  exact path="/update/:id" component={Update} />
            <Route  exact path="/delete/:id" component={Delete} />
            <Route  component={pageNotfound} />
          </Switch>
        </Router>
      </>
  );
}

export default App;
