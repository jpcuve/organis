
import {TreeNamedNode} from "./domain/TreeNamedNode";

export interface Person {
  id: number;
  name: string;
}

export interface Domain {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
}

export interface Role extends TreeNamedNode {
  splitDomain: string;
}

export interface Territory extends TreeNamedNode {
}

export class Manager {
  constructor(public name: string, public sex: string) {
  }
}
