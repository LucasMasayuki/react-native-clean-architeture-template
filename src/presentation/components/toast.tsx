import React from 'react'
import { Alert, CloseIcon, HStack, IconButton, Text, VStack } from 'native-base'

type Props = {
  text: string
  status: ToastStatus
}

export enum ToastStatus {
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
}

const Toast: React.FC<Props> = ({ text, status }) => {
  return (
    <Alert w="100%" status={status} colorScheme={status} variant="left-accent">
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <Alert.Icon mt="1" />
            <Text fontSize="md">{text}</Text>
          </HStack>
          <IconButton
            variant="unstyled"
            _focus={{
              borderWidth: 0,
            }}
            icon={<CloseIcon size="3" />}
            _icon={{
              color: 'coolGray.600',
            }}
          />
        </HStack>
      </VStack>
    </Alert>
  )
}

export default Toast
