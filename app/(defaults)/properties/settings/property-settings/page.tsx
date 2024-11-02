import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import PropertySettingsTabs from '@/components/properties/settings/PropertySettings';

export const metadata: Metadata = {
    title: 'Property Settings',
};

const PaymentsTableSettings = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Settings
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Settings Property </span>
                </li>
            </ul>
            <PropertySettingsTabs />
        </div>
    );
};

export default PaymentsTableSettings;
