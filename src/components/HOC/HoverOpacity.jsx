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

const HoverOpacity = Component => function NewComponent(props) {
  const [isHovered, setIsHovered] = useState()
  return (
    <div
      style={{
        opacity: isHovered ? 0.5 : 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Component {...props} />
    </div>
  )
};

const HOC = HoverOpacity(AwesomeImage)

export default function WrappedComponent() {
  return (
    <HoverOpacity>
      <HOC src="https://picsum.photos/200/300" />
    </HoverOpacity>
  )
}
