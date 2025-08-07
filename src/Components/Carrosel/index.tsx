import { useEffect, useState } from 'react'
import { ContainerCarrosel, MainCarrosel } from './styles'
import foto from '../../assets/imgs/guitar.jpg'
import foto2 from '../../assets/imgs/ouca.png'

const images = [foto, foto2, foto, foto2]

const CAROUSEL_WIDTH = 1200
const CAROUSEL_HEIGHT = 400

const Carrosel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])


  return (
    <ContainerCarrosel>
      <MainCarrosel>
        <div  
          style={{
            maxWidth: `${CAROUSEL_WIDTH}px`,
            margin: 'auto',
            height: `${CAROUSEL_HEIGHT}px`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(.55,0,.1,1)',
              transform: `translateX(-${index * CAROUSEL_WIDTH}px)`,
              height: `${CAROUSEL_HEIGHT}px`,
              width: `${images.length * CAROUSEL_WIDTH}px`
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                style={{
                  objectFit: 'contain',
                  height: `${CAROUSEL_HEIGHT}px`,
                  width: `${CAROUSEL_WIDTH}px`,
                  flexShrink: 0,
                  background: '#000'
                }}
              />
            ))}
          </div>

        </div>
      </MainCarrosel>
    </ContainerCarrosel>
  )
}

export default Carrosel