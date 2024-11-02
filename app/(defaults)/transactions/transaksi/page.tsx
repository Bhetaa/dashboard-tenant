import React, { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import TransaksiCard from '@/components/transactions/transaksi/TransaksiTable';

export const metadata: Metadata = {
    title: 'Data Transaksi',
};

const Transaksi = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Data Transaksi</h1>
        <TransaksiCard />
      </div>
    );
  };

export default Transaksi;
