import { UseFormRegister } from 'react-hook-form';
import { FormValues } from './types';


export interface TextAreaProps {
  placeholder: string;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error?: string;
}
