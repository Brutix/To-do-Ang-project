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
  password: string | number
  mail?: string

}

export interface IDesktop extends IProduct{
  platform: string
  chipset: string
  memory: number

}
export interface ILaptop extends IProduct{
  platform: string
  chipset: string
  memory: number
  buttery: number

}
