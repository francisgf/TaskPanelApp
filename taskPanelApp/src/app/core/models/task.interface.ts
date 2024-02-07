import { UserInterface } from "./user.interfaceNode";

export interface TaskInterface {
  id: string | number;
  name: string;
  title: string;
  tags: string[];
  user:UserInterface;
  status:'in-progres' | 'completed'| 'wait' //enums
}
