import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
`

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.offWhite};
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 40px 20px; text-align: center;
`
const BigNumber = styled.div`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: clamp(7rem, 20vw, 14rem);
  font-weight: 900; line-height: 1;
  color: transparent;
  -webkit-text-stroke: 3px ${({ theme }) => theme.teal};
  opacity: 0.15;
  animation: ${float} 4s ease-in-out infinite;
  user-select: none; margin-bottom: -20px;
`
const Content = styled.div`
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.1s; max-width: 480px;
`
const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 700;
  color: ${({ theme }) => theme.text}; margin-bottom: 16px;
`
const Desc = styled.p`
  color: ${({ theme }) => theme.gray}; font-size: 0.95rem;
  line-height: 1.7; margin-bottom: 36px;
`
const Divider = styled.div`
  width: 48px; height: 3px; background: ${({ theme }) => theme.teal};
  border-radius: 2px; margin: 0 auto 28px;
`
const Actions = styled.div`
  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
`
const BtnPrimary = styled(Link)`
  background: ${({ theme }) => theme.teal}; color: white;
  padding: 13px 32px; border-radius: 3px; font-weight: 600; font-size: 0.9rem;
  transition: background 0.2s, transform 0.2s;
  &:hover { background: ${({ theme }) => theme.tealDark}; transform: translateY(-2px); }
`
const BtnSecondary = styled(Link)`
  background: transparent; color: ${({ theme }) => theme.text};
  padding: 13px 32px; border-radius: 3px; font-weight: 600; font-size: 0.9rem;
  border: 1.5px solid ${({ theme }) => theme.lightGray}; transition: all 0.2s;
  &:hover { border-color: ${({ theme }) => theme.teal}; color: ${({ theme }) => theme.teal}; transform: translateY(-2px); }
`

export default function NotFound() {
    return (
        <Wrapper>
            <BigNumber>404</BigNumber>
            <Content>
                <Title>Page Not Found</Title>
                <Divider />
                <Desc>
                    Looks like this page took an unexpected turn during construction.
                    Let's get you back on solid ground.
                </Desc>
                <Actions>
                    <BtnPrimary to="/">Back to Home</BtnPrimary>
                    <BtnSecondary to="/#contact">Contact Us</BtnSecondary>
                </Actions>
            </Content>
        </Wrapper>
    )
}

