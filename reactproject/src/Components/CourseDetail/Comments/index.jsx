import React, { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import { LuReplyAll } from "react-icons/lu";
import { getCourseCommnets } from "../../../Core/Services/api/CourseApi/coursecomment.api";
import { Reply } from "../Reply";
import { useParams } from "react-router-dom";
import { getCourseReplyCommnets } from "../../../Core/Services/api/CourseApi/coursereply.api";
import { Button } from "@material-tailwind/react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState({});
  const [showReplies, setShowReplies] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");
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

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
  };

  const submitReply = async () => {
    if (replyContent.trim()) {
      const newReply = {
        id: Date.now(),
        content: replyContent,
        author: "You",
        insertDate: new Date().toISOString(),
      };
      handleReplyAdded(replyingTo, newReply);
      setReplyContent("");
      setReplyingTo(null);
    }
  };

  useEffect(() => {
    if (courseId) {
      getData(courseId);
    }
  }, [courseId]);

  return (
    <div className="w-full h-auto mt-10">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex flex-col w-auto h-auto bg-soft_grey dark:bg-[#353c4b] border rounded-xl mb-9"
        >
          <div className="flex flex-row">
            <img
              src={comment.pictureAddress.replace("\\", "/")}
              alt="User profile"
              className="w-20 h-20 border rounded-xl bg-white relative bottom-6 right-5"
            />
            <div className="flex flex-col sm:flex-row pt-4 sm:gap-5 mr-10 text-ocean_blue font-semibold dark:text-white">
              <h1 className="font-iranSans text-sm whitespace-nowrap sm:text-base">
                {comment.author}
              </h1>
              <h1 className="font-kalamehNum">
                {new Date(comment.insertDate).toLocaleDateString("fa-IR")}
              </h1>
              <h1 className="font-kalamehNum">
                {new Date(comment.insertDate).toLocaleTimeString("fa-IR")}
              </h1>
            </div>
          </div>
          <div className="mx-5 dark:text-white">{comment.describe}</div>
          <div
            dir="ltr"
            className="text-ocean_blue flex flex-row gap-2 p-3 dark:text-white"
          >
            <button onClick={() => handleReply(comment.id)}>
              <LuReplyAll className="w-5 h-5" />
            </button>
            <span
              className="font-iranSans cursor-pointer"
              onClick={() => handleToggleReplies(comment.id)}
            >
              {showReplies[comment.id] ? "نمایش کمتر" : "نمایش بیشتر"}
            </span>
            <IoHeart className="w-5 h-5" />
            <span className="font-kalamehNum">{comment.likeCount}</span>
          </div>

          {replyingTo === comment.id && (
            <div className="flex flex-col gap-2 p-3">
              <textarea
                className="w-full h-20 border rounded-lg p-2"
                placeholder="نظرت را بنویس ..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
              />
              <Button
                className="mt-2 bg-ocean_blue text-white font-iranSans"
                onClick={submitReply}
              >
                ثبت
              </Button>
            </div>
          )}

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
// import React, { useEffect, useState } from "react";
// import { IoHeart, IoHeartOutline } from "react-icons/io5";
// import { IoThumbsDown, IoThumbsDownOutline } from "react-icons/io5";
// import { LuReplyAll } from "react-icons/lu";
// import { getCourseCommnets } from "../../../Core/Services/api/CourseApi/coursecomment.api";
// import { Reply } from "../Reply";
// import { useParams } from "react-router-dom";
// import { getCourseReplyCommnets } from "../../../Core/Services/api/CourseApi/coursereply.api";
// import { Button } from "@material-tailwind/react";

// const Comments = () => {
//   const [comments, setComments] = useState([]);
//   const [replies, setReplies] = useState({});
//   const [showReplies, setShowReplies] = useState({});
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [replyContent, setReplyContent] = useState("");
//   const { id: courseId } = useParams();

//   const getData = async (CourseId) => {
//     const items = await getCourseCommnets(CourseId);
//     setComments(
//       items.map((item) => ({
//         ...item,
//         isLiked: false,
//         isDisliked: false,
//         dislikeCount: 0, // Initialize dislikeCount
//       }))
//     );
//   };

//   const fetchReplies = async (commentId) => {
//     const replyData = await getCourseReplyCommnets(courseId, commentId);
//     setReplies((prevReplies) => ({
//       ...prevReplies,
//       [commentId]: replyData,
//     }));
//   };

//   const handleToggleReplies = (commentId) => {
//     if (!showReplies[commentId]) {
//       fetchReplies(commentId);
//     }
//     setShowReplies((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
//   };

//   const handleReplyAdded = (commentId, newReply) => {
//     setReplies((prev) => ({
//       ...prev,
//       [commentId]: [...(prev[commentId] || []), newReply],
//     }));
//     setShowReplies((prev) => ({ ...prev, [commentId]: true })); // Show replies
//   };

//   // const handleReplyAdded = (commentId, newReply) => {
//   //   setReplies((prev) => ({
//   //     ...prev,
//   //     [commentId]: [...(prev[commentId] || []), newReply],
//   //   }));
//   // };

//   const handleReply = (commentId) => {
//     setReplyingTo(commentId);
//   };

//   const submitReply = async () => {
//     if (replyContent.trim()) {
//       const newReply = {
//         id: Date.now(),
//         content: replyContent,
//         author: "You",
//         insertDate: new Date().toISOString(),
//       };
//       handleReplyAdded(replyingTo, newReply); // Add reply immediately
//       setReplyContent("");
//       setReplyingTo(null);
//     }
//   };

//   const toggleLike = (commentId) => {
//     setComments((prev) =>
//       prev.map((comment) => {
//         if (comment.id === commentId) {
//           const isLiked = !comment.isLiked;
//           const likeCount = comment.likeCount + (isLiked ? 1 : -1);
//           return { ...comment, isLiked, likeCount };
//         }
//         return comment;
//       })
//     );
//   };

//   const toggleDislike = (commentId) => {
//     setComments((prev) =>
//       prev.map((comment) => {
//         if (comment.id === commentId) {
//           const isDisliked = !comment.isDisliked;
//           const dislikeCount = comment.dislikeCount + (isDisliked ? 1 : -1);
//           return { ...comment, isDisliked, dislikeCount };
//         }
//         return comment;
//       })
//     );
//   };

//   useEffect(() => {
//     if (courseId) {
//       getData(courseId);
//     }
//   }, [courseId]);

//   return (
//     <div className="w-2/3 h-auto mt-10">
//       {comments.map((comment) => (
//         <div
//           key={comment.id}
//           className="flex flex-col w-auto h-auto bg-soft_grey dark:bg-[#353c4b] border rounded-xl mb-7"
//         >
//           <div className="flex flex-row">
//             <img
//               src={comment.pictureAddress.replace("\\", "/")}
//               alt="User profile"
//               className="w-20 h-20 border rounded-xl bg-white relative bottom-6 right-5"
//             />
//             <div className="flex flex-row pt-4 gap-5 mr-10 text-ocean_blue font-semibold dark:text-white">
//               <h1 className="font-iranSans">{comment.author}</h1>
//               <h1 className="font-kalamehNum">
//                 {new Date(comment.insertDate).toLocaleDateString("fa-IR")}
//               </h1>
//               <h1 className="font-kalamehNum">
//                 {new Date(comment.insertDate).toLocaleTimeString("fa-IR")}
//               </h1>
//             </div>
//           </div>
//           <div className="mr-10 dark:text-white">{comment.describe}</div>
//           <div
//             dir="ltr"
//             className="text-ocean_blue flex flex-row gap-3 p-3 dark:text-white"
//           >
//             <button onClick={() => handleReply(comment.id)}>
//               <LuReplyAll className="w-5 h-5" />
//             </button>
//             <span
//               className="font-iranSans cursor-pointer"
//               onClick={() => handleToggleReplies(comment.id)}
//             >
//               {showReplies[comment.id] ? "نمایش کمتر" : "نمایش بیشتر"}
//             </span>

//             <button
//               onClick={() => toggleLike(comment.id)}
//               className="flex items-center gap-1"
//             >
//               {comment.isLiked ? (
//                 <IoHeart className="w-5 h-5 text-red-500" />
//               ) : (
//                 <IoHeartOutline className="w-5 h-5" />
//               )}
//               <span className="font-kalamehNum">{comment.likeCount}</span>
//             </button>

//             <button
//               onClick={() => toggleDislike(comment.id)}
//               className="flex items-center gap-1"
//             >
//               {comment.isDisliked ? (
//                 <IoThumbsDown className="w-5 h-5 text-blue-500" />
//               ) : (
//                 <IoThumbsDownOutline className="w-5 h-5" />
//               )}
//               <span className="font-kalamehNum">{comment.dislikeCount}</span>
//             </button>
//           </div>

//           {replyingTo === comment.id && (
//             <div className="flex flex-col gap-2 p-3">
//               <textarea
//                 className="w-full h-20 border rounded-lg p-2"
//                 placeholder="نظرت را بنویس ..."
//                 value={replyContent}
//                 onChange={(e) => setReplyContent(e.target.value)}
//               />
//               <Button
//                 className="mt-2 bg-ocean_blue text-white font-iranSans"
//                 onClick={submitReply}
//               >
//                 ثبت
//               </Button>
//             </div>
//           )}

//           {showReplies[comment.id] && (
//             <Reply
//               replies={replies[comment.id] || []}
//               courseId={courseId}
//               onReplyAdded={(newReply) =>
//                 handleReplyAdded(comment.id, newReply)
//               }
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export { Comments };
