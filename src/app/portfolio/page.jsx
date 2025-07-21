export default function Portfolio() {
    return (
        <div>
            <header className={"sticky top-0 bg-opacity-90 backdrop-blur-lg"}>
                <nav className={"container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center"}>
                    <div className={"flex items-center gap-4"}>
                        <h1 className={"text-2xl font-bold"}>전상은</h1>
                        <p className={"text-sml text-gray-500"}>백엔드 개발자</p>
                    </div>
                    <div className={"flex items-center gap-x-6"}>
                        <a href={"#home"} className={"hover:text-blue-500 transition-colors duration-300"}>홈</a>
                        <a href={"#about"} className={"hover:text-blue-500 transition-colors duration-300"}>소개</a>
                        <a href={"#skills"} className={"hover:text-blue-500 transition-colors duration-300"}>기술</a>
                        <a href={"#project"} className={"hover:text-blue-500 transition-colors duration-300"}>프로젝트</a>
                        <a href={"#contact"} className={"hover:text-blue-500 transition-colors duration-300"}>연락처</a>
                        {/* 다크 모드*/}
                        <button
                            className={
                                "p-2 w-10 h-10 rounded-full bg-gray-200 " +
                                "focus:outline-2 focus:outline-none focus:ring focus:ring-gray-500 " +
                                "hover:scale-110 transition-transform duration-300"
                            }
                        >
                            <i className={"fas fa-moon text-2xl"}></i>
                        </button>
                    </div>
                </nav>
            </header>
            <main className={"max-w-4xl mx-auto px-6 py-12"}>
                {/* Home Section */}
                <section id="home" className={"flex justify-between items-center mb-12"}>
                    <div className={"shrink-0 mr-10"}>
                        <img
                            className={"w-48 h-48 rounded-full border-2 object-cover hover:scale-105 transition-transform duration-300"}
                            src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Brian"
                            alt="avatar"
                        />
                    </div>
                    <div className={"text-right"}>
                        <h1 className={"text-4xl font-bold mb-2"}>
                            전상은
                        </h1>
                        <p className={"text-xl mb-4"}>열정적인 개발자</p>
                        <p className={"text-gray-600"}>
                            계속해서 성장하려고 노력하는 2년 차 백엔드 개발자입니다. Spring Boot와 JPA를
                            중심으로 안정적이고 확장 가능한 API 개발에 집중해왔습니다. 문제 해결과 소통에
                            강점을 가지며, 더 나은 서비스를 위해 끊임없이 배우고 성장합니다.
                        </p>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className={"mb-16"}>
                    <h2 className={"text-3xl font-bold mb-6"}>소개</h2>
                    <div className={"grid grid-cols-2 gap-6"}>
                        <article className={"bg-gray-100 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300"}>
                            <h3 className={"text-xl font-semibold mb-1"}>🧑‍🎓교육 및 활동</h3>
                            <ul className={"text-gray-800 leading-relaxed"}>
                                <li>• 2024년 경주시 문제해결 해커톤 최우수상 수상</li>
                                <li>• 동국대학교 개발 동아리 Developer 교육 진행(2024)</li>
                            </ul>
                        </article>
                        <article className={"bg-gray-100 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300"}>
                            <h3 className={"text-xl font-semibold mb-1"}>👨‍💻자격증</h3>
                            <ul className={"text-gray-800 leading-relaxed"}>
                                <li>• 사회조사분석사 2급(2020)</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Skills Section */}
                <section id={"skills"} className={"mb-16"}>
                    <h2 className={"text-3xl font-bold mb-6"}>기술</h2>
                    <div className={"grid grid-cols-3 gap-4"}>
                        <div className={"flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"}>
                            <i className="fa-brands fa-java text-4xl"></i>
                            <h3 className={"text-lg font-semibold"}>Java</h3>
                        </div>
                        <div className={"flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"}>
                            <i className="fa-brands fa-js text-4xl text-yellow-400"></i>
                            <h3 className={"text-lg font-semibold"}>JavaScript</h3>
                        </div>
                        <div className={"flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"}>
                            <i className="fa-brands fa-html5 text-4xl text-red-500"></i>
                            <h3 className={"text-lg font-semibold"}>HTML5</h3>
                        </div>
                    </div>
                </section>

                {/* Project Section */}
                <section id={"project"} className={"mb-16"}>
                    <h2 className={"text-3xl font-bold mb-6"}>프로젝트</h2>
                    <div className={"grid grid-cols-2 gap-6"}>
                        {[...Array(4)].map((_, idx) => (
                            <article key={idx} className={"bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"}>
                                <img
                                    className={"w-full h-48 object-cover"}
                                    src={"https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?q=80&w=600"}
                                    alt={"플랫폼 이미지"}
                                />
                                <div className={"p-6"}>
                                    <h3 className={"text-xl font-semibold mb-4 text-gray-800"}>
                                        OOO 플랫폼
                                    </h3>
                                    <div className={"space-x-2 mb-4"}>
                                        <span className={"bg-gray-200 text-xs text-gray-700 px-2 py-0.5 rounded-md border border-gray-300"}>Spring</span>
                                        <span className={"bg-gray-200 text-xs text-gray-700 px-2 py-0.5 rounded-md border border-gray-300"}>React</span>
                                        <span className={"bg-gray-200 text-xs text-gray-700 px-2 py-0.5 rounded-md border border-gray-300"}>MySql</span>
                                    </div>
                                    <div className={"space-x-2"}>
                                        <a href={"#"} className={"bg-gray-800 text-sm text-white px-3 py-1 rounded-md"}>GitHub</a>
                                        <a href={"#"} className={"bg-blue-600 text-sm text-white px-3 py-1 rounded-md"}>라이브 데모</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
                {/* Contact Section */}
                <section id={"contact"} className={""}>
                    <h2 className={"text-3xl font-bold mb-6"}>연락처</h2>
                    <div className={"grid grid-cols-2 gap-8"}>
                        <form id={"contactForm"} className={"space-y-4"}>
                            <div>
                                <label htmlFor={"name"} className={"block mb-1 font-medium"}>이름</label>
                                <input
                                    type={"text"}
                                    id={"name"}
                                    name={"name"}
                                    required={true}
                                    className={"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"}
                                />
                            </div>
                            <div>
                                <label htmlFor={"email"} className={"block mb-1 font-medium"}>이메일</label>
                                <input
                                    type={"email"}
                                    id={"email"}
                                    name={"email"}
                                    className={"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"}
                                />
                            </div>
                            <div>
                                <label htmlFor={"name"} className={"block mb-1 font-medium"}>메시지</label>
                                <textarea
                                    type={"text"}
                                    id={"name"}
                                    name={"name"}
                                    required={true}
                                    className={"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"}
                                />
                            </div>
                            <button type={"submit"} className={"bg-gray-500 text-white px-6 py-1.5 rounded-3xl hover:bg-gray-700 transition-colors duration-300"}>전송</button>
                        </form>
                        <div className={"flex flex-col items-center justify-center gap-y-2"}>
                            <a href={"#"} target={"_blank"} className={"flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300"}>
                                <i className={"fa-brands fa-github"}></i>
                                <span>GitHub</span>
                            </a>
                            <a href={"#"} target={"_blank"} className={"flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300"}>
                                <i className={"fa-regular fa-envelope"}></i>
                                <span>wowddok99@gmail.com</span>
                            </a>
                            <a href={"#"} target={"_blank"} className={"flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-300"}>
                                <i className={"fa-solid fa-phone"}></i>
                                <span>010-0000-0000</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <footer className={"bg-gray-400 w-full h-20"}></footer>
        </div>
    );
}