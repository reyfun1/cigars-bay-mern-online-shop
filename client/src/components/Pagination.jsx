import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ pages, page, isAdmin = false, keyword = '' }) => {
    return (
        pages > 1 && (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    {/* Previous */}
                    <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
                        <Link className="page-link" to={
                            !isAdmin
                            ? keyword
                                ? `/search/${keyword}/page/${page - 1}`
                                : `search/page/${page - 1}`
                            : `/admin/productlist/${page - 1}`
                        } tabIndex="-1" aria-disabled="true">&laquo; Previous</Link>
                    </li>
                    {/* Page Numbers */}
                    {[...Array(pages).keys()].map(x => (
                        <li key={x + 1} className={`page-item ${x + 1 === page ? 'active' : ''}`}>
                            <Link className="page-link" to={
                                !isAdmin
                                    ? keyword
                                        ? `/search/${keyword}/page/${x + 1}`
                                        : `/search/page/${x + 1}`
                                    : `/admin/productlist/${x + 1}`
                            }>{x + 1}</Link>
                        </li>
                    ))}
                    {/* Next */}
                    <li className={`page-item`}>
                        <Link className="page-link" to={
                            !isAdmin
                            ? keyword
                                ? `/search/${keyword}/page/${page + 1}`
                                : `/search/page/${page + 1}`
                            : `/admin/productlist/${page + 1}`
                        }>Next &raquo;</Link>
                    </li>
                    
                </ul>
            </nav>
        )
    )
}

export default Pagination
