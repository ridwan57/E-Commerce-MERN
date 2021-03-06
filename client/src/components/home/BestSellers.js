import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../functions/product";
import LoadingCard from "../cards/LoadingCard";
import ProductCard from "../cards/ProductCard";




const BestSellers = () => {
    const { user } = useSelector((state) => ({ ...state }));
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAllProducts();
    }, []);


    const loadAllProducts = () => {
        setLoading(true);
        getProducts('sold', 'desc', 12)
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
        <>
            <div className="container">

                {loading ? (
                    <LoadingCard count={3} />
                ) :
                    <div className="row">
                        {products.map((product) => (
                            <div key={product._id} className="col-md-4 mb-4">
                                <ProductCard key={product._id}
                                    product={product}
                                />
                            </div>
                        ))}

                    </div>
                }


            </div>


        </>

    );
};

export default BestSellers;
