import React from 'react';

export default function CVModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        // Lớp phủ mờ (Overlay)
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">

            {/* Cửa sổ nổi (Modal Content) */}
            <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl relative flex flex-col overflow-hidden animate-scale-up">

                {/* Header Modal: Tiêu đề & Nút tắt */}
                <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 bg-gray-50">
                    <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
                        📄 CV của tôi
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Body Modal: Hiển thị PDF */}
                <div className="flex-grow bg-gray-200 relative">
                    <iframe
                        src="/my-cv.pdf"
                        className="w-full h-full"
                        title="My CV"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}