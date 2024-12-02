import http from "../../interceptor";

export const courseReserve = async (id) => {
    try {
      const objj = { courseId: id };
      const result = await http.post("/CourseReserve/ReserveAdd", objj);
      return result;
    } catch (error) {
      return [];
    }
  };