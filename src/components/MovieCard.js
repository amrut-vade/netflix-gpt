import { IMG_CDN_URL } from "../utils/constant";


const  MovieCards = ({posterPath}) =>{

      return (
          <div className="w-48 pr-4">
           
             <img alt="MOvieCard" src={IMG_CDN_URL+posterPath} />
            </div>
      )
};

export default MovieCards;