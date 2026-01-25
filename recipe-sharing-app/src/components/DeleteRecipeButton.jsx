import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  return (
    <button onClick={() => {
      deleteRecipe(recipeId);
      navigate('/');
    }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;