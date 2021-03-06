
import React from "react";

import Jumbotron from "../components/cards/Jumbotron";
import BestSellers from "../components/home/BestSellers";

import NewArrivals from "../components/home/NewArrivals";

const Home = () => {



    return (
        <>
            <div className='jumbotron text-danger h1 font-weight-bold text-center'>
                <Jumbotron text={["New Collection", "Latest Products"]} />


            </div>
            <h5 className='text-center p-3 mt-5 mb-5 display-4 
            jumbotron'> New Arrivals</h5>
            <NewArrivals />
            <h5 className='text-center p-3 mt-5 mb-5 display-4 
            jumbotron'> Best Sellers</h5>
            <BestSellers />
        </>

    );
};

export default Home;
