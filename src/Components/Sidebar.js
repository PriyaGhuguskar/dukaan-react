import React from 'react'
import { SidebarDatas } from './SidebarData'
import CompanyInfo from './CompanyInfo'

const Sidebar = () => {
    return (
        <nav
            className={'px-[10px] py-[16px] w-[224px] flex flex-col gap-y-6 h-screen bg-[#1E2640]'}>
            <CompanyInfo />
            <ul className="flex flex-col gap-y-1 overflow-y-auto">
                {SidebarDatas.map((item) => {
                    return (
                        <li>
                            <div
                                className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
                                style={(item?.active === true) ? { backgroundColor: 'rgba(255, 255, 255, 0.10)' } : { backgroundColor: 'transparent' }}
                            >
                                {item?.image}
                                {" "} {item?.title}
                            </div>
                        </li>
                    )
                })}


            </ul>
            <div className="bg-[#353C53] mt-auto flex gap-x-2 rounded items-center py-1.5 px-3 bottom-4 w-full text-white justify-self-end">
                <div className=" bg-white/10 rounded p-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z" fill="white" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <p className="text-white/80 text-[13px]">Available Credits</p>
                    <span className="text-white font-medium text-base">222.10</span>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar