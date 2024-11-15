import http from "../../interceptor";

export const getMyCoursesReserve = async () => {
  try {
    const response = await http.get(
      `/SharePanel/GetMyCoursesReserve`
    );
    return response;
  } catch (error) {
    return [];
  }
};
