import { useEffect, useRef, useState } from "react";
import { fetcher } from "../utils/fetcher";

type QuoteWithAuthor = {
	quote: string;
	author: string;
};
const useQuote = () => {
	const [data, setData] = useState<QuoteWithAuthor>();

	const dataFetched = useRef(false);

	const fetchQuote = async () => {
		const quote = await fetcher("https://api.quotable.io/random");
		setData({
			quote: quote.content,
			author: quote.author,
		});
	};

	useEffect(() => {
		if (dataFetched.current) return;
		dataFetched.current = true;
		fetchQuote();
	}, []);
	return { data, setData, fetchQuote };
};

export default useQuote;
