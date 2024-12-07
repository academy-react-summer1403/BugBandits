import http from "../../interceptor";

export const getTeacherCourses = async (teacherId) => {
  try {
    const response = await http.get(
      `/CourseGroup?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query=&teacherId=${teacherId}`
    );
    return response;
  } catch (error) {
    return [];
  }
};
