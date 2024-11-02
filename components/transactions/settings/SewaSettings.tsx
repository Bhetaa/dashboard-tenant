'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const TenantSettingsTabs = () => {
    const [tabs, setTabs] = useState<string>('home');
    const toggleTabs = (name: string) => {
        setTabs(name);
    };

    return (
        <div className="pt-5">
            <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">Settings Data Payments</h5>
            </div>
            {tabs === 'home' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">General Information</h6>
                        <div className="flex flex-col sm:flex-row">
                            {/* <div className="mb-5 w-full sm:w-2/12 ltr:sm:mr-4 rtl:sm:ml-4">
                                <img src="/assets//images/properti.png" alt="img" className="mx-auto h-20 w-20 rounded object-cover md:h-52 md:w-52" />
                            </div> */}
                            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name">Customer</label>
                                    <input id="name" type="text" placeholder="Jimmy Turner" className="form-input" disabled />
                                </div>
                                <div>
                                    <label htmlFor="check in">Check In</label>
                                    <input id="check in" type="date" placeholder="Red House Villa" className="form-input" />
                                </div>

                                <div>
                                    <label htmlFor="property">Property</label>
                                    <input id="property" type="text" placeholder="Black House Villa" className="form-input" disabled />
                                </div>
                                <div>
                                    <label htmlFor="email">Check Out</label>
                                    <input id="email" type="date" placeholder="Jimmy@gmail.com" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="status">Status</label>
                                    <select id="status" className="form-select text-white-dark" name="status" defaultValue="In Progress" disabled>
                                        <option value="Complete">Complete</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Cancel">Canceled</option>
                                        <option value="In Progress">In Progress</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="mx-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Save</button>
                                    <Link href="/transactions/sewa/">
                                        <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">Batal</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default TenantSettingsTabs;
