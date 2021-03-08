import { DollarOutlined, DownSquareOutlined, StarOutlined } from "@ant-design/icons";
import { Menu, Slider } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCard from "../components/cards/LoadingCard";
import ProductCard from "../components/cards/ProductCard";
import Star from "../components/forms/Star";
import { getCategories } from "../functions/category";
import { getProductsByCount, getSearchProducts } from "../functions/product";
import { showAverage } from "../functions/ratings";
import { getSubs } from "../functions/sub";
const { SubMenu, ItemGroup, Item } = Menu


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState([0, 0]);
    const [ok, setOk] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    const [star, setStar] = useState("");
    const [subs, setSubs] = useState([]);
    const [sub, setSub] = useState("");
    const [brands, setBrands] = useState([
        "Apple",
        "Samsung",
        "Microsoft",
        "Lenovo",
        "ASUS",
    ]);
    const [brand, setBrand] = useState("");
    const [colors, setColors] = useState([
        "Black",
        "Brown",
        "Silver",
        "White",
        "Blue",
    ]);
    const [color, setColor] = useState("");
    const [shipping, setShipping] = useState("");

    let dispatch = useDispatch();
    let { search } = useSelector((state) => ({ ...state }));
    const { text } = search;



    //categories


    const loadCategories = () =>
        getCategories().then((c) => setCategories(c.data));


    //by default
    useEffect(() => {
        loadAllProducts()
        loadCategories();
    }, []);
    //search
    useEffect(() => {
        const delayed = setTimeout(() => {
            fetchProducts(text)
        }, 400)
        return () => clearTimeout(delayed)

    }, [text])
    //price range

    useEffect(() => {
        console.log('ok')
        fetchProducts({ price })

        // fetch subcategories
        getSubs().then((res) => setSubs(res.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ok])
    //category

    useEffect(() => {

        // fetchProducts({ category })


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    const fetchProducts = (arg) => {
        getSearchProducts(arg)
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

    // handle check for categories
    const handleCheck = (e) => {
        // reset
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: "" },
        });
        setPrice([0, 0]);
        setStar("");
        setSub("");
        setBrand("");
        setColor("");
        setShipping("");
        console.log(e.target.value);
        let inTheState = [...categoryIds];
        let justChecked = e.target.value;
        // let foundInTheState = inTheState.indexOf(justChecked); // index or -1

        // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
        inTheState.includes(justChecked) ?
            (inTheState = inTheState.filter(x => x !== justChecked)) :
            (
                inTheState.push(justChecked)
            )


        setCategoryIds(inTheState);
        // console.log(inTheState);
        fetchProducts({ category: inTheState });
    };
    // 5. show products by star rating
    const handleStarClick = (e) => {
        e.preventDefault()
        let num = parseInt(e.target.value)
        console.log('num', num);
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: "" },
        });
        setPrice([0, 0]);
        setCategoryIds([]);
        setStar(num);
        setSub("");
        setBrand("");
        setColor("");
        setShipping("");
        fetchProducts({ stars: num });
    };

    const showStars = () => (
        <div className="pr-4 pl-4 pb-2">
            {/* <form> */}
            <div className="form-check">
                {[5, 4, 3, 2, 1].map(i => (
                    <React.Fragment key={i}>
                        <input className="form-check-input" type="radio" value={i} checked={star === i ? true : false} id={i} onChange={handleStarClick} />

                        <Star numberOfStars={i} />
                    </React.Fragment >
                ))
                }
            </div >
        </div >

    );

    const handleSlider = (value) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: "" },
        });



        // reset
        setCategoryIds([]);
        setPrice(value);
        setStar("");
        setSub("");
        setBrand("");
        setColor("");
        setShipping("");
        setTimeout(() => {
            setOk(!ok);
        }, 300);
    };

    //show categories

    // 4. load products based on category
    // show categories in a list of checkbox
    const showCategories = () =>
        categories.map((c) => (
            <div key={c._id}>
                <Checkbox
                    onChange={handleCheck}
                    className="pb-2 pl-4 pr-4"
                    value={c._id}
                    name="category"
                    checked={categoryIds.includes(c._id)}
                >
                    {c.name}
                </Checkbox>
                <br />
            </div>
        ));



    // 6. show products by sub category
    const showSubs = () =>
        subs.map((s) => (
            <div
                key={s._id}
                onClick={() => handleSub(s)}
                className={`p-1 m-1 badge badge-secondary ${s._id === sub._id ? 'text-danger' : ''}`}
                style={{ cursor: "pointer" }}

            >
                {s.name}
            </div>
        ));

    const handleSub = (sub) => {
        // console.log("SUB", sub);
        setSub(sub);
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: "" },
        });
        setPrice([0, 0]);
        setCategoryIds([]);
        setStar("");
        setBrand("");
        setColor("");
        setShipping("");
        fetchProducts({ sub });
    };

    return (



        <div className="container-fluid">
            <div className="row">

                <div className='col-md-3'>
                    <h4>Filters</h4>
                    <Menu defaultOpenKeys={["1", "2"]} mode="inline">
                        <SubMenu
                            key="1"
                            title={
                                <span className="h6">
                                    <DollarOutlined /> Price
                                </span>
                            }
                        >
                            <div>
                                <Slider
                                    className="ml-4 mr-4"
                                    tipFormatter={(v) => `$${v}`}
                                    range
                                    value={price}
                                    onChange={handleSlider}
                                    max="49999"
                                />
                            </div>
                        </SubMenu>

                        {/* category */}
                        <SubMenu
                            key="2"
                            title={
                                <span className="h6">
                                    <DownSquareOutlined /> Categories
                                </span>
                            }
                        >
                            <div style={{ margingTop: "-10px" }}>{showCategories()}</div>
                        </SubMenu>
                        {/* stars */}
                        <SubMenu
                            key="3"
                            title={
                                <span className="h6">
                                    <StarOutlined /> Rating
                         </span>
                            }
                        >
                            <div style={{ margingTop: "-10px" }}>{showStars()}</div>
                        </SubMenu>

                        {/* sub category */}
                        <SubMenu
                            key="4"
                            title={
                                <span className="h6">
                                    <DownSquareOutlined /> Sub Categories
                                  </span>
                            }
                        >
                            <div style={{ maringTop: "-10px" }} className="pl-4 pr-4">
                                {showSubs()}
                            </div>
                        </SubMenu>

                    </Menu>

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
