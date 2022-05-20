import { Ref } from "vue";

export interface IPositionInfo {
  x: number;
  y: number;
  height: number;
  width: number;
}

export type TArrow = "top" | "bottom" | "left" | "right";

export type TPopover = Ref<null | HTMLElement>;
