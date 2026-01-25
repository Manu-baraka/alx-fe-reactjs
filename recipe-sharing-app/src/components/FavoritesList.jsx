import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div
          key={recipe.id}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default FavoritesList;