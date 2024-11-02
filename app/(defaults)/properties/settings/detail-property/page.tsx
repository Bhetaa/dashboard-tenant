import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import PropertyDetailProps from '@/components/properties/settings/DetailProperty';

export const metadata: Metadata = {
    title: 'Detail Property',
};

const DetailPropertyTable = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Settings
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Detail Property</span>
                </li>
            </ul>
            <PropertyDetailProps /> 
        </div>
    );
};

export default DetailPropertyTable;
