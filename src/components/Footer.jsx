import React from 'react';

function Footer() {
    return (
        <footer className="font-sans tracking-wide bg-slate-950 pt-12 pb-4 px-10">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center space-y-4">
                    <h4 className="text-[#FFA726] font-semibold text-xl mb-6">Follow Me</h4>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="https://github.com/SunkeSruthi603" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub" className="w-9 h-9 filter invert" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/sruthi-sunke-165828294" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-9 h-9" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
                <p className="text-gray-300 text-[15px]">
                    © SunkeSruthi603. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
