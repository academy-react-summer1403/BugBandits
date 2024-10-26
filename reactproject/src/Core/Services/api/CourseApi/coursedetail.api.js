import http from "../../interceptor";

export const getCourseDetail = async (courseId) => {
  try {
    const response = await http.get(
      `/Home/GetCourseDetail?courseId=${courseId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching course detail:", error);
    return null;
  }
};
