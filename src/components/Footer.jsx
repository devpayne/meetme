import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>Designed &amp; built by <span>Devin L. Payne</span></p>
      <p className="footer__sub">© {new Date().getFullYear()} · All rights reserved</p>
    </footer>
  )
}
