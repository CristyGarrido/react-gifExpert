
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GiftGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  
  return (
    <>
        <h3>{category}</h3>
        l{
          isLoading &&
          (<h2>Cargando...</h2>)
}
        <div className="card-grid">
         {
          images.map((image) => (
            <GifItem key={image.id} {... image }/>
          ))
         }
        </div>

    </>
  )
}
