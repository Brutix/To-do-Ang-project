import {IPriority} from "./Priority";
import {ICategory} from "./Category";


export interface ITask {
  readonly id: number
  title: string
  completed: boolean
  priority?: IPriority
  category?: ICategory
  date?: Date
}
