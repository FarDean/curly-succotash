import logo from "./logo.svg";
import "./App.css";
import { Link } from "./components/Link";

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
			</header>
		</div>
	);
}

export default App;
