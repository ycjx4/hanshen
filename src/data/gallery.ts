import pinkProfileBoard from '../assets/references/pink-profile-board.jpg';
import deerBoard from '../assets/references/deer-board.jpg';
import mintStyle from '../assets/references/mint-style.jpg';
import blueStyle from '../assets/references/blue-style.jpg';
import puddingDepositBoard from '../assets/references/pudding-deposit-board.jpg';
import strawberryDepositBoard from '../assets/references/strawberry-deposit-board.jpg';

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  src: string;
  sourcePath: string;
  kind: 'profile' | 'deposit';
  depositAmount?: '520r' | '666r';
  rotation: number;
  color: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'pink-profile',
    title: 'pink',
    caption: '喜点和雷点',
    src: pinkProfileBoard,
    sourcePath: '/src/assets/references/pink-profile-board.jpg',
    kind: 'profile',
    rotation: -4,
    color: '#ffb6c9'
  },
  {
    id: 'deer',
    title: 'brown',
    caption: '小鹿',
    src: deerBoard,
    sourcePath: '/src/assets/references/deer-board.jpg',
    kind: 'profile',
    rotation: -5,
    color: '#ffd9a7'
  },
  {
    id: 'mint',
    title: 'mint',
    caption: '薄荷',
    src: mintStyle,
    sourcePath: '/src/assets/references/mint-style.jpg',
    kind: 'profile',
    rotation: -4,
    color: '#b9f0df'
  },
  {
    id: 'blue',
    title: 'blue',
    caption: '宅',
    src: blueStyle,
    sourcePath: '/src/assets/references/blue-style.jpg',
    kind: 'profile',
    rotation: 3,
    color: '#b7dcff'
  },
  {
    id: 'pudding-deposit',
    title: 'yellow',
    caption: '店内预存板卡',
    src: puddingDepositBoard,
    sourcePath: '/src/assets/references/pudding-deposit-board.jpg',
    kind: 'deposit',
    depositAmount: '666r',
    rotation: -2,
    color: '#ffe08a'
  },
  {
    id: 'strawberry-deposit',
    title: 'strawberry',
    caption: '店内预存板卡',
    src: strawberryDepositBoard,
    sourcePath: '/src/assets/references/strawberry-deposit-board.jpg',
    kind: 'deposit',
    depositAmount: '520r',
    rotation: 4,
    color: '#ff9fba'
  }
];
