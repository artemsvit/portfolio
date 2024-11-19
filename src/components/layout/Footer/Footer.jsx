import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLogo,
  FooterText,
  FooterTitle,
  FooterLink,
  SocialLinks,
  SocialLink
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo to="/">ARTSVIT</FooterLogo>
          <FooterText>
            UX Designer and Developer based in San Francisco. Focused on creating intuitive and impactful digital experiences.
          </FooterText>
          <SocialLinks>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </SocialLink>
            <SocialLink href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              Dribbble
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/cases">Cases</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>
            Feel free to reach out for collaborations or just a friendly hello
          </FooterText>
          <FooterLink as="a" href="mailto:hello@artsvit.design">
            hello@artsvit.design
          </FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
