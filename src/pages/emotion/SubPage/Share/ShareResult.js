const {Kakao, location} = window;

export const shareKakao = (title, imageUrl) => {
    const sharedUrl = location.href;

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: title,
            description: '나와 잘 맞는 식물 친구는?',
            imageUrl: imageUrl,
            link: {
                webUrl: sharedUrl,
                mobileWebUrl: sharedUrl,
            },
        },
        buttons: [
            {
                title: '나도 테스트 해보기',
                link: {
                    webUrl: sharedUrl,
                    mobileWebUrl: sharedUrl,
                },
            },
        ],
    });
};