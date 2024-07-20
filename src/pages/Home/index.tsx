import { Image } from "antd";
import "./index.scss";

export default function Home() {
    const screenWidth = window.innerWidth;

    return (
        <div className="homepage">
            <div className="homepageTitleArea">
                <div
                    style={{ width: screenWidth, maxHeight: "16rem" }}
                    className="imageContainer"
                >
                    <Image
                        src="/homepage/cover-image.jpg"
                        preview={false}
                        width={screenWidth}
                        height={screenWidth / 4}
                        className="homepageCover"
                    />
                </div>

                <span className="homepageTitle">
                    INTRODUCTION AND TRAINNING SESSION
                    <br />
                    TO QUANTUM COMPUTING TECHNOLOGY
                    <br />
                    AND ARTIFICIAL INTELLIGENCE
                </span>
            </div>
        <div className="homepageContent">
            <div className="section">
                <p>This summer school will cover topics in computer science aspects of quantum computing and artificial intelligent.
                VNQSS2025 will take place in  at the International Center for Interdisciplinary Science and Education (ICISE), Quy Nhon city, from July the 4th  to the 15th 2025.</p>
            </div>
            <div className="section">
                <h2>Overview</h2>
                <p>
                    The study of Quantum Computing and Artificial Intelligence
                    has emerged as a major theme of research in computational
                    technology and revolutionised various industries, including
                    healthcare, finance, logistics, and materials science. It is
                    increasingly evident, promising advancements in areas such
                    as drug discovery, cryptography & communication over the
                    last two decades. The proposed school will gather
                    international experts, spanning across disciplines, who will
                    provide a broad overview (with long and short courses
                    alongside workshops) of this rapidly evolving field. The
                    schedule will leave ample room for discussions. A series of
                    advanced seminars, organized in a workshop style with other
                    invited speakers, will complete the program.{" "}
                </p>
            </div>
            <div className="section">
                <h2>Topics</h2>
                <p>
                    Quantum Computing offers a disruptive landscape to
                    High-Performance Computing in Optimized Algorithms to solve
                    problems such as Drug Discovery, Quantum Chemistry. Also,
                    preliminary understanding in quantum technologies using
                    photonic devices or trapped ions techniques is require in
                    the preparation for the NISQ era. This summer school intends
                    to showcase contributions on topics such as:
                </p>
                <ul>
                    <li>Introduction: Quantum Computing</li>
                    <li>Quantum Information Theory </li>
                    <li>Algorithms: Quantum Optimization </li>
                    <li>Foundation in Machine Learning & Artificial
                        Intelligence
                    </li>
                    <li>Harnessing Quantum with the Eviden Qaptiva </li>
                    <li>Quantum computing for Quantum Chemistry </li>
                    <li>
                        Basic for Quantum Technologies using photon / trapped
                        ions
                    </li>
                    <li>Quantum AI / Quantum Machine Learning </li>
                    <li>(Extra) H2 plus ions Beyond Born-Oppenheimer </li>
                </ul>
            </div>
        </div>
            <a href="https://pikbest.com//backgrounds/computer-quantum-computing_9441892.html">
                Free backgrounds from pikbest.com
            </a>
        </div>
    );
}
