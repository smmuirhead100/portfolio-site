import seo from './assets/seo.png'
import pacman from './assets/pacman.png'
import surfgpt from './assets/surfgpt.png'

export default [
    {
        id: 1, 
        image: seo,
        title: 'SEO WEB CRAWLER', 
        description1: 'Analyze your websites internal linking patterns.',
        description2: 'Perfect for businesses who want to improve SEO.',
        category: 'Made with: Node.js',
        contentFirst: false, 
        link: 'https://github.com/smmuirhead100/webcrawlerhttp'
    }, 
    {
        id: 2, 
        image: pacman,
        title: 'PACMAN REPLICA',
        description1: 'Created a PacMan replica game that can be played locally.',
        description2: 'Ability to change skin, play on dark mode, and even save progress.',
        category: 'Made with: Java',
        contentFirst: true,
        link: 'https://github.com/smmuirhead100/pacman-replica'
    }, 
    {
        id: 3,
        image: surfgpt,
        title: 'SURF GPT',
        description1: 'Using OpenAI technology, engineered a chatbot trained on local surf knowledge.',
        description2: 'Ask where to surf in Orange County for beginners!',
        category: 'Made with: React.js',
        contentFirst: false, 
        link: 'https://github.com/smmuirhead100/surf-chatbot'
    }
]