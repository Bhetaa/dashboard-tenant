import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import TenantsSettingsTabs from '@/components/transactions/settings/SewaSettings';

export const metadata: Metadata = {
    title: 'Tenants Settings',
};

const TenantTableSettings = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Settings
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Settings Tenant</span>
                </li>
            </ul>
            <TenantsSettingsTabs />
        </div>
    );
};

export default TenantTableSettings;
