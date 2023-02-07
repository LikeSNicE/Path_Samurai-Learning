
import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '42805bb7-a5ea-4e68-a01f-ec544540dd90'
  }
})


export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
      .then(response => {
        return response.data
      })
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}


export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append("image", file)
    return instance.put(`profile/photo/`, formData);
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
  }
}


export const authApi = {
  me() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

