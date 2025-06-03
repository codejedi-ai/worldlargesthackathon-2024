import { Button as ChakraButton, ButtonProps as ChakraButtonProps} from '@chakra-ui/react';
import { SystemStyleObject } from '@chakra-ui/styled-system';
import { StyleConfig } from '@chakra-ui/theme-tools';
import { useStyleConfig } from '@chakra-ui/system';

export interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
  variant?: 'outline' | 'solid' | 'ghost' | 'subtle' | 'surface' | 'plain' | 'default' | 'destructive' | 'secondary' | 'danger' | SystemStyleObject;
}

export const Button = (props: ButtonProps) => {
  const { variant = 'solid', ...rest } = props;
  const styleProps = useStyleConfig('Button', { variant: variant as string });
  return <ChakraButton {...rest} {...(styleProps as any)} />;
};
