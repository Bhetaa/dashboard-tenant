import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import UserTable from '@/components/users/user/UserTable';

export const metadata: Metadata = {
    title: 'Data User',
};

const TransaksiBatal = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Data User</h1>
            <UserTable/>
        </div>
    );
};

export default TransaksiBatal;
