import styled from 'styled-components'

const Section = styled.section`padding: 0;`
const Inner = styled.div`padding: 90px 5%; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; max-width: 1200px; margin: 0 auto; @media (max-width: 900px) { grid-template-columns: 1fr; gap: 40px; }`
const ImgWrapper = styled.div`border-radius: 6px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,.12); img { width: 100%; height: 380px; object-fit: cover; }`
const TextSide = styled.div`
  h2 { font-family: ${({ theme }) => theme.fontDisplay}; font-size: clamp(2rem,3.5vw,2.8rem); font-weight: 700; margin-bottom: 24px; }
  p  { color: ${({ theme }) => theme.gray}; line-height: 1.8; margin-bottom: 28px; font-size: .95rem; }
`
const ReadMore = styled.a`
  font-weight: 600; color: ${({ theme }) => theme.text};
  border-bottom: 2px solid ${({ theme }) => theme.teal}; padding-bottom: 2px; font-size: .9rem; transition: color .2s;
  &:hover { color: ${({ theme }) => theme.teal}; }
`

export default function About() {
    return (
        <Section id="about">
            <Inner>
                <ImgWrapper>
                    <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80" alt="Floor Plan" />
                </ImgWrapper>
                <TextSide>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum.</p>
                    <p>We are dedicated to creating exceptional architectural experiences that stand the test of time, combining innovative design with sustainable practices.</p>
                    <ReadMore href="#">Read more</ReadMore>
                </TextSide>
            </Inner>
        </Section>
    )
}