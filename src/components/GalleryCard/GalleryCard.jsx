import './galleryCard.css'
import { useContext } from 'react'
import { CatalogContext } from '@/context/CatalogContext'

export const GalleryCard = ({ productName, description, src, alt, id }) => {

  const { setCurrentId } = useContext(CatalogContext)

  return (
    <div className="gallery-card" onClick={() => { setCurrentId(id)}}>
      <div className="card-img"><img src={src} alt={alt} /></div>
      <div className="card-description">
        <h4>{productName}</h4>
        <p>{description}</p>
      </div>
      <span className='card-cta'>Ver más</span>
    </div>
  )
}
