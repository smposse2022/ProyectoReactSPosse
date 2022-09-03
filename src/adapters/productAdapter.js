// Va a tener una función que va a tomar un dato que viene externo y va a devolver un dato que puedo usar yo.
// Va a recibir un documento de Firestore y va a retornar un objeto
export const createAdaptedProductFromFirestore = (doc) => {
  const data = doc.data();
  const productAdapted = {
    id: doc.id,
    name: data.title, // le doy los nombres que trae de afuera, title, image o lo que sea que venga de afuera
    img: data.image,
    price: data.price,
    category: data.category,
    description: data.description,
  };

  return productAdapted;
};

// Toda esta función la podría llamar desde mi llamada a createAdaptedProductFromFirestore. En mi caso servicio-firestore
