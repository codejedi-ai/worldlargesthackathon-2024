import React from "react";
import { Box, BoxProps, Heading, Text, Flex } from "@chakra-ui/react";

export interface CardProps extends BoxProps {
  variant?: "default" | "outline";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        bg={variant === "default" ? "gray.800" : "transparent"}
        borderWidth={variant === "outline" ? "1px" : "0"}
        borderColor="gray.700"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = (props: BoxProps) => (
  <Box pt={2} px={2} pb={4} {...props} />
);
CardHeader.displayName = "CardHeader";

export const CardTitle = (props: React.ComponentProps<typeof Heading>) => (
  <Heading size="md" fontWeight="semibold" {...props} />
);
CardTitle.displayName = "CardTitle";

export const CardDescription = (props: React.ComponentProps<typeof Text>) => (
  <Text color="gray.400" fontSize="sm" {...props} />
);
CardDescription.displayName = "CardDescription";

export const CardContent = (props: BoxProps) => <Box px={2} {...props} />;
CardContent.displayName = "CardContent";

export const CardFooter = (props: BoxProps) => (
  <Box pt={4} px={2} pb={2} {...props} />
);
CardFooter.displayName = "CardFooter";
