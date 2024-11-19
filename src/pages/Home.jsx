import React from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

// Base styled components
const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.typography.fontFamily.base};
  color: ${props => props.theme.colors.textPrimary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Section = styled.section`
  width: 100%;
  padding: ${props => props.theme.spacing['3xl']} 0;
  background: ${props => props.theme.colors.background};
  overflow: hidden;

  &:nth-child(even) {
    background: ${props => props.theme.colors.backgroundAlt};
  }
`

const SectionContent = styled.div`
  max-width: min(${props => props.theme.containers.content}, 95%);
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 0 ${props => props.theme.spacing.xl};
  }
`

// Hero Section Components
const HeroSection = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 85vh;
  padding: ${props => props.theme.spacing['5xl']} 0;
  background: #000000;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/hero/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    filter: brightness(0.4) contrast(1.2);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: ${props => props.theme.containers.text};
  margin: 0 auto;
`

const Title = styled(motion.h1)`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes['4xl']};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  line-height: ${props => props.theme.typography.lineHeights.tight};
  color: #FFFFFF;
  margin-bottom: ${props => props.theme.spacing.md};
  letter-spacing: -0.015em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSizes['5xl']};
  }
`

const Subtitle = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSizes.lg};
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSizes.xl};
  }
`

// Section Components
const SectionTitle = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes['3xl']};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  line-height: ${props => props.theme.typography.lineHeights.tight};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  text-align: center;
  letter-spacing: -0.015em;
`

// Process Components
const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ProcessCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`

const ProcessIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  position: relative;
  background: ${props => `linear-gradient(to right, ${props.$gradientStart} 0%, ${props.$gradientEnd} 100%)`};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  svg {
    width: 32px;
    height: 32px;
    color: white;
    stroke-width: 2;
  }
`

const ProcessTitle = styled.h3`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes.xl};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.textPrimary};
`

const ProcessDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.typography.lineHeights.relaxed};
`

// Project Components
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
  background: ${props => props.theme.colors.background};
  will-change: transform;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${props => props.theme.spacing.xl};
  z-index: 1;
`

const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes.xl};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  color: white;
  margin-bottom: ${props => props.theme.spacing.xs};
`

const ProjectType = styled.p`
  font-size: ${props => props.theme.typography.fontSizes.md};
  color: rgba(255, 255, 255, 0.9);
`

// CTA Components
const CTASection = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.spacing['3xl']};
`

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.accent};
  color: #FFFFFF;
  font-size: ${props => props.theme.typography.fontSizes.base};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  border-radius: ${props => props.theme.borderRadius.full};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: ${props => props.theme.colors.linkHover};
    transform: translateY(-2px);
    color: #FFFFFF;
  }
`

// Component Implementation
const Home = () => {
  const processSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      gradientStart: '#FF0844',
      gradientEnd: '#FFB199',
      title: 'Research & Discovery',
      description: 'Deep dive into user needs, market analysis, and competitive research'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      gradientStart: '#7F00FF',
      gradientEnd: '#E100FF',
      title: 'Ideation & Strategy',
      description: 'Creative problem-solving and strategic planning for optimal solutions'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      gradientStart: '#0093E9',
      gradientEnd: '#80D0C7',
      title: 'Design & Prototype',
      description: 'Creating wireframes, visual designs, and interactive prototypes'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      gradientStart: '#08AEEA',
      gradientEnd: '#2AF598',
      title: 'Development',
      description: 'Transforming designs into responsive and performant code'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      gradientStart: '#FF3CAC',
      gradientEnd: '#784BA0',
      title: 'Testing & Feedback',
      description: 'Gathering user feedback and making iterative improvements'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      gradientStart: '#F857A6',
      gradientEnd: '#FF5858',
      title: 'Launch & Growth',
      description: 'Successful deployment and ongoing optimization for growth'
    }
  ];

  const projects = [
    {
      title: "Codeium AI - Developer Tool",
      type: "Product Design",
      image: "/images/projects/codeium.jpg",
      link: "/cases"
    },
    {
      title: "Windsurf IDE - Code Editor",
      type: "UI/UX Design",
      image: "/images/projects/windsurf.jpg",
      link: "/cases"
    },
    {
      title: "Tesla Mobile App Concept",
      type: "Mobile Design",
      image: "/images/projects/tesla.jpg",
      link: "/cases"
    }
  ]

  return (
    <HomeContainer>
      <HeroSection>
        <SectionContent>
          <HeroContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>
              Artem Svitelskyi
            </Title>
            <Subtitle>
              UI/UX Designer & Creative Developer
            </Subtitle>
            <Subtitle>
              Transforming Ideas into Seamless Digital Experiences
            </Subtitle>
          </HeroContent>
        </SectionContent>
      </HeroSection>

      <Section>
        <SectionContent>
          <SectionTitle>My Design Process</SectionTitle>
          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <ProcessIcon 
                  $gradientStart={step.gradientStart} 
                  $gradientEnd={step.gradientEnd}
                >
                  {step.icon}
                </ProcessIcon>
                <ProcessTitle>{step.title}</ProcessTitle>
                <ProcessDescription>{step.description}</ProcessDescription>
              </ProcessCard>
            ))}
          </ProcessGrid>

          <SectionTitle>Featured Cases</SectionTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                as={Link}
                to={project.link}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <ProjectImage image={project.image} />
                <ProjectOverlay>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectType>{project.type}</ProjectType>
                </ProjectOverlay>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          <CTASection>
            <CTAButton to="/cases">
              View All Cases
            </CTAButton>
          </CTASection>
        </SectionContent>
      </Section>
    </HomeContainer>
  )
}

export default Home
