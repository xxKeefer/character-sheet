import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, IconButton } from '@chakra-ui/react'
import { Center, Heading, Text, HStack, Divider } from '@chakra-ui/layout'
import { ConsequenceType } from '../../interfaces'
import { useState } from 'react'
import { FaHeartbeat as Up } from 'react-icons/fa'
import { GiHeartMinus as Left, GiHeartPlus as Right, GiDeathSkull as Down } from 'react-icons/gi'

export interface DamageSliderProps {
  name: string
  data: ConsequenceType
}

export const DamageSlider = (props: DamageSliderProps) => {
  const { name, data } = props
  const title = name[0].toUpperCase() + name.substring(1)

  const [maximum, setMaximum] = useState(data.maximum)
  const [current, setCurrent] = useState(data.current)

  const addCurr = () => {
    if (current + 1 > maximum) return
    setCurrent(current + 1)
  }
  const subCurr = () => {
    if (current - 1 < 0) return
    setCurrent(current - 1)
  }
  const addMax = () => {
    setMaximum(maximum + 1)
  }
  const subMax = () => {
    if (maximum - 1 < 0) return
    setMaximum(maximum - 1)
    if (maximum - 1 < current) subCurr()
  }
  return (
    <HStack w="full" spacing={2}>
      <HStack>
        <IconButton aria-label="decrease maximum" icon={<Down />} onClick={subMax} />
        <HStack width="100px" justify="center">
          <Heading size="sm">{title}:</Heading>
          <Text>{maximum}</Text>
        </HStack>
        <IconButton aria-label="increase maximum" icon={<Up />} onClick={addMax} />
      </HStack>
      <Center height="40px">
        <Divider orientation="vertical" />
      </Center>
      <HStack w="full">
        <IconButton aria-label="decrease current" icon={<Left />} onClick={subCurr} />
        <Center w="full" p="10px 20px">
          <Slider defaultValue={current} min={0} max={maximum} step={1} value={current} onChange={setCurrent}>
            <SliderTrack bg="red">
              <SliderFilledTrack bg="green" />
            </SliderTrack>
            <SliderThumb outline="3px solid" outlineColor="black" boxSize={8}>
              <Text>{current}</Text>
            </SliderThumb>
          </Slider>
        </Center>
        <IconButton aria-label="increase current" icon={<Right />} onClick={addCurr} />
      </HStack>
    </HStack>
  )
}

export default DamageSlider
