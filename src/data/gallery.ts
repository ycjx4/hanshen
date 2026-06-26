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
    title: '粉色专属档案板',
    caption: '喜点雷点和专属档案都贴在一起',
    src: pinkProfileBoard,
    sourcePath: '/src/assets/references/pink-profile-board.jpg',
    kind: 'profile',
    rotation: -4,
    color: '#ffb6c9'
  },
  {
    id: 'deer',
    title: '奶油小鹿档案板',
    caption: '小鹿、蝴蝶结和奶油纸片',
    src: deerBoard,
    sourcePath: '/src/assets/references/deer-board.jpg',
    kind: 'profile',
    rotation: -5,
    color: '#ffd9a7'
  },
  {
    id: 'mint',
    title: '薄荷风格板卡',
    caption: '薄荷色、格纹和软边框',
    src: mintStyle,
    sourcePath: '/src/assets/references/mint-style.jpg',
    kind: 'profile',
    rotation: -4,
    color: '#b9f0df'
  },
  {
    id: 'blue',
    title: '浅蓝风格板卡',
    caption: '蓝色手账边框和贴纸',
    src: blueStyle,
    sourcePath: '/src/assets/references/blue-style.jpg',
    kind: 'profile',
    rotation: 3,
    color: '#b7dcff'
  },
  {
    id: 'pudding-deposit',
    title: '布丁黄预存板卡',
    caption: '店内预存板卡，不作为个人重点信息',
    src: puddingDepositBoard,
    sourcePath: '/src/assets/references/pudding-deposit-board.jpg',
    kind: 'deposit',
    depositAmount: '666r',
    rotation: -2,
    color: '#ffe08a'
  },
  {
    id: 'strawberry-deposit',
    title: '草莓粉预存板卡',
    caption: '店内预存板卡，不作为个人重点信息',
    src: strawberryDepositBoard,
    sourcePath: '/src/assets/references/strawberry-deposit-board.jpg',
    kind: 'deposit',
    depositAmount: '520r',
    rotation: 4,
    color: '#ff9fba'
  }
];
