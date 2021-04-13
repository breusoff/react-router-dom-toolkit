import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title="Documentation"
            description="Useful components and hooks for react-router-dom"
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <img
                        src={useBaseUrl("img/logo.svg")}
                        className={styles.heroLogo}
                        alt=""
                    />
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                "button button--outline button--secondary button--lg",
                                styles.getStarted,
                            )}
                            to={useBaseUrl("docs/")}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className={clsx("row", styles.features)}>
                        <div className="col">
                            <h2>Simple</h2>
                            <p>
                                Includes utilities to simplify common use cases
                                like{" "}
                                <b>
                                    routes mapping, loading, 404 pages, scroll
                                    restoring, title setting
                                </b>{" "}
                                and more.
                            </p>
                        </div>
                        <div className="col">
                            <h2>Opinionated</h2>
                            <p>
                                Provides good defaults for routing setup out of
                                the box, and includes the most commonly used
                                patterns
                            </p>
                        </div>
                        <div className="col">
                            <h2>Effective</h2>
                            <p>
                                Lets you focus on the core logic your app needs,
                                so you can do more work with less code.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
