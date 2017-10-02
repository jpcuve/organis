export interface TreeNamedNode {
  id: string;
  parentId?: string;
  name: string;
  children?: TreeNamedNode[];
}
