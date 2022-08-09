export interface IProduct{
  readonly id: number
  title : string
  prodclass: string
  prodYear: number
  cost: number

}

 export interface IUser{
  readonly id: number
  login: string
  password: any
  mail?: any

}

export interface IDesktop extends IProduct{
  platform: any
  chipset: any
  memory: number

}
export interface ILaptop extends IProduct{
  platform: any
  chipset: any
  memory: number
  buttery: number

}
