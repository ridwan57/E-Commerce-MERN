import React from 'react'

const FileUpload = () => {
    const fileUploadAndResize = (e) => {
        let files = e.target.files
        console.log(files)

    }
    return (
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
    )
}

export default FileUpload
