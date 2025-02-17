import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import UsersAccountSettingsTabs from '@/components/users/account-settings/page';

export const metadata: Metadata = {
    title: 'Account Settings',
};

const UserAccountSettings = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Settings
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Account Settings</span>
                </li>
            </ul>
            <UsersAccountSettingsTabs />
        </div>
    );
};

export default UserAccountSettings;
