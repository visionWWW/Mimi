import React from 'react';
import {shareKakao} from './ShareResult';

function TestResult() {

    const onKakaoClick = () => {
        shareKakao("제목","/images/100.png");
    };

    return (
        <div>
            <button onClick={onKakaoClick}>
                카카오톡으로 공유하기
            </button>
        </div>
    );
};

export default TestResult;