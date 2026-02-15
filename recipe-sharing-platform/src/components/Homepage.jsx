import React, { useState, useEffect} from "react";

const Homepage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch ("/data.json")
            .then(response => response.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Recipe Collection</h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

