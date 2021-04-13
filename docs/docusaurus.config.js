/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "React Router Dom Toolkit",
    tagline: "Useful components and hooks for react-router-dom",
    url: "https://vbdzzz.github.io",
    baseUrl: "/react-router-dom-toolkit/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "vbdzzz",
    projectName: "react-router-dom-toolkit",
    themeConfig: {
        navbar: {
            title: "React Router Dom Toolkit",
            logo: {
                alt: "React Router Dom Toolkit",
                src: "img/logo.svg",
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "right",
                },
                {
                    href: "https://github.com/vbdzzz/react-router-dom-toolkit",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Getting Started",
                            to: "docs/",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href:
                                "https://github.com/vbdzzz/react-router-dom-toolkit",
                        },
                    ],
                },
            ],
            copyright: `Have a nice day!`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/vbdzzz/react-router-dom-toolkit/edit/master/docs/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
