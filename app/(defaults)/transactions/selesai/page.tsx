import SelesaiTable from '@/components/transactions/selesai/SelesaiTable';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Transaksi Selesai',
};

const TransaksiSelesai= () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Transaksi Selesai</h1>
            <SelesaiTable/>
        </div>
    );
};

export default TransaksiSelesai;
