import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map(recipe => (
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
export default RecommendationsList;