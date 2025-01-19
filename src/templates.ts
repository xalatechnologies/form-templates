import type { FormType } from '@xalatechnologies/form-types';
import type { BaseControl } from '@xalatechnologies/form-core';

export interface FormTemplate {
  id: string;
  name: string;
  description: string;
  category: 'business' | 'finance' | 'hr';
  formType: FormType;
  locale: string;
}

const createTextControl = (id: string, label: string): BaseControl => ({
  id,
  type: 'text',
  label,
  required: true
});

export const templates: FormTemplate[] = [
  {
    id: 'business-contact',
    name: 'Business Contact Form',
    description: 'Standard business contact form',
    category: 'business',
    locale: 'en',
    formType: {
      id: 'single',
      type: 'single',
      controls: [
        createTextControl('name', 'Full Name'),
        createTextControl('email', 'Email'),
        createTextControl('company', 'Company'),
        {
          id: 'message',
          type: 'textarea',
          label: 'Message',
          required: true
        }
      ]
    }
  }
];