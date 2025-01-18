import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import ShowcaseOne from "./components/showcaseOne/ShowcaseOne";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
	  <Banner />
	  <Categories />
	  <ShowcaseOne />
    </div>
  );
}

export default App;
