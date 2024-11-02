import SewaTable from '@/components/transactions/sewa/SewaTable';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sedang Disewa',
};

const SedangDiSewa = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Sedang Disewa</h1>
            <SewaTable/>
        </div>
    );
};

export default SedangDiSewa;
