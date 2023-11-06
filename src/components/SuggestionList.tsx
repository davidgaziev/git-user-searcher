import { FC } from "react";
import { ISuggestedUser, IUser } from "../types/types";
import UserService from "../API/UserService";
import { AxiosResponse } from "axios";

interface SuggestionListProps {
	users: ISuggestedUser[];
	setSuggestions: React.Dispatch<React.SetStateAction<ISuggestedUser[]>>;
	getRes: (func: Promise<AxiosResponse<IUser>>) => Promise<void>;
	setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const SuggestionList: FC<SuggestionListProps> = ({
	users,
	setSuggestions,
	getRes,
	setUsername,
}) => {
	const clickHandler = (user: ISuggestedUser) => {
		getRes(UserService.getUser(user.login));
		setSuggestions([]);
		setUsername("");
	};

	return (
		<ul className="flex flex-col gap-3">
			{users.map((user) => (
				<li
					key={user.id}
					className="hover:bg-searchhover flex cursor-pointer gap-4 py-2 first:rounded-t-2xl last:rounded-b-2xl"
					onClick={() => clickHandler(user)}
				>
					<img
						src={user.avatar_url}
						alt="user avatar"
						className="ml-5 h-8 w-8 rounded-full xl:ml-16"
					/>
					{user.login}
				</li>
			))}
		</ul>
	);
};

export default SuggestionList;
