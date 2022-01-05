import React from "react";
import "xp.css/dist/XP.css";

interface WindowProps {
  id?: string;
  children: React.ReactNode;
}

export const Window = (props: WindowProps) => (
  <div className={"window"} id={props.id || "window-with-title-bar"}>
    {props.children}
  </div>
);

interface WindowBodyProps {
  children: React.ReactNode;
}
export const WindowBody = (props: WindowBodyProps) => (
  <div className={"window-body"}>{props.children}</div>
);

interface TitleBarProps {
  onCloseClick?: () => {};
  onMaximizeClick?: () => {};
  onMinimizeClick?: () => {};
  text: string;
}

export const TitleBar = (props: TitleBarProps) => (
  <div className="title-bar">
    <div className="title-bar-text">{props.text}</div>

    <div className="title-bar-controls">
      <button aria-label="Minimize" onClick={props.onMinimizeClick} />
      <button aria-label="Maximize" onClick={props.onMaximizeClick} />
      <button aria-label="Close" onClick={props.onCloseClick} />
    </div>
  </div>
);

type WindowWithTitleBarProps = TitleBarProps & WindowBodyProps & WindowProps;

export const WindowWithTitleBar = (props: WindowWithTitleBarProps) => (
  <Window id={props.id}>
    <TitleBar text={props.text} />
    <WindowBody>{props.children}</WindowBody>
  </Window>
);
