"use client"
import {useReducer, createContext} from "react";

export const AppStore = createContext();

const reducer = (state, action) => {
	if(action.type === "mobileNav"){
		console.log(action);
		return {mobileNav: action.payload};
	}
}

const defaultValue = {mobileNav: false};


const Store = ({children}) => {
	const [state, dispatch] = useReducer(reducer, defaultValue); 

	return (
	<AppStore.Provider value={{state, dispatch}} >
		{children}
	</AppStore.Provider>
  );
}

export default Store;




