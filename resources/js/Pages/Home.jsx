import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import AboutMe from '@/Components/AboutMe';
import ContactForm from '@/Components/ContactForm';
import CVModal from '@/Components/CVModal';

export default function Home({ skills, projects, name }) {

    const [isCVModalOpen, setIsCVModalOpen] = useState(false);

    return (
        <MainLayout>
            <Head title="Trang chủ" />

            {/* --- 1. HERO SECTION (Giới thiệu) --- */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
                </div>
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div data-aos="fade-down" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for hire
                    </div>

                    <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
                        Hi, I'm <span className="font-times text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{name}</span> 👋
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="100" className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Fullstack Developer chuyên biến những ý tưởng phức tạp thành giải pháp <span className="text-slate-900 font-semibold">đơn giản</span> & <span className="text-slate-900 font-semibold">hiệu quả</span>.
                    </p>

                    <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col md:flex-row justify-center gap-4">
                        <a href="#projects" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition transform hover:-translate-y-1 shadow-xl shadow-slate-300/50 flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            Xem Dự Án
                        </a>
                        <button
                            onClick={() => setIsCVModalOpen(true)}
                            className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-xl font-bold hover:border-blue-200 hover:bg-blue-50 transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Xem & Tải CV
                        </button>
                    </div>

                </div>
            </section>

            <AboutMe />

            {/* --- 2. SKILLS MARQUEE (Kỹ năng) --- */}
            <section className="py-16 border-b border-gray-100 bg-white overflow-hidden">
                <div className="container mx-auto px-6 mb-8">
                    <p className="text-center font-extrabold text-blue-800 font-medium text-sm uppercase tracking-widest">
                        Công nghệ tôi sử dụng
                    </p>
                </div>

                <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <div className="animate-infinite-scroll flex gap-12 items-center">

                        {/* --- LẦN 1: Render danh sách gốc --- */}
                        {skills.map((skill) => (
                            <div key={`s1-${skill.id}`} className="flex flex-col items-center flex-shrink-0">
                                {skill.image ? (
                                    <img
                                        src={`/storage/${skill.image}`}
                                        alt={skill.name}
                                        className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                                    />
                                ) : (
                                    <span className="font-bold text-xl text-gray-400">{skill.name}</span>
                                )}
                            </div>
                        ))}

                        {/* --- LẦN 2: Render bản sao (Để nối đuôi khi Lần 1 chạy hết) --- */}
                        {skills.map((skill) => (
                            <div key={`s2-${skill.id}`} className="flex flex-col items-center flex-shrink-0">
                                {skill.image ? (
                                    <img
                                        src={`/storage/${skill.image}`}
                                        alt={skill.name}
                                        className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                                    />
                                ) : (
                                    <span className="font-bold text-xl text-gray-400">{skill.name}</span>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* --- 3. FEATURED PROJECTS (Dự án nổi bật) --- */}
            <section id="projects" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dự án tiêu biểu</h2>
                            <p className="text-gray-500">Những sản phẩm tâm đắc nhất của tôi.</p>
                        </div>
                        <a href="#" className="hidden md:block text-blue-600 font-medium hover:underline">
                            Xem tất cả &rarr;
                        </a>
                    </div>

                    {/* Grid Dự Án */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                data-aos="fade-up"
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
                                {/* Ảnh bìa dự án */}
                                <Link href={route('project.detail', project.slug)}>
                                    <div className="h-48 bg-gray-200 overflow-hidden relative">
                                        {project.thumbnail ? (
                                            <img
                                                src={`/storage/${project.thumbnail}`}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                No Image
                                            </div>
                                        )}
                                    </div>
                                </Link>

                                {/* Nội dung Card */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {project.short_description}
                                    </p>

                                    {/* Link Demo/Repo */}
                                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                                        {project.demo_url && (
                                            <a href={project.demo_url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                                                Live Demo
                                            </a>
                                        )}
                                        {project.repo_url && (
                                            <a href={project.repo_url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-700 hover:text-black">
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <ContactForm />
            <CVModal
                isOpen={isCVModalOpen}
                onClose={() => setIsCVModalOpen(false)}
            />
        </MainLayout>
    );
}