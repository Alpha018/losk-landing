/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import {AnimatePresence} from 'framer-motion'
import App from 'next/app'


export default class extends App {
  render() {
    const {Component, pageProps, router} = this.props

    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    )
  }
}
