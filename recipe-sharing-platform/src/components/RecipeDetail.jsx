import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-xl mt-10">Recipe not found 😢</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />

      {/* Ingredients */}
      <div className="bg-white shadow-lg rounded-lg p-5 mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-2">
          {recipe.ingredients.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-2xl font-semibold mb-3">Cooking Instructions</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
