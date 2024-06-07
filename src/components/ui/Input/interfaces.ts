import { ComponentProps, ReactElement } from "react";

export type RootProps = ComponentProps<"div">;
export type LabelProps = ComponentProps<"label"> & {
  labelText: string; // Label text
  srOnly?: boolean; // Label text visible only to screen reader
  children: ReactElement;
};
export type ContainerProps = ComponentProps<"div">;
export type ControlProps = ComponentProps<"input">;
export type SuffixProps = ComponentProps<"div"> & {
  children: ReactElement;
};
