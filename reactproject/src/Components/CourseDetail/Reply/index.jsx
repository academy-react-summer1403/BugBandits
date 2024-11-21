import React, { useState } from "react";
import { IoHeart } from "react-icons/io5";
import { LuReplyAll } from "react-icons/lu";
import { addReplyCourseComment } from "../../../Core/Services/api/CourseApi/coursereply.api";
import { Button } from "@material-tailwind/react";

const Reply = ({ replies, courseId, onReplyAdded }) => {
  const [replyText, setReplyText] = useState("");
  const [isReplyingTo, setIsReplyingTo] = useState(null);

  const handleAddReply = async (parentId) => {
    if (!replyText.trim()) return;

    const newReply = {
      CourseId: courseId,
      CommentId: parentId,
      Title: "Reply",
      Describe: replyText,
    };
    console.log("Sending reply data:", newReply);
    const addedReply = await addReplyCourseComment(newReply);
    if (addedReply) {
      onReplyAdded(addedReply);
      setReplyText("");
      setIsReplyingTo(null);
    }
  };

  return (
    <div className="w-auto h-auto mt-5 ml-10 border">
      {replies.map((reply) => (
        <div
          key={reply.id}
          className="flex flex-col w-auto h-auto bg-cloud_grey dark:bg-[#252c3b] relative right-5 rounded-lg mb-4 p-4"
        >
          <div className="flex flex-row py-2">
            <img
              src={reply.pictureAddress.replace("\\", "/")}
              alt="User profile"
              className="w-14 h-14 border rounded-lg bg-white relative bottom-4 right-3"
            />
            <div className="flex flex-row pt-2 gap-4 mr-8 text-ocean_blue font-semibold dark:text-white">
              <h1 className="font-iranSans">{reply.author}</h1>
              <h1 className="font-kalamehNum">
                {new Date(reply.insertDate).toLocaleDateString("fa-IR")}
              </h1>
              <h1 className="font-kalamehNum">
                {new Date(reply.insertDate).toLocaleTimeString("fa-IR")}
              </h1>
            </div>
          </div>
          <div className="mr-8 dark:text-white">{reply.describe}</div>
          <button
            className="text-ocean_blue mt-2 flex items-center gap-2"
            onClick={() => setIsReplyingTo(reply.id)}
          >
            <LuReplyAll className="w-5 h-5" /> پاسخ
          </button>

          {isReplyingTo === reply.id && (
            <div className="mt-4">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="نظرت را بنویس ... "
                className="w-full p-2 border rounded-md dark:bg-[#353c4b] dark:text-white"
              />
              <Button
                className="mt-2 px-4 py-2 bg-ocean_blue text-white rounded-md font-iranSans"
                onClick={() => handleAddReply(reply.id)}
              >
                ثبت
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { Reply };
