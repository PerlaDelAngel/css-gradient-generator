const styles = {
  fontSize: '.8125rem',
  fontWeight: '500',
  lineHeight: '1.1875rem',
  position: 'fixed',
  display: 'block',
  width: '35%',
  bottom: '0',
  left: '0',
  padding: '30px 32px',
  backgroundColor: '#fff',
  zIndex: '11', 
  color: '#3d4853'
}

export default function Footer() {
  return (
    <footer style={styles}>
      Made with ♥ by Perla Del Ángel © 2022
    </footer>
  )
}
