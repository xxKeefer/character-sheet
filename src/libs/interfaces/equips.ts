export interface EquipmentDetails {
  name: string
  effect?: string
  description?: string
  buildPoints: number | 0
  type: EquipmentType
}

export type EquipmentType = 'Boon' | 'Feat' | 'Gear' | 'Scar'
export type EquipmentStats = EquipmentDetails[]
