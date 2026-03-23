import styled from 'styled-components'

const Section = styled.section`padding: 80px 5%; max-width: 700px; margin: 0 auto; text-align: center;`
const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontDisplay}; font-size: clamp(1.8rem,3vw,2.4rem);
  font-weight: 700; margin-bottom: 16px; color: ${({ theme }) => theme.text};
`
const Subtitle = styled.p`color: ${({ theme }) => theme.gray}; margin-bottom: 40px; font-size: .95rem;`
const Row = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`
const inputBase = ({ theme }) => `
  padding: 14px 18px; border: 1.5px solid ${theme.lightGray}; border-radius: 5px;
  font-family: ${theme.fontBody}; font-size: .9rem; outline: none; width: 100%;
  transition: border-color .2s;
  &:focus { border-color: ${theme.teal}; box-shadow: 0 0 0 3px rgba(45,106,106,.1); }
`
const Input = styled.input`${inputBase}`
const Textarea = styled.textarea`${inputBase} resize: vertical; min-height: 120px; margin-bottom: 16px;`
const SendBtn = styled.button`
  width: 100%; padding: 15px; background: ${({ theme }) => theme.teal}; color: white;
  border: none; border-radius: 3px; font-size: .95rem; font-weight: 600;
  transition: background .2s, transform .2s;
  &:hover { background: ${({ theme }) => theme.tealDark}; transform: translateY(-1px); }
`

export default function Contact() {
    return (
        <Section id="contact">
            <Title>Get In Touch</Title>
            <Subtitle>Ready to start your project? We'd love to hear from you.</Subtitle>
            <Row>
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Email Address" />
            </Row>
            <Textarea placeholder="Your message..." />
            <SendBtn>Send Message</SendBtn>
        </Section>
    )
}