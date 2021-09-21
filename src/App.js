import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Emotion from "./pages/emotion/Emotion";
import Main from "./pages/Main";
import Young from "./pages/young/Young";
import Review from "./pages/review/Review";
import Restaurant from "./pages/restaurant/Restaurtant";
import Allresults from "./pages/allresults/Result";
import Reviewsee from "./pages/reviewsee/Reviewsee";
import SurveyIntro from "./pages/surveyIntro/surveyIntro";
import ReviewForm from "./pages/reviewform/ReviewForm";
import ReviewCheck from "./pages/reviewcheck/reviewCheck";
import FullHappy from "./pages/emotion/SubPage/First";
import EightHappy from "./pages/emotion/SubPage/Second";
import SixtyFiveHappy from "./pages/emotion/SubPage/Third";
import HalfHappy from "./pages/emotion/SubPage/Fourth";
import TwentyFiveHappy from "./pages/emotion/SubPage/Fifth";
import TenHappy from "./pages/emotion/SubPage/Sixth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/emotion" component={Emotion}></Route>
            <Route path="/emotion/full-happy" component={FullHappy}></Route>
            <Route path="/emotion/80-happy" component={EightHappy}></Route>
            <Route path="/emotion/65-happy" component={SixtyFiveHappy}></Route>
            <Route path="/emotion/half-happy" component={HalfHappy}></Route>
            <Route path="/emotion/25-happy" component={TwentyFiveHappy}></Route>
            <Route path="/emotion/10-happy" component={TenHappy}></Route>
          <Route exact path="/review" component={Review}></Route>
          <Route path="/survey" component={Young}></Route>
          <Route exact path="/restaurant" component={Restaurant}></Route>
          <Route path="/allresults" component={Allresults}></Route>
          <Route path="/review/check" component={ReviewCheck}></Route>
          <Route exact path="/review/:see" component={Reviewsee}></Route>
          <Route path="/review/see/form" component={ReviewForm}></Route>
          <Route path="/surveyIntro" component={SurveyIntro}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
