import React from 'react'
import Paths from '../../../utils/paths'
import Icons from '../../../utils/icons'

const pages = [
  { title: 'Basic Info', icon: Icons.USER, url: Paths.USER },
  { title: 'Privacy Settings', icon: Icons.ENVELOPE, url: Paths.PRIVACY },
  { title: 'Done', icon: Icons.CHECK, url: Paths.DONE },
]

interface Props {
  url: string
}

const Component = (props: Props) => (
  <div className="tabs is-toggle is-toggle-rounded is-fullwidth">
    <ul>
      {pages.map((page, index) => {
        return (
          <li className={page.url === props.url ? 'is-active' : ''} key={index}>
            {/* eslint-disable-next-line */}
            <a href="#">
              <span className="icon is-small">
                <i className={page.icon} aria-hidden="true"></i>
              </span>
              <span>{page.title}</span>
            </a>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Component
