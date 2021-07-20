import React from 'react'

const ProductDetailsTable = () => {
    return (
        <div className="">
                    <div className="bg-dark">
                        <h5 className="text-center text-white p-2 m-0">Details</h5>
                    </div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                            <td className="attribute-key">
                            Count
                            </td>
                            <td className="attribute-value">10 Cigars</td>
                            </tr>
                            <tr>
                            <td className="attribute-key">
                            Diameter </td>
                            <td className="attribute-value">
                            58 Ring </td>
                            </tr>
                            <tr>
                            <td className="attribute-key">
                            Length </td>
                            <td className="attribute-value">
                            7 Inches </td>
                            </tr>
                            <tr>
                            <td className="attribute-key">
                            Origin </td>
                            <td className="attribute-value">
                            Nicaragua </td>
                            </tr>
                            <tr>
                            <td className="attribute-key">
                            Packaging </td>
                            <td className="attribute-value">
                            Box </td>
                            </tr>
                            <tr>
                            <td className="attribute-key">
                            Shape </td>
                            <td className="attribute-value">
                            Regular </td>
                            </tr>
                            <tr>
                            <td className="attribute-key">
                            Strength </td>
                            <td className="attribute-value">
                            Full Bodied </td>
                            </tr>
                            <tr>
                            <td className="attribute-key">
                            Wrapper </td>
                            <td className="attribute-value">
                            Maduro </td>
                            </tr>
                            </tbody>
                    </table>
                </div>
    )
}

export default ProductDetailsTable
