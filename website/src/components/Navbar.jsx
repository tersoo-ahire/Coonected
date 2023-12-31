import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import UserProfile from "./Userprofile";

export default function Navbar() {
    const location = useLocation();

    return (
        <nav>
            <div className="left">
                <Search />
            </div>
            <div className="center">
                <Link to={"/home"} title="Home" style={{padding:"0.5em 1.5em"}} className={location.pathname === "/home" ? "active" : ""}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 24 24" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z" fill="#4a4a52"></path></g>
                    </svg>
                </Link>
                <Link to={"/group"} title="Group" style={{padding:"0.2em 1.5em"}} className={location.pathname === "/group" ? "active" : ""}>
                    <svg viewBox="0 0 24 24" fill="none" height="3em" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="8" r="2.5" stroke="#4a4a52" stroke-linecap="round"></circle>
                        <path d="M13.7679 6.5C13.9657 6.15743 14.2607 5.88121 14.6154 5.70625C14.9702 5.5313 15.3689 5.46548 15.7611 5.51711C16.1532 5.56874 16.5213 5.73551 16.8187 5.99632C17.1161 6.25713 17.3295 6.60028 17.4319 6.98236C17.5342 7.36445 17.521 7.76831 17.3939 8.14288C17.2667 8.51745 17.0313 8.8459 16.7175 9.08671C16.4037 9.32751 16.0255 9.46985 15.6308 9.49572C15.2361 9.52159 14.8426 9.42983 14.5 9.23205" stroke="#4a4a52"></path> <path d="M10.2321 6.5C10.0343 6.15743 9.73935 5.88121 9.38458 5.70625C9.02981 5.5313 8.63113 5.46548 8.23895 5.51711C7.84677 5.56874 7.47871 5.73551 7.18131 5.99632C6.88391 6.25713 6.67053 6.60028 6.56815 6.98236C6.46577 7.36445 6.47899 7.76831 6.60614 8.14288C6.73329 8.51745 6.96866 8.8459 7.28248 9.08671C7.5963 9.32751 7.97448 9.46985 8.36919 9.49572C8.76391 9.52159 9.15743 9.42983 9.5 9.23205" stroke="#4a4a52"></path> <path d="M12 12.5C16.0802 12.5 17.1335 15.8022 17.4054 17.507C17.4924 18.0524 17.0523 18.5 16.5 18.5H7.5C6.94771 18.5 6.50763 18.0524 6.59461 17.507C6.86649 15.8022 7.91976 12.5 12 12.5Z" stroke="#4a4a52" stroke-linecap="round"></path> <path d="M19.2965 15.4162L18.8115 15.5377L19.2965 15.4162ZM13.0871 12.5859L12.7179 12.2488L12.0974 12.9283L13.0051 13.0791L13.0871 12.5859ZM17.1813 16.5L16.701 16.639L16.8055 17H17.1813V16.5ZM15.5 12C16.5277 12 17.2495 12.5027 17.7783 13.2069C18.3177 13.9253 18.6344 14.8306 18.8115 15.5377L19.7816 15.2948C19.5904 14.5315 19.2329 13.4787 18.578 12.6065C17.9126 11.7203 16.9202 11 15.5 11V12ZM13.4563 12.923C13.9567 12.375 14.6107 12 15.5 12V11C14.2828 11 13.3736 11.5306 12.7179 12.2488L13.4563 12.923ZM13.0051 13.0791C15.3056 13.4614 16.279 15.1801 16.701 16.639L17.6616 16.361C17.1905 14.7326 16.019 12.5663 13.1691 12.0927L13.0051 13.0791ZM18.395 16H17.1813V17H18.395V16ZM18.8115 15.5377C18.8653 15.7526 18.7075 16 18.395 16V17C19.2657 17 20.0152 16.2277 19.7816 15.2948L18.8115 15.5377Z" fill="#4a4a52"></path> <path d="M10.9129 12.5859L10.9949 13.0791L11.9026 12.9283L11.2821 12.2488L10.9129 12.5859ZM4.70343 15.4162L5.18845 15.5377L4.70343 15.4162ZM6.81868 16.5V17H7.19453L7.29898 16.639L6.81868 16.5ZM8.49999 12C9.38931 12 10.0433 12.375 10.5436 12.923L11.2821 12.2488C10.6264 11.5306 9.71723 11 8.49999 11V12ZM5.18845 15.5377C5.36554 14.8306 5.68228 13.9253 6.22167 13.2069C6.75048 12.5027 7.47226 12 8.49999 12V11C7.0798 11 6.08743 11.7203 5.42199 12.6065C4.76713 13.4787 4.40955 14.5315 4.21841 15.2948L5.18845 15.5377ZM5.60498 16C5.29247 16 5.13465 15.7526 5.18845 15.5377L4.21841 15.2948C3.98477 16.2277 4.73424 17 5.60498 17V16ZM6.81868 16H5.60498V17H6.81868V16ZM7.29898 16.639C7.72104 15.1801 8.69435 13.4614 10.9949 13.0791L10.8309 12.0927C7.98101 12.5663 6.8095 14.7326 6.33838 16.361L7.29898 16.639Z" fill="#4a4a52"></path> </g>
                    </svg>
                </Link>
                <Link to={"/message"} title="Message" className={location.pathname === "/message" ? "active" : ""}>
                    <svg viewBox="0 0 24.00 24.00" height="2em" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#4a4a52" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="miter"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><polygon points="22 2 22 16 14 16 8 21 8 16 2 16 2 2 22 2"></polygon></g>
                    </svg>
                </Link>
                <Link to={"/explore"} title="Explore" className={location.pathname.startsWith("/explore") ? "active" : ""}>
                    <svg fill="#4a4a52" height="2em" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 612 612" xml:space="preserve" stroke="#4a4a52"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> 
                        <path d="M306,0C137.272,0,0,137.27,0,305.997C0,474.727,137.272,612,306,612s306-137.273,306-306.003C612,137.27,474.73,0,306,0z M306,576.657c-149.24,0-270.657-121.418-270.657-270.66C35.343,156.759,156.76,35.343,306,35.343 s270.657,121.416,270.657,270.655C576.657,455.24,455.24,576.657,306,576.657z"></path> <path d="M474.47,144.734c-4.623-8.599-15.336-11.818-23.933-7.197L251.64,244.485c-3.053,1.642-5.556,4.144-7.197,7.198 L137.538,450.536c-3.782,7.035-2.309,15.489,3.063,20.861c1.191,1.193,2.574,2.232,4.137,3.07 c5.313,2.857,11.436,2.71,16.428,0.155l0.003,0.004l0.075-0.04c0.072-0.037,0.143-0.077,0.214-0.115l198.995-106.87 c3.054-1.64,5.556-4.142,7.2-7.197l106.477-198.361c0.233-0.401,0.455-0.806,0.655-1.222l0.144-0.267l-0.018-0.006 C477.174,155.671,477.211,149.833,474.47,144.734z M196.403,415.684l67.933-126.361l58.418,58.42L196.403,415.684z M347.76,322.764l-58.421-58.421l126.351-67.94"></path> </g> </g> </g>
                    </svg>
                </Link>
                <Link to={"/books"} title="Books" className={location.pathname.startsWith("/books") ? "active" : ""}>
                    <svg height="2em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="7" y="1" fill="none" stroke="#4a4a52" stroke-width="4" stroke-miterlimit="10" width="46" height="62"></rect> <line fill="none" stroke="#4a4a52" stroke-width="2" stroke-miterlimit="10" x1="15" y1="63" x2="15" y2="2"></line> <line fill="none" stroke="#4a4a52" stroke-width="2" stroke-miterlimit="10" x1="20" y1="15" x2="48" y2="15"></line> <line fill="none" stroke="#4a4a52" stroke-width="2" stroke-miterlimit="10" x1="20" y1="21" x2="48" y2="21"></line> </g>
                    </svg>
                </Link>
            </div>
            <div className="right">
                <Link>

                </Link>
                <UserProfile/>
            </div>
        </nav>
    )
};