export const Footer = () => {
    return (
        <>
            <script src="https://www.googletagmanager.com/gtag/js?id=G-F7JZCKC4V9"></script>
            <script id="google-analytics" dangerouslySetInnerHTML={{__html: 
                `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-F7JZCKC4V9');
            `
            }} />
        </>
    )
}