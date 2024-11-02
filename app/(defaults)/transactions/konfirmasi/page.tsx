import { Metadata } from 'next';
import React from 'react';
import KonfirmasiTable from '@/components/transactions/konfirmasi/KonfirmasiTable';

export const metadata: Metadata = {
    title: 'Menunggu Konfirmasi',
};

const MenungguKonfirmasi = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Menunggu Konfirmasi</h1>
            <KonfirmasiTable/>
        </div>
    );
};

export default MenungguKonfirmasi;
