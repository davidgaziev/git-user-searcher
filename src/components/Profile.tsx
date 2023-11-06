import { FC } from "react";
import { IUser } from "../types/types";
import convertDate from "../utils/convertDate";
import CompanyIcon from "../assets/icons/CompanyIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import WebsiteIcon from "../assets/icons/WebsiteIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

interface IUserProps {
	user: IUser;
}

const Profile: FC<IUserProps> = ({ user }) => {
	const date = convertDate(user.created_at);

	return (
		<main className="flex w-full rounded-xl bg-main p-4 text-white md:p-8 xl:w-10/12 xl:gap-16 xl:p-16">
			<div className="max-lg:hidden">
				<img
					className="w-48 rounded-full"
					src={user.avatar_url}
					alt="profile avatar"
				/>
			</div>
			<div className="w-full">
				<div className="flex gap-4">
					<div className="lg:hidden">
						<img
							className="w-20 rounded-full"
							src={user.avatar_url}
							alt="profile avatar"
						/>
					</div>
					<div className="xl:flex xl:w-full xl:flex-wrap">
						<h2 className="text-xl font-bold xl:w-1/2 xl:text-3xl">
							{user.name}
						</h2>
						<a
							className="order-1 w-1/2 text-lg text-blue-600"
							href={user.html_url}
						>
							@{user.login}
						</a>
						<p className="text-gray-400 xl:w-1/2 xl:text-end xl:text-xl">
							Joined {date}
						</p>
					</div>
				</div>

				{user.bio ? (
					<p className="my-6 text-gray-400 xl:text-xl">{user.bio}</p>
				) : (
					<p className="my-6 text-gray-400 xl:text-xl">
						This profile has no bio
					</p>
				)}

				<div className="flex w-full gap-6 rounded-lg bg-slate-900 px-12 py-6 max-lg:text-center md:gap-24">
					<div>
						<p className="text-sm text-gray-400 md:text-xl">Repos</p>
						<span className="font-bold xl:text-2xl">{user.public_repos}</span>
					</div>
					<div>
						<p className="text-sm text-gray-400 md:text-xl">Followers</p>
						<span className="font-bold xl:text-2xl">{user.followers}</span>
					</div>
					<div>
						<p className="text-sm text-gray-400 md:text-xl">Following</p>
						<span className="font-bold xl:text-2xl">{user.following}</span>
					</div>
				</div>

				<div className="flex w-full flex-wrap gap-4 text-gray-300 max-lg:my-6 xl:mt-6 xl:text-xl">
					<div className="mr-12 flex items-center gap-4 md:w-1/2">
						<LocationIcon />
						{user.location ? (
							<p>{user.location}</p>
						) : (
							<p className="text-gray-400"> Not Available</p>
						)}
					</div>

					<div className="flex items-center gap-4">
						<TwitterIcon />
						{user.twitter_username ? (
							<a
								href={"https://www.x.com/" + user.twitter_username}
								target="_blank"
							>
								{user.twitter_username}
							</a>
						) : (
							<p className="text-gray-400"> Not Available</p>
						)}
					</div>

					<div className="mr-12 flex items-center gap-4 md:w-1/2">
						<WebsiteIcon />
						{user.blog ? (
							<a href={user.blog} target="_blank">
								{user.blog}
							</a>
						) : (
							<p className="text-gray-400"> Not Available</p>
						)}
					</div>

					<div className="flex items-center gap-4">
						<CompanyIcon />
						{user.company ? (
							<p>{user.company}</p>
						) : (
							<p className="text-gray-400"> Not Available</p>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Profile;
