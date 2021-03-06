import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
    // destructure
    const { title, description, images } = product;

    return (
        <Card
            cover={
                <img
                    alt={images && images.length ? images[0].public_id : ""}
                    src={images && images.length ? images[0].url : "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                    style={{ height: "150px", objectFit: "cover" }}
                    className="m-2"
                />
            }
        >
            <Meta title={title} description={description} />
        </Card>
    );
};

export default AdminProductCard;
