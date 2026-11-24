// Static content for the portfolio. Edit text here, not in the components.

// Logos are plain .svg files in src/assets/logos and are rendered with <img>,
// so they can never run scripts (safer than injecting raw SVG markup).
const logoFiles = import.meta.glob('./assets/logos/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});
export const logo = (key) => logoFiles[`./assets/logos/${key}.svg`];

// Split so the address isn't sitting in the page source as one plain string.
export const EMAIL = ['kjcmartinez.misc', 'gmail.com'].join('@');
export const GITHUB_URL = 'https://github.com/kjcmartinezmisc-dev';
export const LINKEDIN_URL = 'https://linkedin.com/in/karlo-joseph-martinez';

// [name, logoKey, isLearning?]
export const STACK = [
  {
    t: "Main Stacks", d: "The core of my work for the past 10+ years.", c: "#5B4BD6",
    items: [
    ["WPF C#", "csharp"],
    [".NET", "dotnet"],
    ["Microsoft SQL Server", "sql"],
    ["Crystal Reports", "crystal"],
    ["Swift", "swift"],
    ["SwiftUI", "swiftui", 1],
    ["Objective-C", "objc"],
    ],
  },
  {
    t: "Integrations & APIs", d: "Connecting stores, couriers, and payment providers.", c: "#0B7285",
    items: [
    ["Shopify", "shopify"],
    ["ShippIT", "shippit"],
    ["StarShipIT", "starshipit"],
    ["Linkly", "linkly"],
    ["Tyro", "tyro"],
    ["Windcave", "windcave"],
    ["Klaviyo", "klaviyo"],
    ["Loyalty Lion", "loyaltylion"],
    ["Yotpo", "yotpo"],
    ["Omneo", "omneo"],
    ],
  },
  {
    t: "Tools & delivery", d: "How I ship and maintain code.", c: "#2B8A3E",
    items: [
    ["Git & GitHub", "git"],
    ["Azure DevOps Server", "azuredevops"],
    ["Postman", "postman"],
    ["Xcode", "xcode"],
    ["VS Code", "vscode"],
    ["Visual Studio", "vs"],
    ],
  },
  {
    t: "AI automation", d: "Workflow automation for small businesses and agencies.", c: "#C2255C",
    items: [
    ["n8n", "n8n", 1],
    ["Make", "make", 1],
    ["GoHighLevel", "ghl", 1],
    ["Claude", "claude"],
    ["GitHub Copilot", "copilot"],
    ["Codex", "codex"],
    ["Devin", "devin"],
    ],
  },
];

// Project groups, rendered in this order. Reorder entries here to swap sections.
export const PROJECT_GROUPS = [
  {
    id: 'ai-automation',
    title: 'AI automation',
    sub: 'Workflow prototypes built with n8n and LLMs, tested on mock data.',
  },
  {
    id: 'production',
    title: 'Production work',
    sub: 'Systems used by real businesses across local and international markets.',
  },
];

// To add a project, append one object here with a `group` matching a
// PROJECT_GROUPS id above. First link renders as the primary button.
export const PROJECTS = [
  {
    id: 'order-exception-triage',
    group: 'ai-automation',
    title: 'AI Order Exception Triage',
    status: 'Prototype',
    pitch:
      'An AI first pass on courier shipping exceptions. It classifies each event, drafts the customer message, and alerts the ops team only when a human needs to act.',
    details: [
      'Unclear, missing-data, or suspicious cases are escalated to a person instead of being dropped.',
      'Ignores instructions hidden in courier messages (prompt-injection handling).',
      'Every case is written to an audit trail.',
      'Built and tested on mock courier payloads, not connected to live courier accounts.',
    ],
    tags: ['n8n', 'Gemini', 'Webhooks', 'Discord', 'Prompt-injection handling'],
    links: [
      { label: 'Watch demo', href: 'https://www.loom.com/share/389cbf8599284334b7d6d7430ac2e7c2' },
      { label: 'View on GitHub', href: 'https://github.com/kjcmartinezmisc-dev/n8n-order-exception-triage' },
    ],
  },
  {
    id: 'pos-platform',
    group: 'production',
    title: 'Enterprise Point-of-Sale platform',
    pitch:
      'A cross-platform POS for Windows and iOS used by retail stores. It takes secure card payments through Australian banking APIs and keeps stock in sync with Shopify.',
    details: [
      'Built with MVVM and MVC, with unit tests covering the payment and inventory modules.',
    ],
    tags: ['C#', 'WPF', 'ASP.NET', 'SQL Server', 'iOS', 'Shopify API'],
    links: [],
  },
  {
    id: 'pick-pack-app',
    group: 'production',
    title: 'Pick & Pack warehouse mobile app',
    pitch:
      'A native iOS app for warehouse staff to pick, pack, and dispatch orders. It talks to several courier APIs for live dispatch and tracking.',
    details: [
      'Reusable components make it quick to add features and cheap to maintain.',
    ],
    tags: ['Swift', 'iOS SDK', 'REST APIs', 'MVVM'],
    links: [],
  },
  {
    id: 'shipping-integration',
    group: 'production',
    title: 'Multi-carrier shipping integration',
    pitch:
      'Automated order fulfillment for fashion retail clients by connecting their systems to ShippIT and StarShipIT.',
    details: [
      'Scheduled background jobs and event triggers cut out manual logistics work.',
    ],
    tags: ['ShippIT', 'StarShipIT', 'REST', 'CRON jobs'],
    links: [],
  },
];
