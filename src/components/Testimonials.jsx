import styled from 'styled-components'

const testimonials = [
    { name: 'James Passaquindici Arcand', role: 'Architecture Consultant, Berlin', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam. Exceptional service and stunning results.' },
    { name: 'Abram Schleifer', role: 'Interior Design Lead', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam. Truly transformed our space beautifully.' },
]

const Section = styled.section`background: ${({ theme }) => theme.offWhite}; padding: 80px 5%;`
const Title = styled.h2`font-family: ${({ theme }) => theme.fontDisplay}; font-size: clamp(1.8rem,3vw,2.4rem); font-weight: 700; text-align: center; margin-bottom: 48px;`
const Grid = styled.div`display: grid; grid-template-columns: repeat(2,1fr); gap: 32px; max-width: 960px; margin: 0 auto 40px; @media (max-width: 640px) { grid-template-columns: 1fr; }`
const Card = styled.div`background: white; border-radius: 6px; padding: 32px; box-shadow: 0 2px 16px rgba(0,0,0,.06);`
const Author = styled.div`display: flex; align-items: center; gap: 16px; margin-bottom: 18px; img { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; }`
const Name = styled.div`font-family: ${({ theme }) => theme.fontDisplay}; font-size: 1.05rem; font-weight: 700;`
const Role = styled.div`font-size: .8rem; color: ${({ theme }) => theme.gray};`
const Text = styled.p`font-size: .9rem; color: ${({ theme }) => theme.gray}; line-height: 1.7;`
const Dots = styled.div`display: flex; justify-content: center; gap: 8px;`
const Dot = styled.span`width: 8px; height: 8px; border-radius: 50%; display: inline-block; background: ${({ $active, theme }) => $active ? theme.teal : theme.lightGray};`

export default function Testimonials() {
    return (
        <Section id="testimonials">
            <Title>Testimonial</Title>
            <Grid>
                {testimonials.map(t => (
                    <Card key={t.name}>
                        <Author>
                            <img src={t.avatar} alt={t.name} />
                            <div><Name>{t.name}</Name><Role>{t.role}</Role></div>
                        </Author>
                        <Text>{t.text}</Text>
                    </Card>
                ))}
            </Grid>
            <Dots><Dot $active /><Dot /><Dot /></Dots>
        </Section>
    )
}