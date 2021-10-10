import { SkillLine } from '../../atoms'
import { Section } from '../layout/section'
import { SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import { SkillsBlockProps, SkillsBlock, SkillEntry } from '../../interfaces/character'

export const SkillBlock = (props: SkillsBlockProps) => {
  const { expertise, knowledge, physical, social } = props
  const columns = useBreakpointValue({ '2xl': 4, xl: 2, lg: 2, sm: 1, xs: 1 })

  const makeSkills = (block: SkillsBlock) => {
    return (Object.entries(block) as SkillEntry[]).map(([skill, data]) => {
      const name = skill[0].toUpperCase() + skill.substring(1)
      return <SkillLine key={name} skill={name} update={() => undefined} data={data} />
    })
  }

  return (
    <SimpleGrid columns={columns} spacing={2}>
      <Section title="Expertise">{makeSkills(expertise)}</Section>
      <Section title="Knowledge">{makeSkills(knowledge)}</Section>
      <Section title="Physical">{makeSkills(physical)}</Section>
      <Section title="Social">{makeSkills(social)}</Section>
    </SimpleGrid>
  )
}

export default SkillBlock
