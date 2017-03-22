import * as React from "react";
import { ColorData } from "../api/color-data";
import { DataProvider } from "../api/data-provider";
import { AddColorFormComponent } from "./add-color-form.component";
import { ColorListComponent } from "./color-list.component";
import { v4 } from "node-uuid";

interface AppState {
  colors: Array<ColorData>;
}

export class AppComponent extends React.Component<any, AppState> {
  constructor() {
    super();
    this.state = { colors: DataProvider.getColors() } as AppState;
    this.onNewColor = this.onNewColor.bind(this);
    this.onRate = this.onRate.bind(this);
    this.onRemoveColor = this.onRemoveColor.bind(this);
  }

  private onNewColor(title: string, color: string) {
    const colors = [...this.state.colors,
    {
            "id": v4(),
            "title": title,
            "color": color,
            "rating": 0
    } as ColorData];
    this.setState({colors});
  }

  private onRate(id: string, rating: number) {
    const colors = this.state.colors.map(color => {
      return (color.id === id) ? {...color, rating} : color;
    });
    this.setState({colors});
  }

  private onRemoveColor(id: string) {
    const colors = this.state.colors.filter(color => color.id !== id);
    this.setState({colors});
  }

  render() {
    return(
      <div>
        <AddColorFormComponent onNewColor={this.onNewColor}/>
        <ColorListComponent colors={this.state.colors} onRate={this.onRate} onRemove={this.onRemoveColor}/>
      </div>
    );
  }
}
