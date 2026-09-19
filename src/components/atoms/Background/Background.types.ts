import type { ReactNode } from 'react';

export type BackgroundType = 'gradient' | 'dotted';

export interface BackgroundProps {
  /** Visual recipe. Defaults to `gradient`. */
  type?: BackgroundType;
  /**
   * Type-specific color list.
   * - `gradient`: gradient stops (any length ≥ 2 recommended)
   * - `dotted`: `[fill, dots]` (first = field, second = dot color)
   */
  colors: string[];
  /** When true, `colors` / `vignetteColor` are raw CSS colors (e.g. hex); otherwise token names (`pio-bg-light`). */
  isHexColors: boolean;
  children?: ReactNode;
  className?: string;
  rounded?: boolean;
  /** `dotted` only: fade the dots toward the edges. Default `false`. */
  vignette?: boolean;
  /**
   * `dotted` only: edge fade color. When omitted, uses `colors[0]` (the fill).
   */
  vignetteColor?: string;
}
