import React, { useContext, useState } from 'react'
import CoreActions from './core-actions'
import initialCoreState from './core-initial'

const CoreContext = React.createContext<any>(initialCoreState)

export const useAuth = () => {
  return useContext(CoreContext)
}

export const CoreProvider = ({ children }: any) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = CoreActions
  // some state and functions here

  const coreObj: any = {
    // the values/methods exported by the context
  }
  return <CoreContext.Provider value={coreObj}>{children}</CoreContext.Provider>
}
