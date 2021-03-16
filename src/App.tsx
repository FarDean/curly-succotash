import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "./components/Link";
import { Str } from "./components/Str";

function App() {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(pre => (pre += 1));
	}
	function handleClick2() {
		setCount(pre => (pre -= 1));
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<Link url="/" classname="App-link" variant="secondary">
					learn react
				</Link>
				<Str handleClick2={handleClick2} handleClick={handleClick} name="fardean" age={27}>
					{count}
				</Str>
			</header>
		</div>
	);
}

export default App;
