import type { Dance } from '../types/dance'

/**
 * Placeholder SVGs live in public/images/dances/.
 * When you add real photos, drop them in the same folder and update the paths below.
 */
export const dances: Dance[] = [
  {
    id: 'pushpanjali',
    name: 'Pushpanjali',
    image: '/images/dances/pushpanjali.svg',
    description:
      'An auspicious opening offering of flowers to the deities, gurus, and the audience. Pushpanjali sets a reverent tone for the arangetram with graceful movements and rhythmic syllables.',
    duration: '5 minutes',
    artist: 'Sahasra',
    composer: 'Traditional',
    raga: 'Nattai',
    tala: 'Adi',
    orchestra: [
      { role: 'Nattuvangam', name: 'Guru Name' },
      { role: 'Vocal', name: 'Vocalist Name' },
      { role: 'Mridangam', name: 'Mridangam Artist' },
      { role: 'Violin', name: 'Violinist Name' },
    ],
  },
  {
    id: 'alarippu',
    name: 'Alarippu',
    image: '/images/dances/alarippu.svg',
    description:
      'A pure dance item that awakens the body through rhythmic footwork and subtle gestures. Alarippu blossoms from stillness into intricate patterns, symbolizing the dancer\'s awakening on stage.',
    duration: '6 minutes',
    artist: 'Sahasra',
    composer: 'Traditional',
    raga: 'Nattai',
    tala: 'Adi',
    orchestra: [
      { role: 'Nattuvangam', name: 'Guru Name' },
      { role: 'Vocal', name: 'Vocalist Name' },
      { role: 'Mridangam', name: 'Mridangam Artist' },
      { role: 'Violin', name: 'Violinist Name' },
    ],
  },
  {
    id: 'jatiswaram',
    name: 'Jatiswaram',
    image: '/images/dances/jatiswaram.svg',
    description:
      'A composition blending jatis (rhythmic syllables) with swarams (musical notes). This item showcases the dancer\'s command of rhythm, geometry, and musicality without abhinaya.',
    duration: '8 minutes',
    artist: 'Sahasra',
    composer: 'Composer Name',
    raga: 'Kalyani',
    tala: 'Rupaka',
    orchestra: [
      { role: 'Nattuvangam', name: 'Guru Name' },
      { role: 'Vocal', name: 'Vocalist Name' },
      { role: 'Mridangam', name: 'Mridangam Artist' },
      { role: 'Violin', name: 'Violinist Name' },
    ],
  },
  {
    id: 'shabdam',
    name: 'Shabdam',
    image: '/images/dances/shabdam.svg',
    description:
      'A lyrical piece combining dance and simple abhinaya, often depicting themes of devotion or love. Shabdam introduces expressive storytelling while maintaining graceful nritta passages.',
    duration: '10 minutes',
    artist: 'Sahasra',
    composer: 'Composer Name',
    raga: 'Bhairavi',
    tala: 'Misra Chapu',
    orchestra: [
      { role: 'Nattuvangam', name: 'Guru Name' },
      { role: 'Vocal', name: 'Vocalist Name' },
      { role: 'Mridangam', name: 'Mridangam Artist' },
      { role: 'Violin', name: 'Violinist Name' },
    ],
  },
  {
    id: 'varnam',
    name: 'Varnam',
    image: '/images/dances/varnam.svg',
    description:
      'The centerpiece of the repertoire — a grand composition weaving intricate nritta, expressive abhinaya, and sustained rhythmic challenges. The varnam demonstrates the dancer\'s stamina, technique, and interpretive depth.',
    duration: '25 minutes',
    artist: 'Sahasra',
    composer: 'Composer Name',
    raga: 'Shanmukhapriya',
    tala: 'Adi',
    orchestra: [
      { role: 'Nattuvangam', name: 'Guru Name' },
      { role: 'Vocal', name: 'Vocalist Name' },
      { role: 'Mridangam', name: 'Mridangam Artist' },
      { role: 'Violin', name: 'Violinist Name' },
      { role: 'Flute', name: 'Flautist Name' },
    ],
  },
  {
    id: 'padam',
    name: 'Padam',
    image: '/images/dances/padam.svg',
    description:
      'A slow, emotive piece focused entirely on abhinaya — the art of expression. Through subtle glances, gestures, and stance, the dancer conveys the longing and devotion of the lyrics.',
    duration: '12 minutes',
    artist: 'Sahasra',
    composer: 'Composer Name',
    raga: 'Mukhari',
    tala: 'Misra Chapu',
    orchestra: [
      { role: 'Nattuvangam', name: 'Guru Name' },
      { role: 'Vocal', name: 'Vocalist Name' },
      { role: 'Mridangam', name: 'Mridangam Artist' },
      { role: 'Violin', name: 'Violinist Name' },
    ],
  },
  {
    id: 'tillana',
    name: 'Tillana',
    image: '/images/dances/tillana.svg',
    description:
      'A vibrant, joyful finale filled with brisk footwork, sculpturesque poses, and rhythmic brilliance. Tillana celebrates the culmination of years of training with exuberant energy.',
    duration: '8 minutes',
    artist: 'Sahasra',
    composer: 'Composer Name',
    raga: 'Dhanashri',
    tala: 'Adi',
    orchestra: [
      { role: 'Nattuvangam', name: 'Guru Name' },
      { role: 'Vocal', name: 'Vocalist Name' },
      { role: 'Mridangam', name: 'Mridangam Artist' },
      { role: 'Violin', name: 'Violinist Name' },
    ],
  },
]

export function getDanceById(id: string): Dance | undefined {
  return dances.find((dance) => dance.id === id)
}
