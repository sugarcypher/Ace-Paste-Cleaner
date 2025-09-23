// Preset Packs for Ace Paste Cleaner
// These presets are unlocked based on user's upsell features

export interface PresetPack {
  id: string;
  name: string;
  description: string;
  category: 'cms' | 'writing' | 'development' | 'team';
  upsellRequired: string; // Which upsell unlocks this pack
  presets: CleaningPreset[];
}

export interface CleaningPreset {
  id: string;
  name: string;
  description: string;
  options: CleaningOptions;
  icon: string;
  tags: string[];
}

export interface CleaningOptions {
  removeInvisible: boolean;
  keepVS16Emoji: boolean;
  preserveEmoji: boolean;
  stripMarkdownHeaders: boolean;
  stripBoldItalic: boolean;
  stripBackticks: boolean;
  stripEmDashSeparators: boolean;
  stripListMarkers: boolean;
  stripBlockquotes: boolean;
  normalizeWhitespace: boolean;
  collapseBlankLines: boolean;
  removeUrls: boolean;
  removeEmailAddresses: boolean;
  removePhoneNumbers: boolean;
  removeTimestamps: boolean;
  removeSpecialCharacters: boolean;
  removeExtraPunctuation: boolean;
  removeRepeatedWords: boolean;
  removeEmptyLines: boolean;
  removeTrailingSpaces: boolean;
  removeLeadingSpaces: boolean;
}

// Pro Preset Pack - CMS-focused
export const PRO_PRESET_PACK: PresetPack = {
  id: 'pro_preset_pack',
  name: 'Pro Preset Pack',
  description: 'CMS-focused presets for WordPress, Notion, Substack, and HubSpot',
  category: 'cms',
  upsellRequired: 'pro_preset_pack',
  presets: [
    {
      id: 'wordpress',
      name: 'WordPress Optimized',
      description: 'Perfect for WordPress posts and pages',
      icon: '📝',
      tags: ['wordpress', 'cms', 'blog'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: true,
        stripBoldItalic: true,
        stripBackticks: true,
        stripEmDashSeparators: true,
        stripListMarkers: false, // Keep list markers for WP
        stripBlockquotes: false, // Keep blockquotes for WP
        normalizeWhitespace: true,
        collapseBlankLines: true,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: true,
        removeRepeatedWords: true,
        removeEmptyLines: true,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    },
    {
      id: 'notion',
      name: 'Notion Ready',
      description: 'Optimized for Notion pages and databases',
      icon: '📋',
      tags: ['notion', 'cms', 'database'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: false, // Keep headers for Notion
        stripBoldItalic: false, // Keep formatting for Notion
        stripBackticks: false, // Keep code blocks for Notion
        stripEmDashSeparators: true,
        stripListMarkers: false, // Keep list markers for Notion
        stripBlockquotes: false, // Keep blockquotes for Notion
        normalizeWhitespace: true,
        collapseBlankLines: false, // Notion handles spacing
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: false,
        removeRepeatedWords: true,
        removeEmptyLines: false,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    },
    {
      id: 'substack',
      name: 'Substack Styled',
      description: 'Perfect for Substack newsletters and posts',
      icon: '📰',
      tags: ['substack', 'newsletter', 'email'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: true,
        stripBoldItalic: false, // Keep formatting for newsletters
        stripBackticks: true,
        stripEmDashSeparators: true,
        stripListMarkers: false, // Keep list markers for newsletters
        stripBlockquotes: false, // Keep blockquotes for newsletters
        normalizeWhitespace: true,
        collapseBlankLines: true,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: true,
        removeRepeatedWords: true,
        removeEmptyLines: true,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    },
    {
      id: 'hubspot',
      name: 'HubSpot CRM',
      description: 'Optimized for HubSpot CRM and marketing content',
      icon: '🎯',
      tags: ['hubspot', 'crm', 'marketing'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: true,
        stripBoldItalic: true,
        stripBackticks: true,
        stripEmDashSeparators: true,
        stripListMarkers: true,
        stripBlockquotes: true,
        normalizeWhitespace: true,
        collapseBlankLines: true,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: true,
        removeRepeatedWords: true,
        removeEmptyLines: true,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    }
  ]
};

// Writers' Toolkit - Writing-focused
export const WRITERS_TOOLKIT: PresetPack = {
  id: 'writers_toolkit',
  name: 'Writers\' Toolkit',
  description: 'Style-safe cleaning and writing optimization',
  category: 'writing',
  upsellRequired: 'writers_toolkit',
  presets: [
    {
      id: 'academic',
      name: 'Academic Writing',
      description: 'Perfect for academic papers and research',
      icon: '🎓',
      tags: ['academic', 'research', 'formal'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: false, // Academic writing doesn't use emoji
        preserveEmoji: false,
        stripMarkdownHeaders: true,
        stripBoldItalic: true,
        stripBackticks: true,
        stripEmDashSeparators: true,
        stripListMarkers: true,
        stripBlockquotes: true,
        normalizeWhitespace: true,
        collapseBlankLines: true,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: true,
        removeRepeatedWords: true,
        removeEmptyLines: true,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    },
    {
      id: 'creative',
      name: 'Creative Writing',
      description: 'Preserves creative elements and style',
      icon: '✍️',
      tags: ['creative', 'fiction', 'style'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: true,
        stripBoldItalic: false, // Keep creative formatting
        stripBackticks: true,
        stripEmDashSeparators: false, // Keep creative dashes
        stripListMarkers: true,
        stripBlockquotes: false, // Keep creative quotes
        normalizeWhitespace: true,
        collapseBlankLines: false, // Preserve creative spacing
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: false, // Keep creative punctuation
        removeRepeatedWords: false, // Keep creative repetition
        removeEmptyLines: false,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    },
    {
      id: 'journalism',
      name: 'Journalism',
      description: 'News articles and journalistic writing',
      icon: '📰',
      tags: ['journalism', 'news', 'article'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: false,
        preserveEmoji: false,
        stripMarkdownHeaders: true,
        stripBoldItalic: true,
        stripBackticks: true,
        stripEmDashSeparators: true,
        stripListMarkers: true,
        stripBlockquotes: true,
        normalizeWhitespace: true,
        collapseBlankLines: true,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: true,
        removeRepeatedWords: true,
        removeEmptyLines: true,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    },
    {
      id: 'blog',
      name: 'Blog Post',
      description: 'Optimized for blog posts and articles',
      icon: '📝',
      tags: ['blog', 'article', 'web'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: false, // Keep headers for blogs
        stripBoldItalic: false, // Keep formatting for blogs
        stripBackticks: false, // Keep code blocks for blogs
        stripEmDashSeparators: true,
        stripListMarkers: false, // Keep list markers for blogs
        stripBlockquotes: false, // Keep blockquotes for blogs
        normalizeWhitespace: true,
        collapseBlankLines: true,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: true,
        removeRepeatedWords: true,
        removeEmptyLines: true,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    }
  ]
};

// Dev Mode - Development-focused
export const DEV_MODE: PresetPack = {
  id: 'dev_mode',
  name: 'Dev Mode',
  description: 'Preserve code fences, tabs/spaces, escape sequences',
  category: 'development',
  upsellRequired: 'dev_mode',
  presets: [
    {
      id: 'code_preservation',
      name: 'Code Preservation',
      description: 'Preserves all code formatting and structure',
      icon: '💻',
      tags: ['code', 'programming', 'preserve'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: true,
        stripBoldItalic: true,
        stripBackticks: false, // Preserve code blocks
        stripEmDashSeparators: true,
        stripListMarkers: true,
        stripBlockquotes: true,
        normalizeWhitespace: false, // Preserve whitespace in code
        collapseBlankLines: false, // Preserve blank lines in code
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false, // Preserve special chars in code
        removeExtraPunctuation: false, // Preserve punctuation in code
        removeRepeatedWords: false, // Preserve repeated words in code
        removeEmptyLines: false, // Preserve empty lines in code
        removeTrailingSpaces: false, // Preserve trailing spaces in code
        removeLeadingSpaces: false // Preserve leading spaces in code
      }
    },
    {
      id: 'json_xml',
      name: 'JSON/XML',
      description: 'Perfect for JSON and XML data',
      icon: '📄',
      tags: ['json', 'xml', 'data'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: false,
        preserveEmoji: false,
        stripMarkdownHeaders: true,
        stripBoldItalic: true,
        stripBackticks: true,
        stripEmDashSeparators: true,
        stripListMarkers: true,
        stripBlockquotes: true,
        normalizeWhitespace: false, // Preserve JSON/XML formatting
        collapseBlankLines: false,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: false,
        removeRepeatedWords: false,
        removeEmptyLines: false,
        removeTrailingSpaces: false,
        removeLeadingSpaces: false
      }
    },
    {
      id: 'config_files',
      name: 'Config Files',
      description: 'Configuration files and scripts',
      icon: '⚙️',
      tags: ['config', 'script', 'settings'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: false,
        preserveEmoji: false,
        stripMarkdownHeaders: true,
        stripBoldItalic: true,
        stripBackticks: true,
        stripEmDashSeparators: true,
        stripListMarkers: true,
        stripBlockquotes: true,
        normalizeWhitespace: false, // Preserve config formatting
        collapseBlankLines: false,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: false,
        removeRepeatedWords: false,
        removeEmptyLines: false,
        removeTrailingSpaces: false,
        removeLeadingSpaces: false
      }
    },
    {
      id: 'documentation',
      name: 'Documentation',
      description: 'Code documentation and README files',
      icon: '📚',
      tags: ['docs', 'readme', 'documentation'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: false, // Keep headers in docs
        stripBoldItalic: false, // Keep formatting in docs
        stripBackticks: false, // Keep code blocks in docs
        stripEmDashSeparators: true,
        stripListMarkers: false, // Keep list markers in docs
        stripBlockquotes: false, // Keep blockquotes in docs
        normalizeWhitespace: true,
        collapseBlankLines: true,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: true,
        removeRepeatedWords: true,
        removeEmptyLines: true,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    }
  ]
};

// Team License - Team-focused
export const TEAM_LICENSE: PresetPack = {
  id: 'team_license',
  name: 'Team License',
  description: 'Shared preset pack + priority support',
  category: 'team',
  upsellRequired: 'team_license',
  presets: [
    {
      id: 'team_standard',
      name: 'Team Standard',
      description: 'Standard team cleaning preset',
      icon: '👥',
      tags: ['team', 'standard', 'shared'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: true,
        stripBoldItalic: true,
        stripBackticks: true,
        stripEmDashSeparators: true,
        stripListMarkers: true,
        stripBlockquotes: true,
        normalizeWhitespace: true,
        collapseBlankLines: true,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: true,
        removeRepeatedWords: true,
        removeEmptyLines: true,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    },
    {
      id: 'team_collaboration',
      name: 'Team Collaboration',
      description: 'Optimized for team collaboration',
      icon: '🤝',
      tags: ['team', 'collaboration', 'shared'],
      options: {
        removeInvisible: true,
        keepVS16Emoji: true,
        preserveEmoji: true,
        stripMarkdownHeaders: false, // Keep headers for collaboration
        stripBoldItalic: false, // Keep formatting for collaboration
        stripBackticks: false, // Keep code blocks for collaboration
        stripEmDashSeparators: true,
        stripListMarkers: false, // Keep list markers for collaboration
        stripBlockquotes: false, // Keep blockquotes for collaboration
        normalizeWhitespace: true,
        collapseBlankLines: true,
        removeUrls: false,
        removeEmailAddresses: false,
        removePhoneNumbers: false,
        removeTimestamps: false,
        removeSpecialCharacters: false,
        removeExtraPunctuation: true,
        removeRepeatedWords: true,
        removeEmptyLines: true,
        removeTrailingSpaces: true,
        removeLeadingSpaces: true
      }
    }
  ]
};

// All preset packs
export const ALL_PRESET_PACKS: PresetPack[] = [
  PRO_PRESET_PACK,
  WRITERS_TOOLKIT,
  DEV_MODE,
  TEAM_LICENSE
];

// Helper function to get presets by upsell
export function getPresetsByUpsell(upsellId: string): PresetPack | null {
  return ALL_PRESET_PACKS.find(pack => pack.upsellRequired === upsellId) || null;
}

// Helper function to get all available presets for user
export function getAvailablePresets(userUpsells: string[]): CleaningPreset[] {
  const availablePresets: CleaningPreset[] = [];
  
  ALL_PRESET_PACKS.forEach(pack => {
    if (userUpsells.includes(pack.upsellRequired)) {
      availablePresets.push(...pack.presets);
    }
  });
  
  return availablePresets;
}
