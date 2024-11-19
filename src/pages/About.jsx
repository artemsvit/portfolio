import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: ${props => props.theme.spacing.xl};
  padding-top: calc(80px + ${props => props.theme.spacing.xl});
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.typography.fontFamily.base};
  color: ${props => props.theme.colors.textPrimary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Section = styled.section`
  width: 100%;
  padding: ${props => props.theme.spacing['2xl']} 0;
  background: ${props => props.theme.colors.background};
  overflow: hidden;

  &:nth-child(even) {
    background: ${props => props.theme.colors.backgroundAlt};
  }
`

const TopSection = styled(Section)`
  padding-top: 0;
`

const SectionContent = styled.div`
  max-width: min(${props => props.theme.containers.content}, 95%);
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 0 ${props => props.theme.spacing.xl};
  }
`

const TopSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing['2xl']};
  align-items: start;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 0.8fr 1.2fr;
    gap: ${props => props.theme.spacing['4xl']};
  }
`

const ProfileImage = styled(motion.div)`
  position: relative;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  aspect-ratio: 3/4;
  box-shadow: ${props => props.theme.shadows.lg};
  margin-bottom: ${props => props.theme.spacing.xl};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
  text-align: ${props => props.$center ? 'center' : 'left'};
`

const Subtitle = styled(motion.h2)`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes['2xl']};
  font-weight: ${props => props.theme.typography.fontWeights.regular};
  line-height: ${props => props.theme.typography.lineHeights.base};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: ${props => props.theme.containers.text};
`

const Text = styled(motion.p)`
  font-size: ${props => props.theme.typography.fontSizes.lg};
  line-height: ${props => props.theme.typography.lineHeights.relaxed};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: ${props => props.theme.containers.text};
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing['2xl']};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SkillIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  background: ${props => `linear-gradient(to right, ${props.$gradientStart} 0%, ${props.$gradientEnd} 100%)`};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  svg {
    width: 32px;
    height: 32px;
    color: white;
    stroke-width: 2;
  }
`

const SkillCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`

const SkillTitle = styled.h3`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes.xl};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.md};
`

const SkillDescription = styled.p`
  font-size: ${props => props.theme.typography.fontSizes.base};
  line-height: ${props => props.theme.typography.lineHeights.relaxed};
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
`

const About = () => {
  const skills = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      gradientStart: '#FF0844',
      gradientEnd: '#FFB199',
      title: 'UX Design',
      description: 'Creating intuitive and engaging user experiences through research, wireframing, and prototyping.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      gradientStart: '#7F00FF',
      gradientEnd: '#E100FF',
      title: 'UI Design',
      description: 'Crafting beautiful and functional interfaces with a focus on consistency and accessibility.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      gradientStart: '#0093E9',
      gradientEnd: '#80D0C7',
      title: 'Frontend Development',
      description: 'Building responsive and performant web applications using modern frameworks and technologies.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
        </svg>
      ),
      gradientStart: '#08AEEA',
      gradientEnd: '#2AF598',
      title: 'Design Systems',
      description: 'Developing and maintaining scalable design systems for consistent brand experiences.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      gradientStart: '#FF3CAC',
      gradientEnd: '#784BA0',
      title: 'Motion Design',
      description: 'Adding life to interfaces through thoughtful animations and micro-interactions.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      gradientStart: '#F857A6',
      gradientEnd: '#FF5858',
      title: 'Product Strategy',
      description: 'Aligning design solutions with business goals and user needs for maximum impact.'
    }
  ];

  return (
    <AboutContainer>
      <TopSection>
        <SectionContent>
          <TopSectionGrid>
            <ProfileImage
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/about/profile.jpg" alt="Artem Svitelskyi" />
            </ProfileImage>
            <AboutContent
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title>About Me</Title>
              <Subtitle>
                I'm a UX Designer and Creative Developer based in San Francisco, focused on creating intuitive and impactful digital experiences.
              </Subtitle>
              <Text>
                With over 5 years of experience in digital product design, I've had the privilege of working with startups and established companies alike. My approach combines strategic thinking with hands-on execution, ensuring that every project not only looks beautiful but also delivers real value to users and businesses.
              </Text>
              <Text>
                I believe in the power of design to solve complex problems and create meaningful connections. Whether it's crafting a new product from scratch or improving an existing one, I'm always excited to take on new challenges and push the boundaries of what's possible.
              </Text>
            </AboutContent>
          </TopSectionGrid>
        </SectionContent>
      </TopSection>

      <Section>
        <SectionContent>
          <Title as="h2" $center>Skills & Expertise</Title>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillIcon 
                  $gradientStart={skill.gradientStart} 
                  $gradientEnd={skill.gradientEnd}
                >
                  {skill.icon}
                </SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SectionContent>
      </Section>
    </AboutContainer>
  )
}

export default About
