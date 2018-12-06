import React from 'react'
import Tab from '../../components/Tab'
import AcademyNavigation from '../../components/AcademyNavigation'
import PageHeading from '../../components/PageHeading'

const AcademyPage = () => (
  <div className="AcademyPage">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Web Development Program</PageHeading>
      <ul className="tabs">
        <Tab to="/academy">Our Curriculum</Tab>
        <Tab to="/academy/catalog">Program Catalog</Tab>
        <Tab to="/academy/schedule">Daily Schedule</Tab>
        <Tab to="/academy/career">Career Services</Tab>
      </ul>

      <h3>Career Services</h3>

      <p>
        Career support services are including, but not limited to, the
        following:
      </p>
      <ul>
        <li>
          Curriculum including lectures, mentoring, and coaching on interview
          techniques, decoding technical job descriptions, resume writing
          workshops, and portfolio building.
        </li>
        <li>
          Hosted Demo Day events, inviting potential employers, advisory board
          members, and community leaders to showcase the skills and work done by
          recent graduates.
        </li>
        <li>
          Host guest lectures from community leaders on topics that add to and
          enhance the core program content.
        </li>
        <li>
          The school maintains a “reverse job board”, used by local employers
          and hiring partners that lists graduates and alumni who are seeking
          employment.
        </li>
      </ul>

      <p>
        Students are also encouraged to participate and attend developer dozens
        of community events hosted on campus and around town during their time
        in the program. Relationships formed at these events often lay the seeds
        for future employment opportunities.
      </p>

      <p className="note">
        While every effort is made by our team to prepare students for their
        first job as a junior web developer, and to connect them with employers
        and hiring partners through relationships our staff and faculty have
        built in the community, the institution does not guarantee employment.
      </p>
    </div>
  </div>
)

export default AcademyPage
