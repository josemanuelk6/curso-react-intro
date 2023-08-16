import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  
  React.useEffect(()=>{ 
    
  try { 
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

     if (!localStorageItem){
       localStorage.setItem(itemName, JSON.stringify(initialValue));
       parsedItem = initialValue;

       } else {
       parsedItem = JSON.parse(localStorageItem);
       setItem(parsedItem);
      }

      setLoading(false);
    } catch(error){ 
      setError(true);
      setLoading(false);
    }

  },[]);




  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {item, saveItem, loading, error};

}

export {useLocalStorage};

// const defaultTodos = [{text:'Ir a Fuengirola', completed: false },{text: 'Bañarnos en la piscina', completed: false},{text: 'Montar en bici', completed: true},{text: 'Cantar carnaval', completed: false}]

//localStorage.setItem('TODOS_V1', defaultTodos);
//localStorage.removeItem('TODOS_V1');