import styled from 'styled-components'

// ── DATA ──────────────────────────────────────────────────
const services = [
  {
    label: 'Planning',
    icon: (
      <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    label: 'Interior',
    icon: (
      <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    label: 'Exterior',
    icon: (
      <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
]

// ── STYLES ────────────────────────────────────────────────
const Section = styled.section`
  background: ${({ theme }) => theme.offWhite};
  padding: 80px 5%;
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 56px;
  color: ${({ theme }) => theme.text};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 860px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  text-align: center;
  padding: 36px 24px;
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(45, 106, 106, 0.15);
  }

  h3 {
    font-family: ${({ theme }) => theme.fontDisplay};
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.gray};
    line-height: 1.6;
  }
`

const IconCircle = styled.div`
  width: 64px; height: 64px;
  border-radius: 50%;
  background: ${({ theme }) => theme.teal};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`

// ── COMPONENT ─────────────────────────────────────────────
export default function Services() {
  return (
    <Section id="services">
      <Title>Our Services</Title>
      <Grid>
        {services.map((s) => (
          <Card key={s.label}>
            <IconCircle>{s.icon}</IconCircle>
            <h3>{s.label}</h3>
            <p>Our Services Line one<br />Service line two</p>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}