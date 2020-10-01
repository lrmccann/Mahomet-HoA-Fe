import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import News from "./pages/News";
import GuideLines from "./pages/GuideLines";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollTop";
import "bootstrap/dist/css/bootstrap.min.css";
// import { UserProvider } from "./utils/UserContext";
import "./App.css";


function App() {

  const [newUserData, setNewUserData] = useState({});


    const getNewUserData = (data) => {
      setNewUserData (newUserData=>{return newUserData = data})
    }
  console.log(getNewUserData)


return(
      <Router>
          <Route exact activeClassName path="/" component={HomePage} />
          <Route exact activeClassName  path="/homepage" component={HomePage} /> {/* shows slide show , great heading , small blurb about mahomet */}
          <Route exact activeClassName path="/aboutus" component={AboutUs} /> {/* memeber message && brainstorm, may delete and do all on homePage    */}
          <Route exact activeClassName  path="/signup" component={Signup} /> {/* generic sign up page, including whatever info is in the controller */}
          {/* <ScrollToTop> */}
            <Switch>
          <Route exact activeClassName  path="/profile" component={Profile} /> {/* displays your details, show your sign up date, upcoming meetings you have RSVP'd , your position, and any violations          */}
            </Switch>
          {/* </ScrollToTop> */}
          <Route exact activeClassName  path="/news" component={News} />  {/* upcoming events/meetings , updates on mahomet (maybe from an API if we're feeling fancy, daily mahomet gazette)          */}
          <Route exact activeClassName  path="/guidelines" component={GuideLines} /> {/*  guidelines?         */}
          <Route exact activeClassName  path="/contactus" component={ContactUs} />   {/*  basic contact form         */}    
      {/* <Footer /> */}
    </Router>


)

}


export default App;