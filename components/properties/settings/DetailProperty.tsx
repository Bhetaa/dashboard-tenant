'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const PropertyDetailProps = () => {
    const [tabs, setTabs] = useState<string>('home');
    const toggleTabs = (name: string) => {
        setTabs(name);
    };

    return (
        <div className="pt-5">
            <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">Detail Property</h5>
            </div>
            {tabs === 'home' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold"></h6>
                        <div className="flex flex-col sm:flex-row">
                            <div className="mb-5 w-full sm:w-2/12 ltr:sm:mr-4 rtl:sm:ml-4">
                                <img src="/assets//images/properti.png" alt="img" className="mx-auto h-20 w-20 rounded object-cover md:h-52 md:w-52" />
                            </div>
                            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name">Name Property</label>
                                    <input id="name" type="text" placeholder="White House Villa" className="form-input" disabled />
                                </div>
                                <div>
                                    <label htmlFor="price">Harga</label>
                                    <input id="price" type="text" placeholder="Rp. 300000" className="form-input" disabled />
                                </div>
                                <div>
                                    <label htmlFor="location">Location</label>
                                    <input id="location" type="text" placeholder="Puncak Bogor" className="form-input" disabled />
                                </div>
                                <div>
                                    <label htmlFor="denda">Denda</label>
                                    <input id="denda" type="text" placeholder="Rp. 25000" className="form-input" disabled />
                                </div>
                                <div>
                                    <label htmlFor="tahun">Tahun</label>
                                    <input id="tahun" type="text" placeholder="2022" className="form-input" disabled />
                                </div>
                                <div>
                                    <label htmlFor="status">Status</label>
                                    <input id="status" type="text" placeholder="Active" className="form-input" disabled />
                                </div>
                                <div>
                                    <Link href="/properties/settings/property-settings">
                                        <button className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">Edit</button>
                                    </Link>
                                    <Link href="/properties/">
                                        <button className="mx-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Kembali</button>
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

export default PropertyDetailProps;
