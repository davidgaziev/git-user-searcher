import { FC, useEffect, useState } from "react";
import SuggestionList from "./SuggestionList";
import { ISuggestedUser, IUser } from "../types/types";
import { AxiosResponse } from "axios";
import SearchIcon from "../assets/icons/SearchIcon";
import UserService from "../API/UserService";

interface SeachBarProps {
	getRes: (func: Promise<AxiosResponse<IUser>>) => Promise<void>;
}

const SearchBar: FC<SeachBarProps> = ({ getRes }) => {
	const [username, setUsername] = useState<string>("");
	const [suggestions, setSuggestions] = useState<ISuggestedUser[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const searchUser = async (username: string) => {
		if (!username) return;

		const suggestedUsers = await UserService.searchUsers(username);

		setSuggestions(suggestedUsers.items);
		setIsLoading(false);
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!isLoading) setIsLoading(true);
		setUsername(e.target.value);
	};

	useEffect(() => {
		if (!username) {
			setSuggestions([]);
			setIsLoading(false);
		}

		const debounceSearch = setTimeout(() => {
			searchUser(username);
		}, 1500);

		return () => clearTimeout(debounceSearch);
	}, [username]);

	return (
		<div
			className={
				isLoading || suggestions.length
					? "relative flex w-full items-center gap-2 rounded-2xl  bg-main p-4 xl:w-10/12"
					: "relative flex w-full items-center gap-2 rounded-2xl bg-main p-4 xl:w-10/12"
			}
		>
			<SearchIcon />
			<input
				className="h-fit w-full rounded-md bg-transparent p-2 text-white placeholder-gray-400 outline-none md:text-xl xl:text-2xl"
				placeholder="Search by GitHub username..."
				type="text"
				value={username}
				onChange={changeHandler}
			/>
			<div
				className={
					isLoading || suggestions.length
						? "bg-search absolute left-0 top-full mt-2 w-full rounded-2xl text-lg text-white "
						: "hidden"
				}
			>
				{isLoading ? (
					<div className="flex items-center justify-center space-x-2 py-32">
						<div className="h-8 w-8 animate-bounce rounded-full bg-main [animation-delay:-0.3s]"></div>
						<div className="h-8 w-8 animate-bounce rounded-full bg-main [animation-delay:-0.15s]"></div>
						<div className="h-8 w-8 animate-bounce rounded-full bg-main"></div>
					</div>
				) : (
					<SuggestionList
						getRes={getRes}
						setSuggestions={setSuggestions}
						users={suggestions}
						setUsername={setUsername}
					/>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
