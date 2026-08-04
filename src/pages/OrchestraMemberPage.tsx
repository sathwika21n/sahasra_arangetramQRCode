import { Link, useParams } from 'react-router-dom'

type OrchestraMember = {
  id: string
  role: string
  name: string
  description: string[]
}

const orchestraMembers: OrchestraMember[] = [
  {
    id: 'nattuvangam',
    role: 'Nattuvangam',
    name: 'Smt. Madhusri Sethuraman',
    description: [
      'Smt. Madhusri Sethuraman brings the rhythm and structure of the performance to life through her precise nattuvangam. Her guidance shapes the flow, timing, and expressive storytelling that make the evening so special.',
    ],
  },
  {
    id: 'vocal',
    role: 'Vocal',
    name: 'Smt. Neela Ramanuja',
    description: [
      'A degree in business and a good career at the Reserve Bank of India (RBI) did not stop Neela Ramanuja from embracing music as her career. Coming from a family of musicians, she started training in Carnatic music at the early age of five. She has collaborated with many dance teachers so far. She has had her musical training under eminent musicians. “I have learnt so much from all the teachers. My very ambitious dance teachers and the high creative standards they set challenged me to compose new music and new shows every year. This has nurtured the creative side in me and made me a better artist,” says Neela. She travels with her troupe for the remainder of the year to the United States, France, Italy, Holland and Germany. She gets to take on interesting assignments with teachers abroad, keeping her motivated.',
      ' She is a graded artist (B-High) at All India Radio and the Indian Television. Neela has performed at various concerts across India. She particularly enjoys singing for dance shows and has won special acclaim from distinguished dancers and critics from all over the world. She has been honoured with the title of Kala Arathi Ratna and Kala Arathi Vibhushana by the Arathi School Of Dance, Phoenix. Shruthilaya School of Dance awarded her the title Gaana Shikhaamani.',
    ],
  },
  {
    id: 'mridangam',
    role: 'Mridangam',
    name: 'Sri. G. Pramath Kiran',
    description: [
      'Pramath Kiran is a well-known percussionist from India and hails from a musical background. As a world music artist, he initially learnt the tabla (classical Hindustani instrument) under the tabla maestro Pt. Udayraj Kapoor. Later he was trained by Vidwan Anoor Ananthakrishna Sharma to play morsing (jaws harp) in the traditional Carnatic style.',
      'He is well known for his traditional and intricate style of playing these instruments, with a blend of modern accompaniment techniques. In several music festivals across the world, he has accompanied several star artists like Dr. M. Balamuralikrishna, violin maestro Dr. L. Subramaniam, santoor maestro Pt. Shivkumar Sharma and Pt. Rahul Sharma, violin duo Ganesh Kumaresh, Chitraveena Ravikiran, violin maestros Mysore Nagaraj and Dr. Manjunath, Pt. Purbayan Chatterji, and veena maestro Dr. Jayanthi Kumaresh, to name a few. Pramath Kiran is the founding member of LAYATHARANGA, India’s top world music band featuring Indian and world percussion. He has toured several countries like the UK, USA, Australia, Poland, Luxembourg, Singapore, Malaysia, the Middle East, and many more. Pramath Kiran is also a part of other bands like Indialucia from Poland and Shastriya Syndicate from India.',
      'Pramath is also well known for his music endeavours in playing several world percussions like djembe, congas, and cajón. He has performed and recorded with several jazz musicians like Louis Pragasam, Spinifex Orchestra (Holland), Amit Heri, Asaf Rabi, Leszek Hefi, Bartek, and Keith Peters, to name a few.',
      'He has been awarded the following: CMANA Award – Best Percussionist 2009 from the Percussive Arts Centre, Bangalore; Ananya Award – Best Percussionist 2007 from the ANANYA Foundation, Bangalore.',
    ],
  },
  {
    id: 'flute',
    role: 'Flute',
    name: 'Sri. Krishna Prasad Anekere',
    description: [
      'Krishna is one of the leading musicians in the world of music. He was introduced into the musical world at an age as tender as 4, and was found to have an immaculate style and innate creativity. After his initial tutelage under his father, a well-known flautist, Vidwan A.V. Prakash, the flute continued to be his instrument of choice. He has been mesmerizing the audience with his maestro Vidwan Dr. N. Ramani, Vishweshwaran, Uma Rao and Padmini Ramachandra, among others. He has accompanied eminent dancers, including Sarvashree Chitra. Apart from playing authentic Carnatic music, he has performed and worked with many leading music directors. He has given many fusion, jazz, blues, world music and jugalbandhi concerts, and has been a part of numerous international music festivals. With extensive global touring, he has enriched his music under the auspices of prestigious sabhas all over India and abroad, including USA, Japan, Switzerland and South Africa, widening his nuances gained from all schools of music.',
      'He is a trained live sound engineer and has a certified training course under Meyer Sound (LASSET) in Thailand and Electro Voice (EV), working with leading music directors in Singapore. This rich experience in the music field has helped him work with leading music directors.',
      'Arunkumar Over the years Arunkumar has carved a niche for himself in the world of percussion as one of the few drummers who does inter-disciplinary music. He has trained in jazz drumming under his father B.S. Sukumar and the renowned drummer Ranjit Barot.',
      'Arun also trained in Carnatic percussion under Sri. S.V. Giridhar and Sri. Anoor Anantha Krishna Sharma. He has performed for legends of different genera of music, like Dr. M. Balamuralikrishna, Dr. S.P. Balasubramanayam, Dr. K.J. Yesudas, Dr. L. Subramaniam, Sudha Raghunathan, Pandit Ronu Muzumdar, Pandit Vishwamohan Bhat, tabla maestro Ustad Zakir Hussian, violin maestros Ganesh Kumaresh, Hariharan and Shankar Mahadevan, and many other legendary musicians. He has been conferred the title Kanchi Asthana Vidwan from Sri. Mutt Kanchipuram. Arun has been awarded The Endorsement by the world renowned cymbal company Zildjian and world renowned percussion sticks company, Vic Firth.',
    ],
  },
  {
    id: 'rhythym-pads',
    role: 'Rhythym Pads',
    name: 'Sri. Pranavadath Shamdath',
    description: [
      'S. Pranav Dath began his musical journey at just 3.5 years old and has since captivated audiences with his creativity and style. Trained in drums by Vid. B.S. Sukumar and Vid. Arun Kumar, and in mridangam by Vid. N.G. Ravi, he continues to learn under Vid. Anoor Ananthakrishna Sharma. He is also skilled in moorsing.',
      'Pranav has completed Grade 8 from Trinity College London with top marks and performs across genres including fusion, Carnatic, Hindustani, folk, rock, and jazz. He has collaborated with renowned musicians and performed with leading bands across India, the USA, Canada, the UK, Europe, and the Middle East.',
      'In addition to his performing career, Pranav teaches rhythm, beats, and drums to students around the globe, sharing his expertise and passion for percussion with aspiring musicians of all ages.',
    ],
  },
]

export function OrchestraMemberPage() {
  const { memberId } = useParams()
  const member = orchestraMembers.find((item) => item.id === memberId)

  if (!member) {
    return (
      <article className="orchestra-detail-page">
        <Link to="/" className="orchestra-detail-page__back">
          ← Back to home
        </Link>
        <h1>Orchestra member not found</h1>
      </article>
    )
  }

  return (
    <article className="orchestra-detail-page">
      <Link to="/" className="orchestra-detail-page__back">
        ← Back to home
      </Link>

      <header className="orchestra-detail-page__header">
        <p className="profile-hero__eyebrow">Orchestra</p>
        <h1>{member.role}</h1>
        <p className="orchestra-detail-page__name">{member.name}</p>
      </header>

      <section className="profile-section orchestra-detail-page__content">
        {member.description.map((paragraph, index) => (
          <p key={`${member.id}-${index}`}>{paragraph}</p>
        ))}
      </section>
    </article>
  )
}
