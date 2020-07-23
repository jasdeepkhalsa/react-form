import Paths from './paths'
import Icons from './icons'

interface Page {
  title: string
  icon: string
  url: string
}

type Pages = Page[]

const Pages: Pages = [
  { title: 'Basic Info', icon: Icons.USER, url: Paths.USER },
  { title: 'Privacy Settings', icon: Icons.ENVELOPE, url: Paths.PRIVACY },
  { title: 'Done', icon: Icons.CHECK, url: Paths.DONE },
]

export default Pages
