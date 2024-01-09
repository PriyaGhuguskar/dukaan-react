import React from 'react'
import TableRow from './TableRow'
import { FaCaretDown } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const TransactionTable = ({ transactions, sortByDate }) => {
    return (

        <table className="w-full mt-3">
            <thead className="text-xs bg-[#F2F2F2] font-thin px-3">
                <tr className="">
                    <th className="rounded-l-[4px] pl-3 font-normal text-start py-[10px]">
                        Order ID
                    </th>
                    <th className="pl-3 flex items-center gap-x-1 font-normal text-start py-[10px]">
                        Order Date
                        <button onClick={sortByDate}>
                            <FaCaretDown />
                        </button>
                    </th>
                    <th className="pl-3 font-normal text-right  py-[10px]">
                        Order Amount
                    </th>
                    <th className="pr-3 font-normal text-right  py-[10px] rounded-r-[4px]">
                        <span className="flex justify-end items-center gap-x-1">
                            Transaction fees
                            <IoInformationCircleOutline />
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((elem, id) => (
                    <TableRow key={id} elem={elem} />
                ))}
            </tbody>
        </table>
    )
}

export default TransactionTable