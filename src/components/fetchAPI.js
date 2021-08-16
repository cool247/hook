import React, { useState, useEffect } from "react";
import axios from "axios";

let count = 0;
const FetchAPI = () => {
  const [post, setPost] = useState([]);
  const [IDFromInput, setIDFromInput] = useState(1);
  const [IDFromButton, setIDFromButton] = useState(1);

  console.log(count + 1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${IDFromButton}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [IDFromButton]);

  return (
    <div>
      <form>
        <input
          style={{ color: "tomato" }}
          value={IDFromInput}
          onChange={(e) => setIDFromInput(e.target.value)}
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setIDFromButton(IDFromInput);
          }}
        >
          search
        </button>
        <p>{post.body}</p>

        {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul> */}
      </form>
    </div>
  );
};

export default FetchAPI;
