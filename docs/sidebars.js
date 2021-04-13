module.exports = {
    docs: [
        {
            type: "category",
            label: "Introduction",
            items: ["getting-started"],
        },
        {
            type: "category",
            label: "API Reference",
            items: [
                {
                    type: "category",
                    label: "Core",
                    items: ["map-routes"],
                },
                {
                    type: "category",
                    label: "Hooks",
                    items: [
                        "use-scroll-to-top",
                        "use-title",
                        "use-parameter",
                        "use-number-parameter",
                    ],
                },
                {
                    type: "category",
                    label: "Interfaces",
                    items: ["i-routes", "i-route"],
                },
            ],
        },
    ],
};
