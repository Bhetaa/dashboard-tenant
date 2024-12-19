'use client';
import React, { useState } from 'react';
import AddProperty from '@/components/properties/add-property/page';
import { useRouter } from 'next/navigation';



interface Property {
    id: number;
    name: string;
    location: string;
    price: string;
    date: string;
    views: number;
    status: 'Active' | 'Pending' | 'Processing';
    image: string;
}

const AddPropertyListPage: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const router = useRouter();

    const handleAddProperty = (property: Property) => {
        const id = properties.length + 1;
        const newProperty = { ...property, id };
        setProperties([...properties, newProperty]);
        setIsAdding(false);
        router.push('/properties');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Add New Property</h1>

            {!isAdding ? (
                <button onClick={() => setIsAdding(true)} className="mb-4 rounded bg-blue-500 px-4 py-2 text-white">
                    Tambah Property Baru
                </button>
            ) : (
                <AddProperty onAddProperty={handleAddProperty} onCancel={() => setIsAdding(false)} />
            )}
        </div>
    );
};

export default AddPropertyListPage;
