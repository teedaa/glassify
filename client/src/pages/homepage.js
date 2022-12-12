import React from "react";
import { Nav } from "../components/Nav";
import { Sidebar} from "../components/Sidebar";
import { BurgerComponent} from "../components/Burger";
 
  
  export function Homepage() {
  

    return (
        <>
        <Nav />
        <BurgerComponent />
        <Sidebar />  
        </>
    )
  }