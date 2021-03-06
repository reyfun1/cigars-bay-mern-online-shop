import React, { useState , useRef, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { createProduct, uploadProductImage } from '../actions/productActions'

const EditProduct = ({setShowAddNewProduct}) => {
    const dispatch = useDispatch()
    const imageUploader = useRef()
    const imagesUploader = useRef()

    // Brand Information
    const [productIdCode, setProductIdCode] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [brandName, setBrandName] = useState('')
    const [vitolaName, setVitolaName] = useState('')
    const [category, setCategory] = useState('')
    const [cigarCount, setCigarCount] = useState()

    // Product Characteristics
    const [strength, setStrength] = useState('')
    const [wrapper, setWrapper] = useState('')
    const [cigarRingSize, setCigarRingSize] = useState()
    const [cigarLengthSize, setCigarLengthSize] = useState()
    const [description, setDescription] = useState()

    // Product Images TODO
    // const [mainImage, setMainImage] = useState('')

    // Price and Shipping
    const [price, setPrice] = useState()
    const [countInStock, setCountInStock] = useState()
    const [weight, setWeight] = useState()
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const [depth, setDepth] = useState()
    const [tags, setTags] = useState('')


    // get state to get paths of images
    // Grab the user login info 
    const adminImageUpload = useSelector(state => state.adminImageUpload)
    const { loading: imageLoading , error: imageError, path : mainImagePath} = adminImageUpload 


    // Grab the state of the product upload
    const adminProductCreate = useSelector(state => state.adminProductCreate)
    const { loading, error, product, success } = adminProductCreate

    // upload image method 
    const uploadImage = async e => {
        e.preventDefault()
        const image = imageUploader.current.files[0]
        dispatch(uploadProductImage(image))
    }

    const uploadImages = async e => {
        e.preventDefault()
        const images = imagesUploader.current.files

        console.log(images)

    }

    const submitHandler = async e => {
        e.preventDefault()

        dispatch(createProduct({
            productIdCode,
            brandName,
            productIdCode,
            vitolaName,
            category,
            cigarCount,
            strength,
            wrapper,
            cigarRingSize,
            cigarLengthSize,
            description,
            price,
            countInStock,
            weight,
            width,
            height,
            depth,
            tags,
            image: mainImagePath,
        }))

        // reset the product list state
        dispatch({type: 'PRODUCT_LIST_RESET'})
    }

    return (
        <div className="p-4 border">
            <p className="fs-4 border-bottom pb-3">Add New Product</p>
            <form onSubmit={submitHandler} className="row">
                <div className={`${success && 'd-none'} col row`}>

                {/* BRAND INFORMATION */}
                <div className="col px-4">
                    <p className="fs-5">Brand Information</p>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Product ID Code</label>
                        <input type="text" className="form-control" placeholder="PLA-001" value={productIdCode} onChange={e => setProductIdCode(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Company Name</label>
                        <input type="text" className="form-control" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Brand Name</label>
                        <input type="text" className="form-control" placeholder="Brand Name" value={brandName} onChange={e => setBrandName(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Vitola Name</label>
                        <input type="text" className="form-control" placeholder="Vitola Name" value={vitolaName} onChange={e => setVitolaName(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Category</label>
                        <input type="text" className="form-control" placeholder="Category Name" value={category} onChange={e => setCategory(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Cigar Count</label>
                        <input type="num" className="form-control" placeholder="0" value={cigarCount} onChange={e => setCigarCount(e.target.value)}/>
                    </div>
                </div>
                {/* PRODUCT CHARACTERISTICS */}
                <div className="col px-4">
                    <p className="fs-5">Product Characteristics</p>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Strength</label>
                        <input type="text" className="form-control" placeholder="Strength" value={strength} onChange={e => setStrength(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Wrapper</label>
                        <input type="text" className="form-control" placeholder="Wrapper" value={wrapper} onChange={e => setWrapper(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Cigar Ring Size</label>
                        <input type="num" className="form-control" placeholder="0" value={cigarRingSize} onChange={e => setCigarRingSize(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Cigar Length Size</label>
                        <input type="num" className="form-control" placeholder="0" value={cigarLengthSize} onChange={e => setCigarLengthSize(e.target.value)}/>
                    </div>
                    <div className="my-3">
                        <label>Description</label>
                        <textarea className="form-control" aria-label="Description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                {/* PRODUCT IMAGES */}
                <div className="col px-4">
                <div>
                    <p className="fs-5">Product Images</p>
                    <div className="form-input my-3">
                        <label htmlFor="mainImage" className="form-label">Upload Main Image</label>
                        <div className={`${!mainImagePath && 'd-flex' }`}>
                            <input className="form-control" type="file" id="mainImage" ref={imageUploader}/>
                            {imageLoading ? (
                            <div className="my-4 text-center fs-1">
                            <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                                </div>
                            ) : (
                                <>
                                {mainImagePath ? (
                                    <div className="alert alert-success my-3" role="alert">
                                    Main Product Image Uploaded <i className="bi bi-check-circle"></i>
                                    </div>
                                ) : (
                                    <button className="btn btn-primary" onClick={uploadImage}>Upload</button>
                                )}
                                </>
                            )} 
                        </div>
                    </div>
                    <div className="form-input my-4">
                    <label htmlFor="formFileMultiple" className="form-label">Upload Other Images</label>
                        <div className={`${!mainImagePath && 'd-flex' }`}>
                            <input className="form-control" type="file" id="formFileMultiple" multiple ref={imagesUploader}/>
                            {imageLoading ? (
                            <div className="my-4 text-center fs-1">
                            <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                                </div>
                            ) : (
                                <>
                                {mainImagePath ? (
                                    <div className="alert alert-success my-3" role="alert">
                                    Images Uploaded <i className="bi bi-check-circle"></i>
                                    </div>
                                ) : (
                                    <button className="btn btn-primary" onClick={uploadImages}>Upload</button>
                                )}
                                </>
                            )} 
                        </div>
                    </div>
                </div>
                {/* PRICE & SHIPPING */}
                <div className="border-top pt-3">
                    <p className="fs-5">Price and Shipping</p>
                    <div className="input-group my-3">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)} aria-label="Amount (to the nearest dollar)"/>
                        <span className="input-group-text">.00</span>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                            <label>In stock</label>
                            <input type="number" className="form-control" placeholder="0" value={countInStock} onChange={e => setCountInStock(e.target.value)}/>
                        </div>
                        <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                            <label>Weight (lbs)</label>
                            <input type="number" className="form-control" placeholder="0" value={weight} onChange={e => setWeight(e.target.value)}/>
                        </div>
                    </div>
                

                <div className="d-flex justify-content-center">
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Width (in.)</label>
                        <input type="number" className="form-control" placeholder="0" value={width} onChange={e => setWidth(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Height (in.)</label>
                        <input type="number" className="form-control" placeholder="0" value={height} onChange={e => setHeight(e.target.value)}/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Depth (in.)</label>
                        <input type="number" className="form-control" placeholder="0" value={depth} onChange={e => setDepth(e.target.value)}/>
                    </div>
                </div>

                
                <div className="my-3">
                    <label>Tags</label>
                    <textarea className="form-control" aria-label="Description" value={tags} onChange={e => setTags(e.target.value)}></textarea>
                </div>
                </div>
                </div>     
                </div>
                {/* SAVING PRODUCT  */}
                <div className="col-12">
                {loading ? (
                    <div className="my-4 text-center fs-1 d-none">
                        <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <>
                    {success ? (
                           <>
                            <div className="alert alert-success my-3 text-center" role="alert">
                                <p className="fs-4 m-0">Product Saved ! <i className="bi bi-check-circle"></i></p>
                                <a className="btn btn-secondary my-3" onClick={() => setShowAddNewProduct(false)}>Close</a>
                            </div>
                           </>
                    ) : (
                        <>
                            <button type="submit" className="btn btn-success my-3 float-end">Submit Product</button>
                            {/* <a className="btn btn-secondary my-3" onClick={cancelShowAddNewProducts}>Cancel</a> */}
                        </>
                    )}
                    </>
                )}
                </div>
            </form>
        </div>
    )
}

export default EditProduct
