import React, { useEffect, useState } from "react";

export default function FetchData(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data.slice(0, 5)));
  }, [])

  return (
    <ul>
      {data.map(post => {
        return (
          <li key={post.id}>{post.title}</li>
        );
      })}
    </ul>
  );
}