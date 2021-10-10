import { Wrap, WrapItem } from '@chakra-ui/layout'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import ChipModal from './chip-modal'
import { Section } from '../../components'
import ChipForm from './chip-form'
import { EquipmentDetails } from '../../interfaces'

export const ChipList = () => {
  const [list, setList] = useState<EquipmentDetails[]>([])

  const remove = (item: EquipmentDetails) => {
    setList(list.filter((i) => i.name !== item.name).sort(alphabetize))
  }

  const add = (item: EquipmentDetails) => {
    if (list.find((i) => i.name === item.name)) return
    setList([...list, item].sort(alphabetize))
  }

  const alphabetize = (a: EquipmentDetails, b: EquipmentDetails) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    const typeA = a.type.toUpperCase()
    const typeB = b.type.toUpperCase()
    if (typeA === typeB) {
      //Sort by Name
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    }
    //Sort by TYPE
    return typeA > typeB ? 1 : -1
  }

  return (
    <>
      <Section>
        <ChipForm addFn={add} />
      </Section>

      <Wrap mt="2" p="2" border="1px solid" borderColor="gray.200" borderRadius="10">
        {list.map((item) => (
          <WrapItem key={`${item.name}-${nanoid()}`}>
            <ChipModal item={item} removeFn={remove} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
}

export default ChipList
