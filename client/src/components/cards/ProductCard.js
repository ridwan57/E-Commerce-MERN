import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LaptopImg from '../../images/laptop.png'

const { Meta } = Card;

const ProductCard = ({ product, handleRemove }) => {
    // destructure
    const { title, description, images, slug, price } = product;

    return (

        <Card
            cover={
                <img
                    alt={images && images.length ? images[0].public_id : ""}
                    src={images && images.length ? images[0].url : LaptopImg}
                    style={{ height: "150px", objectFit: "cover" }}
                    className="p-1"
                />
            }
            actions={[
                <Link to={`/product/${slug}`}>
                    <EyeOutlined className='text-warning' /><br /> View Product
                </Link>
                ,
                <>
                    <ShoppingCartOutlined className='text-danger'
                        onClick={e => handleRemove(slug)} /> <br /> Add to cart
                </>
            ]}
        >
            <Meta title={`${title} - $${price}`} description={`${description && description.substring(0, 20)}...`} />

        </Card>
    );
};

export default ProductCard;
