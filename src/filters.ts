import type { FormTemplate } from './templates';
import { templates } from './templates';

export interface TemplateFilter {
  category?: string;
  locale?: string;
  searchTerm?: string;
}

export const filterTemplates = (filter: TemplateFilter): FormTemplate[] => {
  return templates.filter(template => {
    if (filter.category && template.category !== filter.category) {
      return false;
    }
    
    if (filter.locale && template.locale !== filter.locale) {
      return false;
    }
    
    if (filter.searchTerm) {
      const term = filter.searchTerm.toLowerCase();
      return (
        template.name.toLowerCase().includes(term) ||
        template.description.toLowerCase().includes(term)
      );
    }
    
    return true;
  });
};
