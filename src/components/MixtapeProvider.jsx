import mixtapeContext from "../mixtapeContext";
function MixtapeProvider({children,songs}){
return(
<div>
<mixtapeContext.Provider value={{musique:songs}}>
 {children}
</mixtapeContext.Provider>
</div>
);
    
}
export default MixtapeProvider;