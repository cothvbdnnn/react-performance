import { useState } from 'react'

const Image = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} />
  )
}

const HoverOpacity = Component => function NewComponent(props) {
  const [isHovered, setIsHovered] = useState()
  const { opacity, alt, ...rest } = props
  const formatAlt = alt.toLowerCase().replaceAll(' ', '-')
  return (
    <div
      style={{
        opacity: isHovered ? opacity : 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Component {...rest} alt={formatAlt} />
    </div>
  )
};

const HOC = HoverOpacity(Image)

export default function WrappedComponent() {
  return (
    <HOC src="https://picsum.photos/200/300" opacity={0.8} alt="Image 1" />
  )
}
