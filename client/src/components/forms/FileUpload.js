import React from 'react'
import Resizer from 'react-image-file-resizer';
import axios from 'axios'
import { useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import { toast } from 'react-toastify';

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
                        axios.post(`${process.env.REACT_APP_API}/uploadImages`, {
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
    return (
        <>


            <div className='row'>
                <h1>Images: {values.images.length}</h1>
                {values.images && values.images.map((image, i) => (
                    <Avatar
                        key={image.public_id} src={image.url} size={100}
                        className='m-3'
                    >
                        Product Image
                    </Avatar>


                ))}

            </div>
            <div className='row'>
                <label className='btn btn-primary'>
                    Choose File
            <input type='file'
                        hidden
                        multiple accept='images/*'
                        onChange={fileUploadAndResize}
                    />
                </label>

            </div>




        </>

    )
}

export default FileUpload
