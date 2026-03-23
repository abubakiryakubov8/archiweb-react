import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterEl = styled.footer`
  background: ${({ theme }) => theme.footer};
  color: rgba(255,255,255,.75); padding: 60px 5% 30px;
`
const Grid = styled.div`
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 40px;
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`
const FooterLogo = styled.div`
  font-family: ${({ theme }) => theme.fontDisplay}; font-size: 1.3rem; font-weight: 700; color: white; margin-bottom: 14px;
`
const AboutText = styled.p`font-size: .85rem; line-height: 1.7; margin-bottom: 20px;`
const SocialLinks = styled.div`
  display: flex; gap: 14px;
  a { color: rgba(255,255,255,.6); transition: color .2s; display: flex; align-items: center; &:hover { color: white; } }
`
const Col = styled.div`
  h4 { font-size: .85rem; font-weight: 700; color: white; margin-bottom: 16px; letter-spacing: .5px; text-transform: uppercase; }
  a, p { display: block; font-size: .82rem; color: rgba(255,255,255,.6); margin-bottom: 8px; transition: color .2s; &:hover { color: white; } }
`
const MapPlaceholder = styled.div`
  width: 100%; height: 100px; border-radius: 4px; background: #2d4a4a;
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.4); font-size: .8rem; margin-bottom: 10px;
`
const Bottom = styled.div`
  border-top: 1px solid rgba(255,255,255,.1); padding-top: 24px;
  text-align: center; font-size: .8rem; color: rgba(255,255,255,.4);
`

export default function Footer() {
    return (
        <FooterEl>
            <Grid>
                <div>
                    <FooterLogo>ArchiWeb</FooterLogo>
                    <AboutText>ArchiWeb is an architecture consultant based in Berlin, Germany. We provide solutions for your architecture and residential design.</AboutText>
                    <SocialLinks>
                        <a href="#" aria-label="Facebook"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                        <a href="#" aria-label="Twitter"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>
                        <a href="#" aria-label="Instagram"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                    </SocialLinks>
                </div>
                <Col>
                    <h4>Articles</h4>
                    <a href="#">7 Tips for Kids Friendly Interior Design</a>
                    <a href="#">Smart Tips for Changing a Room</a>
                    <a href="#">Eco-friendly design</a>
                </Col>
                <Col>
                    <h4>Links</h4>
                    <Link to="/">Home</Link>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <Link to="/login">Login</Link>
                </Col>
                <Col>
                    <h4>Location</h4>
                    <MapPlaceholder>📍 Berlin, Germany</MapPlaceholder>
                </Col>
            </Grid>
            <Bottom>© 2026 ArchiWeb. All rights reserved.</Bottom>
        </FooterEl>
    )
}