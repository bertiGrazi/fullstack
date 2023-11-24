import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
