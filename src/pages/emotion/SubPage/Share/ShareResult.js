const {Kakao, location} = window;
Kakao.init('e10cb9a4335edeaa5726b6ab8e6536b9');

export const shareKakao = (title, imageUrl) => {
    const sharedUrl = location.href;

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: title,
            description: '현재 내 감정 상태에 맞는 음식은?',
            imageUrl: imageUrl,
            link: {
                webUrl: sharedUrl,
                mobileWebUrl: sharedUrl,
            },
        },
        buttons: [
            {
                title: '감정 분석 결과 보러 가기 👀',
                link: {
                    webUrl: sharedUrl,
                    mobileWebUrl: sharedUrl,
                },
            },
        ],
    });
};