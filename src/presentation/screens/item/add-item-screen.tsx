/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormInput } from '../../components/form-input'
import { Button, VStack } from 'native-base'

type AddItemProps = {
  name: string
}

const addItemSchema = yup.object({
  name: yup.string().required('Name is required'),
})

const AddItemScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddItemProps>({
    resolver: yupResolver(addItemSchema),
  })

  function handleAddItem(data: AddItemProps) {
    console.log(data)
  }

  return (
    <VStack>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange } }) => (
          <FormInput
            errorMessage={errors.name?.message}
            placeholder="Name"
            onChangeText={onChange}
          />
        )}
      />
      <Button onPress={handleSubmit(handleAddItem)}>Add item</Button>
    </VStack>
  )
}

export default AddItemScreen
