import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import {motion ,useScroll, useMotionValueEvent} from 'framer-motion';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function AdminAuthenticated({ auth, header, children, username }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [open, setOpen] = useState(false);
    const [showCat, setShowCat] = useState(false);
    
    return (
        <div className="">
            
            
            <button 
                onClick={()=>{setOpen((r)=> !r)}}
                data-drawer-target="default-sidebar" 
                data-drawer-toggle="default-sidebar" 
                aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className={`text-white fixed top-0 left-0 z-40 w-64 bg-white h-screen transition-transform ${open ? '-translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-[#121d30]">
                <div className='flex flex-row-reverse'>
                    <button 
                        onClick={()=>{setOpen((r)=> !r)}}
                        data-drawer-target="default-sidebar" 
                        data-drawer-toggle="default-sidebar" 
                        aria-controls="default-sidebar" type="button" 
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                </div>
                <a href="" className="flex items-center ps-2.5 mb-5">
                    <ApplicationLogo />
                </a>
                <ul className=" font-medium">
                    <li>
                        <a href="#" className="flex items-center px-2 text-white hover:border-l-4 group">
                            <i className="text-2xl las la-chart-pie"></i>
                            <span className="ms-3">Dashboard</span>
                        </a>
                    </li>

                    {/* <li>
                        <Link href="/adminDashboard/members" className="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i className="text-2xl las la-user-tie"></i>
                        <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                        </Link>
                    </li> */}

                    <li>
                        <Link href="/dashboard/categories" className="flex items-center px-2 text-white hover:border-l-4 group">
                            <i className="text-2xl las la-stream"></i>
                            <span className="flex-1 ms-3 whitespace-nowrap">Thoughts Categories</span>
                            {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                        </Link>
                    </li>

                    {/* <li>
                        <Link href="/adminDashboard/events" className="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <i className="text-2xl las la-calendar"></i>
                            <span className="flex-1 ms-3 whitespace-nowrap">proj</span>
            
                        </Link>
                    </li> */}

                    <li>
                        <Link href="/dashboard/thoughts" className="flex items-center px-2 text-white hover:border-l-4 group">
                            <i className="text-2xl las la-newspaper"></i>
                            <span className="flex-1 ms-3 whitespace-nowrap">Thoughts Posts</span>
            
                        </Link>
                    </li>
                    
                    {/* <li>
                        <Link href="/adminDashboard/congress" className="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <i className="text-2xl las la-handshake"></i>
                            <span className="flex-1 ms-3 whitespace-nowrap">Congresses</span>
            
                        </Link>
                    </li>
                     */}
                    <li>
                        <Link href="/dashboard/projects" className="flex items-center px-2 text-white hover:border-l-4 group">
                            <i className="text-2xl las la-network-wired"></i>
                            <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
            
                        </Link>
                    </li>

                    {/* <li>
                        <Link href="/adminDashboard/opportunities" className="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <i className="text-2xl las la-network-wired"></i>
                            <span className="flex-1 ms-3 whitespace-nowrap">Opportunities Posts</span>
            
                        </Link>
                    </li> */}

                    {/* <li>
                        <button type='button'
                            className="flex items-center w-full px-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"
                            onClick={() => {setShowCat((p) => !p)}}
                        >
                            <Link href="/adminDashboard/leaders" className=" flex-1 text-left rtl:text-right whitespace-nowrap">
                            <i className="text-2xl las la-user-shield"></i>
                            <span className="flex-1 ms-3 text-left rtl:text-right">Leaders</span>
                            </Link>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        <motion.ul 
                            variants={{
                                visible: {x:0},
                                hidden: {x:"-100%"}
                            }}
                            animate={showCat ? "visible" : "hidden"}
                            transition={{duration: 0.35, ease:"easeInOut"}}
                            className={`${showCat ? "" : "hidden"} py-2 space-y-2`}>
                            <li>
                                <Link 
                                    href="/adminDashboard/leaders_portfolio"
                                    className="flex items-center w-full text-gray-900 transition duration-75 rounded-lg pl-10 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                        Add Leader's Portfolio
                                </Link>
                            </li>
                            
                        </motion.ul>
                    </li> */}

                    {/* <li>
                        <Link href="/adminDashboard/editor" className="flex items-center px-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <i className="text-2xl las la-network-wired"></i>
                            <span className="flex-1 ms-3 whitespace-nowrap">Journal Editors</span>
            
                        </Link>
                    </li> */}

                    <li>
                        <Link href={route('logout')} className="flex items-center px-2 text-white hover:border-l-4 group">
                            <i className="text-2xl las la-sign-out-alt"></i>
                            <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-silver border rounded-lg dark:border-gray-700">
                    {header && (
                        <header className="bg-white shadow">
                            <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                        </header>
                    )}

                    <main>{children}</main>
                </div>
            </div>

            {/* Side Nav bar */}

            
        </div>
    );
}
