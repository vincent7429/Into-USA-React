import React from 'react'

import { Helmet } from 'react-helmet'

import './board-of-directors.css'

const BoardOfDirectors = (props) => {
  return (
    <div className="board-of-directors-container">
      <Helmet>
        <title>Board-of-Directors - Into-USA</title>
        <meta property="og:title" content="Board-of-Directors - Into-USA" />
      </Helmet>
    </div>
  )
}

export default BoardOfDirectors
