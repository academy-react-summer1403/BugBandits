import http from "../../interceptor";

export const getCourseList = async () => {
  try {
    const response = await http.get(`/Home/GetCoursesTop?Count=9`);
    return response.data;
  } catch (error) {
    return [];
  }
};
