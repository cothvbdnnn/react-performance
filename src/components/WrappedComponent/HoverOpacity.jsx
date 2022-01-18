import { useState } from 'react'

const AwesomeImage = ({ src, width = 300, height = 200 }) => {
  return (
    <div
      className="awesome-image"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borerRadius: '8px'
      }}
    />
  )
}

const HoverOpacity = ({ children }) => {
  const [isHovered, setIsHovered] = useState()

  return (
    <div
      style={{
        opacity: isHovered ? 0.5 : 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

export default function WrappedComponent() {
  return (
    <HoverOpacity>
      <AwesomeImage src="https://picsum.photos/200/300" />
    </HoverOpacity>
  )
}
