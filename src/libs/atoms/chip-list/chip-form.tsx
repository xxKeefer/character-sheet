import { Stack } from '@chakra-ui/layout'
import { Input, InputGroup, InputLeftAddon, InputRightElement } from '@chakra-ui/input'
import { Textarea, FormControl, FormLabel, Tooltip } from '@chakra-ui/react'
import { Button, IconButton } from '@chakra-ui/button'
import { EquipmentDetails, EquipmentType } from '../../interfaces'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { useRef, useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Icon, selectType } from '../../utils'

export interface ChipFormProps {
  addFn: (item: EquipmentDetails) => void
}

const ChipForm = (props: ChipFormProps) => {
  const { addFn } = props
  const equipRef = useRef<HTMLInputElement>(null)
  const column = useBreakpointValue({ md: false, sm: true, xs: true })
  const [type, setType] = useState<EquipmentType>('Boon')

  return (
    <Formik<EquipmentDetails>
      initialValues={{ name: '', effect: '', description: '', type }}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        addFn(values)
        resetForm()
        equipRef.current?.focus()
      }}
    >
      {({ values, errors, handleSubmit, setFieldValue }) => (
        <Form>
          <Stack direction={!!column ? 'column' : 'row'} mb="2">
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name" />
              <InputGroup>
                <InputLeftAddon children={type} />
                <Input
                  ref={equipRef}
                  type="text"
                  placeholder={"Captain's Pocket watch"}
                  value={values.name}
                  onChange={(e) => setFieldValue('name', e.target.value)}
                />
                <InputRightElement>
                  <Tooltip label={`${type} Type`} aria-label="equipment type tooltip">
                    <IconButton
                      aria-label="gear type"
                      size="sm"
                      icon={Icon(type)}
                      onClick={() => {
                        const newType = selectType(type)
                        setType(newType)
                        setFieldValue('type', newType)
                      }}
                    />
                  </Tooltip>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl isInvalid={!!errors.effect}>
              <FormLabel htmlFor="effect" />
              <InputGroup>
                <InputLeftAddon children="Effect" />
                <Input type="text" placeholder={'+1 Conviction'} value={values.effect} onChange={(e) => setFieldValue('effect', e.target.value)} />
              </InputGroup>
            </FormControl>
          </Stack>

          <Textarea
            placeholder="Explain the mechanic here, or add lore."
            size="sm"
            resize="vertical"
            borderRadius="md"
            mb="2"
            value={values.description}
            onChange={(e) => setFieldValue('description', e.target.value)}
          />
          <Button
            w="full"
            size="sm"
            colorScheme={Object.keys(errors).length === 0 ? 'green' : 'red'}
            disabled={Object.keys(errors).length !== 0 || values.name === ''}
            onClick={() => handleSubmit()}
          >
            {Object.keys(errors).length === 0 && 'Equip'}
            {Object.keys(errors).length !== 0 && (
              <>
                {Object.keys(errors).includes('name') && errors.name}
                {Object.keys(errors).includes('name') && Object.keys(errors).includes('effect') && ', '}
                {Object.keys(errors).includes('effect') && errors.effect}
              </>
            )}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default ChipForm

const ValidationSchema = yup.object().shape({
  name: yup.string().max(30, 'Name too long').required('Name is required'),
  effect: yup.string().max(30, 'Effect too long').notRequired(),
  description: yup.string().notRequired(),
})
