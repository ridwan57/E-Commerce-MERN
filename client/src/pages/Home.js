import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Jumbotron from "../components/cards/Jumbotron";
import LoadingCard from "../components/cards/LoadingCard";

import ProductCard from "../components/cards/ProductCard";
import AdminNav from "../components/nav/AdminNav";

import { getProductsByCount, removeProduct } from "../functions/product";


const Home = () => {
    const { user } = useSelector((state) => ({ ...state }));
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAllProducts();
    }, []);

    const handleRemove = (slug) => {
        let answer = window.confirm(`Are you sure you want to delete ?`)
        console.log(answer)
        if (answer) {
            setLoading(true)
            removeProduct(slug, user.token)
                .then(res => {
                    console.log('res:', res)
                    setLoading(false)
                    toast.success(`${res.data.title} Deleted`)
                    loadAllProducts()
                })
                .catch(err => {
                    console.log('err:', err)
                    setLoading(false)

                    toast.error(err.response.data);
                })

        }

    }
    const loadAllProducts = () => {
        setLoading(true);
        getProductsByCount(3)
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
            <div className='jumbotron text-danger h1 font-weight-bold text-center'>
                <Jumbotron text={["New Collection", "Latest Products"]} />


            </div>
            <div className="container">



                {loading ? (
                    <LoadingCard count={3} />
                ) :

                    <div className="row">
                        {products.map((product) => (
                            <div key={product._id} className="col-md-4 mb-4">
                                <ProductCard key={product._id}
                                    product={product} handleRemove={handleRemove}
                                />
                            </div>
                        ))}

                    </div>
                }


            </div>


        </>

    );
};

export default Home;
