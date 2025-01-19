'use strict';

const createTextControl = (id, label) => ({
    id,
    type: 'text',
    label,
    required: true
});
const templates = [
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

const filterTemplates = (filter) => {
    return templates.filter(template => {
        if (filter.category && template.category !== filter.category) {
            return false;
        }
        if (filter.locale && template.locale !== filter.locale) {
            return false;
        }
        if (filter.searchTerm) {
            const term = filter.searchTerm.toLowerCase();
            return (template.name.toLowerCase().includes(term) ||
                template.description.toLowerCase().includes(term));
        }
        return true;
    });
};

exports.filterTemplates = filterTemplates;
exports.templates = templates;
//# sourceMappingURL=index.cjs.js.map
