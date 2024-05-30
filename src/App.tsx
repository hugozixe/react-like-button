import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);

  const 좋아요_클릭했을때_실행할함수 = () => {
    // 여기는 좋아요 버튼을 클릭했을 때 실행되는 코드들인데,
    // 싫어요 누른 상태라면
    if (dislike === true) {
      //싫어요 안 누른 상태로 바꿔야지
      setDisLike(false);
    }
    setLike(!like); //true로 하면 안 됨
  };
  const 싫어요_눌렀을때_실행할함수 = () => {
    // 여기는 싫어요 버튼을 클릭했을 때 실행되는 코드들인데,
    // 좋아요 누른 상태라면
    if (like === true) {
      // 좋아요 안 누른 상태로 바꿔야지
      setLike(false);
    }
    setDisLike(!dislike); //true로 하면 안 됨
  };

  const 좋아요또는취소버튼 = like ? (
    <button onClick={좋아요_클릭했을때_실행할함수}>좋아요 취소</button>
  ) : (
    <button onClick={좋아요_클릭했을때_실행할함수}>좋아요</button>
  );

  const 싫어요또는취소버튼 = dislike ? (
    <button onClick={싫어요_눌렀을때_실행할함수}>싫어요 취소</button>
  ) : (
    <button onClick={싫어요_눌렀을때_실행할함수}>싫어요</button>
  );

  // let likeButton = <button onClick={좋아요가_눌렸을때_실행할함수}>좋아요</button>;
  // if (like === true) {
  //   likeButton = <button onClick={좋아요가_눌렸을때_실행할함수}>좋아요 취소</button>;
  // }

  // let 싫어요버튼 = <button onClick={싫어요가_눌렸을때_실행할함수}>싫어요</button>;
  // if (like === true) {
  //   싫어요버튼 = <button onClick={싫어요가_눌렸을때_실행할함수}>싫어요 취소</button>;
  // }

  return (
    <div>
      <h1>좋아요/싫어요 버튼 구현</h1>
      {좋아요또는취소버튼}
      {싫어요또는취소버튼}
      {/* {likeButton} */}
    </div>
  );
}

export default App;
