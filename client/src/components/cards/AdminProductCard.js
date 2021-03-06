import React from "react";
import { Card } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminProductCard = ({ product, handleRemove }) => {
    // destructure
    const { title, description, images, slug } = product;

    return (
        <Card
            cover={
                <img
                    alt={images && images.length ? images[0].public_id : ""}
                    src={images && images.length ? images[0].url : "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                    style={{ height: "150px", objectFit: "cover" }}
                    className="p-1"
                />
            }W
            actions={[
                <Link to={`/admin/product/${slug}`}>
                    <EditOutlined className='text-warning' />
                </Link>
                ,
                <DeleteOutlined className='text-danger' onClick={e => handleRemove(slug)} />
            ]}
        >
            <Meta title={title} description={`${description && description.substring(0, 20)}...`} />

        </Card>
    );
};

export default AdminProductCard;