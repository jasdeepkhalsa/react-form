import React from 'react'

const pages = [
  { title: 'Basic Info', icon: 'fas fa-user', url: '/user' },
  { title: 'Privacy Settings', icon: 'fas fa-envelope', url: '/privacy' },
  { title: 'Done', icon: 'fas fa-check', url: '/done' },
]

const Component = (props: any) => (
  <div className="tabs is-toggle is-toggle-rounded is-fullwidth">
    <ul>
      {pages.map((page, index) => {
        return (
          <li className={page.url === props.url ? 'is-active' : ''} key={index}>
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
