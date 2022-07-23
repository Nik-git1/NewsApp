import React, { Component } from 'react'
import spinner from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={spinner} height="70px" alt='loading'></img>
      </div>
    )
  }
}
