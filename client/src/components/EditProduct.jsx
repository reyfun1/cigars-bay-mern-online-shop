import React, { useState , useRef, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { createProduct, uploadProductImage } from '../actions/productActions'

const EditProduct = ({setShowAddNewProduct}) => {
    const dispatch = useDispatch()
    const imageUploader = useRef()

    // component states for the text fields 
    const [name, setName] = useState('Alma fuerte')
    const [price, setPrice] = useState(234)
    // const [image, setImage] = useState('')
    const [brand, setBrand] = useState('Plasencia Cigars')
    const [category, setCategory] = useState('Cigar box')
    const [countInStock, setCountInStock] = useState(43)
    const [description, setDescription] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit at deleniti illum eum doloribus.')
    const [uploading, setUploading] = useState(false)

    // get state to get paths of images
    // Grab the user login info 
    const adminImageUpload = useSelector(state => state.adminImageUpload)
    const { loading: imageLoading , error: imageError, paths } = adminImageUpload 


    // Grab the state of the product upload
    const adminProductCreate = useSelector(state => state.adminProductCreate)
    const { loading, error, product, success } = adminProductCreate

    const uploadImage = async() => {
        const image = imageUploader.current.files[0]
        dispatch(uploadProductImage(image))
    }

    const cancelShowAddNewProducts = () => setShowAddNewProduct(false)

    const submitHandler = async e => {
        e.preventDefault()

        console.log(e)
        return

        dispatch(createProduct({
            name,
            price,
            paths,
            brand,
            category,
            description,
            countInStock
        }))
    }

    return (
        <div className="border p-2">
            <form onSubmit={submitHandler}>
                <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                    <label>Product Name</label>
                    <input type="name" className="form-control" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                    <label>Price</label>
                    <input type="number" className="form-control" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <div className="form-input my-3">
                    <label htmlFor="formFileMultiple" className="form-label">Upload Main Image</label>
                    <input className="form-control" type="file" id="formFileMultiple" ref={imageUploader}/>
                </div>
                {imageLoading ? (
                    <div className="my-4 text-center fs-1">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                    <>
                    {paths ? (
                        <div className="alert alert-success my-3" role="alert">
                        Main Product Image Uploaded <i className="bi bi-check-circle"></i>
                        </div>
                    ) : (
                        <button className="btn btn-primary" onClick={uploadImage}>Upload</button>
                    )}
                    </>
                )}
                <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                    <label>Brand Name</label>
                    <input type="name" className="form-control" placeholder="Brand Name" value={brand} onChange={e => setBrand(e.target.value)}/>
                </div>
                <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                    <label>Category</label>
                    <input type="name" className="form-control" placeholder="Category Name" value={category} onChange={e => setCategory(e.target.value)}/>
                </div>
                <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                    <label>In stock</label>
                    <input type="number" className="form-control" placeholder="Price" value={countInStock} onChange={e => setCountInStock(e.target.value)}/>
                </div>
                <div className="input-group">
                    <span className="input-group-text">Description</span>
                    <textarea className="form-control" aria-label="Description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>

                {loading ? (
                    <div className="my-4 text-center fs-1">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                    <>
                    {success ? (
                           <div className="alert alert-success my-3" role="alert">
                            Product Saved <i className="bi bi-check-circle"></i>
                           </div> 
                    ) : (
                        <>
                            <button type="submit" className="btn btn-success my-3 float-end">Submit</button>
                            <a className="btn btn-secondary my-3" onClick={cancelShowAddNewProducts} >Cancel</a>
                        </>
                    )}
                    </>
                )}

            </form>
        </div>
    )
}

export default EditProduct
