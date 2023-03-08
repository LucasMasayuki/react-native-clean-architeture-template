/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormInput } from '../../components/form-input'
import { Button, useToast, VStack } from 'native-base'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useHookstate } from '@hookstate/core'
import itemStore from '../../stores/item-store'
import { useEditItemScreenContext } from '@/src/main/factories/screens/edit-item/edit-item-screen-context'
import Toast, { ToastStatus } from '../../components/toast'

type EditItemProps = {
  name: string
}

const addItemSchema = yup.object({
  name: yup.string().required('Name is required'),
})

const EditItemScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditItemProps>({
    resolver: yupResolver(addItemSchema),
  })

  const route = useRoute<RouteProp<{ EditItem: { id: number } }, 'EditItem'>>()
  const { id } = route.params

  const toast = useToast()
  const state = useHookstate(itemStore)

  const navigation = useNavigation()
  const { editItemCase, getItemCase } = useEditItemScreenContext()

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await getItemCase?.get(id)

        if (response?.item == null) {
          throw new Error()
        }

        setValue('name', response?.item.name)
      } catch (error) {
        console.log(error)
        toast.show({
          render: () => (
            <Toast text={'Produto não encontrado'} status={ToastStatus.Error} />
          ),
        })
        navigation.goBack()
      }
    }

    getItem
  }, [getItemCase, id, navigation, setValue, toast])

  async function handleEditItem(data: EditItemProps) {
    try {
      const edittedItem = await editItemCase?.edit({
        id,
        ...data,
      })

      if (edittedItem != null) {
        state.set((items) => [...items, edittedItem])

        toast.show({
          render: () => (
            <Toast
              text={`${edittedItem.name} is edited`}
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
      <Button onPress={handleSubmit(handleEditItem)}>Edit item</Button>
    </VStack>
  )
}

export default EditItemScreen
