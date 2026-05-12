import axiosInstance from './axiosConfig';

const userService = {
  // POST: Register user baru
  registerUser: async (data) => {
    const response = await axiosInstance.post('/users/signup', data);
    return response.data;
  },

  // POST: Login user
  loginUser: async (credentials) => {
    const response = await axiosInstance.post('/users/login', credentials);
    return response.data;
  },

  // GET: Ambil detail profil user berdasarkan ID
  getUserProfile: async (id) => {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  },

  // PUT: Update profil user
  updateUserProfile: async (id, data) => {
    const response = await axiosInstance.put(`/users/${id}`, data);
    return response.data;
  },

  // DELETE: Hapus akun user
  deleteUser: async (id) => {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
  }
};

export default userService;
