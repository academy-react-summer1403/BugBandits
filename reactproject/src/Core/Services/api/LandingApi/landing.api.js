import http from "../../interceptor";

export const getLandingReport = async () => {
  try {
    const response = await http.get(`/Home/LandingReport`);
    return response;
  } catch (error) {
    return [];
  }
};
