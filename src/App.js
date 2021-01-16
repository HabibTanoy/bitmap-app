import {Switch,Route } from "react-router-dom";
import './App.css';
import MainNav from './components/navbar/nav';
import PageOne from './components/iframe/pageOne';
import PageTwo from './components/iframe/pagetwo';
import PageThree from './components/iframe/pageThree';
import PageFour from './components/iframe/pageFour';
import PageFive from './components/iframe/pageFive'


function App() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route exact path="/" component={PageOne} />
        <Route path="/bit-info" component={PageTwo} />
        <Route path="/bkoi-viz" component={PageThree} />
        <Route path="/bkoi-admin" component={PageFour} />
        {/* <Route path="/bit-geo" component={PageFive} /> */}
      </Switch>
    </div>
  );
}

export default App;
