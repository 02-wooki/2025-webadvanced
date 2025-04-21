import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: '손영빈',
    contents: '안녕하세요, 손영빈입니다',
  },
  {
    name: '박세현',
    contents: '저도 리액트 배우고 싶어요',
  },
  {
    name: '강동협',
    contents: '술 내놔',
  },
]

export default function CommentList(props) {
  return (
    <>
    {comments.map((comment) => {
      return (
        <Comment name={comment.name} comment={comment.contents} />
      );
    })}
    </>
  );
}