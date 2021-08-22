import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Emotion from "./pages/emotion/Emotion";
import Main from "./pages/Main";
import Young from "./pages/young/Young";
import Review from "./pages/review/Review";
import Restaurant from "./pages/restaurant/Restaurtant";
import Allresults from "./pages/allresults/Result";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Main}></Route>
          <Route path="/emotion" component={Emotion}></Route>
          <Route exact path="/review" component={Review}></Route>
          <Route path="/survey" component={Young}></Route>
          <Route path="/restaurant" component={Restaurant}></Route>
          <Route path="/allresults" component={Allresults}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;