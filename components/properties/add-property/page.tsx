'use client';

import React, { useState } from 'react';

interface PropertyForm {
    name: string;
    location: string;
    price: string;
    denda: string;
    date: string;
    views: number;
    status: 'Active' | 'Pending' | 'Processing';
    image: string;
}

interface AddPropertyProps {
    onAddProperty: (property: PropertyForm) => void;
    onCancel: () => void;
}

const AddProperty: React.FC<AddPropertyProps> = ({ onAddProperty, onCancel }) => {
    const [newProperty, setNewProperty] = useState<PropertyForm>({
        name: '',
        location: '',
        price: '',
        denda: '',
        date: '',
        views: 0,
        status: 'Active',
        image: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewProperty({
            ...newProperty,
            [name]: name === 'views' ? Number(value) : value,
        });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setNewProperty({
                ...newProperty,
                image: file.name,
            });
        }
    };

    const handleSubmit = () => {
        onAddProperty(newProperty);
        setNewProperty({
            name: '',
            location: '',
            price: '',
            denda: '',
            date: '',
            views: 0,
            status: 'Active',
            image: '',
        });
    };

    return (
        <div>
            <div className="rounded-lg bg-transparent p-4">
                <h2 className="mb-4 text-xl font-bold">Overview</h2>
                <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                    <div className="flex flex-col sm:flex-row">
                    <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="mb-2">
                            <label className="block">Nama Property</label>
                            <input type="text" name="name" value={newProperty.name} onChange={handleInputChange} className="w-full rounded border bg-transparent p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Lokasi</label>
                            <input type="text" name="location" value={newProperty.location} onChange={handleInputChange} className="w-full rounded border bg-transparent p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Harga</label>
                            <input type="text" name="price" value={newProperty.price} onChange={handleInputChange} className="w-full rounded border bg-transparent p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Denda</label>
                            <input type="text" name="denda" value={newProperty.denda} onChange={handleInputChange} className="w-full rounded border bg-transparent p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Tanggal</label>
                            <input type="date" name="date" value={newProperty.date} onChange={handleInputChange} className="w-full rounded border bg-transparent p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Jumlah Views</label>
                            <input type="number" name="views" value={newProperty.views} onChange={handleInputChange} className="w-full rounded border bg-transparent p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Status</label>
                            <select name="status" value={newProperty.status} onChange={handleInputChange} className="w-full rounded border bg-transparent p-2">
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="fileUpload" className="mb-1 block font-semibold">
                                Upload Gambar
                            </label>
                            <input id="fileUpload" type="file" name="file" accept="image/*" onChange={handleFileChange} className="w-full rounded border p-2" aria-label="Upload Gambar" />
                        </div>
                        <div className="mt-4 flex-none space-x-4">
                            <button onClick={handleSubmit} className="rounded bg-green-500 px-4 py-2 text-white">
                                Tambah
                            </button>
                            <button onClick={onCancel} className="rounded bg-red-500 px-4 py-2 text-white">
                                Batal
                            </button>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProperty;
