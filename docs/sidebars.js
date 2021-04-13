module.exports = {
    docs: [
        {
            type: "category",
            label: "Introduction",
            items: ["getting-started", "quick-start"],
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
                    label: "Components",
                    items: ["suspense-loading", "not-found"],
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
