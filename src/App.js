import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Emotion from "./pages/emotion/Emotion";
import Main from "./pages/Main";
import Young from "./pages/young/Young";
import Review from "./pages/review/Review";
import Restaurant_10 from "./pages/restaurant/subpage/Restaurtant_10";
import Restaurant_25 from "./pages/restaurant/subpage/Restaurtant_25";
import Restaurant_50 from "./pages/restaurant/subpage/Restaurtant_50";
import Restaurant_65 from "./pages/restaurant/subpage/Restaurtant_65";
import Restaurant_80 from "./pages/restaurant/subpage/Restaurtant_80";
import Restaurant_100 from "./pages/restaurant/subpage/Restaurtant_100";
import Allresults from "./pages/allresults/Result";
import Reviewsee from "./pages/reviewsee/Reviewsee";
import ReviewB1 from "./pages/reviewsee/sub_page/B1All";
import ReviewCome from "./pages/reviewsee/sub_page/ComeAll";
import ReviewMidam from "./pages/reviewsee/sub_page/MidamAll";
import SurveyIntro from "./pages/surveyIntro/surveyIntro";
import ReviewForm from "./pages/reviewform/ReviewForm";
import ReviewFormB1 from "./pages/reviewform/sub/b1Form";
import ReviewFormCome from "./pages/reviewform/sub/comeForm";
import ReviewFormMidam from "./pages/reviewform/sub/midamForm";
import ReviewCheck from "./pages/reviewcheck/reviewView";
import FullHappy from "./pages/emotion/SubPage/First";
import EightHappy from "./pages/emotion/SubPage/Second";
import SixtyFiveHappy from "./pages/emotion/SubPage/Third";
import HalfHappy from "./pages/emotion/SubPage/Fourth";
import TwentyFiveHappy from "./pages/emotion/SubPage/Fifth";
import TenHappy from "./pages/emotion/SubPage/Sixth";
import SignUp from './pages/sign-up/SignUp';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/sign-up" component={SignUp}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/emotion" component={Emotion}></Route>
            <Route path="/emotion/full-happy" component={FullHappy}></Route>
            <Route path="/emotion/80-happy" component={EightHappy}></Route>
            <Route path="/emotion/65-happy" component={SixtyFiveHappy}></Route>
            <Route path="/emotion/half-happy" component={HalfHappy}></Route>
            <Route path="/emotion/25-happy" component={TwentyFiveHappy}></Route>
            <Route path="/emotion/10-happy" component={TenHappy}></Route>
          <Route exact path="/review" component={Review}></Route>
          <Route path="/survey" component={Young}></Route>

          <Route exact path="/restaurant/100" component={Restaurant_100}></Route>
          <Route exact path="/restaurant/80" component={Restaurant_80}></Route>
          <Route exact path="/restaurant/65" component={Restaurant_65}></Route>
          <Route exact path="/restaurant/50" component={Restaurant_50}></Route>
          <Route exact path="/restaurant/25" component={Restaurant_25}></Route>
          <Route exaet path="/restaurant/10" component={Restaurant_10}></Route>
          
          <Route path="/allresults" component={Allresults}></Route>
          <Route path="/review/check/:id" component={ReviewCheck}></Route>
          <Route exact path="/review/:see" component={Reviewsee}></Route>
            <Route path="/review/:see/B1" component={ReviewB1}></Route>
            <Route path="/review/:see/come" component={ReviewCome}></Route>
            <Route path="/review/:see/midam" component={ReviewMidam}></Route>
          <Route exact path="/review/see/form" component={ReviewForm}></Route>
            <Route path="/review/see/form/B1" component={ReviewFormB1}></Route>
            <Route path="/review/see/form/come" component={ReviewFormCome}></Route>
            <Route path="/review/see/form/midam" component={ReviewFormMidam}></Route>
          <Route path="/surveyIntro" component={SurveyIntro}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
