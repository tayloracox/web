import React from 'react'
import Img from 'gatsby-image'
import CommunityNavigation from '../../components/CommunityNavigation'
import PageHeading from '../../components/PageHeading'

const CommunityNetworkPage = props => (
  <div className="CommunityPage Network Testimonial">
    <CommunityNavigation />
    <div className="wrap">
      <PageHeading>ProForma Testimonial</PageHeading>
      <div className="blockquote">
        <blockquote className="quote">
          <p>
            <span className="quotation-mark">&quot;</span>
            As the Tampa Bay technology community continues to expand and become
            a center for innovation and software development, the current
            workforce is not keeping pace with the required technical skills and
            the available resources are inadequate to support the demand. When
            Proforma looked to rapidly expand our Technology team, we decided to
            partner with Suncoast Developers Guild to create an integrated
            approach to talent acquisition and skills development essential for
            entry-level employment.
          </p>
          <p>
            The result was an innovative workforce preparedness program that
            provided Proforma with an influx of well-trained talent and provided
            motivated candidates with a valuable educational program that
            guaranteed full time employment upon successful course completion.
          </p>
          <p>
            The Proforma / SDG partnership selected passionate junior level
            candidates and created an intensive training curriculum. This
            customized curriculum would fine tune technology concepts and focus
            on the skillsets necessary to be successful at Proforma.
          </p>
          <p>
            SDG’s core curriculum of modern web development as well as
            full-stack applications was a perfect fit for Proforma. SDG’s
            approach to education is grounded in a solid base of research and
            best practices. Their performance-based learning curriculum guides
            students through an intense 12 week process that demands the mastery
            of concepts in a fast paced environment. The curriculum culminates
            with a final capstone project that will actually be implemented in
            Proforma’s technology.
          </p>
          <p>
            Central to the success of this program was the true partnership that
            developed between Proforma and SDG. Frequent interaction between the
            Proforma technology team, the SDG instructors and the candidates
            created an exceptional learning environment.
          </p>
          <p>
            The partnership allowed for incoming candidates to receive detailed
            exposure to Proforma’s technology stack and receive real world
            experience that is hard to create in a classroom environment. This
            program was extremely successful for SDG, Proforma, the candidates
            and the Tampa Bay technology community at large. Proforma would
            highly recommend the SDG program to anyone looking to further their
            career in the technology field. We also look forward to partnering
            with SDG on many more projects in the future.
            <span className="quotation-mark">&quot;</span>
          </p>
        </blockquote>
        <p className="author">- Proforma</p>
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query TestimonialPageQuery {
    proforma: imageSharp(id: { regex: "/network/proforma/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default CommunityNetworkPage
