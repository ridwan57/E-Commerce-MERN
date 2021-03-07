import React from 'react'
import Resizer from 'react-image-file-resizer';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { Avatar, Badge } from 'antd';
import { toast } from 'react-toastify';
import LaptopImg from '../../images/laptop.png'

const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 720, 720, 'JPEG', 100, 0,
        uri => {
            resolve(uri);
        },
        'base64'
    );
});

const FileUpload = ({ values, setValues, setLoading }) => {
    const { user } = useSelector(state => ({ ...state }))

    const fileUploadAndResize = (e) => {
        let files = e.target.files
        console.log('e.target.files:', e.target.files)
        let allUploadedFiles = values ? values.images : []
        if (files.length > 0) {
            setLoading(true)
            for (let i = 0; i < files.length; i++) {
                resizeFile(files[i])
                    .then(uri => {
                        console.log(uri)
                        axios.post(`${process.env.REACT_APP_API}/uploadimages`, {
                            image: uri
                        }, {
                            headers: {
                                authtoken: user ? user.token : ''
                            }
                        }).then(res => {
                            console.log('IMAGE UPLOAD RES DATA', res)

                            toast.success('Uploaded')
                            setLoading(false)
                            allUploadedFiles.push(res.data)
                        })
                            .catch(err => {
                                console.log('IMAGE POST FAILED', err)
                            })


                    })
                    .catch(err => {
                        console.log('IMAGE RESIZE FAILED', err)
                    })
            }
            setValues({ ...values, images: allUploadedFiles })
        }



    }

    const handleImageRemove = (public_id) => {
        console.log('id:', public_id)
        setLoading(true)
        axios.post(`${process.env.REACT_APP_API}/removeimage`, {
            public_id
        }, {
            headers: {
                authtoken: user.token
            }
        }).then(res => {
            console.log('IMAGE UPLOAD RES DATA', res)

            let filteredImages = values.images.filter(image => image.public_id !== public_id)
            setValues({ ...values, images: filteredImages })
            setLoading(false)
            // allUploadedFiles.push(res.data)
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }
    return (
        <>


            <div className='row'>

                {values.images && values.images.map((image, i) => (
                    <Badge count='X' key={image.public_id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleImageRemove(image.public_id)}

                    >

                        <Avatar
                            src={image.url} size={100}
                            shape='square'
                            className='m-3'
                        >
                            Product Image
                    </Avatar>
                    </Badge>


                ))}

            </div>
            <div className='row'>
                <label className='btn btn-primary btn-raised mb-4'>
                    Choose File
                     <input
                        type='file'
                        hidden
                        multiple
                        accept='images/*'
                        onChange={fileUploadAndResize}

                    />
                </label>

            </div>




        </>

    )
}

export default FileUpload
