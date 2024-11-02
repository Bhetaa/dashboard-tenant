'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PropertyCardDelete from '@/components/properties/settings/DeleteProperty';

interface Property {
    id: number;
    name: string;
    location: string;
    price: string;
    date: string;
    views: number;
    status: 'Active' | 'Pending' | 'Processing' | 'Available' | 'Not Available';
    image: string;
}

const properties: Property[] = [
    {
        id: 1,
        name: 'Galaxy Flat',
        location: 'Mirpur 10, Dhaka, BD',
        price: 'Rp. 32800',
        date: '13 Jan, 2023',
        views: 1210,
        status: 'Active',
        image: '/assets/images/properti.png',
    },
    {
        id: 2,
        name: 'White House Villa',
        location: 'Ranchview, California, USA',
        price: 'Rp. 42130',
        date: '09 Jan, 2023',
        views: 0,
        status: 'Pending',
        image: '/assets/images/properti.png',
    },
    {
        id: 3,
        name: 'Luxury Villa in Dal Lake',
        location: 'Muza Link Road, CA, USA',
        price: 'Rp. 2370',
        date: '17 Oct, 2022',
        views: 0,
        status: 'Processing',
        image: '/assets/images/properti.png',
    },
    {
        id: 4,
        name: 'Wooden World',
        location: 'Board Bazar, California, USA',
        price: 'Rp. 63300',
        date: '23 Sep, 2022',
        views: 970,
        status: 'Active',
        image: '/assets/images/properti.png',
    },
    {
        id: 5,
        name: 'White World',
        location: 'Board Bazar, California, USA',
        price: 'Rp. 63300',
        date: '23 Sep, 2022',
        views: 970,
        status: 'Active',
        image: '/assets/images/properti.png',
    },
    {
        id: 6,
        name: 'Red World',
        location: 'Board Bazar, California, USA',
        price: 'Rp. 63300',
        date: '23 Sep, 2022',
        views: 970,
        status: 'Active',
        image: '/assets/images/properti.png',
    },
    {
        id: 7,
        name: 'Blue World',
        location: 'Board Bazar, California, USA',
        price: 'Rp. 63300',
        date: '23 Sep, 2022',
        views: 970,
        status: 'Active',
        image: '/assets/images/properti.png',
    },
    {
        id: 8,
        name: 'Yellow World',
        location: 'Board Bazar, California, USA',
        price: 'Rp. 63300',
        date: '23 Sep, 2022',
        views: 970,
        status: 'Active',
        image: '/assets/images/properti.png',
    },
    {
        id: 9,
        name: 'Black House World',
        location: 'Board Bazar, California, USA',
        price: 'Rp. 63300',
        date: '23 Sep, 2022',
        views: 970,
        status: 'Not Available',
        image: '/assets/images/properti.png',
    },
    {
        id: 10,
        name: 'Red Villa World',
        location: 'Board Bazar, California, USA',
        price: 'Rp. 63300',
        date: '23 Sep, 2022',
        views: 970,
        status: 'Available',
        image: '/assets/images/properti.png',
    },
];

const ITEMS_PER_PAGE = 5;

const PropertyListPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const handleDelete = (id: number) => console.log(`Deleting sewa with ID: ${id}`);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-600';
            case 'Available':
                return 'bg-green-500 text-green-100';
            case 'Not Available':
                return 'bg-blue-100 text-blue-600';
            case 'Pending':
                return 'bg-red-100 text-red-600';
            case 'Processing':
                return 'bg-yellow-100 text-yellow-600';
            default:
                return '';
        }
    };

    const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProperties = properties.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pages = [];
        const pageRange = 3;

        if (currentPage > 1) {
            pages.push(
                <button key="prev" onClick={handlePreviousPage} className="px-3 py-1">
                    {'Previous'}
                </button>
            );
        }

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - pageRange && i <= currentPage + pageRange)) {
                pages.push(
                    <button key={i} onClick={() => handlePageClick(i)} className={`mx-1 px-3 py-1 ${i === currentPage ? 'rounded bg-blue-500 text-white' : 'bg-black-200 text-white-700 rounded'}`}>
                        {i}
                    </button>
                );
            } else if ((i === currentPage - pageRange - 1 && i > 1) || (i === currentPage + pageRange + 1 && i < totalPages)) {
                pages.push(
                    <span key={`dots-${i}`} className="mx-1 px-3 py-1">
                        ...
                    </span>
                );
            }
        }

        if (currentPage < totalPages) {
            pages.push(
                <button key="next" onClick={handleNextPage} className="px-3 py-1">
                    {'Next'}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">List Properti</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="bg-black px-4 py-2 text-left text-white">Title</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Date</th>
                            <th className="bg-black px-4 py-2 text-left text-white">View</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Status</th>
                            <th className="bg-black px-4 py-2 text-left text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedProperties.map((property) => (
                            <tr key={property.id} className="border-b">
                                <td className="flex items-center px-4 py-4">
                                    <img src={property.image} alt={property.name} className="mr-4 h-16 w-16 rounded-md object-cover" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{property.name}</h3>
                                        <p className="text-sm text-gray-600">{property.location}</p>
                                        <p className="text-lg font-bold">{property.price}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4">{property.date}</td>
                                <td className="px-4 py-4">{property.views}</td>
                                <td className="px-4 py-4">
                                    <span className={`rounded-full px-2 py-1 text-sm font-semibold ${getStatusColor(property.status)}`}>{property.status}</span>
                                </td>

                                <td className="space-x-2 px-4 py-4">
                                    <PropertyCardDelete property={PropertyCardDelete} onDelete={handleDelete} />
                                    <Link href="/properties/settings/property-settings">
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
                                    <Link href="/properties/settings/detail-property">
                                        <button className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5c-1.73-3.89-6-7.5-11-7.5zm0 13a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-3a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                                />
                                            </svg>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="right mt-6 flex items-center justify-center space-x-2">{renderPagination()}</div>
            </div>
        </div>
    );
};

export default PropertyListPage;
