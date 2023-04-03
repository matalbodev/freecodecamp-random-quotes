import { render, screen, queryByAttribute, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../App";
import Button from "../components/Button/Button";
test("Renders main page correctly", async () => {
	await act(async () => render(<App />));

	expect(true).toBeTruthy();
});

test("App should be wrapped by quote box div with ID quote box", async () => {
	await act(async () => render(<App />));

	const quoteBox = queryByAttribute("id", document.body, "quote-box");

	expect(quoteBox).toBeInTheDocument();
});

test("App should load with a random quote", async () => {
	await act(async () => render(<App />));

	const text = queryByAttribute("id", document.body, "text");
	const author = queryByAttribute("id", document.body, "author");

	expect(text).toBeInTheDocument();
	expect(author).toBeInTheDocument();
});

test("Quote box should contain text div with ID text", async () => {
	await act(async () => render(<App />));

	const text = queryByAttribute("id", document.body, "text");

	expect(text).toBeInTheDocument();
});
test("Quote box should contain text div with ID author", async () => {
	await act(async () => render(<App />));

	const text = queryByAttribute("id", document.body, "author");

	expect(text).toBeInTheDocument();
});

test("Quote box should contain buttons Random Quote with ID new-quote", async () => {
	await act(async () => render(<App />));
	const element = screen.getByText("Random quote");

	expect(element.tagName).toBe("BUTTON");
	expect(element).toBeInTheDocument();
	expect(element).toHaveAttribute("id", "new-quote");
});

test("Quote button should render a random quote", async () => {
	await act(async () => render(<App />));
	const element = screen.getByText("Random quote");
	await act(async () => {
		fireEvent.click(element);
	});
});
