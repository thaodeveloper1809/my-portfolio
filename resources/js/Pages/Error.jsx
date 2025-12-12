import React, { useState, useEffect, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Error() {
    // 1. State lưu vị trí chuột
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // 2. Lắng nghe sự kiện di chuyển chuột toàn trang
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Dọn dẹp khi thoát trang
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        // Màu nền hồng phấn nhạt giống ảnh mẫu (#F4EAE6)
        <div className="min-h-screen bg-[#F9F0F0] flex flex-col items-center justify-center font-serif text-center p-4">
            <Head title="404 - Page Not Found" />

            {/* --- CONTAINER CHỨA 2 MẮT --- */}
            <div className="flex gap-4 md:gap-10 mb-12">
                {/* Mắt Trái */}
                <Eye mousePos={mousePos} />
                {/* Mắt Phải */}
                <Eye mousePos={mousePos} />
            </div>

            {/* --- TIÊU ĐỀ --- */}
            <h1 className="text-4xl md:text-6xl text-gray-800 mb-8 tracking-tight">
                404, Page Not Found.
            </h1>

            {/* --- NÚT HOME --- */}
            <Link
                href="/"
                className="px-8 py-3 bg-black text-white text-sm md:text-base rounded-full hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg"
            >
                Please Take Me Home
            </Link>
        </div>
    );
}

// --- COMPONENT CON: CON MẮT ---
function Eye({ mousePos }) {
    const eyeRef = useRef(null);
    const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!eyeRef.current) return;

        // Lấy tọa độ tâm của con mắt hiện tại
        const rect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Tính góc giữa chuột và tâm mắt
        const angle = Math.atan2(mousePos.y - eyeCenterY, mousePos.x - eyeCenterX);

        // Tính khoảng cách (giới hạn để tròng đen không chạy ra ngoài lòng trắng)
        // Bán kính mắt khoảng 120px, trừ đi bán kính tròng đen 50px -> Max di chuyển ~70px
        const maxMove = Math.min(
            70,
            Math.hypot(mousePos.x - eyeCenterX, mousePos.y - eyeCenterY) / 3 // Chia 3 để mắt liếc từ từ
        );

        // Tính tọa độ mới cho tròng đen
        const pupilX = Math.cos(angle) * maxMove;
        const pupilY = Math.sin(angle) * maxMove;

        setPupilPos({ x: pupilX, y: pupilY });

    }, [mousePos]);

    return (
        // Lòng trắng (Sclera)
        <div
            ref={eyeRef}
            className="w-40 h-40 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center shadow-sm relative overflow-hidden"
        >
            {/* Tròng đen (Pupil) */}
            <div
                className="w-20 h-20 md:w-32 md:h-32 bg-black rounded-full"
                style={{
                    transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
                    transition: 'transform 0.1s ease-out' // Thêm chút delay cho mượt
                }}
            />
        </div>
    );
}