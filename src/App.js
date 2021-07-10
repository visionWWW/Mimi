import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Emotion from "./pages/emotion/Emotion";
import Main from "./pages/Main";
import Young from "./pages/young/Young";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/emotion" component={Emotion}></Route>
          <Route path="/young" component={Young}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
