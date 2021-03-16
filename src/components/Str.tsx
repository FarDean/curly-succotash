import React from "react";

interface KosProps {
	name: string;
	age: number;
	handleClick: () => void;
	handleClick2: () => void;
	children: React.ReactNode;
}

export const Str: React.FC<KosProps> = ({ name, age, handleClick, children, handleClick2 }) => {
	return (
		<div>
			<h1>Your name is: {name}</h1>
			<h2>and you are {age} years old!</h2>
			<h2>{children}</h2>

			<button onClick={handleClick}>Increment</button>
			<button onClick={handleClick2}>Decrement</button>
		</div>
	);
};
