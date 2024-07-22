import "./index.scss";

export default function Committee() {


    interface ICommittees {
        name: string;
        title: string;
        imageURL: string;
    } 

    const committees: ICommittees[] = [
        {
            name: "Mohammad Haidar",
            title: "Senior Researcher at Qubit Pharmaceuticals",
            imageURL: "/committee/mohammad-haidar.jpg"
        },
        {
            name: "Mohammad Haidar",
            title: "Senior Researcher at Qubit Pharmaceuticals",
            imageURL: "/committee/mohammad-haidar.jpg"
        },
        {
            name: "Mohammad Haidar",
            title: "Senior Researcher at Qubit Pharmaceuticals",
            imageURL: "/committee/mohammad-haidar.jpg"
        },
        {
            name: "Mohammad Haidar",
            title: "Senior Researcher at Qubit Pharmaceuticals",
            imageURL: "/committee/mohammad-haidar.jpg"
        },
        {
            name: "Mohammad Haidar",
            title: "Senior Researcher at Qubit Pharmaceuticals",
            imageURL: "/committee/mohammad-haidar.jpg"
        },
        {
            name: "Mohammad Haidar",
            title: "Senior Researcher at Qubit Pharmaceuticals",
            imageURL: "/committee/mohammad-haidar.jpg"
        },
        {
            name: "Mohammad Haidar",
            title: "Senior Researcher at Qubit Pharmaceuticals",
            imageURL: "/committee/mohammad-haidar.jpg"
        },
        {
            name: "Mohammad Haidar",
            title: "Senior Researcher at Qubit Pharmaceuticals",
            imageURL: "/committee/mohammad-haidar.jpg"
        },
    ]

    
  return <div className="committee">
    <div className="committee-title-container">
      <div className="committee-title">
        <h1>Committee</h1>
      </div>
    </div>

    <div className="committee-list">
        {committees.map((committee, index) => {
            return <div className="committee-item" key={committee.name.concat(index.toString())}>
             <div className="comittee-item-content">
                <div className="committee-item-image">
                    <img src={committee.imageURL} alt={committee.name} />
                </div>
                <div className="committee-item-name">
                    <span>{committee.name}</span>
                </div>
                <div className="committee-item-title">
                    <span>{committee.title}</span>
                </div>
             </div>
            </div>
          })}
    </div>
  </div>;
}