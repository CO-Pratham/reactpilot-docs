import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'installation',
    'getting-started',
    {
      type: 'category',
      label: 'Commands',
      items: [
        'commands/analyze',
        'commands/fix',
        'commands/optimize',
        'commands/generate',
        'commands/refactor',
      ],
    },
    {
      type: 'category',
      label: 'Rules',
      items: [
        'rules/unused-import',
        'rules/inline-function-jsx',
        'rules/invalid-hook-usage',
        'rules/large-component',
        'rules/deep-jsx-nesting',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/writing-rules',
        'guides/creating-plugins',
        'guides/integrating-with-ci',
        'guides/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/config',
        'api/json-output',
      ],
    },
    'roadmap',
    'faq',
  ],
};

export default sidebars;
