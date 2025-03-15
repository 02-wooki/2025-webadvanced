import React from 'react';
import Book from './Book';

const Library = () => {
  return (
    <div>
      <Book name="처음 만난 리액트" pages={300}></Book>
      <Book name="처음 만난 AWS" pages={400}></Book>
      <Book name="처음 만난 파이썬" pages={500}></Book>
    </div>
  );
};

export default Library;