'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    gender: 'Laki-laki' | 'Perempuan';
    phone: string;
    idNumber: string;
    level: 'Admin' | 'Customer';
}

const UserTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    // Sample data
    const users: User[] = [
        {
            id: 1,
            name: 'Admin',
            email: 'admin@admin.com',
            address: 'Malang',
            gender: 'Laki-laki',
            phone: '085334424941',
            idNumber: '213123123112',
            level: 'Admin',
        },
        {
            id: 2,
            name: 'Lathifa Firdauzi',
            email: 'lathifa@gmail.com',
            address: 'Surabaya',
            gender: 'Perempuan',
            phone: '085727287289',
            idNumber: '123213123',
            level: 'Customer',
        },
        {
            id: 3,
            name: 'Lathifa Firdauzi',
            email: 'lathifa@gmail.com',
            address: 'Surabaya',
            gender: 'Perempuan',
            phone: '085727287289',
            idNumber: '123213123',
            level: 'Customer',
        },
        {
            id: 4,
            name: 'Lathifa Firdauzi',
            email: 'lathifa@gmail.com',
            address: 'Surabaya',
            gender: 'Perempuan',
            phone: '085727287289',
            idNumber: '123213123',
            level: 'Customer',
        },
        {
            id: 5,
            name: 'Lathifa Firdauzi',
            email: 'lathifa@gmail.com',
            address: 'Surabaya',
            gender: 'Perempuan',
            phone: '085727287289',
            idNumber: '123213123',
            level: 'Customer',
        },
        {
            id: 6,
            name: 'Lathifa Firdauzi',
            email: 'lathifa@gmail.com',
            address: 'Surabaya',
            gender: 'Perempuan',
            phone: '085727287289',
            idNumber: '123213123',
            level: 'Customer',
        }
    ];

    const filteredUsers = users.filter((user) => Object.values(user).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())));

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredUsers.slice(indexOfFirstEntry, indexOfLastEntry);
    const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);

    return (
        <div className="p-6">
            <div className="mb-4">
                <Link href={`../users/UserForm`}>
                    <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Tambah Data</button>
                </Link>
            </div>
            <div className="rounded-lg shadow">
                <div className="p-4">
                    <h2 className="mb-4 text-xl font-semibold">Laporan Daftar User</h2>
                    <div className="mb-4 flex justify-between">
                        <div className="flex items-center">
                            <span className="mr-2">Show</span>
                            <select className="rounded border px-2 py-1" value={entriesPerPage} onChange={(e) => setEntriesPerPage(Number(e.target.value))}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                            </select>
                            <span className="ml-2">entries</span>
                        </div>

                        <div className="flex items-center">
                            <span className="mr-2">Search:</span>
                            <input type="text" className="rounded border px-2 py-1" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="bg-black px-4 py-2 text-left text-white">No</th>
                                    <th className="bg-black px-4 py-2 text-left text-white">Nama</th>
                                    <th className="bg-black px-4 py-2 text-left text-white">Email</th>
                                    <th className="bg-black px-4 py-2 text-left text-white">Alamat</th>
                                    <th className="bg-black px-4 py-2 text-left text-white">Gender</th>
                                    <th className="bg-black px-4 py-2 text-left text-white">No. Telp</th>
                                    <th className="bg-black px-4 py-2 text-left text-white">No. KTP</th>
                                    <th className="bg-black px-4 py-2 text-left text-white">Level</th>
                                    <th className="bg-black px-4 py-2 text-ju text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentEntries.map((user, index) => (
                                    <tr key={user.id} className="border-b">
                                        <td className="px-4 py-2">{indexOfFirstEntry + index + 1}</td>
                                        <td className="px-4 py-2">{user.name}</td>
                                        <td className="px-4 py-2">{user.email}</td>
                                        <td className="px-4 py-2">{user.address}</td>
                                        <td className="px-4 py-2">{user.gender}</td>
                                        <td className="px-4 py-2">{user.phone}</td>
                                        <td className="px-4 py-2">{user.idNumber}</td>
                                        <td className="px-4 py-2">{user.level}</td>
                                        <td className="px-4 py-2">
                                            <div className="flex space-x-2">
                                                <button className="rounded bg-red-500 p-2 text-white hover:bg-red-600">
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        />
                                                    </svg>
                                                </button>
                                                <Link href={`/users/account-settings/${user.id}`}>
                                                <button className="rounded bg-yellow-500 p-2 text-white hover:bg-yellow-600">
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                        />
                                                    </svg>
                                                </button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <div>
                            Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredUsers.length)} of {filteredUsers.length} entries
                        </div>
                        <div className="flex space-x-2">
                            <button className="rounded px-3 py-1 disabled:opacity-50" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                                Previous
                            </button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    className={`rounded px-3 py-1 disabled:opacity-50 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button className="rounded px-3 py-1 disabled:opacity-50" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
