export default class JWTAuthFactory {
	constructor(jwtToken: string) {
		this.token = jwtToken;
	}
	private token: string;
}
