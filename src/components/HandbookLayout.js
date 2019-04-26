import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import Layout from './Layout'
import Container from './Container'
import Section from './Section'
import PageTitle from './PageTitle'
import Code from './Code'
import Link from './UniversalLink'

const Units = [
  {
    name: 'Pre-work',
    link: 'prework',
    lessons: [],
  },
  {
    name: 'Fundamentals',
    link: 'curriculum/fundamentals',
    lessons: [
      {
        name: 'Intro To HTML',
        link: 'intro-to-html',
      },
      {
        name: 'Intro To CSS',
        link: 'intro-to-css',
      },
      {
        name: 'CSS Layout',
        link: 'css-layout',
      },
      {
        name: 'Intro to Responsive Web',
        link: 'intro-to-responsive',
      },
    ],
  },
  {
    name: 'Front-end',
    link: 'curriculum/front-end',
    lessons: [],
  },
  {
    name: 'Full-stack',
    link: 'curriculum/back-end',
    lessons: [],
  },
]

const HandbookLayout = ({ children }) => (
  <div className="handbook">
    <Layout>
      <Section>
        <Container>
          <MDXProvider
            components={{
              a: Link,
              h1: ({ children, ...rest }) => <PageTitle>{children}</PageTitle>,
              h2: ({ children, ...rest }) => (
                <h3 className="title is-3" {...rest}>
                  {children}
                </h3>
              ),
              h3: ({ children, ...rest }) => (
                <h4 className="title is-4" {...rest}>
                  {children}
                </h4>
              ),
              h4: ({ children, ...rest }) => (
                <h5 className="title is-5" {...rest}>
                  {children}
                </h5>
              ),
              h5: ({ children, ...rest }) => (
                <h6 className="title is-6" {...rest}>
                  {children}
                </h6>
              ),
              pre: props => {
                const preProps = preToCodeBlock(props)
                if (preProps) {
                  return <Code {...preProps} />
                } else {
                  return <pre {...props} />
                }
              },
            }}
          >
            <div className="columns">
              <div className="column is-one-fifth">
                <aside className="menu">
                  <p className="menu-label">Handbook</p>
                  <ul className="menu-list">
                    <li>
                      <Link
                        to="/handbook/curriculum"
                        activeClassName="is-active"
                      >
                        Curriculum
                      </Link>
                      <ul>
                        {Units.map(unit => (
                          <li key={unit.link}>
                            <Link
                              to={`/handbook/${unit.link}`}
                              activeClassName="is-active"
                            >
                              {unit.name}
                            </Link>
                            <ul>
                              {unit.lessons.map(lesson => (
                                <li key={lesson.link}>
                                  <Link
                                    partiallyActive
                                    to={`/handbook/${unit.link}/lessons/${
                                      lesson.link
                                    }`}
                                    activeClassName="is-active"
                                  >
                                    {lesson.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link to="/handbook/career" activeClassName="is-active">
                        Career Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/handbook/campus" activeClassName="is-active">
                        Our Campus
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/handbook/resources"
                        activeClassName="is-active"
                      >
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link to="/handbook/skills" activeClassName="is-active">
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link to="/handbook/tools" activeClassName="is-active">
                        Tools
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="column is-four-fifths">
                <article className="message is-primary">
                  <div className="message-body">
                    <strong>Note</strong>: This document is a{' '}
                    <em>work in progress</em>. You can help{' '}
                    <Link href="https://github.com/suncoast-devs/handbook">
                      improve it
                    </Link>
                    .
                  </div>
                </article>
                <div className="content">{children}</div>
              </div>
            </div>
          </MDXProvider>
        </Container>
      </Section>
    </Layout>
  </div>
)

export default HandbookLayout
