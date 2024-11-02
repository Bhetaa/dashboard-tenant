'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface PropertyForm {
    name: string;
    location: string;
    price: string;
    denda: string;
    date: string;
    views: number;
    status: 'Available' | 'Not Available';
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
        status: 'Available',
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

    const handleSettingProperty = () => {
        const updatedProperty = {
            ...newProperty,
            status: 'Updated',
        };

        setNewProperty({
            name: '',
            location: '',
            price: '',
            denda: '',
            date: '',
            views: 0,
            status: 'Available',
            image: '',
        });
    };

    return (
        <div>
            <div className="pt-5">
            <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">Edit Data Property</h5>
            </div>
            <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                
                <div className="flex flex-col sm:flex-row">
                    <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="mb-2">
                            <label className="block">Nama Property</label>
                            <input type="text" placeholder="Hikmal Chalabi" name="name" value={newProperty.name} onChange={handleInputChange} className="w-full bg-transparent rounded border p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Lokasi</label>
                            <input type="text" placeholder="Puncak Bogor" name="location" value={newProperty.location} onChange={handleInputChange} className="w-full bg-transparent rounded border p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Harga</label>
                            <input type="text" placeholder="3500000" name="price" value={newProperty.price} onChange={handleInputChange} className="w-full bg-transparent rounded border p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Denda</label>
                            <input type="text" placeholder="250000" name="denda" value={newProperty.denda} onChange={handleInputChange} className="w-full bg-transparent rounded border p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Tanggal</label>
                            <input type="date" name="date" value={newProperty.date} onChange={handleInputChange} className="w-full bg-transparent rounded border p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Jumlah Views</label>
                            <input type="number"name="views" value={newProperty.views} onChange={handleInputChange} className="w-full bg-transparent rounded border p-2" />
                        </div>
                        <div className="mb-2">
                            <label className="block">Status</label>
                            <select name="status" value={newProperty.status} onChange={handleInputChange} className="w-full bg-transparent rounded border p-2">
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="fileUpload" className="mb-1 block font-semibold">
                                Upload Gambar
                            </label>
                            <input id="fileUpload" type="file" name="file" accept="image/*" onChange={handleFileChange} className="w-full bg-transparent rounded border p-2" aria-label="Upload Gambar" />
                        </div>
                        <div className="mt-4 flex space-x-4">
                            <Link href={`/properties/`}>
                                <button onClick={handleSettingProperty} className="rounded bg-green-500 px-4 py-2 text-white">
                                    Simpan
                                </button>
                            </Link>
                            <Link href={`/properties/`}>
                                <button onClick={onCancel} className="rounded bg-red-500 px-4 py-2 text-white">
                                    Batal
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddProperty;
