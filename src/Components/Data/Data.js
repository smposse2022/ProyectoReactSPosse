const productList = [
  {
    id: "1",
    nombre: "Alimento Eukanuba Cachorro 1kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Eukanuba",
    edad: "Cachorro",
    precio: "1200",
    cantidad: "1 kg",
    img: "https://i.ibb.co/L8KQ9z7/Alimento-Eukanuba-Cachorro-1kg.webp",
    descripcion: "Alimento para Perro Eukanuba Cachorro 1kg",
    stock: 10,
  },
  {
    id: "2",
    nombre: "Alimento Eukanuba Cachorro 3kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Eukanuba",
    edad: "Cachorro",
    precio: "3200",
    cantidad: "3 kg",
    img: "https://i.ibb.co/fqW77Gq/Eukanuba-Cachorro-3-kg.webp",
    descripcion: "Alimento para Perro Eukanuba Cachorro 3kg",
    stock: 10,
  },
  {
    id: "3",
    nombre: "Alimento Eukanuba Cachorro 7,5kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Eukanuba",
    edad: "Cachorro",
    precio: "6000",
    cantidad: "7,5 kg",
    img: "https://i.ibb.co/5YVH7CV/Alimento-Eukanuba-Cachorro-7-5kg.webp",
    descripcion: "Alimento para Perro Eukanuba Cachorro 3kg",
    stock: 10,
  },
  {
    id: "4",
    nombre: "Alimento Eukanuba Cachorro 15kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Eukanuba",
    edad: "Cachorro",
    precio: "11000",
    cantidad: "15 kg",
    img: "https://i.ibb.co/TTgjcPq/Alimento-Eukanuba-Cachorro-15kg.webp",
    descripcion: "Alimento para Perro Eukanuba Cachorro 3kg",
    stock: 10,
  },

  {
    id: "5",
    nombre: "Alimento Eukanuba Adulto 1kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Eukanuba",
    edad: "Adulto",
    precio: "1200",
    cantidad: "1 kg",
    img: "https://i.ibb.co/pzckk8m/Alimento-Eukanuba-Adulto-1kg.webp",
    descripcion: "Alimento para Perro Eukanuba Adulto 1kg",
    stock: 10,
  },
  {
    id: "6",
    nombre: "Alimento Eukanuba Adulto 3kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Eukanuba",
    edad: "Adulto",
    precio: "3200",
    cantidad: "3 kg",
    img: "https://i.ibb.co/f0J8dBB/Alimento-Eukanuba-Adulto-3kg.webp",
    descripcion: "Alimento para Perro Eukanuba Adulto 3kg",
    stock: 10,
  },
  {
    id: "7",
    nombre: "Alimento Eukanuba Adulto 7,5kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Eukanuba",
    edad: "Adulto",
    precio: "6000",
    cantidad: "7,5 kg",
    img: "https://i.ibb.co/PF21njk/Alimento-Eukanuba-Adulto-7-5kg.webp",
    descripcion: "Alimento para Perro Eukanuba Adulto 3kg",
    stock: 10,
  },
  {
    id: "8",
    nombre: "Alimento Eukanuba Adulto 15kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Eukanuba",
    edad: "Adulto",
    precio: "11000",
    cantidad: "15 kg",
    img: "https://i.ibb.co/SvdwpFK/Alimento-Eukanuba-Adulto-15kg.webp",
    descripcion: "Alimento para Perro Eukanuba Adulto 3kg",
    stock: 10,
  },
  {
    id: "9",
    nombre: "Alimento Royal Canin Cachorro 1kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Royal Canin",
    edad: "Cachorro",
    precio: "1300",
    cantidad: "1 kg",
    img: "https://i.ibb.co/yhbhmBZ/Alimento-Royal-Canin-Cachorro-1kg.webp",
    descripcion: "Alimento para Perro Royal Canin Cachorro 1kg",
    stock: 10,
  },
  {
    id: "10",
    nombre: "Alimento Royal Canin Cachorro 3kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Royal Canin",
    edad: "Cachorro",
    precio: "3300",
    cantidad: "3 kg",
    img: "https://i.ibb.co/McC4830/Alimento-Royal-Canin-Cachorro-3kg.webp",
    descripcion: "Alimento para Perro Royal Canin Cachorro 3kg",
    stock: 10,
  },
  {
    id: "11",
    nombre: "Alimento Royal Canin Cachorro 7,5kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Royal Canin",
    edad: "Cachorro",
    precio: "6100",
    cantidad: "7,5 kg",
    img: "https://i.ibb.co/xgt72G5/Alimento-Royal-Canin-Cachorro-7-5kg.webp",
    descripcion: "Alimento para Perro Royal Canin Cachorro 3kg",
    stock: 10,
  },
  {
    id: "12",
    nombre: "Alimento Royal Canin Cachorro 15kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Royal Canin",
    edad: "Cachorro",
    precio: "11500",
    cantidad: "15 kg",
    img: "https://i.ibb.co/kyq4WS6/Alimento-Royal-Canin-Cachorro-15kg.webp",
    descripcion: "Alimento para Perro Royal Canin Cachorro 3kg",
    stock: 10,
  },

  {
    id: "13",
    nombre: "Alimento Royal Canin Adulto 1kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Royal Canin",
    edad: "Adulto",
    precio: "1300",
    cantidad: "1 kg",
    img: "https://i.ibb.co/Mg3t1hR/Alimento-Royal-Canin-Adulto-1kg.webp",
    descripcion: "Alimento para Perro Royal Canin Adulto 1kg",
    stock: 10,
  },
  {
    id: "14",
    nombre: "Alimento Royal Canin Adulto 3kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Royal Canin",
    edad: "Adulto",
    precio: "3300",
    cantidad: "3 kg",
    img: "https://i.ibb.co/NxvgJCW/Alimento-Royal-Canin-Adulto-3kg.webp",
    descripcion: "Alimento para Perro Royal Canin Adulto 3kg",
    stock: 10,
  },
  {
    id: "15",
    nombre: "Alimento Royal Canin Adulto 7,5kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Royal Canin",
    edad: "Adulto",
    precio: "6100",
    cantidad: "7,5 kg",
    img: "https://i.ibb.co/GvjDZ6V/Alimento-Royal-Canin-Adulto-7-5kg.webp",
    descripcion: "Alimento para Perro Royal Canin Adulto 3kg",
    stock: 10,
  },
  {
    id: "16",
    nombre: "Alimento Royal Canin Adulto 15kg",
    animal: "Perro",
    categoria: "Alimento",
    marca: "Royal Canin",
    edad: "Adulto",
    precio: "11500",
    cantidad: "15 kg",
    img: "https://i.ibb.co/zVmvZTS/Royal-Canin-15kg.png",
    descripcion: "Alimento para Perro Royal Canin Adulto 3kg",
    stock: 10,
  },
  {
    id: "17",
    nombre: "Buzo para Perro",
    animal: "Perro",
    categoria: "Indumentaria",
    marca: "Pugs&Co",
    edad: "Adulto",
    precio: "3500",
    cantidad: "1",
    img: "https://i.ibb.co/gSY7QD7/Indumentaria-Perro-Buzo1.webp",
    descripcion: "Buzo para Perro marca propia Pugs&Co",
    stock: 10,
  },
  {
    id: "18",
    nombre: "Buzo para Perro",
    animal: "Perro",
    categoria: "Indumentaria",
    marca: "Pugs&Co",
    edad: "Adulto",
    precio: "3400",
    cantidad: "1",
    img: "https://i.ibb.co/1R13dQs/Indumentaria-Perro-Buzo2.webp",
    descripcion: "Buzo para Perro marca propia Pugs&Co",
    stock: 10,
  },
  {
    id: "19",
    nombre: "Campera para Perro",
    animal: "Perro",
    categoria: "Indumentaria",
    marca: "Pugs&Co",
    edad: "Adulto",
    precio: "3700",
    cantidad: "1",
    img: "https://i.ibb.co/Zm8XKVv/Indumentaria-Perro-Campera.webp",
    descripcion: "Campera para Perro marca propia Pugs&Co",
    stock: 10,
  },
  {
    id: "20",
    nombre: "Buzo para Perro",
    animal: "Perro",
    categoria: "Indumentaria",
    marca: "Pugs&Co",
    edad: "Adulto",
    precio: "4000",
    cantidad: "1",
    img: "https://i.ibb.co/tBS9NN3/Indumentaria-Perro-Minnie.webp",
    descripcion: "Buzo Minnie para Perro marca propia Pugs&Co",
    stock: 10,
  },
  {
    id: "21",
    nombre: "Buzo para Perro",
    animal: "Perro",
    categoria: "Indumentaria",
    marca: "Pugs&Co",
    edad: "Adulto",
    precio: "4000",
    cantidad: "1",
    img: "https://i.ibb.co/YXp93p7/Indumentaria-Perro-Trooper.webp",
    descripcion: "Buzo Trooper para Perro marca propia Pugs&Co",
    stock: 10,
  },
  {
    id: "22",
    nombre: "Juguete Kong para Perros",
    animal: "Perro",
    categoria: "Juguetes",
    marca: "Kong",
    edad: "N/A",
    precio: "4500",
    cantidad: "1",
    img: "https://i.ibb.co/PgCT8GD/Juguete-Perro-Kong.webp",
    descripcion:
      "Kong para Perros. Para poner comida y el perro vaya sacando mientras juega",
    stock: 10,
  },
  {
    id: "23",
    nombre: "Pelota para Perros",
    animal: "Perro",
    categoria: "Juguetes",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "2000",
    cantidad: "1",
    img: "https://i.ibb.co/p0Bdym0/Juguete-Perro-Pelota.webp",
    descripcion: "Pelota para perros",
    stock: 10,
  },
  {
    id: "24",
    nombre: "Peluche para Perros",
    animal: "Perro",
    categoria: "Juguetes",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "2500",
    cantidad: "1",
    img: "https://i.ibb.co/XFYVF53/Juguete-Perro-Peluche1.webp",
    descripcion: "Peluche para perros",
    stock: 10,
  },
  {
    id: "25",
    nombre: "Soga para Perros",
    animal: "Perro",
    categoria: "Juguetes",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1500",
    cantidad: "1",
    img: "https://i.ibb.co/DpLcwg9/Juguete-Perro-Soga1.webp",
    descripcion: "Soga para perros",
    stock: 10,
  },
  {
    id: "26",
    nombre: "Soga para Perros",
    animal: "Perro",
    categoria: "Juguetes",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1500",
    cantidad: "1",
    img: "https://i.ibb.co/jD6MXrX/Juguete-Perro-Soga2.webp",
    descripcion: "Soga para perros",
    stock: 10,
  },
  {
    id: "27",
    nombre: "Collar para Perros",
    animal: "Perro",
    categoria: "Paseo",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1500",
    cantidad: "1",
    img: "https://i.ibb.co/wy6t6cV/Paseo-Perro-Collar.webp",
    descripcion: "Collar para perros, marca propia",
    stock: 10,
  },
  {
    id: "28",
    nombre: "Correa para Perros",
    animal: "Perro",
    categoria: "Paseo",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "2000",
    cantidad: "1",
    img: "https://i.ibb.co/whvBLG5/Paseo-Perro-Correa.webp",
    descripcion: "Correa de 2 metros, para perros, marca propia",
    stock: 10,
  },
  {
    id: "29",
    nombre: "Correa para Perros",
    animal: "Perro",
    categoria: "Paseo",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1700",
    cantidad: "1",
    img: "https://i.ibb.co/zrGjs9d/Paseo-Perro-Correa2.webp",
    descripcion: "Correa de 1,5 metros, para perros, marca propia",
    stock: 10,
  },
  {
    id: "30",
    nombre: "Pretal Star Wars para Perros",
    animal: "Perro",
    categoria: "Paseo",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "2100",
    cantidad: "1",
    img: "https://i.ibb.co/5sqykQt/Paseo-Perro-Pretal.webp",
    descripcion: "Pretal para perros, marca propia",
    stock: 10,
  },
  {
    id: "31",
    nombre: "Pretal Minnie para Perros",
    animal: "Perro",
    categoria: "Paseo",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "2200",
    cantidad: "1",
    img: "https://i.ibb.co/KXN6hGq/Paseo-Perro-Pretal2.webp",
    descripcion: "Pretal para perros, marca propia",
    stock: 10,
  },
  {
    id: "32",
    nombre: "Snack para Perros",
    animal: "Perro",
    categoria: "Snack",
    marca: "Golocan",
    edad: "N/A",
    precio: "130",
    cantidad: "1",
    img: "https://i.ibb.co/GdvxLjg/Snack-Perros-Golocan-1.webp",
    descripcion: "Snack Golocan para perros, sabor carne, 125 gr",
    stock: 10,
  },
  {
    id: "33",
    nombre: "Snack para Perros",
    animal: "Perro",
    categoria: "Snack",
    marca: "Golocan",
    edad: "N/A",
    precio: "130",
    cantidad: "1",
    img: "https://i.ibb.co/vCFCbkN/Snack-Perros-Golocan-2.webp",
    descripcion: "Snack Golocan para perros, sabor chocolate, 125 gr",
    stock: 10,
  },
  {
    id: "34",
    nombre: "Snack para Perros",
    animal: "Perro",
    categoria: "Snack",
    marca: "Golocan",
    edad: "N/A",
    precio: "130",
    cantidad: "1",
    img: "https://i.ibb.co/27bQDWk/Snack-Perros-Golocan-3.webp",
    descripcion: "Snack Golocan para perros, sabor queso, 125 gr",
    stock: 10,
  },
  {
    id: "35",
    nombre: "Snack para Perros",
    animal: "Perro",
    categoria: "Snack",
    marca: "Mon Ami",
    edad: "N/A",
    precio: "180",
    cantidad: "1",
    img: "https://i.ibb.co/w78smvH/Snack-Perros-Mon-Ami-1.webp",
    descripcion: "Snack Mon Ami para perros, premium, 125 gr",
    stock: 10,
  },
  {
    id: "36",
    nombre: "Snack para Perros",
    animal: "Perro",
    categoria: "Snack",
    marca: "Mon Ami",
    edad: "N/A",
    precio: "180",
    cantidad: "1",
    img: "https://i.ibb.co/58tCy4Q/Snack-Perros-Mon-Ami-2.webp",
    descripcion: "Snack Mon Ami para perros, premium, 125 gr",
    stock: 10,
  },
  {
    id: "37",
    nombre: "Snack para Perros",
    animal: "Perro",
    categoria: "Snack",
    marca: "Mon Ami",
    edad: "N/A",
    precio: "180",
    cantidad: "1",
    img: "https://i.ibb.co/6wHDKg2/Snack-Perros-Mon-Ami-3.webp",
    descripcion: "Snack Mon Ami para perros, premium, 125 gr",
    stock: 10,
  },
  {
    id: "38",
    nombre: "Alimento Cat Chow 1kg",
    animal: "Gato",
    categoria: "Alimento",
    marca: "Cat Chow",
    edad: "N/A",
    precio: "800",
    cantidad: "1 kg",
    img: "https://i.ibb.co/LCLgcs7/Alimento-Gato-Cat-Chow-1kg.webp",
    descripcion: "Alimento para Gatos Cat Chow, sabor pescado, 1kg",
    stock: 10,
  },
  {
    id: "39",
    nombre: "Alimento Cat Chow 3kg",
    animal: "Gato",
    categoria: "Alimento",
    marca: "Cat Chow",
    edad: "N/A",
    precio: "2200",
    cantidad: "3 kg",
    img: "https://i.ibb.co/10myZHk/Alimento-Gato-Cat-Chow-3kg.webp",
    descripcion: "Alimento para Gatos Cat Chow, sabor pescado, 3kg",
    stock: 10,
  },
  {
    id: "40",
    nombre: "Alimento Cat Chow 8kg",
    animal: "Gato",
    categoria: "Alimento",
    marca: "Cat Chow",
    edad: "N/A",
    precio: "6000",
    cantidad: "8 kg",
    img: "https://i.ibb.co/Lz1DkLB/Alimento-Gato-Cat-Chow-8kg.webp",
    descripcion: "Alimento para Gatos Cat Chow, sabor pescado, 8kg",
    stock: 10,
  },
  {
    id: "41",
    nombre: "Alimento Cat Chow 15kg",
    animal: "Gato",
    categoria: "Alimento",
    marca: "Cat Chow",
    edad: "N/A",
    precio: "11000",
    cantidad: "15 kg",
    img: "https://i.ibb.co/JyGVg2h/Alimento-Gato-Cat-Chow-15kg.webp",
    descripcion: "Alimento para Gatos Cat Chow, sabor pescado, 15kg",
    stock: 10,
  },
  {
    id: "42",
    nombre: "Alimento Whiscas 1kg",
    animal: "Gato",
    categoria: "Alimento",
    marca: "Whiskas",
    edad: "N/A",
    precio: "900",
    cantidad: "1 kg",
    img: "https://i.ibb.co/z6DD9xx/Alimento-Gato-Whiskas-1kg.webp",
    descripcion: "Alimento para Gatos Whiskas, sabor pescado, 1kg",
    stock: 10,
  },
  {
    id: "43",
    nombre: "Alimento Whiscas 10kg",
    animal: "Gato",
    categoria: "Alimento",
    marca: "Whiskas",
    edad: "N/A",
    precio: "8700",
    cantidad: "10 kg",
    img: "https://i.ibb.co/cLNpHrv/Alimento-Gato-Whiskas-10kg.webp",
    descripcion: "Alimento para Gatos Whiskas, sabor pescado, 10kg",
    stock: 10,
  },
  {
    id: "44",
    nombre: "Juguete para Gatos",
    animal: "Gato",
    categoria: "Juguetes",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1200",
    cantidad: "1",
    img: "https://i.ibb.co/BnZbPgp/Juguete-Gato-1.webp",
    descripcion: "Juguete para gatos con forma de Tucán, marca propia",
    stock: 10,
  },
  {
    id: "45",
    nombre: "Juguete para Gatos",
    animal: "Gato",
    categoria: "Juguetes",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1300",
    cantidad: "1",
    img: "https://i.ibb.co/jJ0T6y6/Juguete-Gato-2.webp",
    descripcion:
      "Juguete para gatos con forma de atrapasueños y plumas, marca propia",
    stock: 10,
  },
  {
    id: "46",
    nombre: "Juguete para Gatos",
    animal: "Gato",
    categoria: "Juguetes",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1200",
    cantidad: "1",
    img: "https://i.ibb.co/wLtRG7B/Juguete-Gato-3.webp",
    descripcion:
      "Juguete para gatos con forma de Ratón con cuerda, marca propia",
    stock: 10,
  },
  {
    id: "47",
    nombre: "Juguete para Gatos",
    animal: "Gato",
    categoria: "Juguetes",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1400",
    cantidad: "1",
    img: "https://i.ibb.co/GWkzhCs/Juguete-Gato-4.webp",
    descripcion: "Juguete para gatos con forma de Caña de Pescar, marca propia",
    stock: 10,
  },
  {
    id: "48",
    nombre: "Juguete para Gatos",
    animal: "Gato",
    categoria: "Juguetes",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1500",
    cantidad: "1",
    img: "https://i.ibb.co/YcqtzKt/Juguete-Gato-5.webp",
    descripcion: "Juguete para gatos con forma de Antena, marca propia",
    stock: 10,
  },
  {
    id: "49",
    nombre: "Arnes para Gatos",
    animal: "Gato",
    categoria: "Paseo",
    marca: "Trixie",
    edad: "N/A",
    precio: "1500",
    cantidad: "1",
    img: "https://i.ibb.co/7Kh8T2p/Paseo-Gato-Arnes.webp",
    descripcion: "Arnes para Gatos, ajustable a cualquier tamaño, marca propia",
    stock: 10,
  },
  {
    id: "50",
    nombre: "Transportadora/Bolso para Gatos",
    animal: "Gato",
    categoria: "Paseo",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "4000",
    cantidad: "1",
    img: "https://i.ibb.co/N1wXHnb/Paseo-Gato-Transportadora-Bolso.webp",
    descripcion: "Transportadora para Gatos, forma de bolso, marca propia",
    stock: 10,
  },
  {
    id: "51",
    nombre: "Transportadora para Gatos",
    animal: "Gato",
    categoria: "Paseo",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "5000",
    cantidad: "1",
    img: "https://i.ibb.co/ScDx4x4/Paseo-Gato-Transportadora1.webp",
    descripcion: "Transportadora para Gatos, marca propia",
    stock: 10,
  },
  {
    id: "52",
    nombre: "Acuario Chico para peces",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "3500",
    cantidad: "1",
    img: "https://i.ibb.co/ynGJB5z/Accesorios-Peces-Acuario-Chico.webp",
    descripcion: "Acuario chico para peces, marca propia. Ideal para 3-5 peces",
    stock: 10,
  },
  {
    id: "53",
    nombre: "Acuario Grande para peces",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "5000",
    cantidad: "1",
    img: "https://i.ibb.co/V9DMZG7/Accesorios-Peces-Acuario-Grande.webp",
    descripcion:
      "Acuario grande para peces, marca propia. Ideal para 5-8 peces",
    stock: 10,
  },
  {
    id: "54",
    nombre: "Limpiador de peceras",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "7000",
    cantidad: "1",
    img: "https://i.ibb.co/2n6RvwT/Accesorios-Peces-Limpiador-de-peceras.webp",
    descripcion: "Limpiador de peceras automático, marca propia",
    stock: 10,
  },
  {
    id: "55",
    nombre: "Limpiador de vidrio",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "2500",
    cantidad: "1",
    img: "https://i.ibb.co/QC5Przy/Accesorios-Peces-Limpiador-de-vidrio.webp",
    descripcion: "Limpiador de vidrio, marca propia",
    stock: 10,
  },
  {
    id: "56",
    nombre: "Red para peces",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1200",
    cantidad: "1",
    img: "https://i.ibb.co/tL47j2W/Accesorios-Peces-Red.webp",
    descripcion: "Red para agarrar peces, marca propia",
    stock: 10,
  },
  {
    id: "57",
    nombre: "Termómetro para peceras",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "800",
    cantidad: "1",
    img: "https://i.ibb.co/87x7RWW/Accesorios-Peces-Termometro.webp",
    descripcion: "Termómetro para peceras, con ventosa, marca propia",
    stock: 10,
  },
  {
    id: "58",
    nombre: "Adorno Caracol",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "700",
    cantidad: "1",
    img: "https://i.ibb.co/1zHRm93/Adorno-Peces-Caracol.webp",
    descripcion: "Adorno para peceras con forma de Caracol, marca propia",
    stock: 10,
  },
  {
    id: "59",
    nombre: "Adorno Castillo",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "1700",
    cantidad: "1",
    img: "https://i.ibb.co/HxHTkNV/Adorno-Peces-Castillo.webp",
    descripcion: "Adorno para peceras con forma de Castillo, marca propia",
    stock: 10,
  },
  {
    id: "60",
    nombre: "Adorno Coral",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "700",
    cantidad: "1",
    img: "https://i.ibb.co/jJQxhXz/Adorno-Peces-Coral.webp",
    descripcion: "Adorno para peceras con forma de Coral, marca propia",
    stock: 10,
  },
  {
    id: "61",
    nombre: "Adorno Estrella de Mar",
    animal: "Peces",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "700",
    cantidad: "1",
    img: "https://i.ibb.co/3zfzkzz/Adorno-Peces-Estrella.webp",
    descripcion:
      "Adorno para peceras con forma de Estrella de Mar, marca propia",
    stock: 10,
  },
  {
    id: "62",
    nombre: "Alimento para peces Tetra Min",
    animal: "Peces",
    categoria: "Alimento",
    marca: "Tetra Min",
    edad: "N/A",
    precio: "1100",
    cantidad: "40gr",
    img: "https://i.ibb.co/XD99jNt/Alimento-Peces-Tetra-Min-40gr.webp",
    descripcion: "Alimento para peces marca Tetra Min, 40gr",
    stock: 10,
  },
  {
    id: "63",
    nombre: "Alimento para peces Tetra Min",
    animal: "Peces",
    categoria: "Alimento",
    marca: "Tetra Min",
    edad: "N/A",
    precio: "3300",
    cantidad: "200gr",
    img: "https://i.ibb.co/DMxKYgg/Alimento-Peces-Tetra-Min-200gr.webp",
    descripcion: "Alimento para peces marca Tetra Min, 200gr",
    stock: 10,
  },
  {
    id: "64",
    nombre: "Bebedero para Aves",
    animal: "Aves",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "2100",
    cantidad: "1",
    img: "https://i.ibb.co/bb1v3Yv/Accesorios-Aves-Bebedero.webp",
    descripcion: "Bebedero para Aves Grande, marca propia, excelente calidad",
    stock: 10,
  },
  {
    id: "65",
    nombre: "Comedero para Aves",
    animal: "Aves",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "2500",
    cantidad: "1",
    img: "https://i.ibb.co/7QS39f9/Accesorios-Aves-Comedero.webp",
    descripcion: "Comedero para Aves Grande, marca propia, excelente calidad",
    stock: 10,
  },
  {
    id: "66",
    nombre: "Jaula para Aves Chica",
    animal: "Aves",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "11000",
    cantidad: "1",
    img: "https://i.ibb.co/wWXqZb0/Accesorios-Aves-Jaula-52x33.webp",
    descripcion: "Jaula para Aves Chica, marca propia, 52x33",
    stock: 10,
  },
  {
    id: "67",
    nombre: "Jaula para Aves Grande",
    animal: "Aves",
    categoria: "Accesorios",
    marca: "Pugs&Co",
    edad: "N/A",
    precio: "15000",
    cantidad: "1",
    img: "https://i.ibb.co/3dKCysg/Accesorios-Aves-Jaula-64x54x96.webp",
    descripcion: "Jaula para Aves Grande, marca propia, 64x54x96",
    stock: 10,
  },
  {
    id: "68",
    nombre: "Alpiste para Aves",
    animal: "Aves",
    categoria: "Alimento",
    marca: "Zootec",
    edad: "N/A",
    precio: "650",
    cantidad: "1kg",
    img: "https://i.ibb.co/mGTqmP0/Alimento-Aves-Alpiste-1kg.webp",
    descripcion: "Alpiste para Aves, marca Zootec, alpiste...perdiste",
    stock: 10,
  },
  {
    id: "69",
    nombre: "Mix Veggie para Aves",
    animal: "Aves",
    categoria: "Alimento",
    marca: "Zootec",
    edad: "N/A",
    precio: "550",
    cantidad: "200gr",
    img: "https://i.ibb.co/rvCM6Cm/Alimento-Aves-Mix-Veggie-200gr.webp",
    descripcion: "Mix Veggie para Aves, marca Zootec",
    stock: 10,
  },
  {
    id: "70",
    nombre: "Suplemento Alimentario para Aves",
    animal: "Aves",
    categoria: "Alimento",
    marca: "Mil Colores",
    edad: "N/A",
    precio: "230",
    cantidad: "100gr",
    img: "https://i.ibb.co/bv81DQ7/Alimento-Aves-Suplemento-Alimentario.webp",
    descripcion: "Suplemento alimentario para Aves, marca Mil Colores",
    stock: 10,
  },
];
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(productList);
      } else {
        reject(alert("error"));
      }
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    resolve(productList.find((prod) => prod.id === id));
  });
};
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    resolve(productList.filter((prod) => prod.categoria === categoryId));
  });
};
export const getProductsByPet = (petId) => {
  return new Promise((resolve) => {
    resolve(productList.filter((prod) => prod.animal === petId));
  });
};
