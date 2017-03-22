import * as React from "react";
import { ColorData } from "../api/color-data";
import { ColorComponent } from "./color.component";

export interface ColorListComponentProps {
  colors: Array<ColorData>;
  onRemove: (id: string)=> void;
  onRate: (id: string, rating: number) => void;
}

export const ColorListComponent = (props: ColorListComponentProps) => {
  return (
    <div>
      {
        (props.colors.length === 0)
        ? <p>No colors listed. (Add a color)</p>
        : props.colors.map((color, i) =>
          <ColorComponent key={i}
            colorData={color}
            onRemove={() => props.onRemove(color.id)}
            onRate={(rating: number) => props.onRate(color.id, rating)}/>)
      }
    </div>
  );
};
