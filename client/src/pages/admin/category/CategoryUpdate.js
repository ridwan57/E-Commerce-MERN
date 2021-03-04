import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
    getCategory,
    updateCategory
} from "../../../functions/category";
import CategoryForm from "../../../components/forms/CategoryForms";


const CategoryUpdate = ({ history, match: { params } }) => {
    const { user } = useSelector((state) => ({ ...state }));

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        getCategory(params.slug).then(res => {
            setName(res.data.name)
            console.log(res)
        })
            .catch(err => console.log(err))
    }, [params]);



    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);

        setLoading(true);
        updateCategory(params.slug, { name }, user.token)
            .then((res) => {
                // console.log(res)
                setLoading(false);
                toast.success(`"${res.data.name}" is updated`);
                setName('')

                history.push('/admin/category')
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                if (err.response.status === 400) toast.error(err.response.data);
                else toast.error(err.response.data);
            });
    };

    // const categoryForm = () => (
    //     <form onSubmit={handleSubmit}>
    //         <div className="form-group">
    //             <label>Name</label>
    //             <input
    //                 type="text"
    //                 className="form-control"
    //                 onChange={(e) => setName(e.target.value)}
    //                 value={name}
    //                 autoFocus
    //                 required
    //             />
    //             <br />
    //             <button disabled={loading} className="btn btn-outline-primary">Save</button>
    //         </div>
    //     </form>
    // );

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
                    <CategoryForm
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                    />
                    <hr />

                </div>
            </div>
        </div>
    );
};

export default CategoryUpdate;
