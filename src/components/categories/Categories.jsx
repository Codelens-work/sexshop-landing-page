import './categories.css'
import { useContext } from 'react'
import { CatalogContext } from '@/context/CatalogContext'


export const Categories = () => {

  const { currentCategory, setCurrentCategory } = useContext(CatalogContext)

  const categoryList = ['todos', "accesorios", "anal", "consoladores", "vibradores", "lubricantes", "lenceria"]

  return (
    <div className='category-list-container'>
      {categoryList.map((category, i) => {
  return (
    <button
      key={i}
      className={`category-btn ${
        (category === 'todos' && currentCategory == null) || category === currentCategory
          ? 'selected'
          : ''
      }`}
      onClick={() => setCurrentCategory(category === 'todos' ? null : category)}
    >
      {category}
    </button>
  );
})}

    </div>)
}
