import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Button from "../components/Button/Button";

test("Button should render correctly", async () => {
	await act(async () => render(<Button color="primary">Random quote</Button>));

	expect(true).toBeTruthy();
});
test("Button calls onClick when clicked", async () => {
	const handleClick = jest.fn();
	await act(async () =>
		render(
			<Button color="primary" onClick={handleClick}>
				Random quote
			</Button>
		)
	);
	const element = screen.getByText("Random quote");
	await act(async () => {
		fireEvent.click(element);
	});

	expect(handleClick).toHaveBeenCalledTimes(1);
});
