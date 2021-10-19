import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'
import { FormControl, FormLabel, Icon, Text, Tooltip } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { useState, useEffect } from 'react'
import { GiAlliedStar, GiRoundStar, GiPlainCircle } from 'react-icons/gi'

import { Skill, SpecificSkill } from '../../interfaces'
import { flatLeft, flatRight, trimZeroes } from '../../utils'
import EditableLabel from './editable-label'

export interface SkillLineProps {
  skill: string
  update: () => void
  data: Skill | SpecificSkill
}

export const SkillLine = (props: SkillLineProps) => {
  const { data, skill, update } = props

  const compact = useBreakpointValue({ md: true, sm: false, xs: false })

  const [total, setTotal] = useState(data.rank + data.modifier)
  const [mod, setMod] = useState(data.modifier)
  const [rank, setRank] = useState(data.rank)
  const [domain, setDomain] = useState(data.domain)

  const updateTotal = (event: React.ChangeEvent<HTMLInputElement>, fn: React.Dispatch<React.SetStateAction<number>>) => {
    fn(parseInt(event.target.value))
  }

  useEffect(() => {
    const newTotal = mod + rank

    setTotal(isNaN(newTotal) ? 0 : newTotal)
  }, [mod, rank])

  return (
    <FormControl mt="2">
      {!compact && (
        <FormLabel mb="1" ml="1">
          {domain || domain === '' ? <EditableLabel skill={skill} domain={domain} update={setDomain} compact={compact} /> : <Text>{skill}</Text>}
        </FormLabel>
      )}
      <Flex spacing={0} minW={'268px'} w="full">
        <InputGroup flex="4">
          <InputLeftAddon
            children={
              compact ? (
                <>
                  {domain || domain === '' ? (
                    <EditableLabel skill={skill} domain={domain} update={setDomain} compact={compact} />
                  ) : (
                    <Text>{skill}</Text>
                  )}
                </>
              ) : (
                <Tooltip label="Total (Rank + Modifiers)" fontSize="md">
                  <span>
                    <Icon as={GiAlliedStar} />
                  </span>
                </Tooltip>
              )
            }
          />
          <Input minW={10} p="0 8px" type="text" value={total} onChange={update} isReadOnly borderRadius={flatRight} borderRight="none" />
        </InputGroup>
        <InputGroup flex="1">
          <InputLeftAddon
            children={
              <Tooltip label="Rank" fontSize="md">
                <span>
                  <Icon as={GiRoundStar} />
                </span>
              </Tooltip>
            }
            borderRadius={flatLeft}
            p="0 8px"
          />
          <Input
            minW={10}
            p="0 8px"
            borderRadius={flatRight}
            borderRight="none"
            textAlign="center"
            type="number"
            value={trimZeroes(rank)}
            min={0}
            onChange={(e) => updateTotal(e, setRank)}
            onFocus={(e) => e.target.select()}
          />
        </InputGroup>
        <InputGroup flex="1">
          <InputLeftAddon
            children={
              <Tooltip label="Modifiers" fontSize="md">
                <span>
                  <Icon as={GiPlainCircle} />
                </span>
              </Tooltip>
            }
            borderRadius={flatLeft}
            p="0 8px"
          />
          <Input
            minW={10}
            p="0 8px"
            textAlign="center"
            type="number"
            value={trimZeroes(mod)}
            min={0}
            onChange={(e) => updateTotal(e, setMod)}
            onFocus={(e) => e.target.select()}
          />
        </InputGroup>
      </Flex>
    </FormControl>
  )
}

export default SkillLine
