import { vi } from 'vitest';

export const charactersMock = vi.fn();
export const searchMock = vi.fn();
export const errorMock = vi.fn();

export const mockApiRoot = () => ({
  characters: charactersMock,
  search: searchMock,
  error: errorMock,
});
