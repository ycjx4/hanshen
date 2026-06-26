import { depositCards, heroProfile } from './profile';

describe('heroProfile', () => {
  it('does not promote deposit amounts as primary hero badges', () => {
    expect(heroProfile.badges).not.toContain('520r');
    expect(heroProfile.badges).not.toContain('666r');
    expect(depositCards).toEqual(['520r', '666r']);
  });
});
