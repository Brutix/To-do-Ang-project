export interface IProduct{
  readonly id: number
  prodclass: string
  prodYear: number
  cost: number

}

interface IUser{
  readonly id: number
  login: string
  password: any
  mail?: any

}

interface IDesktop extends IProduct{
  platform: any
  chipset: any
  memory: number

}
interface ILaptop extends IProduct{
  platform: any
  chipset: any
  memory: number
  buttery: number

}
