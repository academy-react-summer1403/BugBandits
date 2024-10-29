import http from "../../interceptor";

export const getTeacherList = async () => {
  try {
    const response = await http.get(`/Course/TeacherCourseList`);
    return response.data;
  } catch (error) {
    return [];
  }
};