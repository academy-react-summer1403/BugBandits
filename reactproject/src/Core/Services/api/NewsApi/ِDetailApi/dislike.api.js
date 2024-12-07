import http from "../../../interceptor";

export const newsDissLike = async (newsId) => {
    try {
      const response = await http.post(`/News/NewsDissLike/NewsId=${newsId}`);
      return response;
    } catch (error) {
      throw error;
    }
  };
