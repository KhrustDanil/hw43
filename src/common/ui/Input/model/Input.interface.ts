import { UseFormRegister } from 'react-hook-form';
import { FormValues } from './types';

export interface InputProps {
  placeholder: string;
  type: string;
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error?: string;
}
