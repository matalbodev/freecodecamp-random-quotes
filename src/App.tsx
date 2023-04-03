import "./App.css";
import Button from "./components/Button/Button";
import useQuote from "./hooks/useQuote";

function App() {
	const { data, fetchQuote } = useQuote();

	const quote = data ? (
		<>
			<div id="text">"{data?.quote ?? ""}"</div>
			<div id="author">{data?.author ? `By ${data.author}` : ""}</div>
		</>
	) : (
		""
	);

	const fullQuote = `${data?.quote} by ${data?.author}`;

	return (
		<div id="quote-box">
			{quote}
			<div id="buttons">
				<Button as="a" color="secondary" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURI(fullQuote)}`} target="_blank">
					Tweet it !
				</Button>
				<Button onClick={() => fetchQuote()} color="primary" id="new-quote">
					Random quote
				</Button>
			</div>
		</div>
	);
}

export default App;
