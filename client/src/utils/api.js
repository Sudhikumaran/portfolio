// API base URL - uses environment variable in production, empty string (proxy) in development
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const api = {
  contact: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response;
  },

  // Future API methods if needed
  getProjects: async () => {
    const response = await fetch(`${API_BASE_URL}/api/projects`);
    return response.json();
  },

  getSkills: async () => {
    const response = await fetch(`${API_BASE_URL}/api/skills`);
    return response.json();
  },

  getExperiences: async () => {
    const response = await fetch(`${API_BASE_URL}/api/experiences`);
    return response.json();
  },
};

export default API_BASE_URL;
