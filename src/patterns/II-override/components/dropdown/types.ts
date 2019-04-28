interface DropdownOptionT {
  [key: string]: any;
}

interface DropdownOptionChildrenT extends DropdownOptionT {
  options: DropdownOptionT[];
}

export type DropdownOptionsT = Array<DropdownOptionT | DropdownOptionChildrenT>;
