import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ImageModal } from './ImageModal';
import { galleryItems } from '../data/gallery';

describe('ImageModal', () => {
  it('shows the selected image and closes from the close button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<ImageModal item={galleryItems[0]} onClose={onClose} />);

    expect(screen.getByRole('dialog', { name: galleryItems[0].title })).toBeInTheDocument();
    expect(screen.getByAltText(galleryItems[0].title)).toHaveAttribute('src', galleryItems[0].src);

    await user.click(screen.getByRole('button', { name: '关闭预览' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
