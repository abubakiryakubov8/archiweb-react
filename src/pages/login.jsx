import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.offWhite};
  display: flex; align-items: center; justify-content: center; padding: 40px 20px;
`
const Card = styled.div`
  background: white; border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0,0,0,.12);
  overflow: hidden; display: grid; grid-template-columns: 1fr 1fr;
  max-width: 960px; width: 100%;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`
const Visual = styled.div`
  background: ${({ theme }) => theme.teal};
  position: relative; overflow: hidden; min-height: 500px;
  img { width: 100%; height: 100%; object-fit: cover; opacity: .35; position: absolute; inset: 0; }
  @media (max-width: 900px) { display: none; }
`
const VisualContent = styled.div`
  position: absolute; inset: 0; display: flex; flex-direction: column;
  justify-content: center; padding: 48px 40px;
  .logo { font-family: ${({ theme }) => theme.fontDisplay}; font-size: 1.5rem; font-weight: 700; color: white; margin-bottom: 40px; display: block; }
  h2 { font-family: ${({ theme }) => theme.fontDisplay}; font-size: 1.9rem; font-weight: 700; color: white; line-height: 1.3; margin-bottom: 16px; }
  p  { color: rgba(255,255,255,.8); font-size: .9rem; line-height: 1.65; }
`
const FormSide = styled.div`
  padding: 52px 48px; display: flex; flex-direction: column; justify-content: center;
  h3 { font-family: ${({ theme }) => theme.fontDisplay}; font-size: 1.6rem; font-weight: 700; margin-bottom: 8px; color: ${({ theme }) => theme.text}; }
  .subtitle { font-size: .88rem; color: ${({ theme }) => theme.gray}; margin-bottom: 36px; }
  @media (max-width: 640px) { padding: 32px 24px; }
`
const FormGroup = styled.div`
  margin-bottom: 20px;
  label { display: block; font-size: .82rem; font-weight: 600; color: ${({ theme }) => theme.text}; margin-bottom: 7px; }
  input {
    width: 100%; padding: 12px 16px; border: 1.5px solid ${({ theme }) => theme.lightGray};
    border-radius: 5px; font-family: ${({ theme }) => theme.fontBody}; font-size: .9rem;
    background: ${({ theme }) => theme.offWhite}; outline: none; transition: border-color .2s, box-shadow .2s;
    &:focus { border-color: ${({ theme }) => theme.teal}; box-shadow: 0 0 0 3px rgba(45,106,106,.1); background: white; }
  }
`
const FormOptions = styled.div`
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px;
  label { display: flex; align-items: center; gap: 8px; font-size: .83rem; color: ${({ theme }) => theme.gray}; cursor: pointer; input { width: auto; accent-color: ${({ theme }) => theme.teal}; } }
  a { font-size: .83rem; color: ${({ theme }) => theme.teal}; font-weight: 500; &:hover { text-decoration: underline; } }
`
const LoginBtn = styled.button`
  width: 100%; padding: 14px; background: ${({ theme }) => theme.teal}; color: white;
  border: none; border-radius: 5px; font-size: .95rem; font-weight: 600;
  transition: background .2s, transform .2s; margin-bottom: 20px;
  &:hover { background: ${({ theme }) => theme.tealDark}; transform: translateY(-1px); }
`
const Divider = styled.div`
  display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
  color: ${({ theme }) => theme.gray}; font-size: .8rem;
  &::before, &::after { content: ''; flex: 1; height: 1px; background: ${({ theme }) => theme.lightGray}; }
`
const BackBtn = styled(Link)`
  display: block; width: 100%; padding: 12px; text-align: center;
  background: transparent; color: ${({ theme }) => theme.gray};
  border: 1.5px solid ${({ theme }) => theme.lightGray}; border-radius: 5px;
  font-size: .88rem; font-weight: 500; transition: all .2s;
  &:hover { border-color: ${({ theme }) => theme.teal}; color: ${({ theme }) => theme.teal}; }
`
const SignupLink = styled.p`
  text-align: center; font-size: .83rem; color: ${({ theme }) => theme.gray}; margin-top: 20px;
  a { color: ${({ theme }) => theme.teal}; font-weight: 600; &:hover { text-decoration: underline; } }
`

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if (!email || !password) return alert('Please fill in all fields.')
        alert(`Welcome back! Logged in as ${email}`)
        navigate('/')
    }

    return (
        <PageWrapper>
            <Card>
                <Visual>
                    <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80" alt="Architecture" />
                    <VisualContent>
                        <Link className="logo" to="/">ArchiWeb</Link>
                        <h2>Welcome back to your design space</h2>
                        <p>Access your projects, connect with our team, and track your builds — all in one place.</p>
                    </VisualContent>
                </Visual>

                <FormSide>
                    <h3>Sign In</h3>
                    <p className="subtitle">Enter your credentials to access your account</p>
                    <form onSubmit={handleLogin}>
                        <FormGroup>
                            <label>Email Address</label>
                            <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <label>Password</label>
                            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
                        </FormGroup>
                        <FormOptions>
                            <label><input type="checkbox" /> Remember me</label>
                            <a href="#">Forgot password?</a>
                        </FormOptions>
                        <LoginBtn type="submit">Sign In</LoginBtn>
                    </form>
                    <Divider>or</Divider>
                    <BackBtn to="/">← Back to Home</BackBtn>
                    <SignupLink>Don't have an account? <a href="#">Sign up free</a></SignupLink>
                </FormSide>
            </Card>
        </PageWrapper>
    )
}