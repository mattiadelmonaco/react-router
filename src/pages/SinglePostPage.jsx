import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SinglePostComp from "../components/SinglePostComp";

export default function SinglePost() {
  const [singlePostData, setSinglePostData] = useState({});
  const [postsLength, setPostsLength] = useState(0);
  const { id } = useParams();

  // to know array's length
  const lengthPosts = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPostsLength(res.data.length));
  };

  // Show - to get single post
  const fetchPost = () => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setSinglePostData(res.data));
    lengthPosts();
  };

  useEffect(fetchPost, [id]);

  return (
    <div className="ms-container flex items-center flex-col text-white">
      <SinglePostComp
        singlePostData={singlePostData}
        postsLength={postsLength}
      />
    </div>
  );
}
