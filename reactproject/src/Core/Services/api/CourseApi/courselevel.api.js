import http from "../../interceptor";

export const getCourseLevel = async () => {
  try {
    const response = await http.get(`/CourseLevel/GetAllCourseLevel`);
    return response;
  } catch (error) {
    return [];
  }
};
