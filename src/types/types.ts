export interface ISuggestedUser {
	id: number;
	login: string;
	avatar_url: string;
}

export interface IUser {
	login: string;
	html_url: string | undefined;
	avatar_url: string | undefined;
	name: string;
	bio: string;
	company: string;
	location: string;
	blog: string | undefined;
	twitter_username: string;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
}
