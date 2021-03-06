import { Pagination, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getProducts, getProductsCount } from "../../functions/product";
import Jumbotron from "../cards/Jumbotron";
import LoadingCard from "../cards/LoadingCard";
import ProductCard from "../cards/ProductCard";


const NewArrivals = () => {
    const { user } = useSelector((state) => ({ ...state }));
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [productsCount, setProductsCount] = useState(0)
    const onChange = (page) => {
        console.log('pagination', page)
        setPage(page)
    }


    useEffect(() => {

        loadAllProducts()
    }, [page]);

    useEffect(() => {
        getProductsCount().then(res => setProductsCount(res.data))
    }, []);


    const loadAllProducts = () => {
        setLoading(true);
        getProducts('createdAt', 'asc', page)
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
                <div className='row'>
                    <nav className='col-md-4 offset-md-4 text-center pt-2 p-3'>
                        <Pagination
                            onChange={onChange}
                            // onShowSizeChange={onShowSizeChange}
                            current={page}
                            total={Math.ceil(productsCount / 3) * 10}
                        />

                    </nav>



                </div>


            </div>


        </>

    );
};

export default NewArrivals;
