import React, { useState, useEffect } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';
import bgImage from '../ps4.jpg';
import mainImage from '../fifa.jpg';

/*iport*/ 

const ItemListContainer = ({addToCart}) => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  
  const [filters, setFilters] = useState({
    stock: 0,
    precio: 10000 
    });


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

  useEffect(() => {
    let url = "https://f473-2800-810-432-8605-f5c9-4977-a116-792.ngrok-free.app/api/productos";
    // Si hay un categoriaId en los parámetros, actualizamos la URL para filtrar por categoría.
    if (categoriaId) {
        console.log(categoriaId)
      url = `${url}/categoria/${categoriaId}`;
    }else{
        console.log("No categoria");
    }

    fetch(url, {
      headers: {
        "ngrok-skip-browser-warning": "any_value_you_like"
      }
    })
    .then(response => {
        console.log("URL a la que se está llamando:", url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        console.log(data)
      setItems(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });

  }, [categoriaId]);

    const filteredItems = items.filter(item => 
        item.stock >= filters.stock && item.precio <= filters.precio
    );

    return (
        <>
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
           </div>

        <div className="item-list container">
            
          <div className="filters">
            <label>
                Stock mínimo:
                <input 
                    type="number" 
                    value={filters.stock} 
                    onChange={e => setFilters({ ...filters, stock: Number(e.target.value) })} 
                />
            </label>
            <label>
                Precio máximo:
                <input 
                    type="number" 
                    value={filters.precio} 
                    onChange={e => setFilters({ ...filters, precio: Number(e.target.value) })} 
                />
            </label>
         </div>

        <div className="row">
            {filteredItems.map(item => (
                <Item key={item.id} {...item} addToCart={addToCart} />
            ))}
        </div>
    </div>
    </>
);
}
export default ItemListContainer;
