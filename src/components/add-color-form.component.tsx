import * as React from "react";

export interface AddColorFormComponentProps {
  onNewColor: (title: string, _color: string) => void;
}

export const AddColorFormComponent = (props: AddColorFormComponentProps) => {
  let _titleElement: HTMLInputElement, _colorElement: HTMLInputElement;
  const submit = (e: any) => {
    e.preventDefault();
    props.onNewColor(_titleElement.value, _colorElement.value);
    _titleElement.value = "";
    _colorElement.value = "#000000";
    _titleElement.focus();
  };

  return (
      <form onSubmit={submit}>
        <input ref={input => _titleElement = input} type="text" placeholder="color title..." required/>
        <input ref={input => _colorElement = input} type="color" required />
        <button>ADD</button>
      </form>
  );
};
