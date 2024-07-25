import { Image } from "antd";
import "./index.scss";

export default function Program() {
  const screenWidth = window.innerWidth;

  return (
    <div className="program">
      <div className="program-title-container">
        <Image
          src="/program/cover-image.jpg"
          preview={false}
          width={screenWidth}
          height={screenWidth / 4}
          className="programCover"
        />
        <div className="program-title">
          <h1>Program</h1>
        </div>
      </div>
      <div className="program-content">
        <div className="calendar">
          <h2>Schedule</h2>
          <ul>
            <li className="date">
              <strong>Monday, 26th July 2025</strong>
            </li>
            <li className="section-header">
              <strong>Morning</strong>
            </li>
            <li className="event-item">
              <strong>9:00 AM - 10:00 AM:</strong> Opening Remarks
            </li>
            <li className="event-item">
              <strong>10:00 AM - 12:00 AM:</strong> Introduction to Quantum Computinng - <em>Name 1</em>
            </li>
            <li className="event-item">
              <strong>12:15 PM - 1:45 PM:</strong> Lunch Break
            </li>
            <li className="section-header">
              <strong>Afternoon</strong>
            </li>
            <li className="event-item">
              <strong>2:00 PM - 4:00 PM:</strong> Basic for Quantum Technologies using photon / trapped ions - <em>Christophe Couteau</em>
            </li>

            <li className="date">
              <strong>Tuesday, 27th July 2025</strong>
            </li>
            <li className="section-header">
              <strong>Morning</strong>
            </li>
            <li className="event-item">
              <strong>9:00 AM - 11:00 AM:</strong> Introduction to Artificial Intelligent -  <em>Name 1</em>
            </li>
            <li className="event-item">
              <strong>11:00 AM - 11:20 AM:</strong> Coffee break
            </li>
            <li className="event-item">
              <strong>11:30 PM - 12:00 PM:</strong> General Application of AI 
            </li>
            <li className="event-item">
              <strong>12:15 PM - 1:45 PM:</strong> Lunch Break
            </li>
            <li className="section-header">
              <strong>Afternoon</strong>
            </li>
            <li className="event-item">
              <strong>2:00 PM - 4:00 PM:</strong> Machine Learning and Deep Learning  - <em>Ta Anh Phuong</em>
            </li>
            <li className="event-item">
              <strong>4:00 PM - 4:30 PM:</strong> Coffee break  
            </li>
            <li className="event-item">
              <strong>4:40 PM - 5:40 PM:</strong> Training Presentation Student 
            </li>

            <li className="date">
              <strong> Wednesday, 28th July 2025</strong>
            </li>
            <li className="section-header">
              <strong>Morning</strong>
            </li>
            <li className="event-item">
              <strong>9:00 AM - 11:00 AM:</strong> Quantum Computing for Quantum Chemistry -  <em>Mohammad Haidar</em>
            </li>
            <li className="event-item">
              <strong>11:00 AM - 11:20 AM:</strong> Coffee break
            </li>
            <li className="event-item">
              <strong>11:30 PM - 12:30 PM:</strong> Industry session: Quantum Chemistry Applications : Drug Discovery
            </li>
            <li className="event-item">
              <strong>12:15 PM - 1:45 PM:</strong> Lunch Break
            </li>
            <li className="section-header">
              <strong>Afternoon</strong>
            </li>
            <li className="event-item">
              <strong>2:00 PM - 4:00 PM:</strong> Quantum AI / Quantum Machine Learning  - <em>Name 2</em>
            </li>
            <li className="event-item">
              <strong>4:00 PM - 4:30 PM:</strong> Coffee break  
            </li>
            <li className="event-item">
              <strong>4:40 PM - 5:40 PM:</strong> Training Presentation Student 
            </li>

            <li className="date">
              <strong> Thursday, 29th July 2025</strong>
            </li>
            <li className="section-header">
              <strong>Morning</strong>
            </li>
            <li className="event-item">
              <strong>9:00 AM - 11:00 AM:</strong> Tutorial: the Qaptiva platform -  <em>Thomas Ayral</em>
            </li>
            <li className="event-item">
              <strong>11:00 AM - 11:20 AM:</strong> Coffee break
            </li>
            <li className="event-item">
              <strong>11:30 PM - 12:30 PM:</strong> Quantum Simulation Physics - <em>Baptise</em>
            </li>
            <li className="event-item">
              <strong>12:15 PM - 1:45 PM:</strong> Lunch Break
            </li>
            <li className="section-header">
              <strong>Afternoon</strong>
            </li>
            <li className="event-item">
              <strong>2:00 PM - 3:30 PM:</strong> Implementation Quantum Algorithm: OpenVQE package (part 1)
            </li>
            <li className="event-item">
              <strong>3:30 PM - 3:50 PM:</strong> Coffee break  
            </li>
            <li className="event-item">
              <strong>4:00 PM - 5:40 PM:</strong> Implementation Quantum Algorithm: OpenVQE package (part 2) 
            </li>

            <li className="date">
              <strong> Friday, 30th July 2025</strong>
            </li>
            <li className="section-header">
              <strong>Morning</strong>
            </li>
            <li className="event-item">
              <strong>9:00 AM - 10:30 AM:</strong> Quantum Computing: Matrix Product State -  <em>Siwar Badreddine</em>
            </li>
            <li className="event-item">
              <strong>10:30 AM - 11:00 AM:</strong> Coffee break
            </li>
            <li className="event-item">
              <strong>11:00 PM - 12:30 PM:</strong> Quantum Computing: Beyond Born-Oppenheimer - <em>JP Karr</em>
            </li>
            <li className="event-item">
              <strong>12:45 PM - 1:45 PM:</strong> Lunch Break
            </li>
            <li className="section-header">
              <strong>Afternoon</strong>
            </li>
            <li className="event-item">
              <strong>2:10 PM - 4:30 PM:</strong> Closing Event
            </li>


            

          </ul>
        </div>
        <div className="session">
          <h2>Quantum Computing for Quantum Chemistry</h2>
          <p>
            <u>Speaker</u>: <strong>Mohammad Haidar</strong>
          </p>
          <p>
            Quantum Chemistry (QC) is one of the most promising applications of Quantum Computing. However, present quantum processing units (QPUs) are still subject to large errors. Therefore, noisy intermediate-scale quantum (NISQ) hardware is limited in terms of qubits counts and circuit depths. Specific algorithms such as Variational Quantum Eigensolvers (VQEs) can potentially overcome such issues.
          </p>
        </div>

        <div className="session">
          <h2>Harnessing Quantum with the Eviden Qaptiva</h2>
          <p>
            <u>Speaker</u>: <strong>Thomas Ayral</strong>
          </p>
          <p>
            The curse of dimensionality associated with the Hilbert space of many-body systems provides a significant obstruction to the study of condensed matter systems. Tensor networks are a notation and set of techniques that have proven an important tool in overcoming this difficulty, both in the numerical and theoretical regimes. At their core, tensor networks can be seen as a generalisation and extension of standard linear algebra. Thus, while originally conceived of in the context of condensed matter simulations, tensor networks have seen use in many other areas such as quantum information, quantum gravity, machine learning, and error correction, just to name a few. In these lectures I will cover the basics of the notation and theory behind tensor networks, and cover some of their most important applications thereof.
          </p>
        </div>

        <div className="session">
          <h2>Basic for Quantum Technologies using photon / trapped ions</h2>
          <p>
            <u>Speaker</u>: <strong>Christophe Couteau</strong>
          </p>
          <p>
            After a brief introduction to bosonic systems, I will explain how they can be used to construct error-correcting codes, known as bosonic codes. I will compare them with the more traditional multi-qubit codes. I will then present in details several examples of single-mode codes (GKP, Cat...) and figures of merit to assess their performance. The rest of the talk will be devoted to multimode codes.
          </p>
        </div>

        <div className="session">
          <h2>Quantum AI / Quantum Machine Learning</h2>
          <p>
            <u>Speaker</u>: <strong>Anh Phuong Ta</strong>
          </p>
          <p>
            This tutorial will consist of three lectures. The first lecture will cover the basics of representation theory of finite groups: irreducible representations, their characters, and Schur's Lemma. We will also discuss the non-abelian Fourier transform and its application to the hidden subgroup problem. The second lecture will cover Schur-Weyl duality. In particular, we will discuss the representation theory of the unitary and symmetric groups, and introduce the quantum Schur transform. The third lecture will cover various applications of representation theory in quantum computing, such as weak Schur sampling, spectrum estimation, and tomography.
          </p>
        </div>

        <div className="session">
          <h2>H2 plus ions Beyond Born-Oppenheimer</h2>
          <p>
            <u>Speaker</u>: <strong>Karr Jean-Phillipe</strong>
          </p>
          <p>TBD</p>
        </div>
      </div>
    </div>
  );
}
