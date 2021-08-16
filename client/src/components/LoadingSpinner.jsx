import React from 'react'

import styled from 'styled-components'

const LoadingSpinner = ({size = 2, borderWidth = 0.25}) => {

  const SpinnerStyled = styled.div`
  .spinner-border{
    width: ${size}rem;
    height: ${size}rem; 
    border-width: ${borderWidth}em;
  }
`

    return (
        <SpinnerStyled className="my-4 text-center fs-1">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
        </SpinnerStyled>
    )
}

export default LoadingSpinner

const loaders = {
  sm : `width: '1rem',height: '1rem',border-radius: '.15em'`,
  md : `width: '2rem',height: '2rem',border-radius: '.25em'`,
  lg : `width: '3rem',height: '3rem',border-radius: '.35em'`,
  xl : `width: '4rem',height: '4rem',border-radius: '.45em'`,
  xxl : `width: '5rem',height: '5rem',border-radius: '.55em'`,
}
