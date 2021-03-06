import React, { useEffect, useState } from 'react'
import { getProduct } from '../functions/product'
import SingleProduct from '../components/cards/SingleProduct'

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
        <div className='container-fluid'>
            <div className='row pt-4 h-75' >
                <SingleProduct product={product} />

            </div>
            <div className='row '>
                <div>Related Product</div>

            </div>
        </div>
    )
}

export default Product
