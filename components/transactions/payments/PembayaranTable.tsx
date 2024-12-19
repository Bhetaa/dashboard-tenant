'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DeletePembayaran from './DeletePembayaran';

interface Transaction {
    id: number;
    user: string;
    property: string;
    tglSewa: string;
    tglKembali: string;
    totalSewa: number;
    status: 'Complete' | 'Pending' | 'In Progress' | 'Canceled';
    action: 'Edit' | 'Hapus';
}

const PembayaranTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const handleDelete = (id: number) => 
    
        console.log(`Deleting sewa with ID: ${id}`);


    const transactions: Transaction[] = [
        {
            id: 1,
            user: 'Lathifa Firdauzi',
            property: 'Galaxy Flat',
            tglSewa: '17-04-2020',
            tglKembali: '18-04-2020',
            totalSewa: 4000000,
            status: 'Complete',
            action: 'Hapus',
        },
        {
            id: 2,
            user: 'Andri',
            property: 'White House',
            tglSewa: '29-05-2024',
            tglKembali: '31-05-2024',
            totalSewa: 3000000,
            status: 'Pending',
            action: 'Edit',
        },
        {
            id: 3,
            user: 'Hikmal Chalabi',
            property: 'Black House Villa',
            tglSewa: '19-06-2024',
            tglKembali: '30-06-2024',
            totalSewa: 9900000,
            status: 'In Progress',
            action: 'Edit',
        },
        {
            id: 4,
            user: 'Daffa',
            property: 'Red House Villa',
            tglSewa: '26-08-2024',
            tglKembali: '10-09-2024',
            totalSewa: 7500000,
            status: 'Canceled',
            action: 'Hapus',
        },
        {
            id: 5,
            user: 'Nabila',
            property: 'Red House Villa',
            tglSewa: '26-08-2024',
            tglKembali: '10-09-2024',
            totalSewa: 7500000,
            status: 'Canceled',
            action: 'Hapus',
        },
        {
            id: 6,
            user: 'Nabila',
            property: 'Red House Villa',
            tglSewa: '26-08-2024',
            tglKembali: '10-09-2024',
            totalSewa: 7500000,
            status: 'Complete',
            action: 'Hapus',
        },
        {
            id: 7,
            user: 'Nabila',
            property: 'Red House Villa',
            tglSewa: '26-08-2024',
            tglKembali: '10-09-2024',
            totalSewa: 7500000,
            status: 'Complete',
            action: 'Hapus',
        },
    ];

    const filteredData = transactions.filter((transaction) => Object.values(transaction).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())));

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

    const getActionColor = (action: string) => {
        switch (action) {
            case 'Edit':
                return 'bg-blue-500 text-white';
            case 'Hapus':
                return 'bg-red-500 text-white';
            default:
                return 'bg-grey-500 text-white';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Complete':
                return 'bg-green-500 text-white';
            case 'Pending':
                return 'bg-purple-500 text-white';
            case 'In Progress':
                return 'bg-blue-500 text-white';
            case 'Canceled':
                return 'bg-red-500 text-white';
            default:
                return 'bg-grey-500 text-grey';
        }
    };

    return (
        <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span>Show</span>
                    <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(Number(e.target.value))} className="rounded border p-1">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                    <span>entries</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>Search:</span>
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="rounded border p-1" />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="bg-black px-4 py-2 text-left text-white">No</th>
                            <th className="bg-black px-4 py-2 text-left text-white">User</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Property</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Check In</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Check Out</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Total Sewa</th>
                            <th className="bg-black px-4 py-2 text-center text-white">Status</th>
                            <th className="bg-black px-4 py-2 text-center text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries.map((transaction, index) => (
                            <tr key={transaction.id} className="border-b">
                                <td className="px-4 py-4">{indexOfFirstEntry + index + 1}</td>
                                <td className="px-4 py-4">{transaction.user}</td>
                                <td className="px-4 py-4">{transaction.property}</td>
                                <td className="px-4 py-4">{transaction.tglSewa}</td>
                                <td className="px-4 py-4">{transaction.tglKembali}</td>
                                <td className="px-4 py-4">Rp. {transaction.totalSewa.toLocaleString()}</td>
                                <td className="p-2 text-center">
                                    <span className={`rounded px-3 py-1 text-sm ${getStatusColor(transaction.status)}`}>{transaction.status}</span>
                                </td>
                                <td className="px-4 py-4 text-center">
                                <DeletePembayaran payments={PembayaranTable} onDelete={handleDelete} />
                                <Link href="/transactions/settings/payments-settings">
                                        <button className="rounded bg-yellow-500 p-2  text-white hover:bg-yellow-600">
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <div>
                    Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredData.length)} of {filteredData.length} entries
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 disabled:opacity-50">
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredData.length / entriesPerPage)))}
                        disabled={currentPage >= Math.ceil(filteredData.length / entriesPerPage)}
                        className="px-3 py-1 disabled:opacity-50"
                    >
                        1
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 2, Math.ceil(filteredData.length / entriesPerPage)))}
                        disabled={currentPage >= Math.ceil(filteredData.length / entriesPerPage)}
                        className="px-3 py-1 disabled:opacity-50"
                    >
                        2
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 3, Math.ceil(filteredData.length / entriesPerPage)))}
                        disabled={currentPage >= Math.ceil(filteredData.length / entriesPerPage)}
                        className="px-3 py-1 disabled:opacity-50"
                    >
                        3
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredData.length / entriesPerPage)))}
                        disabled={currentPage >= Math.ceil(filteredData.length / entriesPerPage)}
                        className="px-3 py-1 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PembayaranTable;


