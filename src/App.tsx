import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);

  const 클릭했을때_실행할함수 = () => setLike((prev) => !prev);

  const 좋아요또는취소버튼 = like ? (
    <button onClick={클릭했을때_실행할함수}>좋아요 취소</button>
  ) : (
    <button onClick={클릭했을때_실행할함수}>좋아요</button>
  )
  
  // let likeButton = <button onClick={클릭했을때_실행할함수}>좋아요</button>;
  // if (like === true) {
  //   likeButton = <button onClick={클릭했을때_실행할함수}>좋아요 취소</button>;
  // }

  return (
    <div>
      <h1>좋아요 버튼 만들기</h1>
      {좋아요또는취소버튼}
      {/* {likeButton} */}
    </div>
  );
}

export default App;
