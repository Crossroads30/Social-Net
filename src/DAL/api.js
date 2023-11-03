import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '614d93d1-da90-4c3e-bd9c-0c093271d9f2',
	},
})

export const profileApi = {
	async getProfile(profileId) {
		return await instance.get('/profile/' + profileId)
	},
	async getStatus(profileId) {
		return await instance.get('/profile/status/' + profileId)
	},
	async updateStatus(status) {
		return await instance.put('/profile/status', { status })
	},
	async updateProfile(profile) {
		return await instance.put('/profile', profile)
	},
	async updateProfilePhoto(file) {
		const formData = new FormData()
		formData.append('image', file)
		return await instance.put('/profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}

export const authApi = {
	async getAuth() {
		return await instance.get('/auth/me')
	},
	async loginToServer(email, password, rememberMe = false, captcha = null) {
		return await instance.post('/auth/login', {
			email,
			password,
			rememberMe,
			captcha,
		})
	},
	async logOutFromServer() {
		return await instance.delete('/auth/login')
	},
}

export const securityApi = {
	async getCaptchaUrl() {
		return await instance.get('/security/get-captcha-url')
	},
}

export const usersApi = {
	async getUsers(currentPage = 1, pageSize = 5) {
		return await instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data.items)
	},
}
