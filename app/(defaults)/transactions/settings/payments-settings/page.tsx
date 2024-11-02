import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import PaymentSettingsTabs from '@/components/transactions/settings/PaymentSettings';

export const metadata: Metadata = {
    title: 'Payments Settings',
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
                    <span>Settings Payments</span>
                </li>
            </ul>
            <PaymentSettingsTabs />
        </div>
    );
};

export default PaymentsTableSettings;
