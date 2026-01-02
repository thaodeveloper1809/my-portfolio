import React, { useState, useEffect } from 'react';
import { Link, router } from '@inertiajs/react';
import PageLoader from '@/Components/PageLoader';

export default function MainLayout({ children }) {

    const [isLoading, setIsLoading] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Hàm lắng nghe sự kiện
        const startLoading = () => setIsLoading(true);
        const finishLoading = () => setIsLoading(false);

        // Đăng ký sự kiện với Inertia Router
        const removeStartListener = router.on('start', () => setIsLoading(true));
        const removeFinishListener = router.on('finish', () => setIsLoading(false));

        // Dọn dẹp khi component unmount
        return () => {
            removeStartListener();
            removeFinishListener();
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800">
            {isLoading && <PageLoader />}
            {/* --- HEADER / NAVBAR --- */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/storage/_Infinity_symbol_loops_made_of_fiber_optic_cables__glowing_blue__sleek_and_modern_tech_logo__black_background._-removebg-preview.png"
                            alt="Logo"
                            className="h-10 w-auto object-contain hover:opacity-80 transition"
                        />
                        <b className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MyPortfolio</b>
                    </Link>

                    {/* Menu Desktop */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="hover:text-blue-600 font-medium transition">Trang chủ</Link>
                        <a href="#about" className="hover:text-blue-600 font-medium transition">Giới thiệu</a>
                        <a href="#projects" className="hover:text-blue-600 font-medium transition">Dự án</a>
                        <a href="#contact" className="hover:text-blue-600 font-medium transition">Liên hệ</a>
                    </nav>

                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> // Icon X
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> // Icon 3 gạch
                            )}
                        </svg>
                    </button>

                    {/* Nút Call to Action */}
                    <a
                        href="tel:0936 389 027"
                        className="hidden md:inline-flex items-center gap-3 px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-gray-800 transition group overflow-hidden"
                    >
                        {/* Icon điện thoại với animation */}
                        <span className="animate-wiggle relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                        </span>

                        {/* Số điện thoại */}
                        <span className="relative z-10 font-semibold tracking-wider">
                            0936 389 027
                        </span>

                        {/* Hiệu ứng nền chạy qua khi hover (Thêm cho đẹp) */}
                        <div className="absolute inset-0 h-full w-full bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </a>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-full">
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Trang chủ</Link>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Giới thiệu</a>
                            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Dự án</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</a>
                        </div>
                    </div>
                )}
            </header>

            {/* --- BODY (Nội dung thay đổi) --- */}
            <main className="flex-grow">
                {children}
            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-gray-900 text-white py-10 mt-20">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">Let's work together!</h3>
                    <p className="text-gray-400 mb-6">Bạn có ý tưởng dự án? Hãy liên hệ để biến nó thành hiện thực.</p>
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} MyPortfolio. Built with Laravel 12 & React.
                    </p>
                </div>
            </footer>
        </div>
    );
}