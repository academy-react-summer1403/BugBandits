import http from "../../interceptor";
import { toast } from "react-hot-toast";

// export const Postlogin = async (user) => {
//   try {
//     const response = await http.post(`/Sign/Login`, user);
//     return response;
//   } catch (error) {
//     return false;
//   }
// };

export const Postlogin = async (user) => {
  try {
    const response = await http.post(`/Sign/Login`, user);
    console.log("Postlogin response:", response.data);
    return response;
  } catch (error) {
    console.error("Postlogin error:", error);
    toast.error("An error occurred during login.");
    return { success: false };
  }
};
