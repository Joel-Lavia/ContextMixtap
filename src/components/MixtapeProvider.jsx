import { useState } from "react";
import mixtapeContext from "../mixtapeContext";
function MixtapeProvider({children,songs}){
const [genre,sortOrder] = useState('tous');
return(
<div>
<mixtapeContext.Provider value={{songs,genre,sortOrder}}>
 {children}
</mixtapeContext.Provider>
</div>
);
    
}
export default MixtapeProvider;