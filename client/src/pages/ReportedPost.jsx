import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { clearPostAction, getPostAction } from "../redux/actions/postActions";
import { useSelector, useDispatch } from "react-redux";
import CommonLoading from "../components/loader/CommonLoading";
import CommentSidebar from "../components/post/CommentSidebar";

const ReportedPost = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const postId = location.state.postId;

  useEffect(() => {
    dispatch(getPostAction(postId));
    return () => {
      dispatch(clearPostAction());
    };
  }, [dispatch, postId]);

  const post = useSelector((state) => state.posts?.post);

  if (!post)
    return (
      <div className="col-span-3 flex h-screen items-center justify-center">
        <CommonLoading />
      </div>
    );

  return (
    <>
      

      <CommentSidebar comments={post.comments} />
    </>
  );
};

export default ReportedPost;
