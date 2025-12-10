import axios from "axios";

export const BASE_URL = "https://api.vitelinfratech.com/api";
// export const BASE_URL = "http://localhost:5000/api";

// GET all heroes
export const fetchHeroes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/heroes`);
    return response.data; // array of hero objects
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

export const fetchHomeAbout = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/about`);
    console.log("About API Response:", response.data);
    // Response structure: { about: [], vision: "", mission: [] }
    return response.data || { about: [], vision: "", mission: [] };
  } catch (error) {
    console.error("Error fetching about data:", error);
    return { about: [], vision: "", mission: [] };
  }
};

export const fetchWork = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/works`);
    return response.data; // array of hero objects
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

export const fetchTestimonials = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/testimonials`);
    console.log("Testimonials API Response:", response.data);
    // Handle different response structures: { success: true, data: [...] } or { success: true, testimonials: [...] } or direct array
    if (response.data && response.data.success) {
      return response.data.testimonials || response.data.data || response.data || [];
    }
    // If response.data is directly an array
    if (Array.isArray(response.data)) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};


export const fetchProject = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/projects`);
    return response.data.data; // array of project objects
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const fetchSate = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/stats`);
    return response.data; // array of hero objects
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};


export const fetchAbout = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mainabout`);
    return response.data; // array of hero objects
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

export const fetchVissonMisson = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/vision-mission`);
    return response.data; // array of hero objects
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

export const fetchAspect = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/aspects`);
    return response.data; // array of hero objects
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

export const fetchClintReview = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/clinttestimonials`);
    return response.data; // array of hero objects
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

export const fetchImgList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/gallery`);
    return response.data; // array of hero objects
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

export const fetchProjectById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/projects/${id}`);
    return response.data; // single project object
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};

export const fetchServiceList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/services`);
    return response.data; // array of hero objects
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
};

// GET all equipment
export const fetchEquipment = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/equipment`);
    // Handle the response structure: { success: true, count: 8, data: [...] }
    if (response.data && response.data.success && response.data.data) {
      return response.data.data; // Return the data array
    }
    return response.data || []; // Fallback to direct response or empty array
  } catch (error) {
    console.error("Error fetching equipment:", error);
    return [];
  }
};

// POST career application
export const submitCareerApplication = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/careers/apply`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting career application:", error);
    throw error;
  }
};

// POST newsletter subscription
export const subscribeNewsletter = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/newsletter`, { email });
    return response.data;
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    throw error;
  }
};

// POST contact form submission
export const submitContact = async (contactData) => {
  try {
    const response = await axios.post(`${BASE_URL}/contact`, contactData);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

// GET terms and conditions
export const fetchTermsAndConditions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/terms-and-conditions`);
    console.log("Terms and Conditions API Response:", response.data);
    // Response structure: { success: true, data: { title, content, updatedAt, ... } }
    if (response.data && response.data.success && response.data.data) {
      return response.data.data; // Return the data object directly
    }
    return response.data || null;
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    return null;
  }
};

// GET privacy policy
export const fetchPrivacyPolicy = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/privacy-policy`);
    console.log("Privacy Policy API Response:", response.data);
    // Response structure: { success: true, data: { title, content, updatedAt, ... } }
    if (response.data && response.data.success && response.data.data) {
      return response.data.data; // Return the data object directly
    }
    return response.data || null;
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
    return null;
  }
};

// GET contact info
export const fetchContactInfo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contact-info`);
    console.log("Contact Info API Response:", response.data);
    // Response structure: { success: true, data: { email, phone, ... } }
    if (response.data && response.data.success && response.data.data) {
      return response.data.data; // Return the data object directly
    }
    return response.data || null;
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return null;
  }
};

// GET offices
export const fetchOffices = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/offices`);
    console.log("Offices API Response:", response.data);
    // Response structure: { success: true, count: 3, offices: [...] }
    if (response.data && response.data.success && response.data.offices) {
      return response.data.offices; // Return the offices array directly
    }
    return response.data?.offices || [];
  } catch (error) {
    console.error("Error fetching offices:", error);
    return [];
  }
};