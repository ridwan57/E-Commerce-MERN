import React, { useEffect, useState } from 'react'
import { getProduct, productStar } from '../functions/product'
import SingleProduct from '../components/cards/SingleProduct'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Product = ({ match: { params } }) => {
    const [product, setProduct] = useState({})
    const [rating, setRating] = useState()
    const { user } = useSelector(state => ({ ...state }))

    const onStarClick = (rating) => {
        console.log('rating:', rating)
        setRating(rating)


    }
    const onOkClick = () => {
        productStar(product._id, rating, user.token)
            .then(res => {
                console.log(res.data)
                toast.success(`Rating updated: ${res.data}`)
            }).catch(er => {
                console.log(er)
            })

    }
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
                <SingleProduct product={product}
                    onOkClick={onOkClick}
                    onStarClick={onStarClick} rating={rating} />

            </div>
            <div className='row'>
                <div className='col text-center pt-5 pb-5'>
                    <hr />
                    <h4>Related Product </h4>
                    <hr />
                </div>

            </div>
        </div>
    )
}

export default Product
