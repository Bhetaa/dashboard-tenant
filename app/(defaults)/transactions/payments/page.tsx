import PembayaranTable from '@/components/transactions/payments/PembayaranTable';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Menunggu Pembayaran',
};

const MenungguPembayaran = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Menunggu Pembayaran</h1>
          <PembayaranTable />
        </div>
      );
    };

export default MenungguPembayaran;
