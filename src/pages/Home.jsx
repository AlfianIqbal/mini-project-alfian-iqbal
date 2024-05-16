import Header from "../components/Home/Header"
import Container from "../components/Container"
import Filter from "../components/Home/Filter"
import ListPost from "../components/Home/ListPost"
import ShowingData from "../components/Home/ShowingData"
import Pagination from "../components/Home/Pagination"

const Ideas = () => {
	return (
		<div>
			<Header />
			<Container>
				<div className="flex flex-row justify-between">
					<ShowingData />
					<Filter />
				</div>
				<ListPost />
				<Pagination />
			</Container>
		</div>
	)
}

export default Ideas
