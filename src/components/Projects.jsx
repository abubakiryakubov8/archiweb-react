import { useState } from 'react'
import styled from 'styled-components'

const projects = [
    { id: 1, cat: 'design', title: 'Modern Living Room', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80' },
    { id: 2, cat: 'house', title: 'Luxury Villa', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80' },
    { id: 3, cat: 'house', title: 'Urban Apartment', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    { id: 4, cat: 'design', title: 'Minimalist Interior', img: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80' },
    { id: 5, cat: 'furniture', title: 'Kitchen Design', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
    { id: 6, cat: 'house', title: 'Pool House', img: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=600&q=80' },
]
const tabs = ['all', 'furniture', 'design', 'house']

const Section = styled.section`padding: 80px 5%; max-width: 1200px; margin: 0 auto;`
const Header = styled.div`display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; flex-wrap: wrap; gap: 16px; h2 { font-family: ${({ theme }) => theme.fontDisplay}; font-size: clamp(1.8rem,3vw,2.4rem); font-weight: 700; } @media (max-width: 640px) { flex-direction: column; align-items: flex-start; }`
const Tabs = styled.div`display: flex; gap: 24px; flex-wrap: wrap;`
const Tab = styled.button`
  background: none; border: none; font-size: .9rem; font-weight: 500; text-transform: capitalize; padding: 4px 0;
  color: ${({ $active, theme }) => $active ? theme.teal : theme.gray};
  border-bottom: 2px solid ${({ $active, theme }) => $active ? theme.teal : 'transparent'};
  transition: all .2s;
  &:hover { color: ${({ theme }) => theme.teal}; border-bottom-color: ${({ theme }) => theme.teal}; }
`
const Grid = styled.div`display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; @media (max-width: 900px) { grid-template-columns: repeat(2,1fr); } @media (max-width: 640px) { grid-template-columns: 1fr; }`
const Card = styled.div`border-radius: 6px; overflow: hidden; cursor: pointer; img { width: 100%; height: 220px; object-fit: cover; transition: transform .4s; } &:hover img { transform: scale(1.04); }`
const CardInfo = styled.div`padding: 14px 4px 4px; strong { display: block; font-size: .9rem; font-weight: 600; color: ${({ theme }) => theme.text}; margin-bottom: 4px; } p { font-size: .85rem; color: ${({ theme }) => theme.gray}; line-height: 1.5; }`

export default function Projects() {
    const [active, setActive] = useState('all')
    const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

    return (
        <Section id="projects">
            <Header>
                <h2>Our Projects</h2>
                <Tabs>{tabs.map(t => <Tab key={t} $active={active === t} onClick={() => setActive(t)}>{t}</Tab>)}</Tabs>
            </Header>
            <Grid>
                {filtered.map(p => (
                    <Card key={p.id}>
                        <img src={p.img} alt={p.title} />
                        <CardInfo><strong>{p.title}</strong><p>Our Services Line one<br />Service line two</p></CardInfo>
                    </Card>
                ))}
            </Grid>
        </Section>
    )
}