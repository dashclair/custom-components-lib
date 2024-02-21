export interface TextFieldTypes {
    id:string;
    variant: 'outlined' | 'filled' | 'standart'
    label:string;
    type:string;
    value:string;
    className:string;
    error:boolean;
    disabled:boolean;
    required:boolean;
    onBlur:() => void;
    onChange:() => void;
    
}