import { API_BASE_URL } from "~/config";

export async function fetchApi<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  const token = typeof window !== "undefined" ? localStorage.getItem("school_erp_token") : null;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMsg = `HTTP Error ${response.status}: ${response.statusText}`;
    try {
      const errData = await response.json();
      if (errData.message) {
        errorMsg = Array.isArray(errData.message)
          ? errData.message.join(", ")
          : errData.message;
      }
    } catch {
      // Fallback text
    }
    throw new Error(errorMsg);
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

export const api = {
  get: <T = any>(endpoint: string) => fetchApi<T>(endpoint, { method: "GET" }),
  post: <T = any>(endpoint: string, data?: any) =>
    fetchApi<T>(endpoint, { method: "POST", body: JSON.stringify(data) }),
  put: <T = any>(endpoint: string, data?: any) =>
    fetchApi<T>(endpoint, { method: "PUT", body: JSON.stringify(data) }),
  patch: <T = any>(endpoint: string, data?: any) =>
    fetchApi<T>(endpoint, { method: "PATCH", body: JSON.stringify(data) }),
  delete: <T = any>(endpoint: string) =>
    fetchApi<T>(endpoint, { method: "DELETE" }),
};
