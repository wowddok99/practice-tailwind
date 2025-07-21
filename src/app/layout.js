import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                />
                <style>
                    {`html { scroll-behavior: smooth; }`}
                </style>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
