import type { DetectionResult, InvisibleCharacterMap } from '../types/advancedDetection';

// Comprehensive list of invisible Unicode characters used for tracking
export const INVISIBLE_CHARACTERS: InvisibleCharacterMap = {
  // Zero-width controls
  ZERO_WIDTH: [
    0x200B, // ZERO WIDTH SPACE
    0x200C, // ZERO WIDTH NON-JOINER
    0x200D, // ZERO WIDTH JOINER
    0x2060, // WORD JOINER
    0xFEFF, // ZERO WIDTH NO-BREAK SPACE (BOM)
  ],
  
  // Bidirectional controls
  BIDI_CONTROLS: [
    0x200E, // LEFT-TO-RIGHT MARK
    0x200F, // RIGHT-TO-LEFT MARK
    0x061C, // ARABIC LETTER MARK
    0x202A, // LEFT-TO-RIGHT EMBEDDING
    0x202B, // RIGHT-TO-LEFT EMBEDDING
    0x202C, // POP DIRECTIONAL FORMATTING
    0x202D, // LEFT-TO-RIGHT OVERRIDE
    0x202E, // RIGHT-TO-LEFT OVERRIDE
    0x2066, // LEFT-TO-RIGHT ISOLATE
    0x2067, // RIGHT-TO-LEFT ISOLATE
    0x2068, // FIRST STRONG ISOLATE
    0x2069, // POP DIRECTIONAL ISOLATE
  ],
  
  // Invisible math operators
  MATH_OPERATORS: [
    0x2061, // FUNCTION APPLICATION
    0x2062, // INVISIBLE TIMES
    0x2063, // INVISIBLE SEPARATOR
    0x2064, // INVISIBLE PLUS
  ],
  
  // Hyphenation controls
  HYPHENATION: [
    0x00AD, // SOFT HYPHEN
  ],
  
  // Variation selectors
  VARIATION_SELECTORS: [
    // Mongolian Free Variation Selectors
    0x180B, 0x180C, 0x180D,
    0x180E, // Mongolian Vowel Separator (deprecated)
    // Standard Variation Selectors (VS1-VS16)
    ...Array.from({ length: 16 }, (_, i) => 0xFE00 + i),
  ],
  
  // Other format controls
  FORMAT_CONTROLS: [
    0x034F, // COMBINING GRAPHEME JOINER
    0xFFF9, // INTERLINEAR ANNOTATION ANCHOR
    0xFFFA, // INTERLINEAR ANNOTATION SEPARATOR
    0xFFFB, // INTERLINEAR ANNOTATION TERMINATOR
  ],
  
  // Shorthand format controls
  SHORTHAND: [
    0x1BCA0, // SHORTHAND FORMAT LETTER OVERLAP
    0x1BCA1, // SHORTHAND FORMAT CONTINUING OVERLAP
    0x1BCA2, // SHORTHAND FORMAT DOWN STEP
    0x1BCA3, // SHORTHAND FORMAT UP STEP
  ],
};

// TAG characters range (for efficient checking)
const TAG_START = 0xE0000;
const TAG_END = 0xE007F;

// Ideographic Variation Selectors range
const IVS_START = 0xE0100;
const IVS_END = 0xE01EF;

// Create a Set for O(1) lookup performance
const invisibleSet = new Set<number>();
Object.values(INVISIBLE_CHARACTERS).forEach(chars => {
  chars.forEach((char: number) => invisibleSet.add(char));
});

// Add TAG and IVS ranges
for (let i = TAG_START; i <= TAG_END; i++) {
  invisibleSet.add(i);
}
for (let i = IVS_START; i <= IVS_END; i++) {
  invisibleSet.add(i);
}

export function detectInvisibleCharacters(text: string): DetectionResult {
  const result: DetectionResult = {
    totalCount: 0,
    categories: {
      ZERO_WIDTH: 0,
      BIDI_CONTROLS: 0,
      MATH_OPERATORS: 0,
      HYPHENATION: 0,
      VARIATION_SELECTORS: 0,
      FORMAT_CONTROLS: 0,
      SHORTHAND: 0,
      TAG_CHARACTERS: 0,
      IVS_CHARACTERS: 0,
    },
    positions: [],
  };

  for (let i = 0; i < text.length; i++) {
    const codePoint = text.codePointAt(i);
    if (!codePoint) continue;

    if (invisibleSet.has(codePoint)) {
      result.totalCount++;
      result.positions.push(i);

      // Categorize the character
      if (codePoint >= TAG_START && codePoint <= TAG_END) {
        result.categories.TAG_CHARACTERS++;
      } else if (codePoint >= IVS_START && codePoint <= IVS_END) {
        result.categories.IVS_CHARACTERS++;
      } else {
        // Check which category it belongs to
        for (const [category, chars] of Object.entries(INVISIBLE_CHARACTERS)) {
          if (chars.includes(codePoint)) {
            result.categories[category as keyof typeof result.categories]++;
            break;
          }
        }
      }
    }

    // Handle surrogate pairs
    if (codePoint > 0xFFFF) {
      i++; // Skip the next code unit as it's part of a surrogate pair
    }
  }

  return result;
}

export function stripInvisibleCharacters(text: string): string {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    const codePoint = text.codePointAt(i);
    if (!codePoint) continue;

    // Skip if it's an invisible character
    if (!invisibleSet.has(codePoint)) {
      result += text[i];
      // Add the second part of surrogate pair if needed
      if (codePoint > 0xFFFF && i + 1 < text.length) {
        i++;
        result += text[i];
      }
    } else if (codePoint > 0xFFFF) {
      // Skip the second part of surrogate pair for invisible characters
      i++;
    }
  }

  return result;
}

// Create regex for alternative implementation (useful for web)
export function createInvisibleRegex(): RegExp {
  // Build regex pattern for all invisible characters
  const ranges: string[] = [];
  
  // Add individual characters and small ranges
  ranges.push('\\u00AD'); // SOFT HYPHEN
  ranges.push('\\u034F'); // COMBINING GRAPHEME JOINER
  ranges.push('\\u061C'); // ARABIC LETTER MARK
  ranges.push('\\u180B-\\u180E'); // Mongolian selectors
  ranges.push('\\u200B-\\u200F'); // Zero-width and marks
  ranges.push('\\u202A-\\u202E'); // Bidi controls
  ranges.push('\\u2060-\\u2064'); // Word joiner and invisible math
  ranges.push('\\u2066-\\u2069'); // Bidi isolates
  ranges.push('\\uFE00-\\uFE0F'); // Variation selectors
  ranges.push('\\uFEFF'); // BOM
  ranges.push('\\uFFF9-\\uFFFB'); // Annotation controls
  
  // Use Unicode property escapes for supplementary planes
  const pattern = `[${ranges.join('')}]|[\\u{E0000}-\\u{E007F}]|[\\u{E0100}-\\u{E01EF}]|[\\u{1BCA0}-\\u{1BCA3}]`;
  
  return new RegExp(pattern, 'gu');
}

// Export regex for convenience
export const INVISIBLE_REGEX = createInvisibleRegex();
