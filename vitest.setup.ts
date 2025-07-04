import React from 'react';
import { beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom';

(globalThis as any).React = React;

beforeEach(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
});
