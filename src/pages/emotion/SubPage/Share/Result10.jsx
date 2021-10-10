import React from 'react';
import {shareKakao} from './ShareResult';

function TestResult() {

    const background="/images/kakao-talk.png"
    const onKakaoClick = () => {
        shareKakao("10% 기쁜 상태인 당신에게 어울리는 음식은?","https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fee409f57-db66-4d52-b3bb-2e6a3aa46640%2F006.png?table=block&id=d53b41b0-f170-407d-a0c9-bfbf35a1f7f3&spaceId=4145db40-ad1d-42f4-9f54-6e512b13bafb&width=2000&userId=fc5b8e01-4d70-4ab8-8078-e67683ebc863&cache=v2");
    };

    return (
        <div>
            <button
                style={{
                    background:"white",
                    border:"0",
                }}
            >
                <div
                    style={{
                        marginTop: "30px",
                        marginBottom:"30px",
                        fontSize: "17px",
                        fontWeight:"400"
                    }}
                >친구에게 결과 공유하기😎</div>
                <img src={background} alt="my image" onClick={onKakaoClick}
                     style={{
                         border: "none",
                         width:"10%",
                     }}
                /></button>

        </div>
    );
};

export default TestResult;