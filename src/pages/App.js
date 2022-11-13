import { Routes, Route } from "react-router-dom";
import { Home, Category, DetailRecipe, Recipe, Search, Navbar } from '../component'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipe/detail/:key" element={<DetailRecipe />} />
        <Route path="/category" element={<Category />} />
        <Route path="/search" element={<Search />} />
      </Routes>

    </>

  );
}

export default App;
