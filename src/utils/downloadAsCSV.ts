import type { Character } from '@/api/types';

function downloadAsCSV(characters: Character[]) {
  const header = ['id', 'name', 'status', 'species', 'gender', 'origin', 'type'];
  const rows = characters.map((character) => [
    character.id,
    character.name,
    character.status,
    character.species,
    character.gender,
    character.origin.name,
    character.type || 'common',
  ]);

  const csvContent = [header, ...rows]
    .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const filename = `${characters.length}_items.csv`;

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
}

export default downloadAsCSV;
