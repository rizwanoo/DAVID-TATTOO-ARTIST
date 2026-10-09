import { TattooWork } from '../types';

export const TATTOO_PORTFOLIO: TattooWork[] = [
  {
    id: 'david-medusa-realism',
    title: 'Medusa Serpent & Dark Realism',
    category: 'realism',
    categoryLabel: 'Realism',
    image: '/david_original/tattoo-02.jpg',
    placement: 'Upper Arm / Deltoid',
    description: 'Detailed mythological portraiture of Medusa with intricate snake coils, hyper-fine skin gradients, and piercing focal realism.',
    aspect: 'portrait',
    instagramPostUrl: 'https://www.instagram.com/p/DdrJKPzKM6D/'
  },
  {
    id: 'david-award-horror',
    title: 'Horror & Dark Art (2nd Place Winner)',
    category: 'gothic',
    categoryLabel: 'Gothic / Horror',
    image: '/david_original/tattoo-04.jpg',
    placement: 'Arm / Leg',
    description: 'Award-winning competition entry taking 2nd place in the Horror Category. Uncompromising dark art detailing, deep shadow saturation, and macabre atmosphere.',
    aspect: 'tall',
    instagramPostUrl: 'https://www.instagram.com/p/DdT-zfpNFCx/',
    isAward: true
  },
  {
    id: 'david-blackwork-arm-01',
    title: 'Heavy Blackwork & Stipple Flow',
    category: 'blackwork',
    categoryLabel: 'Blackwork',
    image: '/david_original/tattoo-01.jpg',
    placement: 'Arm / Full Sleeve',
    description: 'Original high-contrast blackwork by David featuring deep dark tones, smooth stipple gradients, and anatomical muscle alignment.',
    aspect: 'portrait',
    instagramPostUrl: 'https://www.instagram.com/p/Dd7y-o1sTCk/'
  },
  {
    id: 'david-san-judas-realism',
    title: 'San Judas Tadeo Sacred Realism',
    category: 'realism',
    categoryLabel: 'Realism',
    image: '/david_original/tattoo-08.jpg',
    placement: 'Arm / Outer Sleeve',
    description: 'Iconic sacred portrait of San Judas Tadeo rendered with renaissance chiaroscuro depth, realistic garment folds, and sacred reverence.',
    aspect: 'tall',
    instagramPostUrl: 'https://www.instagram.com/p/DUGb1xnjR68/'
  },
  {
    id: 'david-process-video-piece',
    title: 'Tattoo Process & Studio Reel',
    category: 'realism',
    categoryLabel: 'Process Reel',
    image: '/david_original/david-process-video.jpg',
    placement: 'Studio Work in Progress',
    description: 'David in active session: high-precision needle action, specialized gray wash blending, and dedicated focus on client skin art.',
    aspect: 'portrait',
    instagramPostUrl: 'https://www.instagram.com/p/DbXB9OhsSdG/',
    isVideo: true
  },
  {
    id: 'david-coverup-transformation',
    title: 'Master Coverup & Transformation',
    category: 'blackwork',
    categoryLabel: 'Coverup / Blackwork',
    image: '/david_original/tattoo-06.jpg',
    placement: 'Back / Shoulder',
    description: 'A complete skin transformation executed with strategic black ink distribution and layered depth to turn old ink into a bold new statement.',
    aspect: 'portrait',
    instagramPostUrl: 'https://www.instagram.com/p/DcNJ182DMXV/?img_index=1'
  },
  {
    id: 'david-high-impact-blackwork',
    title: 'High-Impact Ink Saturation',
    category: 'blackwork',
    categoryLabel: 'Blackwork',
    image: '/david_original/tattoo-05.jpg',
    placement: 'Leg / Calf',
    description: 'Maximum black pigment saturation with razor-sharp contours, engineered to maintain crisp definition and richness as skin ages.',
    aspect: 'portrait',
    instagramPostUrl: 'https://www.instagram.com/p/DdOxOMuK5iG/'
  },
  {
    id: 'david-botanical-fineline',
    title: 'Botanical Flora & Fine Line Detail',
    category: 'fineline',
    categoryLabel: 'Fine Line',
    image: '/david_original/tattoo-07.jpg',
    placement: 'Forearm / Wrist',
    description: 'Delicate single-needle botanical study with micro line weights, whisper-soft whip shading, and natural organic movement.',
    aspect: 'tall',
    instagramPostUrl: 'https://www.instagram.com/p/DZRQJCqMjGE/'
  },
  {
    id: 'david-precision-contrast',
    title: 'Precision Negative Space Composition',
    category: 'blackwork',
    categoryLabel: 'Blackwork',
    image: '/david_original/tattoo-03.jpg',
    placement: 'Forearm / Torso',
    description: 'Original skin art piece by David. Solid black pigment zones calculated against clean natural skin breaks for maximum visual clarity.',
    aspect: 'square',
    instagramPostUrl: 'https://www.instagram.com/p/DdVPZX-h3_1/'
  }
];

export const ARTIST_INFO = {
  name: 'DAVID',
  title: 'TATTOO ARTIST',
  handle: '@davink.tatto0',
  instagramUrl: 'https://www.instagram.com/davink.tatto0/',
  avatarUrl: '/david-avatar.jpg',
  artistPortraitUrl: '/david_original/artist-david-portrait.jpg',
  artistPortraitPostUrl: 'https://www.instagram.com/p/DeJ6lltlf9T/?img_index=3',
  processVideoUrl: 'https://www.instagram.com/p/DbXB9OhsSdG/',
  processVideoThumbnail: '/david_original/david-process-video.jpg',
  specialties: ['Dark Realism', 'Heavy Blackwork', 'Fine Line Botanicals', 'Award-Winning Horror Tattoos', 'Coverup Transformations'],
  philosophy: 'Every tattoo begins with an idea. The right lines, the right details, and the right intention turn that idea into something personal. Each piece is an opportunity to create art that becomes part of your story.'
};
