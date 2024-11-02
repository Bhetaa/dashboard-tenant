import React from 'react';
import { User, Bookmark, Eye, Heart } from 'lucide-react';

interface StatCardProps {
    label: string;
    value: string;
    icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => (
    <div className="flex items-center gap-4">
        <div className="flex flex-col">
            <span className="text-sm text-gray-500">{label}</span>
            <span className="text-4xl font-bold">{value}</span>
        </div>
        <div className="bg-#1b2e4b rounded-full p-3">{icon}</div>
    </div>
);

const DashboardCard = () => {
    const stats = [
        {
            label: 'All Properties',
            value: '1.7k+',
            icon: <User className="h-6 w-6 text-white" />,
        },
        {
            label: 'Total Pending',
            value: '03',
            icon: <Bookmark className="h-6 w-6 text-white" />,
        },
        {
            label: 'Total Views',
            value: '4.8k',
            icon: <Eye className="h-6 w-6 text-white" />,
        },
        {
            label: 'Total Favourites',
            value: '07',
            icon: <Heart className="h-6 w-6 text-white" />,
        },
    ];

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatCard key={index} label={stat.label} value={stat.value} icon={stat.icon} />
                ))}
            </div>
        </div>
    );
};

export default DashboardCard;
