import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="my-4 text-center fs-1">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
        </div>
    )
}

export default LoadingSpinner
