import http from "../../interceptor";

export const getCourseCommnets = async (CourseId) => {
  try {
    const response = await http.get(`/Course/GetCourseCommnets/${CourseId}`);
    return response;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

export const addcomment = async (data) => {
  try {
    const result = await http.post("/Course/AddCommentCourse", data);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
