import React, { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import { LuReplyAll } from "react-icons/lu";
import { getCourseCommnets } from "../../../Core/Services/api/CourseApi/coursecomment.api";
import { Reply } from "../Reply";
import { useParams } from "react-router-dom";
import { getCourseReplyCommnets } from "../../../Core/Services/api/CourseApi/coursereply.api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState({});
  const [showReplies, setShowReplies] = useState({});
  const { id: courseId } = useParams();

  const getData = async (CourseId) => {
    const items = await getCourseCommnets(CourseId);
    setComments(items);
  };

  const fetchReplies = async (commentId) => {
    const replyData = await getCourseReplyCommnets(courseId, commentId);
    setReplies((prevReplies) => ({
      ...prevReplies,
      [commentId]: replyData,
    }));
  };

  const handleToggleReplies = (commentId) => {
    if (!showReplies[commentId]) {
      fetchReplies(commentId);
    }
    setShowReplies((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  };

  const handleReplyAdded = (commentId, newReply) => {
    setReplies((prev) => ({
      ...prev,
      [commentId]: [...(prev[commentId] || []), newReply],
    }));
  };

  useEffect(() => {
    if (courseId) {
      getData(courseId);
    }
  }, [courseId]);

  return (
    <div className="w-2/3 h-auto mt-10">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex flex-col w-auto h-auto bg-soft_grey dark:bg-[#353c4b] border rounded-xl mb-7"
        >
          <div className="flex flex-row">
            <img
              src={comment.pictureAddress.replace("\\", "/")}
              alt="User profile"
              className="w-20 h-20 border rounded-xl bg-white relative bottom-6 right-5"
            />
            <div className="flex flex-row pt-4 gap-5 mr-10 text-ocean_blue font-semibold dark:text-white">
              <h1 className="font-iranSans">{comment.author}</h1>
              <h1 className="font-kalamehNum">
                {new Date(comment.insertDate).toLocaleDateString("fa-IR")}
              </h1>
              <h1 className="font-kalamehNum">
                {new Date(comment.insertDate).toLocaleTimeString("fa-IR")}
              </h1>
            </div>
          </div>
          <div className="mr-10 dark:text-white">{comment.describe}</div>
          <div
            dir="ltr"
            className="text-ocean_blue flex flex-row gap-2 p-3 dark:text-white"
          >
            <button onClick={() => handleToggleReplies(comment.id)}>
              <LuReplyAll className="w-5 h-5" />
            </button>
            <IoHeart className="w-5 h-5" />
            <span className="font-kalamehNum">{comment.likeCount}</span>
          </div>

          {showReplies[comment.id] && (
            <Reply
              replies={replies[comment.id] || []}
              courseId={courseId}
              onReplyAdded={(newReply) =>
                handleReplyAdded(comment.id, newReply)
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};

export { Comments };
