import {ICategory} from "../interfaces/Category";
import {IPriority} from "../interfaces/Priority";
import {ITask} from "../interfaces/Task";


export class TestData {

  static categories: ICategory[] = [
    {id: 1, title: 'Робота'},
    {id: 2, title: 'Родина'},
    {id: 3, title: 'Навчання'},
    {id: 4, title: 'Відпочинок'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Їжа'},
    {id: 7, title: 'Фінанси'},
    {id: 8, title: 'Здоров"я'},

  ];

  static priorities: IPriority[] = [
    {id: 1, title: 'низький', color: '#e5e5e5'},
    {id: 2, title: 'середній', color: '#85d1b2'},
    {id: 3, title: 'високий', color: '#f1828d'},
    {id: 4, title: 'першочергове', color: '#f1128d'},
  ];

  static tasks: ITask[] = [
    {
      id: 1,
      title: 'виконати вправу',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2022-09-10')
    },
    {
      id: 2,
      title: 'відпочити',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2022-09-10')
    },
    {
      id: 3,
      title: 'щось інше',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2022-09-10')
    },
    {
      id: 4,
      title: 'щось інше',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2022-09-10')
    },
    {
      id: 5,
      title: 'щось інше',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2022-09-10')
    },
    {
      id: 6,
      title: 'щось інше',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2022-09-10')
    },
    {
      id: 7,
      title: 'виконати вправу',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2022-09-10')
    },
    {
      id: 8,
      title: 'відпочити',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2022-09-10')
    },
    {
      id: 9,
      title: 'щось інше',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2022-09-10')
    },
    {
      id: 10,
      title: 'щось інше',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2022-09-10')
    },
    {
      id: 11,
      title: 'щось інше',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2022-09-10')
    },
    {
      id: 12,
      title: 'щось інше',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2022-09-10')
    }
  ]

}
