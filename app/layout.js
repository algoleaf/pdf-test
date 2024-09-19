import './globals.css';

export const viewport = {
    width: 'device-width',
    height: 'device-height',
    initialScale: 1,
    maximumScale: 1,
};

export default async function RootLayout({children}) {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
};