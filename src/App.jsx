import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import Layout from "./components/Shared/Layout"
import Ideas from "./pages/Home"
import Careers from "./pages/OpenAI"
import Contact from "./pages/Contact"
import { RecoilRoot } from "recoil"

function App() {

	return (
		<RecoilRoot>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="" index element={<Navigate to="/ideas" replace />} />
						<Route path="ideas" element={<Ideas />} />
						<Route path="careers" element={<Careers />} />
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</Router>
		</RecoilRoot>
	)
}

export default App
