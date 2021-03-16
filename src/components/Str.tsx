import React from "react";

interface KosProps {
	name: string;
	age: number;
}

export const Str: React.FC<KosProps> = ({ name, age }) => {
	return (
		<div>
			<h1>Your name is: {name}</h1>
			<h2>and you are {age} years old!</h2>
		</div>
	);
};
