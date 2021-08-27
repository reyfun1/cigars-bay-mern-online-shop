import React from 'react'

const OrderListItem = () => {
    return (
        <div className="card my-3 shadow col-lg-7 col-md-10 col-sm-12 col-xs-12 p-0 mx-auto">
            <div className="card-header">
                <div className="row">
                    <div className="col">
                        <span className="d-block text-muted">Order Placed</span>
                        <span>July 19, 2021</span>
                    </div>
                    <div className="col">
                        <span className="d-block text-muted">Total</span>
                        <span>$ 123.23</span>
                    </div>
                    <div className="col">
                        <span className="d-block text-muted">Order-ID</span>
                        <span>60fbbb963442c32b60fc671e</span>
                    </div>
                </div>
            </div>
            <div className="card-body p-md-5">
                {/* Delivered header */}
                <div className="row">
                    <div className="col">
                        <h5 className="card-title">Delivered</h5>
                        <p className="card-text">July 22, 2021</p>
                    </div>
                    <div className="col-5 col-md-4">
                        <button type="button" className="btn btn-sm btn-primary mb-1 w-100">Track</button>
                        <button type="button" className="btn btn-sm btn-secondary w-100">View Receipt</button>
                    </div>
                    
                </div>
                {/* Products container */}
                <div className="row my-3 border-top">
                    <div className="col">
                        <div className="row my-3 border-bottom py-2">
                            <div className="col-4 col-lg-2 position-relative text-right">
                                <span className="badge bg-secondary fw-light position-absolute">3</span>
                                <img src={imgSRC} className="img-fluid" alt="" />
                            </div>
                            <div className="col">
                                <span className="fw-bold d-block">Plasencia Cigars</span>
                                <small>Alma Fuerte 7 x 58 Salomon Generacion V</small>
                            </div>
                        </div>
                        <div className="row mt-3 border-bottom py-2">
                            <div className="col-4 col-lg-2 position-relative text-right">
                                <span className="badge bg-secondary fw-light position-absolute">3</span>
                                <img src={imgSRC} className="img-fluid" alt="" />
                            </div>
                            <div className="col">
                                <span className="fw-bold d-block">Plasencia Cigars</span>
                                <small>Alma Fuerte 7 x 58 Salomon Generacion V</small>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="card-footer">
                <span className="d-block text-muted">Shipped to</span>
                <span>12418 SW 125th Terrace, Miami, FL 33186</span>
            </div>
        </div>
    )
}

export default OrderListItem


const imgSRC = 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_FUERTE_NESTORIV_233070.jpg'