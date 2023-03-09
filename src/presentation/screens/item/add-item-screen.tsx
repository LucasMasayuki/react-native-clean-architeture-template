/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormInput } from '../../components/form-input'
import { Button, useToast, VStack } from 'native-base'
import { useAddItemScreenContext } from '@/src/main/factories/screens/add-item/add-item-screen-context'
import { useNavigation } from '@react-navigation/native'
import { useHookstate } from '@hookstate/core'
import itemStore from '../../stores/item-store'
import Toast, { ToastStatus } from '../../components/toast'
import '@/src/main/extensions/number'

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

  const toast = useToast()
  const state = useHookstate(itemStore)

  const navigation = useNavigation()
  const { addItemCase } = useAddItemScreenContext()

  async function handleAddItem(data: AddItemProps) {
    try {
      const item = await addItemCase?.add({
        id: Math.random().betweeen(1, 100000000000),
        ...data,
      })

      if (item != null) {
        state.set((items) => [...items, item])

        toast.show({
          render: () => (
            <Toast
              text={`${item.name} is added`}
              status={ToastStatus.Success}
            />
          ),
        })

        navigation.goBack()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <VStack p="16">
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
