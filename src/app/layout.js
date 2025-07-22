import "./globals.css";

const preventDarkFlash = `
(function() {
    try {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
    } catch(e) {
        // fail silently
    }
})();
`;

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                />
                <script
                    dangerouslySetInnerHTML={{ __html: preventDarkFlash }}
                />
                <style>
                    {`html { scroll-behavior: smooth; }`}
                    {`[id] { scroll-margin-top: 64px; /* 원하는 여백 값으로 설정 */ }`}
                </style>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
