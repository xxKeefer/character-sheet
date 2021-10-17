import React, { useContext, useState } from 'react'
import newCharacter from './character-initial'
import { Character } from '../../interfaces'

const CharacterContext = React.createContext<Character>(newCharacter)

export const useAuth = () => {
  return useContext(CharacterContext)
}

export const CoreProvider = ({ children }: any) => {
  // some state and functions here

  /** CORE **/
  // Core state

  /** ASPECTS **/
  // state

  /** CONSEQUENCES **/
  //  state

  /** EQUIPMENT **/
  //  state

  /** SKILLS **/
  //  state

  const characterSheet: any = {
    // the values/methods exported by the context
  }
  return <CharacterContext.Provider value={characterSheet}>{children}</CharacterContext.Provider>
}
