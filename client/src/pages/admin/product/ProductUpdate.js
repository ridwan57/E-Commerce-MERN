import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import AdminNav from "../../../components/nav/AdminNav";
import { getProduct } from "../../../functions/product";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";



const initialState = {
    title: "",
    description: "",
    price: "",
    categories: [],
    category: "",
    subs: [],
    shipping: "",
    quantity: "",
    images: [
    ],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    color: "",
    brand: "",
};


const ProductUpdate = ({ history, match: { params } }) => {

    const [values, setValues] = useState(initialState);
    const { user } = useSelector((state) => ({ ...state }));
    const [categories, setCategories] = useState([]);
    const [subOptions, setSubOptions] = useState([]);

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        loadProduct()
        loadCategories()

    }, []);


    const loadCategories = () =>
        getCategories().then((c) => {
            console.log(c.data)
            setValues((prevValues) => ({ ...prevValues, categories: c.data }))
        });

    const loadProduct = () => {
        getProduct(params.slug).then(res => {
            setName(res.data.name)
            console.log(res)
            setValues((prevValues) => ({ ...prevValues, ...res.data }))

        })
            .catch(err => console.log(err))

    }
    const handleCategoryChange = (e) => {
        e.preventDefault()
        console.log('handleCategoryChange', e.target.value)
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            subs: []
        }))
        getCategorySubs(e.target.value).then(res => {

            console.log(res.data)
            setSubOptions(res.data)
        })
            .catch(err => {
                console.log(err)
            })
        // console.log(e.target.name, '------------', e.target.value)
        //
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // createProduct(values, user.token)
        //     .then(res => {

        //         window.alert(`"${res.data.title}" is created`);
        //         window.location.reload()
        //         setValues(initialState)
        //     })
        //     .catch(err => {
        //         console.log(err);

        //         // if (err.response.status === 400) toast.error(err.response.message);
        //         // else
        //         toast.error(err.response.data.err);
        //     })
        //
    };

    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value

        }))
        // console.log(e.target.name, '------------', e.target.value)
        //
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>

                <div className="col-md-10">
                    <h4>Product Update</h4>
                    {JSON.stringify(values)}
                    <ProductUpdateForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        values={values}
                        handleCategoryChange={handleCategoryChange}
                        subOptions={subOptions}
                        setValues={setValues}
                    />

                </div>
            </div>
        </div>
    );
}

export default ProductUpdate
