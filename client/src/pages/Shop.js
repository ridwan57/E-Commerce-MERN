import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingCard from "../components/cards/LoadingCard";
import ProductCard from "../components/cards/ProductCard";
import { getProductsByCount, getSearchProducts } from "../functions/product";
import { showAverage } from "../functions/ratings";



const Shop = () => {
    const { search } = useSelector((state) => ({ ...state }));
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    // const text = search && query.text ? query.text : ''
    const { text } = search





    //by default
    useEffect(() => {

        loadAllProducts()
    }, []);
    //search
    useEffect(() => {
        const delayed = setTimeout(() => {
            loadSearchProducts(text)
        }, 400)
        return () => clearTimeout(delayed)

    }, [text])


    const loadSearchProducts = (text) => {
        getSearchProducts({ query: text })
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }

    const loadAllProducts = () => {
        setLoading(true);
        getProductsByCount(20)
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    return (



        <div className="container-fluid">
            <div className="row">

                <div className='col-md-3'>
                    <h4>Filters</h4>

                </div>

                <div className='col-md-9'>
                    <div className="row">

                        {loading ? (
                            <LoadingCard count={12} />
                        ) :

                            (

                                products.map((product) => (
                                    <div key={product._id} className="col-md-4 mb-4">
                                        {product && product.ratings && product.ratings.length > 0 ? showAverage(product) :
                                            <div className='text-center pt-2 pb-3 '> No rating yet</div>}
                                        <ProductCard
                                            product={product}
                                        />
                                    </div>
                                ))

                            )


                        }
                    </div>

                </div>

            </div>
        </div >




    );
};

export default Shop;
