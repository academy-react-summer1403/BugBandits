import http from "../../interceptor";

export const getTeacherList = async () => {
  try {
    const response = await http.get(`/Home/GetTeachers`);
    return response.data;
  } catch (error) {
    return [];
  }
};
