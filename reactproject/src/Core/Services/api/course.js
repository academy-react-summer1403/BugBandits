// import http from "./../interceptor"
import axios from "axios";

export const getCourseList = async () => {
  try {
    const response = await axios.get(
      "https://classapi.sepehracademy.ir/api/Home/GetCoursesTop?Count=9"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
