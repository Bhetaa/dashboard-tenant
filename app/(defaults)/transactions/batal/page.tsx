import BatalTable from '@/components/transactions/batal/BatalTable';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Transaksi Batal',
};

const TransaksiBatal = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Transaksi Batal</h1>
            <BatalTable/>
        </div>
    );
};

export default TransaksiBatal;
