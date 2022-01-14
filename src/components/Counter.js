import React,{ useReducer } from 'react';

function Counter() {
    // 리듀서 생성
    function reducer(state,action){
        switch(action.type) {
            case "INCREASE":
                return state+1;
            case "DECREASE":
                return state-1;
            default:
                return state;
        }
    }
    // useReducer 실행되면 배열로 리턴해줌 - num은 dispatch되고 난 뒤의 값을 담는 index, dispatch는 리듀서를 실행시킴.
    const [ num, dispatch ] = useReducer(reducer,0);

    // 액션생성함수 - 리듀서가 실행될 때 어떤 액션을 사용할지 정함.
    const increase = () => {
        dispatch({
            type : "INCREASE"
        })
    }
    const decrease = () => {
        dispatch({
            type : "DECREASE"
        })
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
}

export default Counter;