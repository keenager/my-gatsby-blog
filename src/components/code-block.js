import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const CodeBlock = ({ children }) => {
  const { className, ...props } = children.props
  const match = /language-(\w+)/.exec(className || "")
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      style={oneDark}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props} />
  )
}

export default CodeBlock
