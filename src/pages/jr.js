import React from 'react'
import logoJunior from '../images/junior.svg'

const JuniorPage = () => (
  <div className="JuniorPage">
    <img src={logoJunior} alt="Suncoast Developers Guild Jr" height="280" />
    <h3>Kids Code Classes</h3>
    <p>Commodo aliquip irure voluptate quis mollit et. Nostrud eiusmod dolor dolor irure amet nisi velit sunt officia dolore proident exercitation officia. Fugiat irure pariatur elit enim duis magna velit cillum eu. Aute Lorem consequat ut esse proident commodo ea. Lorem ipsum amet non consequat proident.</p>
    <div className="row">
      <div className="column">
        <h4>Scratch</h4>
        <p>Officia aliqua veniam incididunt non Lorem ea irure.</p>
      </div>
      <div className="column">
        <h4>HTML & CSS</h4>
        <p>Officia aliqua veniam incididunt non Lorem ea irure.</p>
      </div>
      <div className="column">
        <h4>Javascript</h4>
        <p>Officia aliqua veniam incididunt non Lorem ea irure.</p>
      </div>
    </div>
    <div className="row">
      <h3>Course Overview</h3>
      <p>
        Excepteur voluptate nostrud deserunt mollit est Lorem commodo laborum esse et tempor ullamco. Exercitation irure nostrud eiusmod aliquip ut. Aute non in id duis voluptate. Dolor adipisicing cupidatat ex aliquip amet. Ad aliquip in mollit cupidatat consectetur elit nisi. Enim eu aliqua excepteur exercitation laboris tempor sint. Amet laboris amet sint incididunt ipsum non culpa officia tempor Lorem consequat.
      </p>
      <p>
        Mollit nostrud culpa ut velit exercitation reprehenderit. Aute laboris laborum dolore laboris amet elit cillum do. Tempor tempor commodo est cillum velit officia velit officia. Id duis ad do sunt. Magna qui irure mollit enim sunt laboris mollit aliqua cupidatat aliquip exercitation reprehenderit aliquip sit.
      </p>
    </div>
    {/* <div className="wrap">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScpmdobCYFKEmZsOdzS4To5kTs37zkchijZGh5oZAtKgnQMwg/viewform?embedded=true">
        Loading...
      </iframe>
    </div> */}
  </div>
)

export default JuniorPage
