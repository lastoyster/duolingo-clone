import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";

export default function Favorites(){
    const {favoritesList} = useContext(GlobalContext);

    return(
        <div className="py-8 container mx-auto flex-lg">
        {favoritesList && favoritesList.length > 0 && favoritesList}
       favoritesList.map((item)=> <RecipeItem item={item}/>}
       ):(
        <div>
            <p>Nothin is added in favorites</p>
        </div>
       )
        </div>
    )
}