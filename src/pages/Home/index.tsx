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
                    INTRODUCTION TO QUANTUM COMPUTING 
                    <br />
                    AND ARTIFICIAL INTELLIGENCE TECHNOLOGY:
                    <br />
                    TRAINING SESSION AND WORKSHOPS 
                </span>
            </div>
            <div className="homepageContent">
                <div className="section">
                    <h2>Overview</h2>
                    <p>
                        The study of Quantum Computing and Artificial Intelligence has emerged as a major theme of research in computational technology, and revolutionised various industries, including healthcare, finance, logistics, and material sciences. It is increasingly evident, promising advancements in areas such as drug discovery, cryptography & communication over the last two decades. The proposed school is gathering international professors and engineers, who are experts in several fields, including Quantum Information Theory, Machine Learning, Quantum Computing applications in Chemistry and Physics. Bachelor, master and PhD students are warmly welcome to join our school. Interesting sessions, workshops, video sessions and training presentation for each student will be granted. The schedule will leave ample room for discussions. A more detailed description about the program will be detailed as below
                    </p>
                </div>
                <div className="section">
                    <h2>Topics</h2>
                    <p>
                        Quantum Computing offers a disruptive landscape to High-Performance Computing in Optimized Algorithms to solve problems such as Drug Discovery, Quantum Chemistry. Also, preliminary understanding in quantum technologies using photonic devices or trapped ions techniques is require in the preparation for the NISQ era. This summer school intends to showcase contributions on topics such as:
                    </p>
                    <ul>
                        <li>Introduction: Quantum Computing</li>
                        <li>Quantum Information Theory</li>
                        <li>Algorithms: Quantum Optimization</li>
                        <li>Foundation in Machine Learning & Artificial Intelligence</li>
                        <li>Harnessing Quantum with the Eviden Qaptiva</li>
                        <li>Quantum computing for Quantum Chemistry</li>
                        <li>Basic for Quantum Technologies using photon / trapped ions</li>
                        <li>Quantum AI / Quantum Machine Learning</li>
                        <li>(Extra) H2 plus ions Beyond Born-Oppenheimer</li>
                    </ul>
                </div>
                <div className="section">
                    <h2>Location</h2>
                    <p>
                        This summer school will cover topics in computer science aspects of quantum computing and artificial intelligent.
                        VNQSS2025 will take place in at the International Center for Interdisciplinary Science and Education (ICISE), Quy Nhon city, from July the 4th to the 15th 2025.
                    </p>
                    <div className="map-container">
                        <iframe
                            title="ICISE Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.064701903847!2d109.21964271535888!3d13.782964490327888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314b7b4978e3b6d7%3A0x4257f2fddf133ea5!2sInternational%20Center%20for%20Interdisciplinary%20Science%20and%20Education%20(ICISE)!5e0!3m2!1sen!2s!4v1620461755393!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
            <a href="https://pikbest.com//backgrounds/computer-quantum-computing_9441892.html">
                Free backgrounds from pikbest.com
            </a>
        </div>
    );
}
