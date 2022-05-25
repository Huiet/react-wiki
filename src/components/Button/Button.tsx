import { PrimaryButton, SecondaryButton } from './Button.styles';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Content rendered within the button.
   */
  children: React.ReactNode;
  /**
   * Disable the button.
   */
  disabled?: boolean;
  /**
   * Style variant.
   */
  variant: 'primary' | 'secondary' | 'delete';
}

export const Button = ({ children, variant = 'primary', ...rest }: Props) => {
  switch(variant) {
    case 'primary':
      return (
        <PrimaryButton {...rest}>
          {children}
        </PrimaryButton>
      )
      break;

      case 'secondary':
        return (
          <SecondaryButton {...rest}>
            {children}
          </SecondaryButton>
        );
        break;
        case 'delete':
          return (
            <div>todo</div>
          );
          break;
  }
  // return (
  //
  //   <Root variant={variant} {...rest}>
  //     {children}
  //   </Root>
  // );
};
