import * as React from "react";
import { ColorData } from "../api/color-data";
import { StarRatingComponent } from "./star-rating.component";

export interface ColorComponentProps {
  colorData: ColorData;
  onRemove: () => void;
  onRate: (rating: number) => void;
}

export const ColorComponent = (props: ColorComponentProps) => {
  return (
    <section className="color-container">
      <h1>{props.colorData.title}</h1>
      <div className="color" style={{backgroundColor: props.colorData.color}}></div>
      <div>
        <StarRatingComponent starsSelected={props.colorData.rating}
          totalStars={5}
          onRate={props.onRate}/>
      </div>
      <button onClick={props.onRemove}>Remove</button>
    </section>
  );
};
