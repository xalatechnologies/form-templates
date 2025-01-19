# @xalatechnologies/form-templates

Pre-built form templates for common use cases in the Fylleut form system.

## Installation

```bash
npm install @xalatechnologies/form-templates
```

## Features

- Business form templates
- Finance form templates
- HR form templates
- Localized templates
- Template filtering utilities

## Usage

```typescript
import { filterTemplates } from '@xalatechnologies/form-templates';

// Find all business templates in English
const businessTemplates = filterTemplates({
  category: 'business',
  locale: 'en'
});

// Search templates by keyword
const contactForms = filterTemplates({
  searchTerm: 'contact form'
});
```

## Documentation

For detailed documentation, visit our [documentation site](https://docs.fylleut.com/packages/form-templates).

## License

MIT
