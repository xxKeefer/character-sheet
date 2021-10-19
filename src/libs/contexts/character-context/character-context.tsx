import React, { useContext, useState } from 'react'
import newCharacterSheet, { newCharacter } from './character-initial'
import { CharacterSheet, Character } from '../../interfaces'

const CharacterContext = React.createContext<CharacterSheet>(newCharacterSheet)

export const useCharacter = () => {
  return useContext(CharacterContext)
}

export const CharacterProvider: React.FC = ({ children }) => {
  // some state and functions here

  /** CORE **/
  const [core, setCore] = useState<Character['core']>(newCharacter.core)

  /** ASPECTS **/
  const [aspects, setAspects] = useState<Character['aspects']>(newCharacter.aspects)

  /** CONSEQUENCES **/
  const [consequences, setConsequences] = useState<Character['consequences']>(newCharacter.consequences)

  /** EQUIPMENT **/
  const [equipment, setEquipment] = useState<Character['equipment']>(newCharacter.equipment)

  /** SKILLS **/
  const [skills, setSkills] = useState<Character['skills']>(newCharacter.skills)

  const characterSheet = {
    values: { core, aspects, consequences, equipment, skills },
    actions: { setCore, setAspects, setConsequences, setEquipment, setSkills },
  }
  return <CharacterContext.Provider value={characterSheet}>{children}</CharacterContext.Provider>
}
