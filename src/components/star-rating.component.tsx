import * as React from "react";
import { StarComponent } from "./star.component";

export interface StarRatingComponentProps {
  totalStars: number;
  starsSelected: number;
  onRate: (rating: number) => void;
}

export const StarRatingComponent = (props: StarRatingComponentProps) => {
  let arr = [...Array(props.totalStars)];
  let children = arr.map((n, i) =>
          <StarComponent key={i}
            isSelected={ i < props.starsSelected }
            onClick={ () => props.onRate(i+1) }
          />
  );

  return (
    <div className="star-rating">
      {children}
      <p>{props.starsSelected} of {props.totalStars}</p>
    </div>
  );
};
