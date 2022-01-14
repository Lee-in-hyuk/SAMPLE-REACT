
import './App.css';
import { useState, useRef } from 'react';
import Counter from './components/Counter';

function App() {
  // useState공부
  // const [ text, setText ] = useState('금요일');
  // console.log(useState('금요일')); // useState는 배열형태로 찍히고, 0번째 index에는 '금요일'이 찍힘.

  // useRef공부
  // const num = useRef(6);
  const usernameIn = useRef();
  const onClick = () => {
    // const inputValue = usernameIn.current.value;
    // console.log(inputValue);
    console.log(usernameIn.current.value);  // 비동기라서 console을 위에 써줘야 콘솔에 찍히고, 밸류를 빈칸으로 바꾼거보다 아래에 쓰면 콘솔에도 빈칸으로 찍힘.
    usernameIn.current.value = "";
    usernameIn.current.focus(); // 버튼 클릭하면 input을 비워주고, 포커스를 input으로 주겠다.
  }
  // const click = () => {
  //   setText("내일은 토요일");
  // }
  return (
    <div className="App">
      {/* <button onClick={click}>클릭</button> */}
      {/* <h2>useRef 값은 current라는 키로 접근</h2>
      <p>{num.current}</p> */}
      {/* num만 쓰면 current키값을 쓰라는 경고창과 함께 오류가뜸 */}
      <p>
        <input name='username' ref={usernameIn}/>
        <button onClick={onClick}>인풋의 value가져오기</button>
      </p>
      <Counter/>
    </div>
  );
}

export default App;
