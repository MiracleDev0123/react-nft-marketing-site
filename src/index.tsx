import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import AboutUs from "./pages/About";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blogs/blog";
import Services from "./pages/Services";

AOS.init({
  duration: 600,
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route path="/blogs" component={Blogs} />
          <Route path="/blog" component={Blog} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/services/:service" component={Services} />
          <Route path="/services" component={Services} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
