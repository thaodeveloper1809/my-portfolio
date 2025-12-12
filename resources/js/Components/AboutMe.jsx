import React from 'react';

export default function AboutMe() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Tiêu đề section */}
                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Về bản thân tôi
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-3 mb-3 max-w-2xl mx-auto">
                        Lập trình không chỉ là nghề nghiệp, đó là đam mê <br /> biến những dòng code thành giải pháp thực tế.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* --- CỘT TRÁI: ẢNH & INFO CƠ BẢN --- */}
                    <div className="w-full md:w-1/3" data-aos="fade-right">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
                            {/* Ảnh đại diện (Thay link ảnh của bạn vào đây) */}
                            <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 mb-6 relative">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Profile"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                                {/* Badge kinh nghiệm (Optional) */}
                                {/* <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    2+ Năm Kinh Nghiệm
                                </div> */}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">Nguyễn Tăng Thảo</h3>
                            <p className="text-blue-600 font-medium mb-4">Fullstack Developer</p>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                Tôi là một lập trình viên đam mê công nghệ, luôn tìm kiếm những thử thách mới để nâng cao kỹ năng và tạo ra những sản phẩm có giá trị cho cộng đồng.
                            </p>
                        </div>
                    </div>

                    {/* --- CỘT PHẢI: CHI TIẾT (GRID CARD) --- */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-left">

                        {/* Card 1: Học vấn */}
                        <InfoCard
                            title="Học vấn & Chuyên ngành"
                            icon={<AcademicIcon />}
                            color="blue"
                        >
                            <ul className="space-y-4">
                                <li className="relative pl-4 border-l-2 border-blue-200">
                                    <h4 className="font-bold text-gray-900">Đại học Công Nghệ Sài Gòn (STU)</h4>
                                    <p className="text-sm text-blue-600">2018 - 2024 (Đã tốt nghiệp)</p>
                                    <p className="text-sm text-gray-600 mt-1">Chuyên ngành: Công nghệ thông tin</p>
                                </li>
                                <li className="relative pl-4 border-l-2 border-blue-200">
                                    <h4 className="font-bold text-gray-900">Thực tập sinh</h4>
                                    <p className="text-sm text-blue-600">2025</p>
                                    <p className="text-sm text-gray-600 mt-1">Hoàn thành khóa thực tập FullStack với dự án thương mại.</p>
                                </li>
                            </ul>
                        </InfoCard>

                        {/* Card 2: Văn hóa làm việc */}
                        <InfoCard
                            title="Văn hóa làm việc"
                            icon={<BriefcaseIcon />}
                            color="purple"
                        >
                            <div className="space-y-3">
                                <Tag text="Trách nhiệm cao 🤝" />
                                <Tag text="Teamwork tốt 👥" />
                                <Tag text="Học hỏi không ngừng 📚" />
                                <Tag text="Tư duy giải quyết vấn đề 💡" />
                                <p className="text-sm text-gray-600 mt-4 italic">
                                    "Tôi luôn tin rằng thái độ quan trọng hơn trình độ. Kỹ năng có thể học, nhưng thái độ quyết định tất cả."
                                </p>
                            </div>
                        </InfoCard>

                        {/* Card 3: Sở thích */}
                        <InfoCard
                            title="Sở thích cá nhân"
                            icon={<HeartIcon />}
                            color="pink"
                            className="md:col-span-2" // Card này nằm ngang full width
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <HobbyItem emoji="💻" title="Coding" desc="Dự án cá nhân" />
                                <HobbyItem emoji="⚽️" title="Đá bóng" desc="Rèn sức khỏe" />
                                <HobbyItem emoji="travel" customIcon={true} title="Du lịch" desc="Khám phá" />
                                <HobbyItem emoji="🎧" title="Nghe nhạc" desc="Lofi & Indie" />
                            </div>
                        </InfoCard>

                    </div>
                </div>
            </div>
        </section >
    );
}

// --- CÁC COMPONENT CON (Để code gọn gàng) ---

function InfoCard({ title, icon, children, color, className = "" }) {
    const colorClasses = {
        blue: "bg-blue-50 text-blue-600",
        purple: "bg-purple-50 text-purple-600",
        pink: "bg-pink-50 text-pink-600",
    };

    return (
        <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition ${className}`}>
            <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
                    {icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900">{title}</h3>
            </div>
            <div>{children}</div>
        </div>
    );
}

function Tag({ text }) {
    return (
        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 hover:bg-gray-200 transition">
            {text}
        </span>
    );
}

function HobbyItem({ emoji, title, desc, customIcon }) {
    return (
        <div className="text-center p-3 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition cursor-default">
            <div className="text-3xl mb-2">{customIcon ? '✈️' : emoji}</div>
            <h5 className="font-bold text-gray-800 text-sm">{title}</h5>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
    );
}

function SocialButton({ icon, link }) {
    // Demo icon đơn giản, bạn có thể thay bằng FontAwesome
    return (
        <a href={link} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition">
            <i className={`fab fa-${icon}`}></i> {/* Cần cài FontAwesome hoặc dùng SVG */}
            {/* Dùng tạm text nếu chưa có icon */}
            <span className="uppercase text-xs font-bold">{icon[0]}</span>
        </a>
    )
}

// --- ICONS SVG (Không cần cài thư viện) ---
const AcademicIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
);
const BriefcaseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const HeartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
);