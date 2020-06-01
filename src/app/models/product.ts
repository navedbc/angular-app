export class Product {

  id: number;
  name: string;
  description: string;
  imageUrl: string;

  constructor(id: number, name: string, description : string, imageUrl: string) {
   this.id = id;
   this.name = name;
   this.description = description;
   this.imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-1eM8Sh1qPnDynaOqiSSyBjN_KFYzVNPOvD7p3l2nSCpSSlxC&usqp=CAU';
  }
}
