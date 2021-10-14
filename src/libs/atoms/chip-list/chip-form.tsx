import { Stack } from '@chakra-ui/layout'
import { Input, InputGroup, InputLeftAddon, InputRightElement } from '@chakra-ui/input'
import { Textarea, FormControl, FormLabel, Tooltip } from '@chakra-ui/react'
import { Button, IconButton } from '@chakra-ui/button'
import { EquipmentDetails } from '../../interfaces'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { useEffect, useRef, useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Icon, selectType, trimZeroes } from '../../utils'
import { BsPlusLg, BsDashLg } from 'react-icons/bs'

export interface ChipFormProps {
  addFn: (item: EquipmentDetails) => void
}

const ChipForm = (props: ChipFormProps) => {
  const { addFn } = props
  const equipRef = useRef<HTMLInputElement>(null)
  const column = useBreakpointValue({ md: false, sm: true, xs: true })
  const [equip, setEquip] = useState<EquipmentDetails>({ name: '', effect: '', description: '', buildPoints: 0, type: 'Boon' })
  const [firstRender, setFirstRender] = useState(true)

  const MAX_ITEM_BP = 10

  const handleBuildPoints = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10)
    const cleanValue = isNaN(newValue) ? 0 : newValue
    const buildPoints = cleanValue >= MAX_ITEM_BP ? MAX_ITEM_BP : cleanValue
    setEquip({ ...equip, buildPoints })
  }

  const updateBuildPoints = (num: number) => {
    const current = equip.buildPoints
    if (num < 0 && current <= 0) return
    if (num > 0 && current >= MAX_ITEM_BP) return
    setEquip({ ...equip, buildPoints: current + num })
  }

  useEffect(() => {
    if (equip.name !== '') setFirstRender(false)
  }, [equip.name])

  return (
    <Formik<EquipmentDetails>
      initialValues={equip}
      enableReinitialize
      validateOnMount={!firstRender}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        addFn(values)
        equipRef.current?.focus()
      }}
    >
      {({ errors, values, handleSubmit }) => (
        <Form>
          {console.log(values.name === '')}
          <Stack direction={!!column ? 'column' : 'row'} mb="2">
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name" />
              <InputGroup>
                <InputLeftAddon children={equip.type} />
                <Input
                  ref={equipRef}
                  type="text"
                  placeholder={"Captain's Pocket watch"}
                  value={equip.name}
                  onChange={(e) => setEquip({ ...equip, name: e.target.value })}
                />
                <InputRightElement>
                  <Tooltip label={`${equip.type} Type`} aria-label="equipment type tooltip">
                    <IconButton
                      aria-label="gear type"
                      size="sm"
                      icon={Icon(equip.type)}
                      onClick={() => setEquip({ ...equip, type: selectType(equip.type) })}
                    />
                  </Tooltip>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl isInvalid={!!errors.effect}>
              <FormLabel htmlFor="effect" />
              <InputGroup>
                <InputLeftAddon children="Effect" />
                <Input
                  type="text"
                  placeholder={'+1 Conviction'}
                  value={equip.effect}
                  onChange={(e) => setEquip({ ...equip, effect: e.target.value })}
                />
              </InputGroup>
            </FormControl>
          </Stack>

          <Textarea
            placeholder="Explain the mechanic here, or add lore."
            size="sm"
            resize="vertical"
            borderRadius="md"
            value={equip.description}
            onChange={(e) => setEquip({ ...equip, description: e.target.value })}
          />
          <Stack direction={!!column ? 'column' : 'row'} align="baseline">
            <FormControl isInvalid={!!errors.buildPoints}>
              <FormLabel htmlFor="buildPoints" />
              <InputGroup>
                <InputLeftAddon children="BP" />
                <Input type="number" min={0} max={MAX_ITEM_BP} value={trimZeroes(equip.buildPoints)} onChange={handleBuildPoints} />
                <InputRightElement>
                  <Stack direction="row" spacing={1} mr="40px">
                    <Tooltip label={`Decrease BP`} aria-label="decrement bp">
                      <IconButton
                        disabled={equip.buildPoints <= 0}
                        aria-label="decrement"
                        size="sm"
                        icon={<BsDashLg />}
                        onClick={() => updateBuildPoints(-1)}
                      />
                    </Tooltip>
                    <Tooltip label={`Increase BP`} aria-label="increment bp">
                      <IconButton
                        disabled={equip.buildPoints >= MAX_ITEM_BP}
                        aria-label="increment"
                        size="sm"
                        icon={<BsPlusLg />}
                        onClick={() => updateBuildPoints(1)}
                      />
                    </Tooltip>
                  </Stack>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              w="full"
              size="md"
              mt="2px"
              colorScheme={Object.keys(errors).length === 0 ? 'green' : 'red'}
              disabled={Object.keys(errors).length !== 0 || equip.name === ''}
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
          </Stack>
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
