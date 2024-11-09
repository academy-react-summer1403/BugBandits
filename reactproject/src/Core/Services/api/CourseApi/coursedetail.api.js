import http from "../../interceptor";

export const getCourseDetail = async (courseId) => {
  try {
    const response = await http.get(
      `/Home/GetCourseDetails?CourseId=${courseId}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching course detail:", error);
    return null;
  }
};
