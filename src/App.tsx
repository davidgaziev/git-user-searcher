import UserService from "./API/UserService";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import { IUser } from "./types/types";
import Profile from "./components/Profile";
import { AxiosResponse } from "axios";

function App() {
	const [user, setUser] = useState<IUser>();

	useEffect(() => {
		getRes(UserService.getUser("octocat"));
	}, []);

	async function getRes(func: Promise<AxiosResponse<IUser>>) {
		const resultPromise = await func;
		setUser(resultPromise.data);
	}

	return (
		<div className="flex h-full flex-col items-center justify-center gap-8 bg-back px-6 md:px-24 xl:px-64 2xl:px-96">
			<Header />
			<SearchBar getRes={getRes} />
			{typeof user == "undefined" ? null : <Profile user={user} />}
		</div>
	);
}

export default App;
