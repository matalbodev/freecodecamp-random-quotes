import { FC, HTMLAttributes } from "react";
import "./Button.css";

interface PropsTypes extends HTMLAttributes<HTMLOrSVGElement> {
	children: string;
	color: "primary" | "secondary";
	href?: string;
	as?: "button" | "a";
	target?: "_blank";
}

// extends propstypes with AnchorHTMLAttributes<HTMLAnchorElement> and ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<PropsTypes> = ({ children, color, as: Tag = "button", ...otherProps }) => {
	return (
		<Tag {...otherProps} className={`button button--${color}`}>
			{children}
		</Tag>
	);
};

export default Button;
