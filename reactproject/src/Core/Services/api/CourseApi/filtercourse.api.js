import http from "../../interceptor";

export const filter = async () => {
  try {
    const response = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&CostDown=&CostUp=&TechCount=0&ListTech=&courseLevelId=&CourseTypeId=&StartDate=&EndDate=&TeacherId=2`
    );
    return response.courseFilterDtos || [];
  } catch (error) {
    console.error("Error fetching course list:", error);
    return [];
  }
};
