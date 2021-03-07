import React from "react";
import { Card, Tabs } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Laptop from "../../images/laptop.png";
import ProductListItems from "./ProductListItems";
import ReactStars from 'react-stars'
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../functions/ratings";


const { TabPane } = Tabs;

const SingleProduct = ({ product, onStarClick, rating, onOkClick }) => {
    const { title, images, description } = product;


    return (
        <>

            <div className="col-md-7">
                {images && images.length ? (
                    <Carousel
                        showArrows={true} autoPlay infiniteLoop >
                        {images && images.map((i) => <img key={i.public_id} alt={i.public_id} src={i.url} />)}
                    </Carousel>
                ) : (
                    <Card cover={<img alt={Laptop} src={Laptop} className="mb-3 card-image" />}></Card>
                )}

                <Tabs type='card' defaultActiveKey="1">
                    <TabPane tab="Description" key="1">
                        {description ? description : 'No description for this product'}
                    </TabPane>
                    <TabPane tab="More" key="2">
                        Tab 2
                        </TabPane>

                </Tabs>
            </div>

            <div className="col-md-5 text-center">
                <h1 className='bg-info p-3'> {title}</h1>
               rating

               {product && product.ratings && product.ratings.length > 0 ? showAverage(product) : <div className='text-center pt-2 pb-3 '> No rating yet</div>}

                <Card
                    actions={[
                        <>
                            <ShoppingCartOutlined className="text-success" /> <br />
              Add to Cart
            </>,
                        <Link to="/">
                            <HeartOutlined className="text-info" /> <br /> Add to Wishlist
                           </Link>,

                        <RatingModal onOkClick={onOkClick}><ReactStars
                            count={5}
                            onChange={onStarClick}
                            size={54}
                            value={rating}
                            color2={'#660000'}

                            half={false}

                        /></RatingModal>,
                    ]

                    }

                >

                    <ProductListItems product={product} />

                </Card>
            </div>
        </>
    );
};

export default SingleProduct;
