import http from "../../interceptor";

export const getCourseReplyCommnets = async (CourseId, CommentId) => {
  try {
    const response = await http.get(
      `/Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching reply:", error);
    return [];
  }
};

export const addReplyCourseComment = async (data) => {
  try {
    const response = await http.post(`/Course/AddReplyCourseComment`, data);
    console.log("Response from API:", response);
    return response;
  } catch (error) {
    console.error("Error adding reply:", error);
    return null;
  }
};
