import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import RecipeDetails from './RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

// Wrapper to extract recipeId from URL
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Home route: Add + List */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <hr />
                <RecipeList />
              </>
            }
          />

          {/* Recipe details route */}
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


