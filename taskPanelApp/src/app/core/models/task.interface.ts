import { UserInterface } from "./user.interface";

export interface TaskInterface {
  id: string | Number;
  name: string;
  title: string;
  tags: string[];
  user:UserInterface;
  status:'in-progres' | 'completed'| 'wait' //enums
}
