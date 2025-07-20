export default function Portfolio() {
    return (
        <div>
            <header className={"sticky top-0 bg-opacity-90 backdrop-blur-lg"}>
                <nav className={"container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center"}>
                    <div className={"flex items-center gap-4"}>
                        <h1 className={"text-2xl font-bold"}>테일윈드</h1>
                        <p className={"text-sml text-gray-500"}>예제</p>
                    </div>
                    <div className={"flex items-center gap-x-6"}>
                        <a href={"#home"} className={"hover:text-blue-500 transition-colors duration-300"}>홈</a>
                        <a href={"#about"} className={"hover:text-blue-500 transition-colors"}>소개</a>
                        <a href={"#skills"} className={"hover:text-blue-500 transition-colors"}>기술</a>
                        <a href={"#project"} className={"hover:text-blue-500 transition-colors"}>프로젝트</a>
                        <a href={"#contact"} className={"hover:text-blue-500 transition-colors"}>연락처</a>
                        <button className={"p-2 w-10 h-10 rounded-full bg-gray-200 focus:outline-2 focus:outline-none focus:ring focus:ring-gray-500"}>
                            <i className={"fas fa-moon text-2xl"}></i>
                        </button>
                    </div>
                </nav>
            </header>
            <main className={"bg-gray-300 max-w-4xl mx-auto px-6 py-12"}>
                {/* Home Section */}
                <section className={"bg-red-200 h-60"}></section>

                {/* About Section */}
                <section className={"bg-yellow-200 h-60"}>
                    <h2 className={"text-3xl font-bold mb-6"}>소개</h2>
                </section>
                <section className={"bg-blue-200 h-60"}>
                    <h2 className={"text-3xl font-bold mb-6"}>기술</h2>
                </section>
                <section className={"bg-cyan-200 h-60"}>
                    <h2 className={"text-3xl font-bold mb-6"}>프로젝트</h2>
                </section>
                <section className={"bg-green-200 h-60"}>
                    <h2 className={"text-3xl font-bold mb-6"}>연락처</h2>
                </section>
            </main>
            <footer className={"bg-gray-400 w-full h-20"}></footer>
        </div>
    );
}