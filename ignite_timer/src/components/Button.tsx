import style from '../components/Button.module.css';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'sucess' 
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Button({color = 'primary'}: ButtonProps) {
  return (
    <button className={`${style.button} ${style[color]}`}>Enviar</button>
  )
}