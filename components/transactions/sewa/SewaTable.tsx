"use client";
import { Span } from 'next/dist/trace';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';
import DeleteSewa from './DeleteSewa';

interface Transaction {
    id: number;
    user: string;
    property: string;
    tglSewa: string;
    tglKembali: string;
    totalDenda: number;
    totalSewa: number;
    status: 'Sedang Disewa';
    action: 'Edit' | 'Delete';
}

const SewaTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const handleDelete = (id: number) => 
    
        console.log(`Deleting sewa with ID: ${id}`);

    const transactions: Transaction[] = [
        {
            id: 1,
            user: 'Admin',
            property: 'Red House Villa',
            tglSewa: '20-02-2020',
            tglKembali: '22-02-2020',
            totalSewa: 14000000,
            totalDenda: 250000,
            status: 'Sedang Disewa',
            action: 'Edit'
        },
        {
            id: 2,
            user: 'User',
            property: 'Galaxy Flat',
            tglSewa: '01-04-2020',
            tglKembali: '16-04-2020',
            totalSewa: 10500000,
            totalDenda: 250000,
            status: 'Sedang Disewa',
            action: 'Edit'
        },
        {
            id: 3,
            user: 'User',
            property: 'Galaxy Flat',
            tglSewa: '01-04-2020',
            tglKembali: '16-04-2020',
            totalSewa: 10500000,
            totalDenda: 250000,
            status: 'Sedang Disewa',
            action: 'Edit'
        },
        {
            id: 4,
            user: 'User',
            property: 'Galaxy Flat',
            tglSewa: '01-04-2020',
            tglKembali: '16-04-2020',
            totalSewa: 10500000,
            totalDenda: 250000,
            status: 'Sedang Disewa',
            action: 'Edit'
        },
        {
            id: 5,
            user: 'User',
            property: 'Galaxy Flat',
            tglSewa: '01-04-2020',
            tglKembali: '16-04-2020',
            totalSewa: 10500000,
            totalDenda: 250000,
            status: 'Sedang Disewa',
            action: 'Edit'
        },
        {
            id: 6,
            user: 'User',
            property: 'Galaxy Flat',
            tglSewa: '01-04-2020',
            tglKembali: '16-04-2020',
            totalSewa: 10500000,
            totalDenda: 250000,
            status: 'Sedang Disewa',
            action: 'Edit'
        },
    ];

    const filteredData = transactions.filter(transaction =>
        Object.values(transaction).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Sedang Disewa':
                return 'bg-orange-500 text-white';
            default:
                return 'text-grey';
        }
    };

    const getActionColor = (status: string) => {
        switch (status) {
            case 'Edit':
                return 'bg-yellow-500 text-white';
             case 'delete':
                return 'bg-red-500 text-white';
            default:
                return 'text-grey';
        }
    };

    return (
        <div className="p-6">
            <div className="mb-4 flex justify-between items-center"> 
                <div className="flex items-center gap-2">
                    <span>Show</span>
                    <select
                        value={entriesPerPage}
                        onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                        className="border rounded p-1"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                    <span>entries</span>
                </div> 
                <div className="flex items-center gap-2">
                    <span>Search:</span>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border rounded p-1"
                    />
                </div> 
             </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="bg-black px-4 py-2 text-left text-white">No</th>
                            <th className="bg-black px-4 py-2 text-left text-white">User</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Property</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Check In</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Check Out</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Total Sewa</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Denda/Hari</th>
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
                                <td className="p-4 py-4">
                                    Rp. {transaction.totalSewa.toLocaleString()}
                                </td>
                                <td className="p-4 py-4">
                                    Rp. {transaction.totalDenda.toLocaleString()}</td>
                                <td className="p-2 text-center">
                                    <span className={`px-3 py-1 rounded text-sm ${getStatusColor(transaction.status)}`}>
                                       {transaction.status}
                                    </span>
                                </td>
                                <td className="p-2 text-center">
                                <DeleteSewa sewa={SewaTable} onDelete={handleDelete} />
                                <Link href="/transactions/settings/sewa-settings">
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

            <div className="mt-4 flex justify-between items-center">
                <div>
                    Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredData.length)} of {filteredData.length} entries
                </div>
                <div className="flex gap-2">
                <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredData.length / entriesPerPage)))}
                        disabled={currentPage >= Math.ceil(filteredData.length / entriesPerPage)}
                        className="px-3 py-1 disabled:opacity-50"
                    >
                        1
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 2, Math.ceil(filteredData.length / entriesPerPage)))}
                        disabled={currentPage >= Math.ceil(filteredData.length / entriesPerPage)}
                        className="px-3 py-1 disabled:opacity-50"
                    >
                        2
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 3, Math.ceil(filteredData.length / entriesPerPage)))}
                        disabled={currentPage >= Math.ceil(filteredData.length / entriesPerPage)}
                        className="px-3 py-1 disabled:opacity-50"
                    >
                        3
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredData.length / entriesPerPage)))}
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

export default SewaTable;