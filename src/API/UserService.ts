import axios, { AxiosResponse } from "axios";
import { ISuggestedUser, IUser } from "../types/types";

interface Response {
	items: ISuggestedUser[];
}

export default class UserService {
	static async searchUsers(searchQuery: string): Promise<Response> {
		const url =
			"https://api.github.com/search/users?q=" + searchQuery + "&per_page=5";

		const response = await axios
			.get(url)
			.then<Response>((r: AxiosResponse) => r.data);

		return response;
	}

	static async getUser(username: string): Promise<AxiosResponse<IUser>> {
		const url = "https://api.github.com/users/" + username;

		const response = await axios.get<IUser>(url);

		return response;
	}
}
