# SDProveedorBarberias_Full

Esta aplicacion es un E-commerce, el cual esta imlementada de manera muy basica

El proyecto cuenta con 2 modelos, los cuales son Productos e Imagenes

Productos: Almacena la informacion del producto a vender (id,nombre,precio,cantidad,descripcion,image-url).

Imagenes: Es un modelo el cual esta pensado, para almacenar las urls de las imagenes detalladas de cada producto, asi, cuando un cliente eliga un producto, la base de datos cuente con las fotos detalladas de como es en si el producto. La estructura de este modelo es (id,belong-to:id del producto,image-url)

Por el momento la implementacion del modelo Imagenes, no se esta ocupando, ya que se piensa ocupar cuando las imagenes esten ennun servidor S3, para asi poder acceder a las imagenes en cualquier parte del mundo.
