import { ImPower as Boon } from 'react-icons/im'
import { BsXDiamondFill as Gear } from 'react-icons/bs'
import { FaFistRaised as Feat } from 'react-icons/fa'
import { GiRaggedWound as Scar } from 'react-icons/gi'
import { EquipmentType } from '../interfaces'

export const Icon = (type: EquipmentType) => {
  switch (type) {
    case 'Boon':
      return <Boon />
    case 'Feat':
      return <Feat />
    case 'Gear':
      return <Gear />
    case 'Scar':
      return <Scar />
  }
}

export const selectType = (type: EquipmentType) => {
  switch (type) {
    case 'Boon':
      return 'Feat'
    case 'Feat':
      return 'Gear'
    case 'Gear':
      return 'Scar'
    case 'Scar':
      return 'Boon'
  }
}
