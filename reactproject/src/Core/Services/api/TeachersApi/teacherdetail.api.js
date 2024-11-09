import http from "../../interceptor";

export const getTeacherDetail = async (teacherId) => {
  try {
    const response = await http.get(
      `/Home/GetTeacherDetails?TeacherId=${teacherId}`
    );
    return response;
  } catch (error) {
    return [];
  }
};
