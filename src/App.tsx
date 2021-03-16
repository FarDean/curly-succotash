import logo from "./logo.svg";
import "./App.css";
import { Link } from "./components/Link";
import { Str } from "./components/Str";

function App() {
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
				<Str name="fardean" age={27}></Str>
			</header>
		</div>
	);
}

export default App;
