import * as React from "react";

export interface StarComponentProps {
  isSelected: boolean;
  onClick: () => void;
}

export const StarComponent = (props: StarComponentProps) => {
  return(
      <div className={(props.isSelected) ? "star selected" : "star" }
          onClick={props.onClick}>
      </div>
    );
};
