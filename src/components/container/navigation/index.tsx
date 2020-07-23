import React from 'react'
import Pages from '../../../config/pages'

interface Props {
  url: string
}

const Component = (props: Props) => (
  <div className="tabs is-toggle is-toggle-rounded is-fullwidth">
    <ul>
      {Pages.map((page, index) => {
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
