import React, {useEffect} from 'react';
import initialize from './lib/initialize';

const App = () => {
    useEffect(() => {
        initialize();
    }, []);
    // 프로젝트가 준비되면 초기화 작업

    return (
        <button></button>
    );
};

export default App;