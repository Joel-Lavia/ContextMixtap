import { useContext, useState } from "react";
import { mixtapeContext } from "./mixtapeContext";

function MixtapeProvider({children,songs: songs}) {
const [genre ,setGenre] = useState('tous'); 
const [sortOrder,setSortOrder] = useState('ascending');

const mixtape = useContext(mixtapeContext);
    return(
    <mixtapeContext.Provider value={{songs,genre,sortOrder,setGenre,setSortOrder}}>
        {children}
    </mixtapeContext.Provider>
    );
}
export default MixtapeProvider