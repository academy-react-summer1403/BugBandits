import http from "../../interceptor";

export const filter = async () => {
  try {
    const response = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0&ListTech=&courseLevelId=&CourseTypeId=&TeacherId=2`
    );
    return response.courseFilterDtos || [];
  } catch (error) {
    console.error("Error fetching course list:", error);
    return [];
  }
};
