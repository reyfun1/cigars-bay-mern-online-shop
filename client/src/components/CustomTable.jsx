import React from 'react'

const CustomTable = ({type, data, editBtn}) => {
    switch (type) {
        case 'admin-list-product':
            return <AdminListProductsTable data={data} editBtn={editBtn}/>
        case 'admin-list-users':
            return <AdminListUsersTable data={data}/>
        default:
            break;
    }
}

export default CustomTable

const AdminListProductsTable = ({data: products, editBtn}) => {
    return (
    <table className="table text-center">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>VENDOR</th>
                <th>CATEGORY</th>
                <th>SKUS</th>
                <th>STOCK</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {products && products.length > 0 && products.map( product => {
                const {_id, name, vendor, category, skus} = product

               return <tr key={_id}>
                    <td>{_id}</td>
                    <td>{name}</td>
                    <td>{vendor}</td>
                    <td>{category}</td>
                    <td>{skus.length}</td>
                    <td>{skus.reduce((acc, sku) => sku.stock_qty + acc, 0 )}</td>
                    <td>
                        <button className="btn btn-secondary btn-sm me-1" onClick={() => editBtn(_id)}><i className="bi bi-box-arrow-in-up-right"></i></button> 
                    </td>
                </tr>
            })}
            
        </tbody>
    </table>
    )
}

const AdminListUsersTable = ({data: users}) => {
    return(
        <table className='table text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 && users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>
                {user.isAdmin ? (
                  <i className='bi bi-check' style={{ color: 'green' }}></i>
                ) : (
                  <i className='bi bi-x' style={{ color: 'red' }}></i>
                )}
              </td>
              <td>
                <button className="btn btn-secondary btn-sm me-1">Edit</button> 
              </td>
            <td>
                <button className="btn btn-dark btn-sm">Delete</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>

    )
}


