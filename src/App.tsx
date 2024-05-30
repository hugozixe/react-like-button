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
  );

  let 싫어요버튼 = <button onClick={클릭했을때_실행할함수}>싫어요</button>;
  if (like === true) {
    싫어요버튼 = <button onClick={클릭했을때_실행할함수}>싫어요 취소</button>;
  }

  // let likeButton = <button onClick={클릭했을때_실행할함수}>좋아요</button>;
  // if (like === true) {
  //   likeButton = <button onClick={클릭했을때_실행할함수}>좋아요 취소</button>;
  // }

  return (
    <div>
      <h1>좋아요/싫어요 버튼 구현</h1>
      {좋아요또는취소버튼}{싫어요버튼}
      {/* {likeButton} */}
    </div>
  );
}

export default App;
