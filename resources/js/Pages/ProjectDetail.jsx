import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function ProjectDetail({ project }) {
    return (
        <MainLayout>
            <Head title={project.title} />

            {/* --- HEADER: ẢNH BÌA & TIÊU ĐỀ --- */}
            <div className="bg-gray-900 text-white pt-32 pb-20 relative overflow-hidden">
                {/* Ảnh nền mờ ảo phía sau */}
                {project.thumbnail && (
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src={`/storage/${project.thumbnail}`}
                            className="w-full h-full object-cover blur-sm"
                        />
                    </div>
                )}

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-blue-400 font-bold tracking-wider uppercase mb-4 block">Case Study</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">{project.short_description}</p>

                    {/* Buttons Link */}
                    <div className="flex justify-center gap-4 mt-8">
                        {project.demo_url && (
                            <a href={project.demo_url} target="_blank" className="px-6 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition flex items-center gap-2">
                                🚀 Live Demo
                            </a>
                        )}
                        {project.repo_url && (
                            <a href={project.repo_url} target="_blank" className="px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2">
                                💻 Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* --- CONTENT: NỘI DUNG BÀI VIẾT --- */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 -mt-24 relative z-20">

                    {/* Render nội dung HTML từ RichEditor */}
                    <div
                        className="prose prose-lg max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                    />

                    {/* Nút Quay lại */}
                    <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                        <Link href="/" className="text-blue-600 font-semibold hover:underline">
                            &larr; Quay lại trang chủ
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}