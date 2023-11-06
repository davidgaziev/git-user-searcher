import { useState } from "react";

export const useFetching = (callback: (query: string) => Promise<void>) => {
	const [error, setError] = useState<boolean>(false);

	const fetching = async (args: string) => {
		try {
			await callback(args);
		} catch (e) {
			setError((prev) => !prev);
		}
	};

	return [fetching, error];
};
