export const fetcher = async (url: string): Promise<any> => {
	let data;
	try {
		const res = await fetch(url);
		data = res.json();
	} catch (error) {
		data = error;
	}

	return data;
};
