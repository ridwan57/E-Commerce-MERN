import React, { useEffect, useState } from 'react'
import { getProduct } from '../functions/product'

const Product = ({ match: { params } }) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        console.log('back')
        loadSingleProduct()
    }, [])

    const loadSingleProduct = () => {
        getProduct(params.slug).then(res => setProduct(res.data))
    }
    return (
        <div>
            <h1>{params.slug}</h1>
            {JSON.stringify(product)}
            <h1>product</h1>
        </div>
    )
}

export default Product
