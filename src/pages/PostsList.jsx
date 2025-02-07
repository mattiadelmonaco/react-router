// <h1 className="text-4xl text-center font-bold text-red-900">
//   I NOSTRI POST
// </h1>

import { useState, useEffect } from "react";

import axios from "axios";
import PostsList from "../components/PostsList";

export default function PostList() {
  const [postData, setPostData] = useState([]);

  // CRUD

  // index
  const fetchPosts = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPostData(res.data));
  };

  useEffect(fetchPosts, []);

  return (
    <section className="ms-container">
      <PostsList postData={postData} />
    </section>
  );
}
