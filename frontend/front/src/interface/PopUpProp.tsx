export interface PopUpProp {
    onConfirm: () => void;
    onCancel: () => void;
    textInConfirm: JSX.Element,
    textInCancel: JSX.Element
}