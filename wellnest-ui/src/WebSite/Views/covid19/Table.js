import React from 'react'
import './Table.css';
function Table({countries }) {
    return (
        <div className="table">
            {countries.map(({country,cases}) => (
                <tr className="trr">
                    <td className="tdd">
                        {country}
                    </td>
                    <td  className="tdd">

                <strong>{cases}</strong>
                    </td>
                </tr>

            ))}
        </div>
    )
}

export default Table
