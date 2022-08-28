import React from 'react'

const Btn = (props) => {
  return (
    <a className={props.class} href={props.url}>{props.value}</a>
  )
}

export default Btn