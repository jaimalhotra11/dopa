import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Add request interceptor to include token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const userApi = {
  login: (email: string, password: string) => 
    api.post('/users/login', { email, password }),
  register: (name: string, email: string, password: string) =>
    api.post('/users/register', { name, email, password }),
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data: any) => api.put('/users/profile', data)
};

export const bookingApi = {
  createBooking: (bookingData: any) => api.post('/bookings', bookingData),
  getBookings: () => api.get('/bookings'),
  updateBooking: (id: string, status: string) => 
    api.put(`/bookings/${id}`, { status })
};

export const contactApi = {
  submitForm: (contactData: any) => api.post('/contact', contactData)
};

export const successStoryApi = {
  submit: (storyData: any) => api.post('/success-stories', storyData),
  getAll: () => api.get('/success-stories')
};

export const careerApi = {
  submitApplication: (applicationData: any) => 
    api.post('/careers/apply', applicationData)
};

export default api;