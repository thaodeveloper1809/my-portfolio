import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Spinner from '@/Components/Spinner';

export default function ContactForm() {
    const [isSuccess, setIsSuccess] = useState(false);

    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => { reset(); setIsSuccess(true); },
            preserveScroll: true,
        });
    };

    const handleResetForm = () => {
        setIsSuccess(false);
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 scroll-mt-20">
            <div className="container mx-auto px-6">

                {/* --- KHUNG THẺ CHÍNH (Card Container) --- */}
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row" data-aos="fade-up">

                    {/* --- CỘT TRÁI: THÔNG TIN LIÊN HỆ (Màu tối / Gradient) --- */}
                    <div className="w-full md:w-5/12 bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">

                        {/* Họa tiết trang trí nền (Background Blobs) */}
                        <div className="absolute top-0 right-0 -m-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                        <div className="absolute bottom-0 left-0 -m-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">Liên hệ với tôi 💬</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Bạn có ý tưởng dự án thú vị? Hay chỉ đơn giản là muốn kết nối? Hãy điền vào form hoặc liên hệ trực tiếp qua các kênh dưới đây.
                            </p>

                            <div className="space-y-6">
                                {/* Item 1: Phone */}
                                <a href="tel:0123456789" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Điện thoại</p>
                                        <p className="font-medium">0936 389 027</p>
                                    </div>
                                </a>

                                {/* Item 2: Email */}
                                <a href="mailto:email@example.com" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</p>
                                        <p className="font-medium">thaodeveloper1809@gmail.com</p>
                                    </div>
                                </a>

                                {/* Item 3: Location */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Địa chỉ</p>
                                        <p className="font-medium">Hồ Chí Minh, Việt Nam</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links ở dưới cùng */}
                        <div className="relative z-10 mt-12 flex justify-center gap-4">
                            <SocialLink href="https://www.facebook.com/sunboy189/" icon="facebook" />
                            <SocialLink href="https://github.com/thaodeveloper1809" icon="github" />
                            <SocialLink href="https://www.linkedin.com/in/thaonguyentang2k/" icon="linkedin" />
                        </div>
                    </div>

                    {/* --- CỘT PHẢI: FORM NHẬP LIỆU (Màu trắng) --- */}
                    <div className="w-full md:w-7/12 p-10 bg-white">

                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Đã gửi thành công!</h4>
                                <p className="text-gray-500">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
                                <button
                                    onClick={handleResetForm}
                                    className="mt-8 text-blue-600 font-medium hover:underline flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    Gửi tin nhắn khác
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-6">Gửi tin nhắn</h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition">Họ tên của bạn</label>
                                        <input
                                            type="text"
                                            required
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50 border transition-all outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                                            placeholder="VD: Nguyễn Văn A"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-2 flex items-center gap-1">⚠️ {errors.name}</p>}
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition">Email liên hệ</label>
                                        <input
                                            type="email"
                                            required
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50 border transition-all outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                                            placeholder="email@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-2 flex items-center gap-1">⚠️ {errors.email}</p>}
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition">Nội dung tin nhắn</label>
                                    <textarea
                                        rows="4"
                                        required
                                        value={data.message}
                                        onChange={e => setData('message', e.target.value)}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border transition-all outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 ${errors.message ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                                        placeholder="Hãy cho tôi biết tôi có thể giúp gì cho bạn..."
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-2 flex items-center gap-1">⚠️ {errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {processing ? (
                                        <>
                                            <div className="w-5 h-5"><Spinner className="text-white scale-50" /></div>
                                        </>
                                    ) : (
                                        <>
                                            <span>Gửi Tin Nhắn Ngay</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Component nhỏ cho nút Social
function SocialLink({ href, icon }) {
    const iconColors = {
        facebook: 'bg-blue-600 hover:bg-blue-700',
        github: 'bg-gray-800 hover:bg-gray-900',
        linkedin: 'bg-blue-500 hover:bg-blue-600',
    };

    const icons = {
        facebook: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        github: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        linkedin: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.746 0-9.637h3.554v1.364c.429-.658 1.191-1.594 2.897-1.594 2.117 0 3.704 1.383 3.704 4.355v5.512zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.956.769-1.706 1.959-1.706 1.188 0 1.913.75 1.937 1.706 0 .948-.749 1.706-1.981 1.706zm-1.6 11.597h3.204V9.622H3.737v10.83zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    };

    return (
        <a href={href} className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${iconColors[icon]} transition-all transform hover:scale-110`}>
            {icons[icon]}
        </a>
    )
}   