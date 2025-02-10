import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SinglePostComp from "../components/SinglePostComp";

export default function SinglePost() {
  const [singlePostData, setSinglePostData] = useState({});
  const { id } = useParams();

  const fetchPost = () => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => setSinglePostData(res.data));
  };

  useEffect(fetchPost, [id]);

  return (
    <div className="ms-container flex items-center flex-col text-white">
      <SinglePostComp singlePostData={singlePostData} />
    </div>
  );
}
