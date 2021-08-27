import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBox = ({handleLinkClicked}) => {
    const history = useHistory()
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
          history.push(`/search/${keyword}`)
          setKeyword('')
        } else {
          history.push('/')
        }
    }

    return (
        <form className="d-flex" onSubmit={submitHandler}>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search" 
                    aria-label="Search" 
                    aria-describedby="button-addon2" 
                    value={keyword} onChange={e => setKeyword(e.target.value)}/>
                <button 
                    className="btn btn-secondary" 
                    type="submit" id="button-addon2"
                    onClick={handleLinkClicked}>
                        <i className="bi bi-search"></i>
                </button>
            </div>
        </form>
    )
}

export default SearchBox
