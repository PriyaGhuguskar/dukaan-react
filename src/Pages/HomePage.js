import { useState } from "react"
import { transactions } from "./TransactionData";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { FaSearch } from "react-icons/fa";
import TransactionTable from "../Components/TransactionTable";
import Pagination from "../Components/Pagination";

const HomePage = () => {
    const [filteredTxn, setFilterdTxn] = useState(transactions);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [lastSortOrder, setLastSortOrder] = useState(null);
    const [lastDateSortOrder, setLastDateSortOrder] = useState(null);

    const itemsPerPage = 15;
    const totalPages = Math.ceil(transactions.length / itemsPerPage);

    const handlePageChange = (page) => {
        setSelectedIdx(page);
    };

    const handleSearch = (e) => {
        const searchKeyword = e.target.value.toLowerCase();

        const filteredTransactions = transactions.filter(
            ({ id, amount, date, fee }) =>
                id.toLowerCase().includes(searchKeyword) ||
                amount.toString().includes(searchKeyword) ||
                date.toLowerCase().includes(searchKeyword) ||
                fee.toString().includes(searchKeyword)
        );

        setFilterdTxn(filteredTransactions);
    };

    const paginatedTransactions = filteredTxn.slice(
        selectedIdx * itemsPerPage,
        (selectedIdx + 1) * itemsPerPage
    );

    const sortByDate = () => {
        if (lastDateSortOrder === null || lastDateSortOrder === 'asc') {
            const sortedTransactions = [...transactions].sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });

            setFilterdTxn(sortedTransactions);
            setLastDateSortOrder('desc');
        } else {
            const sortedTransactions = [...transactions].sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });

            setFilterdTxn(sortedTransactions);
            setLastDateSortOrder('asc');
        }
    };

    const sortByAmount = () => {
        if (lastSortOrder === null || lastSortOrder === 'asc') {
            const sortedTransactions = [...transactions].sort((a, b) => {
                return b.amount - a.amount;
            });

            setFilterdTxn(sortedTransactions);
            setLastSortOrder('desc');
        } else {
            const sortedTransactions = [...transactions].sort((a, b) => {
                return a.amount - b.amount;
            });

            setFilterdTxn(sortedTransactions);
            setLastSortOrder('asc');
        }
    };

    return (
        <>
            <section className="flex h-screen">
                <Sidebar />
                <main className="flex-1 overflow-hidden">
                    <Navbar />
                    <section className=" h-screen overflow-y-scroll pb-8">
                        <div className="px-8 max-w-7xl mx-auto">
                            <div className="flex justify-between mt-8 mb-6">
                                <h2 className="text-xl font-medium text-[#1A181E]">Overview</h2>

                                <select className="bg-white px-2.5 py-1.5 border-[1px] border-[#D9D9D9] rounded-[4px]">
                                    <option
                                        value="Last Month"
                                        className="text-[#4D4D4D] text-base font-normal"
                                    >
                                        Last Month
                                    </option>
                                </select>
                            </div>
                            <div className="flex gap-x-2 my-8">
                                <div className="w-1/2 bg-white p-5 rounded-lg shadow-sm">
                                    <h4 className="text-[#4D4D4D] text-base font-normal">
                                        Total orders
                                    </h4>
                                    <p className="text-[#1A181E] font-medium text-[32px]">231</p>
                                </div>
                                <div className="w-1/2 bg-white p-5 rounded-lg shadow-sm">
                                    <h4 className="text-[#4D4D4D] text-base font-normal">
                                        Amount recieved
                                    </h4>
                                    <p className="text-[#1A181E] font-medium text-[32px]">
                                        ₹23,92,312.19
                                    </p>
                                </div>
                            </div>
                            <div className="mb-5">
                                <h2 className="text-xl font-medium text-[#1A181E]">
                                    Transactions | This Month
                                </h2>
                            </div>
                            <div className="bg-white h-full rounded-lg p-3 shadow-[0 2px 6px 0 rgba(26, 24, 30, 0.04)] mb-20">
                                <div className="flex items-center justify-between">
                                    <div className="flex w-fit space-x-2 py-2.5 px-4 items-center border border-border rounded">
                                        <FaSearch />
                                        <input
                                            type="text"
                                            onChange={handleSearch}
                                            className="bg-white outline-none text-sm font-normal w-44 placeholder:text-[#999]"
                                            placeholder="Search by order ID..."
                                        />
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <button
                                            onClick={sortByAmount}
                                            className="border-[#D9D9D9] border rounded relative font-normal text-sm px-4 py-2 text-center flex items-center gap-1 "
                                            type="button"
                                        >
                                            Sort {" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z" fill="#4D4D4D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z" fill="#4D4D4D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z" fill="#4D4D4D" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z" fill="#4D4D4D" />
                                            </svg>
                                        </button>
                                        <a
                                            download
                                            href="/download.json"
                                            className="bg-white px-2.5 py-2 border border-[#D9D9D9] rounded"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z" fill="#4D4D4D" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <TransactionTable
                                    sortByDate={sortByDate}
                                    transactions={paginatedTransactions}
                                />
                                <Pagination
                                    totalPages={totalPages}
                                    selectedIdx={selectedIdx}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </section>
                </main>
            </section>



        </>
    )
}

export default HomePage