import React from 'react'

const TableRow = ({ elem, id }) => {
    return (
        <tr key={id}>
            <td className="pl-3 text-[#146EB4]   border-b  py-3.5 text-sm font-medium">
                {elem.id}
            </td>
            <td className="pl-3 text-sm font-normal  border-b py-3.5 text-[#1A181E]">
                {elem.date}
            </td>
            <td className="pl-3 text-sm font-normal border-b py-3.5 text-right text-[#1A181E]">
                ₹{elem.amount.toLocaleString()}
            </td>
            <td className="pr-3 text-sm font-normal  border-b py-3.5 text-right text-[#1A181E]">
                ₹{elem.fee}
            </td>
        </tr>
    )
}

export default TableRow