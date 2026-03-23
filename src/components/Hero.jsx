import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const slides = [
  { img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80', title: 'Best Solution For Your Home', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.', cta: 'Explore Projects', href: '/#projects' },
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80', title: 'Crafting Spaces That Inspire', desc: 'We design architectural solutions that blend beauty with functionality.', cta: 'About Us', href: '/#about' },
  { img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80', title: 'Interior Excellence Redefined', desc: 'From concept to completion, we bring your vision to life.', cta: 'Get in Touch', href: '/#contact' },
]

const HeroSection = styled.section`
  position: relative; height: 100vh; min-height: 520px; overflow: hidden; margin-top: 68px;
`
const SlidesTrack = styled.div`
  display: flex; height: 100%;
  transition: transform .7s cubic-bezier(.4,0,.2,1);
  transform: ${({ $current }) => `translateX(-${$current * 100}%)`};
`
const Slide = styled.div`
  min-width: 100%; height: 100%; position: relative; flex-shrink: 0;
  img { width: 100%; height: 100%; object-fit: cover; }
`
const Overlay = styled.div`
  position: absolute; inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,.45) 0%, rgba(0,0,0,.1) 60%, transparent 100%);
`
const SlideContent = styled.div`
  position: absolute; top: 50%; left: 6%; transform: translateY(-50%);
  max-width: 460px; background: rgba(255,255,255,.15); backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,.25); border-radius: 4px; padding: 40px 44px;
  h1 { font-family: ${({ theme }) => theme.fontDisplay}; font-size: clamp(2rem,4vw,3rem); font-weight: 700; color: white; line-height: 1.15; margin-bottom: 16px; }
  p  { color: rgba(255,255,255,.88); font-size: .95rem; line-height: 1.65; margin-bottom: 28px; }
  @media (max-width: 640px) { left: 4%; right: 4%; padding: 28px 24px; }
`
const CtaBtn = styled(Link)`
  background: ${({ theme }) => theme.teal}; color: white;
  padding: 13px 30px; border-radius: 3px; font-weight: 600; font-size: .9rem;
  transition: background .2s, transform .2s;
  &:hover { background: ${({ theme }) => theme.tealDark}; transform: translateY(-1px); }
`
const Arrows = styled.div`
  position: absolute; bottom: 36px; right: 5%; display: flex; gap: 10px;
`
const ArrowBtn = styled.button`
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(255,255,255,.2); border: 1px solid rgba(255,255,255,.4);
  color: white; font-size: 1.1rem; display: flex; align-items: center; justify-content: center;
  transition: background .2s, transform .2s;
  &:hover { background: ${({ theme }) => theme.teal}; transform: scale(1.05); }
`
const Dots = styled.div`
  position: absolute; bottom: 48px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px;
`
const Dot = styled.button`
  width: 8px; height: 8px; border-radius: 50%; border: none; padding: 0;
  background: ${({ $active }) => $active ? 'white' : 'rgba(255,255,255,0.45)'};
  transform: ${({ $active }) => $active ? 'scale(1.3)' : 'scale(1)'};
  transition: background .3s, transform .3s;
`

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)
  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t) }, [next])

  return (
    <HeroSection>
      <SlidesTrack $current={current}>
        {slides.map((s, i) => (
          <Slide key={i}>
            <img src={s.img} alt={s.title} />
            <Overlay />
            <SlideContent>
              <h1>{s.title}</h1>
              <p>{s.desc}</p>
              <CtaBtn to={s.href}>{s.cta}</CtaBtn>
            </SlideContent>
          </Slide>
        ))}
      </SlidesTrack>
      <Dots>
        {slides.map((_, i) => (
          <Dot key={i} $active={i === current} onClick={() => setCurrent(i)} />
        ))}
      </Dots>
      <Arrows>
        <ArrowBtn onClick={prev}>←</ArrowBtn>
        <ArrowBtn onClick={next}>→</ArrowBtn>
      </Arrows>
    </HeroSection>
  )
}