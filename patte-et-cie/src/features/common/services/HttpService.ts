export const HttpService = {
  baseUrl: "http://localhost:3000/",

  async request<T, B = unknown>(
    path: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    options: { body?: B; headers?: Record<string, string> } = {}
  ): Promise<T> {
    const { body, headers = {} } = options;

    const res = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "HTTP error");
    }

    return res.json() as Promise<T>;
  },

  get<T>(path: string, options?: { headers?: Record<string, string> }) {
    return this.request<T>(path, "GET", options);
  },

  post<T, B = unknown>(path: string, body: B, options?: { headers?: Record<string, string> }) {
    return this.request<T, B>(path, "POST", { ...options, body });
  },

  put<T, B = unknown>(path: string, body: B, options?: { headers?: Record<string, string> }) {
    return this.request<T, B>(path, "PUT", { ...options, body });
  },

  delete<T>(path: string, options?: { headers?: Record<string, string> }) {
    return this.request<T>(path, "DELETE", options);
  },
};
