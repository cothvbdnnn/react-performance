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

const HoverOpacity = (Component, opacity) => function NewComponent(props) {
  const [isHovered, setIsHovered] = useState()
  return (
    <div
      style={{
        opacity: isHovered ? opacity : 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Component {...props} />
    </div>
  )
};

const HOC = HoverOpacity(AwesomeImage, 0.8)

export default function WrappedComponent() {
  return (
    <HOC src="https://picsum.photos/200/300" />
  )
}
