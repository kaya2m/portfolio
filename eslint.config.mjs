import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Logos and icons come from a CDN with explicit width/height; next/image
      // would add a proxy hop without a layout benefit here.
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
