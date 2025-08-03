import { vi, it, expect, beforeEach, afterEach } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';
import downloadAsCSV from '@/utils/downloadAsCSV';

const mockBlob = vi.fn();
const mockCreateObjectURL = vi.fn().mockReturnValue('blob:url');
const mockClick = vi.fn();

beforeEach(() => {
  vi.stubGlobal('Blob', mockBlob);
  vi.stubGlobal('URL', { createObjectURL: mockCreateObjectURL });

  vi.spyOn(document, 'createElement').mockImplementation(
    () =>
      ({
        href: '',
        download: '',
        click: mockClick,
      }) as unknown as HTMLAnchorElement
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

it('Should generate and download a CSV file', () => {
  downloadAsCSV(characterMock);

  expect(mockBlob).toHaveBeenCalledTimes(1);
  const csvContent = mockBlob.mock.calls[0][0][0] as string;

  const [rick, morty] = characterMock;

  expect(csvContent).toContain('"id","name","status","species","gender","origin","type"');
  expect(csvContent).toContain(
    `"${rick.id}","${rick.name}","${rick.status}","${rick.species}","${rick.gender}","${rick.origin.name}","${rick.type || 'common'}"`
  );
  expect(csvContent).toContain(
    `"${morty.id}","${morty.name}","${morty.status}","${morty.species}","${morty.gender}","${morty.origin.name}","${morty.type || 'common'}"`
  );

  expect(mockCreateObjectURL).toHaveBeenCalledTimes(1);
  expect(mockClick).toHaveBeenCalled();
});
