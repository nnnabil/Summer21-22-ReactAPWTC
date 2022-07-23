import Foot from "./Foot";
import Head from "./Head";
import React, { Component } from "react";
import Product from './Product';
import ShowMessage from "./ShowMessage";

const Hello = () => {
    return(
        <div>
            <div>
                <ShowMessage />
                <Product name="Nokia" price ="12000"/>
                <Product name="Samsung" price ="15000"/>
                <Product name="iPhone" price ="20000"/>
            </div>
        </div>
    )
}
export default Hello;