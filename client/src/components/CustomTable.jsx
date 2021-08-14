import React from 'react'

const CustomTable = ({type, data}) => {
    switch (type) {
        case 'admin-list-product':
            return <AdminListProductsTable data={data}/>
        case 'admin-list-users':
            return <AdminListUsersTable data={data}/>
        default:
            break;
    }
}

export default CustomTable


const AdminListProductsTable = ({data: products}) => {
    return (
    <table className="table text-center">
        <thead>
            <tr>
                <th>ID</th>
                <th>BRAND</th>
                <th>VITOLA</th>
                <th>SIZE</th>
                <th>COUNT</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>IN STOCK</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {products && products.length > 0 && products.map( product => {
                const {_id, productIdCode, brandName, vitolaName, cigarRingSize, cigarLengthSize, cigarCount, category, price, countInStock} = product

               return <tr key={_id}>
                    <td>{productIdCode}</td>
                    <td>{brandName}</td>
                    <td>{vitolaName}</td>
                    <td>{cigarLengthSize} x {cigarRingSize}</td>
                    <td>{cigarCount}</td>
                    <td>{category}</td>
                    <td>{price}</td>
                    <td>{countInStock}</td>
                    <td>
                        <button className="btn btn-secondary btn-sm me-1">Edit</button> 
                    </td>
                    <td>
                        <button className="btn btn-dark btn-sm">Delete</button>
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


