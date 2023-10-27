import axios from "axios";

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
}