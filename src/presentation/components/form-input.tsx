import React from 'react'
import { FormControl, IInputProps, Input, Text } from 'native-base'

type Props = IInputProps & {
  errorMessage?: string
}

export const FormInput: React.FC<Props> = ({
  errorMessage,
  isInvalid,
  ...rest
}) => {
  const invalid = errorMessage != null || isInvalid

  return (
    <FormControl mb={4}>
      <Input isInvalid={invalid} {...rest} />
      <Text color="red.600" bold>
        {errorMessage}
      </Text>
    </FormControl>
  )
}
