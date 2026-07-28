import type { Dance } from '../types/dance'

/**
 * Placeholder SVGs live in public/images/dances/.
 * When you add real photos, drop them in the same folder and update the paths below.
 */
export const dances: Dance[] = [
  {
    id: 'pushpanjali',
    name: 'Jaya Jaya Shambo',
    image: '/images/dances/Sahasra-107.jpg',
    description:
      'The Pushpanjali marks the auspicious beginning of a Bharatanatyam performance, where the dancer offers her first salutation to the divine, the Guru, and the audience. “Jaya Jaya Shambo” is a devotional composition that glorifies Lord Shiva, the supreme cosmic dancer and the embodiment of rhythm, grace, and divine energy. Through this piece, the dancer seeks Lord Shivas blessings and presents her dance as a humble offering at His feet. The movements reflect devotion, reverence, and admiration for Shivas divine qualities, invoking His presence and guidance throughout the performance. With each gesture and step, the dancer expresses gratitude and begins her Arangetram journey with the blessings of Lord Nataraja, the Guru, and all those who support her artistic path.',
    duration: '8 minutes',
    artist: 'Sahasra',
    //composer: 'Traditional',
    raga: 'Ragamalika',
    tala: 'Adi',
    orchestra: [
      { role: 'Nattuvangam', name: 'Smt. Madhusri Sethuraman' },
      { role: 'Vocal', name: 'Smt. Neela Ramanuja' },
      { role: 'Mridangam', name: 'Sri. G. Pramath Kiran' },
      { role: 'Flute', name: 'Sri. Krishna Prasad Anekere' },
      { role: 'Rhythym Pads', name: 'Sri. Pranavadath Shamdath' },
    ],
  },
  {
    id: 'Jatiswaram',
    name: 'Kamakshi Jatiswaram',
    image: '/images/dances/Sahasra-46.jpg',
    description:
      "The Jatiswaram is a pure dance composition that beautifully combines intricate rhythmic patterns with graceful movements, showcasing the dancer's mastery of technique, precision, and musicality. “Kamakshi” is a devotional piece dedicated to Goddess Kamakshi, the compassionate and powerful form of Goddess Parvati. Through this composition, the dancer pays homage to the divine mother, expressing reverence and devotion through elegant movements, intricate jatis, and rhythmic footwork. Unlike pieces that focus on storytelling, the Jatiswaram highlights the beauty of Bharatanatyam's nrithya aspect, where the dance pairs the body movements with a song or poetry. With every step and gesture, the dancer celebrates the divine grace of Goddess Kamakshi while demonstrating the discipline, strength, and artistry cultivated through years of dedicated training.",
    duration: '11 minutes',
    artist: 'Sahasra',
    //composer: 'Traditional',
    raga: 'Bhairavi',
    tala: 'Misra Chapu',
    orchestra: [
      { role: 'Nattuvangam', name: 'Smt. Madhusri Sethuraman' },
      { role: 'Vocal', name: 'Smt. Neela Ramanuja' },
      { role: 'Mridangam', name: 'Sri. G. Pramath Kiran' },
      { role: 'Flute', name: 'Sri. Krishna Prasad Anekere' },
      { role: 'Rhythym Pads', name: 'Sri. Pranavadath Shamdath' },
    ],
  },
  {
    id: 'Tiruppavai',
    name: 'Tiruppavai',
    image: '/images/dances/Sahasra-9.jpg',
    description:
      "The 29th pasuram of Thiruppavai, composed by the revered saint-poet Andal, beautifully expresses the essence of devotion, surrender, and eternal service to Lord Krishna. In this verse, Andal and the Gopis approach Lord Krishna, seeking not worldly pleasures, but the blessing of being forever devoted to Him and serving Him with love and humility. Through this Bharatanatyam presentation, the dancer portrays Andal’s unwavering faith and her heartfelt plea for divine grace. The graceful movements and expressive storytelling bring forth the emotions of devotion, surrender, and the joy of a soul seeking a connection with the divine. This piece celebrates the beauty of selfless devotion and reflects Andal’s profound love for Lord Krishna, reminding us that true fulfillment lies in surrendering oneself to the divine." ,
      duration: '7 minutes',
      artist: 'Sahasra',
    //composer: 'Composer Name',
    raga: 'Ragamalika',
    tala: 'Misra Chapu',
    orchestra: [
      { role: 'Nattuvangam', name: 'Smt. Madhusri Sethuraman' },
      { role: 'Vocal', name: 'Smt. Neela Ramanuja' },
      { role: 'Mridangam', name: 'Sri. G. Pramath Kiran' },
      { role: 'Flute', name: 'Sri. Krishna Prasad Anekere' },
      { role: 'Rhythym Pads', name: 'Sri. Pranavadath Shamdath' },
    ],
  },
  {
    id: 'Varnam',
    name: 'Charukesi Varnam',
    image: '/images/dances/Sahasra-93.jpg',
    description:
      'A lyrical piece combining dance and simple abhinaya, often depicting themes of devotion or love. Shabdam introduces expressive storytelling while maintaining graceful nritta passages.',
    duration: '30 minutes',
    artist: 'Sahasra',
    //composer: 'Composer Name',
    raga: 'Charukesi',
    tala: 'Adi',
    orchestra: [
      { role: 'Nattuvangam', name: 'Smt. Madhusri Sethuraman' },
      { role: 'Vocal', name: 'Smt. Neela Ramanuja' },
      { role: 'Mridangam', name: 'Sri. G. Pramath Kiran' },
      { role: 'Flute', name: 'Sri. Krishna Prasad Anekere' },
      { role: 'Rhythym Pads', name: 'Sri. Pranavadath Shamdath' },
    ],
  },
  {
    id: 'Padam',
    name: 'Krishna Ne Begane Baro',
    image: '/images/dances/Sahasra-64.jpg',
    description:
      "\"Krishna Nee Begane Baro\" is a soulful devotional composition that expresses a devotee’s heartfelt longing for Lord Krishna’s divine presence. The song beautifully describes Krishna’s enchanting form, adorned with a peacock feather, yellow silk garments, and radiant ornaments, while inviting Him to come near with love and compassion. Through graceful expressions and subtle gestures, the dancer portrays the deep devotion, affection, and yearning of a devotee seeking the blessings of Lord Krishna. This piece celebrates the beauty of surrender, love, and the eternal bond between the devotee and the divine.",
    duration: '9 minutes',
    artist: 'Sahasra',
    //composer: 'Composer Name',
    raga: 'Yaman Kalyani',
    tala: 'Misra Chapu',
    orchestra: [
      { role: 'Nattuvangam', name: 'Smt. Madhusri Sethuraman' },
      { role: 'Vocal', name: 'Smt. Neela Ramanuja' },
      { role: 'Mridangam', name: 'Sri. G. Pramath Kiran' },
      { role: 'Flute', name: 'Sri. Krishna Prasad Anekere' },
      { role: 'Rhythym Pads', name: 'Sri. Pranavadath Shamdath' },
    ],
  },
  {
    id: 'Javali',
    name: 'Smara Sundaranguni',
    image: '/images/dances/Sahasra-56.jpg',
    description:
      "\"Smara Sundaranguni\" is a devotional composition that celebrates the divine beauty, grace, and enchanting presence of Lord Krishna. The lyrics invite the devotee to contemplate His radiant form and noble virtues, expressing heartfelt admiration and unwavering devotion. Through expressive abhinaya and graceful movements, the dancer portrays Krishna's captivating charm, playful nature, and boundless compassion. Every gesture reflects the joy and love experienced by the devotee in remembering the Lord, creating a beautiful blend of devotion and artistry. This piece offers an opportunity to experience the timeless beauty of Lord Krishna through expressive storytelling, highlighting the spiritual connection between the devotee and the divine." ,
    duration: '5 minutes',
    artist: 'Sahasra',
    //composer: 'Composer Name',
    raga: 'Mukhari',
    tala: 'Misra Chapu',
    orchestra: [
      { role: 'Nattuvangam', name: 'Smt. Madhusri Sethuraman' },
      { role: 'Vocal', name: 'Smt. Neela Ramanuja' },
      { role: 'Mridangam', name: 'Sri. G. Pramath Kiran' },
      { role: 'Flute', name: 'Sri. Krishna Prasad Anekere' },
      { role: 'Rhythym Pads', name: 'Sri. Pranavadath Shamdath' },
    ],
  },
  {
    id: 'tillana',
    name: 'Madhuvanthi Tillana',
    image: '/images/dances/Sahasra-18.jpg',
    description:
      "The Tillana is the joyous finale of a Bharatanatyam recital, celebrating rhythm, energy, and the sheer beauty of dance. Set in the melodious raga Madhuvanthi, this composition is characterized by vibrant rhythmic syllables, graceful movements, and intricate footwork that showcase the dancer’s precision, agility, and artistic brilliance. Combining dynamic choreography with elegant expressions, the Madhuvanthi Tillana reflects the culmination of years of dedicated training and the joy of artistic expression. The lively rhythm and captivating melody create a spirited conclusion, leaving the audience with a lasting impression of grace, vitality, and celebration. As the final dance of the Arangetram, this Tillana is a joyful offering that celebrates the beauty of Bharatanatyam and marks the successful completion of the dancer’s remarkable journey.",
    duration: '10 minutes',
    artist: 'Sahasra',
    //composer: 'Composer Name',
    raga: 'Madhuvanthi',
    tala: 'Adi',
    orchestra: [
      { role: 'Nattuvangam', name: 'Smt. Madhusri Sethuraman' },
      { role: 'Vocal', name: 'Smt. Neela Ramanuja' },
      { role: 'Mridangam', name: 'Sri. G. Pramath Kiran' },
      { role: 'Flute', name: 'Sri. Krishna Prasad Anekere' },
      { role: 'Rhythym Pads', name: 'Sri. Pranavadath Shamdath' },
    ],
  },
]

export function getDanceById(id: string): Dance | undefined {
  return dances.find((dance) => dance.id === id)
}
