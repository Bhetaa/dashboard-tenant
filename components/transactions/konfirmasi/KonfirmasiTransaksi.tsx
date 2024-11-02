import React, { useState } from 'react';
import { ConfrimTransaction } from './KonfirmasiTransaksi';

interface ConfrimTransactionTable {
    confirm: ConfrimTransaction;
    onConfirm: (id: number) => void;
}

const KonfirmasiTransaction: React.FC<ConfrimTransactionTable> = ({ confirm, onConfirm }) => {
    const [showModal, setShowModal] = useState(false);

    const handleConfirm = () => {
        onConfirm(confirm.id);
        setShowModal(false);
    };

    return (
        <>
            <button className="rounded bg-green-500 p-2 text-white hover:bg-green-600" onClick={() => setShowModal(true)}>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </button>

            {showModal && (
                <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
                    <div className="mx-4 w-full max-w-md rounded bg-white p-6 dark:bg-gray-800">
                        <h3 className="mb-4 text-lg font-bold">Confirm Payment</h3>
                        <p>Are you sure you want to this confirm payment?</p>
                        <div className="mt-4 flex justify-center gap-2">
                            <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" onClick={handleConfirm}>
                                Confirmasi
                            </button>
                            <button className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400" onClick={() => setShowModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default KonfirmasiTransaction;
