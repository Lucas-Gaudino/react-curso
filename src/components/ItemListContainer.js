import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bgImage from '../ps4.jpg';
import mainImage from '../fifa.jpg';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../firebase/data";
import ItemList from './ItemList'; // Importa el nuevo componente

const ItemListContainer = ({addToCart}) => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({
    stock: 0,
    precio: 10000 
  });

  useEffect(() => {
    const fetchData = async () => {
        try {
            const productCollection = collection(db, "products");
            let q = productCollection;
            
            if (categoriaId) {
                // Convierte categoriaId a número
                const categoriaIdNum = Number(categoriaId);
                q = query(productCollection, where('categoria_id', '==', categoriaIdNum));
            }
            
            console.log("Consulta final:", q);

            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            console.log(data);
            setItems(data);
        } catch (error) {
            console.error("Error al obtener productos: ", error);
        }
    }

    fetchData();
}, [categoriaId]);

  const filteredItems = items.filter(item => 
    item.stock >= filters.stock && item.precio <= filters.precio
  );
  const bannerStyles = {
    banner: {
       margin: '30px 0',
       position: 'relative',
       marginTop: '0px'
    
    },
    bg: {
        color: 'white',
        borderBottomLeftRadius:'10%',
        borderBottomRightRadius: '10%',
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        justifyContent: 'space-around',
        flexDirection: 'row-reverse',
       backgroundImage: `url(${bgImage})`,
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundAttachment: 'fixed',
       width: '100%'
    },
    img: {
       display: 'block',
       padding: '20px 0'
    },
    text: {
       textAlign: 'center',
       paddingBottom: '20px'
    },
    
 };
  return (
    <div className="dj-banner" style={bannerStyles.banner}>

        <div className="dj-bg" style={bannerStyles.bg}>

                 <img src={mainImage} alt="" height="400px" style={bannerStyles.img}/>
                    <div className="dj-text" style={bannerStyles.text}>
                        <h1 className="fade-in"><b>ZUR PLAY</b></h1>
                        <p className="fade-in">El mejor sitio de compra de videojuegos.</p>
                        <p>
                        <a href="#">
                            <label style={{
                                borderRadius: '5px',
                                background: '#ce2032',
                                borderColor:'#ce2032',
                                height:'44px',
                                color: 'white',
                                width: '152px',
                                textAlign: 'center',
                                fontSize: '16px',
                                padding: '10px 0'
                            }}>
                                Ver Articulos
                            </label>
                        </a>
                        </p>
                    </div>
              </div>
              <div className="item-list container">
        {
          filteredItems.length > 0 ? (
            <ItemList items={filteredItems} addToCart={addToCart} setFilters={setFilters} filters={filters} />
          ) : (
            <div className="empty-category-message w-100 m-5">
              <p className='display-5 m-auto'>Lo lamentamos, esta categoría está vacía.</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ItemListContainer;
