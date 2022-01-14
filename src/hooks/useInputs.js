import React, { useState } from 'react';

function useInputs(initialForm) {
    const [ form, setForm ] = useState(initialForm); // form은 초기값, setForm은 업데이트 해준 값
    const onChange = e => {
        const { name, value } = e.target;
        // onChange 함수가 호출되면 form을 업데이트 해주겠다.
        setForm(form => ({
            ...form, // form은 그대로 두고
            [ name ] :value // name안에 들어가는 값들만 변경해주겠다.
        }));
    }
    const reset = () => setForm(initialForm); // 초기값이 반환되게 해주는 함수
    return [ form, onChange, reset ];
    // form이 App.js에 넘어가서 useInputs 배열의 첫번째 인덱스가 됨.
    // 그 첫번째 인덱스를 구조분해할당해서 { username, email }로 작성한거.
}

export default useInputs;