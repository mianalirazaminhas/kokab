/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SlideData {
  id: string;
  slideIndex: number; // e.g. 1
  pageNumberStr: string; // e.g. "01/26"
  title: string;
  category?: string;
  description?: string;
  bulletPoints?: string[];
  imageSeed?: string;
}

export interface PillarData {
  id: string;
  number: string; // e.g. "01"
  name: string;
  arabicName?: string;
  description: string;
  highlights: string[];
  visualType: string; // "list" | "grid" | "stats" | "lab" etc.
}

export interface CapacityItem {
  id: number;
  sn: number;
  description: string;
  qty: number;
  capacity: string;
  isUpcoming?: boolean;
}
