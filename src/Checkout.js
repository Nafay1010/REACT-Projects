import React, { useState } from "react";
import FetchData from "./FetchData";
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
} from "react-pro-sidebar";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Checkout.css";
import CheckoutItems from "./CheckoutItems";


const Checkout = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    const {data, error} = FetchData('http://localhost:8000/items');
    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);

  };

  return (
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              
            <p>{menuCollapse ? 
            <div className="closemenu">
            <button onClick={menuIconClick} className='checkoutbtn'>Checkout</button>
            </div>
            : 
            <div className="openmenu">
            <button onClick={menuIconClick} className='closebtn'>Close</button>
            </div>
            }</p>
            </div>
          </SidebarHeader>
          <SidebarContent className="content">
            <h1 className="product-purchased--heading">Product Purchased</h1>
            {data && <div><CheckoutItems props = {data}/></div>}
          </SidebarContent>
        </ProSidebar>
      </div>
  );
};

export default Checkout;