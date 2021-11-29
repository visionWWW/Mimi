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

import ReviewGamoon from "./pages/reviewsee/sub_page/GamoonAll";
import ReviewGatmael from "./pages/reviewsee/sub_page/GatmaelAll";
import ReviewDear from "./pages/reviewsee/sub_page/DearAll";
import ReviewMonster from "./pages/reviewsee/sub_page/MonsterAll";
import ReviewMasi from "./pages/reviewsee/sub_page/MasiAll";

import ReviewBurgerIn from "./pages/reviewsee/sub_page/BurgerInAll";
import ReviewSaigong from "./pages/reviewsee/sub_page/SaigongAll";
import ReviewShaochan from "./pages/reviewsee/sub_page/ShaochanAll";
import ReviewSundarae from "./pages/reviewsee/sub_page/SundaraeAll";
import ReviewSinna from "./pages/reviewsee/sub_page/SinnaAll";

import ReviewAboutShabu from "./pages/reviewsee/sub_page/AboutShabuAll";

import ReviewEll from "./pages/reviewsee/sub_page/EllAll";
import ReviewTokyo from "./pages/reviewsee/sub_page/TokyoAll";
import ReviewMansion from "./pages/reviewsee/sub_page/MensionAll";
import ReviewPho36 from "./pages/reviewsee/sub_page/Pho36All";
import ReviewHyo from "./pages/reviewsee/sub_page/HyoAll";

import SurveyIntro from "./pages/surveyIntro/surveyIntro";
import ReviewForm from "./pages/reviewform/ReviewForm";
import ReviewFormB1 from "./pages/reviewform/sub/b1Form";
import ReviewFormCome from "./pages/reviewform/sub/comeForm";
import LoginFormMidam from "./pages/reviewform/form_sub/formmidam";
import ReviewFormMidam from "./pages/reviewform/form_sub/formmidamreview";

import ReviewFormGamoon from "./pages/reviewform/form_sub/FormGamoonReview";
import ReviewFormMasi from "./pages/reviewform/form_sub/FormMasiReview";
import ReviewFormDear from "./pages/reviewform/form_sub/FormDearReview";
import ReviewFormMonster from "./pages/reviewform/form_sub/FormMonsterReview";
import ReviewFormGatmael from "./pages/reviewform/form_sub/FormGatmaelReview";

import ReviewFormBurgerin from "./pages/reviewform/form_sub/FormBurgerinReview";
import ReviewFormSaigong from "./pages/reviewform/form_sub/FormSaigongReview";
import ReviewFormShaochan from "./pages/reviewform/form_sub/FormShaochanReview";
import ReviewFormSundarae from "./pages/reviewform/form_sub/FormSundaraeReview";
import ReviewFormSinna from "./pages/reviewform/form_sub/FormSinnaReview";

import ReviewFormEll from "./pages/reviewform/form_sub/FormEllReview";
import ReviewFormTokyo from "./pages/reviewform/form_sub/FormTokyoReview";
import ReviewFormMansion from "./pages/reviewform/form_sub/FormMensionReview";
import ReviewFormPho36 from "./pages/reviewform/form_sub/FormPho36Review";
import ReviewFormHyo from "./pages/reviewform/form_sub/FormHyoReview";

import ReviewFormtest from "./pages/reviewform/form_sub/B1_Form";
import ReviewCheck from "./pages/reviewcheck/reviewList.tsx";
import FullHappy from "./pages/emotion/SubPage/First";
import EightHappy from "./pages/emotion/SubPage/Second";
import SixtyFiveHappy from "./pages/emotion/SubPage/Third";
import HalfHappy from "./pages/emotion/SubPage/Fourth";
import TwentyFiveHappy from "./pages/emotion/SubPage/Fifth";
import TenHappy from "./pages/emotion/SubPage/Sixth";
import Signup from './pages/login/Signup';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/signup" component={Signup}></Route>
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

            <Route path="/review/:see/gamoon" component={ReviewGamoon}></Route>
            <Route path="/review/:see/gatmael" component={ReviewGatmael}></Route>
            <Route path="/review/:see/dear" component={ReviewDear}></Route>
            <Route path="/review/:see/monster" component={ReviewMonster}></Route>
            <Route path="/review/:see/masi" component={ReviewMasi}></Route>
            <Route path="/review/:see/aboutShabu" component={ReviewAboutShabu}></Route>

            <Route path="/review/:see/burgerin" component={ReviewBurgerIn}></Route>
            <Route path="/review/:see/saigong" component={ReviewSaigong}></Route>
            <Route path="/review/:see/shaochan" component={ReviewShaochan}></Route>
            <Route path="/review/:see/sundarae" component={ReviewSundarae}></Route>
            <Route path="/review/:see/sinna" component={ReviewSinna}></Route>

            <Route path="/review/:see/ell" component={ReviewEll}></Route>
            <Route path="/review/:see/tokyo" component={ReviewTokyo}></Route>
            <Route path="/review/:see/mansion" component={ReviewMansion}></Route>
            <Route path="/review/:see/pho36" component={ReviewPho36}></Route>
            <Route path="/review/:see/hyo" component={ReviewHyo}></Route>

          <Route exact path="/review/see/form" component={ReviewForm}></Route>
            <Route path="/review/see/form/B1" component={ReviewFormB1}></Route>
            <Route path="/review/see/form/test" component={ReviewFormtest}></Route>
            <Route path="/review/see/form/come" component={ReviewFormCome}></Route>
            <Route path="/review/see/form/midam" component={LoginFormMidam}></Route>
            <Route path="/review/see/form/midam-write" component={ReviewFormMidam}></Route>

            <Route path="/review/see/form/gamoon-write" component={ReviewFormGamoon}></Route>
            <Route path="/review/see/form/gatmael-write" component={ReviewFormGatmael}></Route>
            <Route path="/review/see/form/masi-write" component={ReviewFormMasi}></Route>
            <Route path="/review/see/form/dear-write" component={ReviewFormDear}></Route>
            <Route path="/review/see/form/monster-write" component={ReviewFormMonster}></Route>

            <Route path="/review/see/form/burgerin-write" component={ReviewFormBurgerin}></Route>
            <Route path="/review/see/form/saigong-write" component={ReviewFormSaigong}></Route>
            <Route path="/review/see/form/shaochan-write" component={ReviewFormShaochan}></Route>
            <Route path="/review/see/form/sundarae-write" component={ReviewFormSundarae}></Route>
            <Route path="/review/see/form/sinna-write" component={ReviewFormSinna}></Route>

            <Route path="/review/see/form/aboutShabu-write" component={ReviewAboutShabu}></Route>

            <Route path="/review/see/form/ell-write" component={ReviewFormEll}></Route>
            <Route path="/review/see/form/tokyo-write" component={ReviewFormTokyo}></Route>
            <Route path="/review/see/form/mansion-write" component={ReviewFormMansion}></Route>
            <Route path="/review/see/form/pho36-write" component={ReviewFormPho36}></Route>
            <Route path="/review/see/form/hyo-write" component={ReviewFormHyo}></Route>

          <Route path="/surveyIntro" component={SurveyIntro}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
