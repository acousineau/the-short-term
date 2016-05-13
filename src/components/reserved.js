import React, { Component } from 'react'

const Reserved = () => {
  const year = new Date().getFullYear()
  return (
    <div className="copyright" data-component="reserved">
      &copy; {year} - The Short Term. All Rights Reserved.
    </div>
  )
}

export default Reserved
