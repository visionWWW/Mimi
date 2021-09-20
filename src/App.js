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
