import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

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
            <div className='jumbotron'>
                {loading ? (
                    <h4 className="text-danger">Loading...</h4>
                ) : (
                    <h4>All Products</h4>
                )}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <AdminNav />
                    </div>
                    {JSON.stringify(products)}

                    <div className="col">

                        <div className="row">
                            {products.map((product) => (
                                <div key={product._id} className="col-md-4 mb-4">
                                    <ProductCard product={product} handleRemove={handleRemove} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Home;
