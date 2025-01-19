import type { FormType } from '@xalatechnologies/form-types';
export interface FormTemplate {
    id: string;
    name: string;
    description: string;
    category: 'business' | 'finance' | 'hr';
    formType: FormType;
    locale: string;
}
export declare const templates: FormTemplate[];
//# sourceMappingURL=templates.d.ts.map