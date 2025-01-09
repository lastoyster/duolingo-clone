import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
    const {id} = useParams();
    const {recipeDetailsData,setRecipeDetailsData,
    favoritesList,handleAddFavorite,
} = useContext(GlobalContext);

useEffect(()=>{
    async function getRecipeDetails(){
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        
    console.log(data);
    if(data?.data){
        setRecipeDetailsData(data?.data);
    }
  }

  getRecipeDetails();
},[]);

console.log(recipeDetailsData,"recipeDetailsData");

return(
    <div className="">
        <h3>{recipeDetailsData?.strMeal}</h3>
    </div>

<button onClick={()=> handleAddFavorite(recipeDetailsData?.recipe)}</button>