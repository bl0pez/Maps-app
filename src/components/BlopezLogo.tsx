import reactLogo from '../logo.svg';

export const BlopezLogo = () => {
  return (
    <img 
        src={reactLogo}
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '130px'
        }}
        alt="React Logo"
    />
  )
}
