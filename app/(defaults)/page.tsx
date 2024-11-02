import { Metadata } from 'next';
import React from 'react';
import PropertyListPage from '@/app/(defaults)/properties/page';
import DashboardCard from '@/components/dashboard/DashboardCard';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';

export const metadata: Metadata = {
    title: 'Dashboard',
};

const Home = () => {
    return (
        <>
            <div>
                <DashboardCard />
            </div>
            <AnalyticsChart />
            <PropertyListPage />
        </>
    );
};

export default Home;
