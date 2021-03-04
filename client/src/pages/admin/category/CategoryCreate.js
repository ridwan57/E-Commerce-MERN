import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
    createCategory,
    getCategories,
    removeCategory,
} from "../../../functions/category";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const CategoryCreate = () => {
    const { user } = useSelector((state) => ({ ...state }));

    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () =>
        getCategories().then((c) => setCategories(c.data));

    const handleRemove = (slug) => {
        let answer = window.confirm(`Are you sure you want to delete ${slug} ?`)
        console.log(answer)
        if (answer) {
            setLoading(true)
            removeCategory(slug, user.token)
                .then(res => {
                    console.log('res:', res)
                    setLoading(false)
                    toast.success(`${res.data.name} Deleted`)
                    loadCategories()
                })
                .catch(err => {
                    console.log('err:', err)
                    setLoading(false)
                    if (err.response.status === 400) toast.error(err.response.data);
                    else toast.error(err.response.data);
                })

        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        setLoading(true);
        createCategory({ name }, user.token)
            .then((res) => {
                // console.log(res)
                setLoading(false);
                setName("");
                toast.success(`"${res.data.name}" is created`);
                loadCategories()
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                if (err.response.status === 400) toast.error(err.response.data);
                else toast.error(err.response.data);
            });
    };

    const categoryForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoFocus
                    required
                />
                <br />
                <button disabled={loading} className="btn btn-outline-primary">Save</button>
            </div>
        </form>
    );

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>
                <div className="col">
                    {loading ? (
                        <h4 className="text-danger">Loading..</h4>
                    ) : (
                        <h4>Create category</h4>
                    )}
                    {categoryForm()}
                    <hr />
                    {categories.map((c, id) => (
                        <div key={id} className='alert alert-secondary'>
                            {c.name} <span className='btn btn-sm float-right'>

                                <DeleteOutlined disabled={loading}
                                    onClick={() => handleRemove(c.slug)}
                                    className='text-danger' /></span>{" "}
                            <Link to={`/admin/category/${c.slug}`}>


                                <span className='btn btn-sm float-right'> <EditOutlined className='text-warning' /></span>{" "}



                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryCreate;