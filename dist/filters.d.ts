import type { FormTemplate } from './templates';
export interface TemplateFilter {
    category?: string;
    locale?: string;
    searchTerm?: string;
}
export declare const filterTemplates: (filter: TemplateFilter) => FormTemplate[];
//# sourceMappingURL=filters.d.ts.map