import { galleryItems } from './gallery';

describe('galleryItems', () => {
  it('uses the six supplied reference assets in display order', () => {
    expect(galleryItems).toHaveLength(6);
    expect(galleryItems.map((item) => item.sourcePath)).toEqual([
      '/src/assets/references/pink-profile-board.jpg',
      '/src/assets/references/deer-board.jpg',
      '/src/assets/references/mint-style.jpg',
      '/src/assets/references/blue-style.jpg',
      '/src/assets/references/pudding-deposit-board.jpg',
      '/src/assets/references/strawberry-deposit-board.jpg'
    ]);
  });

  it('marks 520r and 666r as deposit boards so they are not treated as profile highlights', () => {
    const depositItems = galleryItems.filter((item) => item.kind === 'deposit');

    expect(depositItems.map((item) => item.depositAmount)).toEqual(['666r', '520r']);
    expect(galleryItems.slice(0, 4).every((item) => item.kind === 'profile')).toBe(true);
  });
});
