class IsroStats {
	constructor() {
		this.api = "https://services.isrostats.in/api"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getLaunches() {
		const response = await fetch(
			`${this.api}/launches`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSatelites() {
		const response = await fetch(
			`${this.api}/spacecraft`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {IsroStats}
