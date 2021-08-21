import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {listProductDetails, listProducts} from '../actions/productActions'
import Carousel from '../components/Carousel'

import styled from 'styled-components'
import { formatMoney } from 'accounting-js'


const AdminEditProduct = ({match}) => {
    const dispatch = useDispatch(null)
    const modalBtn = useRef(null)

    const productID = match.params.id

    // Important states 
    const [mainState, setMainState] = useState({})
    const [activeSKU, setActiveSKU] = useState({})


    const [newImages, setNewImages] = useState({})

    const [editMode, setEditMode] = useState(false)
    const [newProduct, setNewProduct] = useState(false)

    const [newAttribute, setNewAttribute] = useState(false)

    const attrName = useRef(null)
    const attrText = useRef(null)
    const imagesUploader = useRef(null)


    // Editing product info from redux
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, product , error} = productDetails

    // If there is product id, open vie mode, otherwise we are adding new product
    useEffect(()=>{
        if(productID){
            dispatch(listProductDetails(productID))
        } else{
            setEditMode(true)
            setNewProduct(true)
            setMainState({})
            setActiveSKU({})
        }
    },[])

    // Fill the main state with the product info
    useEffect(()=>{
        if(productID && Object.keys(product).length > 0){
            setMainState(product)
        }
    },[product])

    console.log(mainState)

    // Functions 
    const deleteImage = () => {
        console.log('delete image here')
    }

    const handleMainEditBtnClick = editmode => {
        setEditMode(editmode)
        if(!editmode){
            setNewAttribute(false)
        }
    }

    const handleAttributeSaveClick = () => {
        const name = attrName.current.value.toLowerCase()
        const text = attrText.current.value

        if(name === '' || text === ''){
            // show warning
        } else{
            // extract old attr 
            const oldAttr = mainState.attributes

            // add new attributes to old atrr
            const result = {...oldAttr,...{[name]: text} }

            setMainState({...mainState, attributes: result})
            setNewAttribute(false)
        }
    }

    const handleAttrInput = (key,value) => {
        // get old state of attr 
        const attr = mainState.attributes
        // change the text for the property
        attr[key] = value 
        setMainState({...mainState, attributes : attr})
    }

    const handleShippingInput = (key,value) => {
        // get old shipment info 
        let shipping = activeSKU.shipping

        // if shipping is undefined, then define it 
        if(!shipping){
            shipping = {}

            // set the value
            shipping[key] = value

            // add the shipping object to he state 
            setActiveSKU({...activeSKU, shipping})
        } 
        // shipping is already defined
        else{
            // add the new property to the shipping obj 
            shipping = {...shipping, [key]: value}

            // change the state 
            setActiveSKU({...activeSKU, shipping})
        }
    }


    const handleDeleteAttr = key => {
        console.log(key)
    }


    const handleSkuRowClick = sku => {
        setActiveSKU(sku)
        modalBtn.current.click()
    }

    // handle data validation for save btn 
    useEffect(()=> {
    
    },[activeSKU])
    
    // add Sku to the main state 
    const handleSaveSku = () => {

        let mainSkus = mainState.skus 

        // skus is undefined
        if(!mainSkus){
            let skus = [activeSKU]

            setMainState({...mainState, skus})
        } 
        // skus is defined
        else{   
            // add to local arr 
            mainSkus.push(activeSKU)

            setMainState({...mainState, mainSkus})
        }

        // close the modal, erase active sku modal 
    }

    const handleSaveProduct = () => {
        console.log(mainState, activeSKU)
    }

    const handleImagesUploader = e => {
        setNewImages(imagesUploader.current.files)
    }

    console.log(newImages)


    return (
        <AdminEditProductStyled className="container py-3">
            <div className="d-flex justify-content-between mt-3">
                <div>
                <p className="fs-4 text-capitalize m-0">
                    {(editMode && newProduct) && 'New Product' }
                    {(editMode && !newProduct) && 'Product (Editing)' }
                    {(!editMode && !newProduct) && 'Product' }
                </p>
                {productID && <small className="text-muted">Ref#{productID}</small> }
                </div>
                {!newProduct && <>
                { !editMode 
                    ? <button className="btn btn-outline-primary" onClick={() => handleMainEditBtnClick(true)}>Edit Product <i className="bi bi-pencil-square"></i></button> 
                    :  <button className="btn btn-outline-secondary" onClick={() => handleMainEditBtnClick(false)}>Cancel <i className="bi bi-x-circle"></i></button>
                }
                </>}
            </div>
            <div className="row border-bottom">
                <div className="col-4 py-4">
                    <p className="fs-5">Brand Information</p>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Vendor</label>
                        <input type="text" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                            disabled={!editMode} value={mainState.vendor} 
                            onChange={e => setMainState({...mainState,vendor: e.target.value})} placeholder="Ex: Plasencia Cigars"/>
                    </div>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Product Name</label>
                        <input type="text" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                        disabled={!editMode} value={mainState.name} 
                        onChange={e => setMainState({...mainState,name: e.target.value})} placeholder="Ex: Alma Fuerte Nestor IV Toro"/>
                    </div>
                    
                </div>
                <div className="col-8 py-4">
                    <p className="fs-5">&nbsp;</p>
                    <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                        <label>Tags</label>
                        <input type="text" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                        disabled={!editMode} value={mainState.tags}
                        onChange={e => setMainState({...mainState,tags: e.target.value})} placeholder="plasencia, toro, nicaragua"/>
                    </div>
                    <div className="my-3">
                        <label>Description</label>
                        <textarea className={`form-control ${!editMode ? 'read-only' : ''}`} 
                        disabled={!editMode} value={mainState.description} 
                        onChange={e => setMainState({...mainState,description: e.target.value})} aria-label="Description"></textarea>
                    </div>
                </div>
            </div>   
            <div className="row border-bottom py-4">
                <div className="col-4">
                <p className="fs-5">Product Attributes</p>
                    {mainState.attributes && Object.keys(mainState.attributes).map(key => {
                        return (
                        <div key={key} className="form-input my-3"> <i className="fa fa-envelope" /> 
                            <label className="text-capitalize">{key}</label>
                            <div className="d-flex">
                                <input type="text" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                                    disabled={!editMode} placeholder="Text" value={mainState.attributes[key]} 
                                    onChange={(e) => handleAttrInput(key, e.target.value )}/>
                                {editMode && <button onClick={() => handleDeleteAttr(key)}className="btn btn-outline-danger" type="button"><i className="bi bi-trash"></i></button>}
                            </div>
                    </div>)
                    })}

                    {editMode && 
                    <>
                        {!newAttribute ? (
                            <div>
                                <button onClick={() => setNewAttribute(true)} className="btn btn-sm btn-outline-primary w-100">
                                    <i className="bi bi-plus-circle-dotted"></i> Add Attribute
                                </button>
                            </div>
                        ) : (
                            <div className="border border-2 p-3">
                                <div className="d-flex justify-content-between">
                                    <p className="fw-bold">New Attribute</p>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setNewAttribute(false)}></button>
                                </div>
                                <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                                    <label>Attribute Name</label>
                                    <input type="text" className={`form-control`} ref={attrName}/>
                                </div>
                                <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                                    <label>Attribute Content</label>
                                    <input type="text" className={`form-control`} ref={attrText}/>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-sm btn-outline-primary d-block" onClick={handleAttributeSaveClick}>Save</button>
                                </div>
                            </div>
                        )}   
                    </>
                    }

                </div>
                <div className="col-8">
                    <p className="fs-5">Images</p>
                    <div className="d-flex flex-wrap align-items-center justify-content-start border border-1 rounded-3 my-3 p-2">
                        {mainState.images && mainState.images.map((imageURL,i) => {
                            return (
                            <div key={i} onClick={deleteImage} className="img-container img-thumbnail border-2 m-1">
                                <img className="" src={imageURL} alt={imageURL} />
                            </div>)
                        })}
                        {(editMode || newProduct) && 
                        <div className="img-thumbnail img-button-container">
                                <button className="btn btn-outline-success float-end h-100 fs-3" onClick={e => imagesUploader.current.click()}>
                                    <i className="bi bi-file-earmark-plus"></i>
                                </button>
                                <div class="input-group mb-3 d-none">
                                    <input ref={imagesUploader} multiple type="file" 
                                    class="form-control" id="inputGroupFile02" onChange={handleImagesUploader}/>
                                    <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                </div>
                        </div>}
                    </div>
                    {newImages.length > 0 && 
                    <>
                        <p>New Images to Upload</p>
                        <div className="d-flex flex-wrap align-items-center justify-content-start border border-1 rounded-3 my-3 p-2"> 
                            {newImages.length > 0 && [...newImages].map((file,i) => {
                                return (
                                <div key={i} onClick={deleteImage} className="img-container img-thumbnail border-2 m-1">
                                    <img className="" src={URL.createObjectURL(file)} alt={file.name} />
                                </div>)
                            })}
                        </div>
                    </>
                    }
                </div>
            </div>
            <div className="row border-bottom py-4">
                <div className="col p-2">
                    <p className="fs-5">SKUs</p>
                    <table className="table text-center border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>OPTION</th>
                            <th>STOCK</th>
                            <th>PRICE</th>
                            <th>SEARCH</th>
                            <th>SHIPPING</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mainState.skus && mainState.skus.map((sku,i)=> {
                            return (
                                <tr key={i} onClick={() => handleSkuRowClick(sku)}>
                                    <td>{sku.sku}</td>
                                    <td>{sku.option}</td>
                                    <td>{sku.stock_qty}</td>
                                    <td>{formatMoney(sku.price * 1)}</td>
                                    <td>{sku.isSearchable ? <i className="bi bi-check"></i> : <i className="bi bi-x"></i> }</td>
                                    <td>L:{sku.shipping.l} x H:{sku.shipping.h} x W: {sku.shipping.w}  ({sku.shipping.weight} lbs)</td>
                                </tr>
                            )
                        })}
                        {(editMode || newProduct) && 
                        <tr>
                            <td className="p-0">
                                <button type="button" className="btn btn-outline-primary w-100 border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <i className="bi bi-plus-circle-dotted"></i> New Sku
                                </button>
                            </td>
                        </tr>}
                    </tbody>
                    </table>
                    
                    
                </div>
            </div>
            <div className="py-4 mt-4 d-flex justify-content-end">
                    <button type="button" className="btn btn-secondary me-5" >Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={handleSaveProduct}>Save Product <i className="bi bi-save"></i></button>     
            </div>


            {/* <!-- Modal --> */}
            <button type="button" ref={modalBtn} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">{activeSKU.sku}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body row">
                    <div className="col">
                        <p className="fs-5">Images</p>
                        <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                            <label>SKU ID</label>
                            <input type="text" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                                disabled={!editMode} placeholder="PLA-001-BX10" 
                                value={activeSKU.sku} onChange={e => setActiveSKU({...activeSKU,sku: e.target.value}) }/>
                        </div>
                        <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                            <label>Option Name</label>
                            <input type="text" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                                disabled={!editMode} placeholder="Box of 20 cigars" 
                                value={activeSKU.option}  onChange={e => setActiveSKU({...activeSKU,option: e.target.value}) }/>
                        </div>
                        <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                            <label>Stock</label>
                            <input type="num" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                                disabled={!editMode} placeholder="" 
                                value={activeSKU.stock_qty} onChange={e => setActiveSKU({...activeSKU,stock_qty: e.target.value}) }/>
                        </div>
                        <div className="form-input my-3"> <i className="fa fa-envelope" /> 
                            <label>Price</label>
                            <input type="num" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                            disabled={!editMode} placeholder="" 
                            value={activeSKU?.price?.base} onChange={e => setActiveSKU({...activeSKU,price: e.target.value}) } /> 
                        </div>
                        <div className="form-input my-3 form-check form-switch">
                            <input className="form-check-input" checked={activeSKU.isSearchable} disabled={!editMode} 
                                type="checkbox" id="flexSwitchCheckDefault" value={activeSKU.isSearchable} 
                                onChange={e => setActiveSKU({...activeSKU, isSearchable : (!activeSKU.isSearchable)})}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">SKU is Searchable</label><br />
                            <small>(This sku will show up in the search results of users)</small>
                        </div>
                    </div>
                    <div className="col">
                        <p className="fs-5">Shipping</p>
                        <div className="form-input my-3 row"> <i className="fa fa-envelope" /> 
                            <div className="col">
                                <label>Length</label>
                                <input type="num" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                                disabled={!editMode} placeholder="" 
                                value={activeSKU?.shipping?.l} onChange={e => handleShippingInput('l',e.target.value)}/>
                            </div>
                            <div className="col">
                                <label>Width</label>
                                <input type="num" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                                disabled={!editMode} placeholder="" 
                                value={activeSKU?.shipping?.w} onChange={e => handleShippingInput('w',e.target.value)}/>
                            </div>
                            <div className="col">
                                <label>Height</label>
                                <input type="num" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                                disabled={!editMode} placeholder="" 
                                value={activeSKU?.shipping?.h} onChange={e => handleShippingInput('h',e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-input row my-3">
                            <div className="col">
                                <label>Weight (lbs)</label>
                                <input type="num" className={`form-control ${!editMode ? 'read-only' : ''}`} 
                                disabled={!editMode} placeholder="" 
                                value={activeSKU?.shipping?.weight} onChange={e => handleShippingInput('weight',e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    {(editMode || newProduct) && <button type="button" className="btn btn-primary" onClick={handleSaveSku}>Save</button>}
                </div>
                </div>
            </div>
            </div>
        </AdminEditProductStyled>
    )
}

export default AdminEditProduct

const AdminEditProductStyled = styled.div`

.read-only{
    border:none;
    pointer-events: none;
}
.modal-dialog{
    max-width: 700px;
}

table {
    tbody tr{
        cursor: pointer;
        &:hover{
            background-color: #0D6EFD;
            color: white;
        }
    }
}
.img-button-container{
    
    button{
        min-width: 120px;
        min-height: 120px;
    }
    // position: relative;
    // &:hover{
    //     border-color: red;
    //     opacity: 0.7;
    //     &::after{
    //         content: 'ADD IMAGE';
    //         text-center;
    //         padding: .5rem;
    //         color: white;
    //         border-radius: 5px;
    //         background-color: green;
    //         position: absolute;
    //         top: 80%;
    //         left:50%;
    //         transform: translate(-50%,-50%);
    //     }
    // }
}
.img-container{
    cursor: pointer;
    opacity: 1;
    position: relative;
    text-align: center;
    max-width: 150px;
    img{
        width: 100%;
    }

    &:hover{
        border-color: red;
        opacity: 0.7;
        &::after{
            content: 'DELETE';
            padding: .5rem;
            color: white;
            border-radius: 5px;
            background-color: red;
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%,-50%);
        }
    }

    
}
`
