import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: ${props => props.theme.spacing.xl};
  padding-top: calc(80px + ${props => props.theme.spacing.xl});
  max-width: 1400px;
  margin: 0 auto;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
  text-align: center;
`

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing['2xl']};
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['3xl']};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.backgroundAlt};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
`

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.primary};
`

const Input = styled.input`
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  color: ${props => props.theme.colors.textPrimary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.accent}33;
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`

const Button = styled(motion.button)`
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.theme.colors.accent}66;
  }
`

const FormMessage = styled.div`
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.9rem;
  margin-top: ${props => props.theme.spacing.md};
  
  ${props => props.type === 'success' && `
    background: ${props.theme.colors.success}22;
    color: ${props.theme.colors.success};
  `}
  
  ${props => props.type === 'error' && `
    background: ${props.theme.colors.error}22;
    color: ${props.theme.colors.error};
  `}
`

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.backgroundAlt};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
`

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.primary};
`

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};

  svg {
    width: 24px;
    color: ${props => props.theme.colors.accent};
  }
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.xl};
`

const SocialLink = styled(motion.a)`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  transition: all 0.3s ease;

  svg {
    width: 24px;
    color: ${props => props.theme.colors.accent};
  }

  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: translateX(4px);
  }
`

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
  background: ${props => props.theme.colors.backgroundAlt};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 1;
  }
`

const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
`

const LocationPin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.colors.accent};
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`

const Contact = () => {
  const formRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setMessage({
          type: 'success',
          text: 'Thank you for your message! I will get back to you soon.'
        })
        formRef.current.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Sorry, something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Work Together
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </Subtitle>
      
      <ContentWrapper>
        <ContactForm
          ref={formRef}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          <FormTitle>Send Me a Message</FormTitle>
          <Input 
            type="text" 
            name="user_name"
            placeholder="Your Name" 
            required 
          />
          <Input 
            type="email" 
            name="user_email"
            placeholder="Your Email" 
            required 
          />
          <Input 
            type="text" 
            name="subject"
            placeholder="Subject" 
            required 
          />
          <TextArea 
            name="message"
            placeholder="Your Message" 
            required 
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {message && (
            <FormMessage type={message.type}>
              {message.text}
            </FormMessage>
          )}
        </ContactForm>

        <ContactInfo
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <InfoTitle>Contact Information</InfoTitle>
          
          <InfoItem>
            <span>🇺🇦 Kyiv, Ukraine</span>
          </InfoItem>

          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/in/artsvit/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </SocialLink>

            <SocialLink
              href="https://www.behance.net/artsvit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .619-.141 1.137-.421 1.551-.284.415-.7.747-1.25.995.749.219 1.303.621 1.661 1.216.359.593.538 1.309.538 2.145 0 .609-.108 1.139-.325 1.587-.219.449-.526.819-.915 1.109-.391.289-.853.5-1.389.637-.535.137-1.111.205-1.727.205H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707-.103-.187-.245-.332-.421-.437-.181-.103-.375-.176-.579-.215-.207-.041-.419-.061-.635-.061H4.71v2.884h2.742zm.151 5.239c.267 0 .519-.027.759-.083.237-.053.446-.137.621-.249.176-.115.317-.27.421-.469.103-.196.156-.439.156-.727 0-.576-.177-1.015-.527-1.311-.351-.299-.847-.449-1.481-.449H4.71v3.288h2.893zm8.565-.041c.367.358.896.538 1.584.538.493 0 .919-.125 1.278-.373.354-.249.57-.515.653-.799h2.155c-.346 1.072-.871 1.838-1.589 2.299-.709.463-1.572.693-2.58.693-.702 0-1.334-.113-1.9-.341-.567-.227-1.041-.544-1.439-.951-.389-.407-.69-.897-.897-1.471-.201-.571-.305-1.195-.305-1.869 0-.658.104-1.271.311-1.84.208-.567.504-1.057.889-1.47.385-.411.857-.733 1.406-.961.549-.228 1.165-.343 1.847-.343.737 0 1.387.134 1.947.403.563.271 1.023.635 1.383 1.095.357.458.621.995.791 1.607.169.615.239 1.269.215 1.965h-6.428c.041.619.231 1.174.571 1.527zm2.749-4.243c-.313-.307-.789-.453-1.414-.453-.389 0-.718.075-.986.225-.271.15-.487.336-.653.559-.167.222-.279.458-.336.703-.058.244-.091.452-.091.607h4.281c-.062-.607-.279-1.104-.801-1.641zm-3.15-4.525h5.251v1.271h-5.251V7.133z"/>
              </svg>
              <span>Behance</span>
            </SocialLink>

            <SocialLink
              href="https://dribbble.com/artsvit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.903 53.903 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"/>
              </svg>
              <span>Dribbble</span>
            </SocialLink>
          </SocialLinks>

          <InfoItem>
            <FontAwesomeIcon icon={faClock} />
            <span>Mon - Fri: 9:00 - 19:00</span>
          </InfoItem>
        </ContactInfo>
      </ContentWrapper>

      <MapContainer>
        <img 
          src={`${import.meta.env.BASE_URL}images/map.png`} 
          alt="Location Map"
        />
        <MapOverlay />
        <LocationPin>
          <FontAwesomeIcon icon={faLocationDot} />
        </LocationPin>
      </MapContainer>
    </ContactContainer>
  )
}

export default Contact
