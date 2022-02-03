import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));

const About = React.lazy(() => import("./components/pages/About"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Checkout = React.lazy(() => import("./components/pages/Checkout"));
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Legal = React.lazy(() => import("./components/pages/Legal"));
const Error = React.lazy(() => import("./components/pages/Error"));
const Menuone = React.lazy(() => import("./components/pages/Menuone"));
const Menutwo = React.lazy(() => import("./components/pages/Menutwo"));
const Menuitemone = React.lazy(() => import("./components/pages/Menuitemone"));
const Menuitemtwo = React.lazy(() => import("./components/pages/Menuitemtwo"));
const Locations = React.lazy(() => import("./components/pages/Locations"));
const Contact = React.lazy(() => import("./components/pages/Contact"));

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Preloader />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/legal" component={Legal} /> */}
          <Route path="/error" component={Error} />
          <Route path="/menu-v1" component={Menuone} />
          <Route path="/menu-v2" component={Menutwo} />
          <Route path="/menu-item-v1/:id" exact component={props => (<Menuitemone {...props} key={window.location.pathname} />)} />
          <Route path="/menu-item-v2/:id" exact component={props => (<Menuitemtwo {...props} key={window.location.pathname} />)} />
          <Route path="/locations" component={Locations} />
          <Route path="/contact" component={Contact} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
