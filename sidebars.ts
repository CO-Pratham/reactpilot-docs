import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'installation',
    'getting-started',
    {
      type: 'category',
      label: 'Core Commands',
      items: [
        'commands/features',
        'commands/analyze',
        'commands/fix',
        'commands/auto-fix',
        'commands/ask',
        'commands/review',
        'commands/graph',
        'commands/migrate',
        'commands/plugin',
        'commands/dashboard',
        'commands/optimize',
        'commands/generate',
        'commands/refactor',
      ],
    },
    {
      type: 'category',
      label: 'Guides & Ecosystem',
      items: [
        'guides/pro-waitlist',
        'guides/writing-rules',
        'guides/creating-plugins',
        'guides/integrating-with-ci',
        'guides/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
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
