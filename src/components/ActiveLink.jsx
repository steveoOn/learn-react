import React from 'react'
import { Link } from 'gatsby'

// from https://reach.tech/router/api/Link
// refer to https://github.com/gatsbyjs/gatsby/issues/7208
// getProps use for styling the anchor as active
// 参数 isCurrent 不能自定义

const isActive = className => ({ isCurrent }) => {
  // console.log('class name:', className)
  return {
    // 字符串拼接 class name active 前的空格不能省略
    className: className + (isCurrent ? ' active' : ''),
  }
}

const isActiveLink = ({ className, ...rest }) => {
  // console.log({ ...rest })
  // isActive(className)返回 styled-components 的 class name 与 active 的组合
  // 因此可以在 styled-components 中通过 &.active{} 设置选中样式
  return <Link getProps={isActive(className)} {...rest} />
}

export default isActiveLink
