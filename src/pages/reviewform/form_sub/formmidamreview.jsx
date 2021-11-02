import Card from "react-bootstrap/Card";
import Hashtag from "../hashtag";
import WriteArea from "../textarea";
import Button from "react-bootstrap/Button";
import RadioBt from "../radioBt";


const RvForm = () => (
    <>
        <Card>
            <div style={{textAlign:"center"}}>
                <h4 style={{marginTop:"20px"}}>🍽 음식점 | 음식미담 🍽 </h4>
                <h6 style={{marginBottom:"20px"}}>어땠나요?</h6>
            </div>

            <h4 style={{textAlign:"center", marginTop:"50px"}}>만족도는 어떤가요?</h4>
            <RadioBt></RadioBt>

            <h4 style={{textAlign:"center", marginTop:"50px"}}>해당 음식점에 맞는 키워드를 알려주세요</h4>
            <Hashtag></Hashtag>

            <h4 style={{textAlign:"center",marginTop:"50px",marginBottom:"30px"}}>리뷰를 작성해주세요</h4>
            <WriteArea></WriteArea>
            <Button variant="outline-secondary" style={{display:"block",margin:"auto",marginTop:"30px",width:"300px",marginBottom:"30px"}} href="/review">업로드</Button>
        </Card>
    </>
);

export default RvForm;