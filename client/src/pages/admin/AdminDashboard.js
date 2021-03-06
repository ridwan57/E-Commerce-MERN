import React, { useEffect, useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getProductsByCount } from "../../functions/product";

const AdminDashboard = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        setLoading(true)
        getProductsByCount(10).then(res => {
            setLoading(false)
            console.log(res.data)
            setProducts(res.data)
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>
                <div className="col">admin dashboard

                {loading ? (<h4 className='text-danger'>loading</h4>) : (<h4>All Products</h4>)}
                    {JSON.stringify(products)}
                </div>
            </div>

        </div>

    );
};

export default AdminDashboard;