import { createGlobalStyle } from 'styled-components'

export const theme = {
  teal: '#2d6a6a',
  tealDark: '#1e4f4f',
  tealLight: '#3d8a8a',
  white: '#ffffff',
  offWhite: '#f8f7f4',
  gray: '#6b7280',
  lightGray: '#e5e7eb',
  text: '#1f2937',
  footer: '#1a2e2e',
  fontDisplay: "'Playfair Display', serif",
  fontBody: "'DM Sans', sans-serif",
}

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: ${({ theme }) => theme.fontBody}; color: ${({ theme }) => theme.text}; background: ${({ theme }) => theme.white}; overflow-x: hidden; }
  a { text-decoration: none; color: inherit; }
  button { cursor: pointer; font-family: ${({ theme }) => theme.fontBody}; }
  img { max-width: 100%; display: block; }
`
