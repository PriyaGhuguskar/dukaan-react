import React from 'react'
import BrandImage from '../assets/brandImg.png'

const CompanyInfo = () => {
    return (
        <div className="flex items-center w-full px-[8px]">
            <img className='brandimg' src={BrandImage} alt='brand' />
            <div className="flex flex-col ml-[12px]">
                <h1 className="text-[15px] text-white">Nishyan</h1>
                <span className="cursor-pointer underline text-[13px] text-[#FFFFFF]/80">
                    visit store
                </span>
            </div>
            <button className="ml-auto ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white" />
                </svg>
            </button>
        </div>
    )
}

export default CompanyInfo