import apiClient from "./ApiClient";

export const login = async () => {
  try {
    const response = await apiClient.post("/", {});

    return response.data;
  } catch (error) {
    return false;
  }
};
