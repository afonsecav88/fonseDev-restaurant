import { Header } from '../components/Header';
import { ContactDetails } from './ContactDetails';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full sm:ml-0 flex-wrap gap-3 items-center  bg-slate-50">
        <article className="flex justify-evenly w-full pt-2 mt-3 pb-4 bg-center bg-[url('/cover-restaurant-description3.svg')]">
          <section className="flex flex-col items-center gap-6 min-w-96 md:flex-row sm:gap-3">
            <div className="my-8 mx-1 sm:pl-8">
              <p className="text-2xl mb-2 ">Porque eligir nuestra comida</p>
              <p className="text-xs w-48">
                En nuestra cocina, cada ingrediente es tratado con el máximo
                respeto y cuidado. Desde las verduras frescas hasta las especias
                exóticas, procuramos seleccionar los mejores productos para cada
                plato. Esta dedicación a la calidad se refleja en el sabor y la
                frescura de nuestras creaciones.
              </p>
            </div>

            <img
              className="w-72 h-80  rounded-md hover:-translate-y-1 hover:scale-110 hover:transition hover:duration-75 hover:ease-in-out cursor-pointer"
              src="/dish-description.jpg"
              alt="dish-description"
            />
          </section>
        </article>

        <article>
          <section className="flex gap-3 items-center min-h-6 pt-10">
            <p className="text-2xl">Lo mejor de la semana</p>
          </section>
        </article>

        <article className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3 items-center min-h-32 p-10">
          <section className="bg-green-50 p-5 rounded-md">
            <img
              className="w-72 h-60 rounded-md mb-4 hover:-translate-y-1 hover:scale-110 hover:transition hoverduration-300 hover:ease-in-out cursor-pointer"
              src="/dish-1.jpg"
              alt="dish-1"
            />
            <div className="inline-flex gap-24 mb-6">
              <p className="text-sm mt-3  font-bold">Paella de Mariscos</p>
              <p className="text-sm mt-3">Precio: $ 500</p>
            </div>
            <p className="text-xs w-64 h-60 mb-6">
              Nuestra Paella de Mariscos es una celebración de los sabores del
              Mediterráneo en su máxima expresión. Preparada con arroz bomba de
              alta calidad y cocida lentamente en caldo de pescado casero, esta
              paella está repleta de una exquisita variedad de mariscos frescos,
              que incluyen camarones jugosos, mejillones tiernos, calamares
              tiernos y vieiras suculentas. Cada bocado es una explosión de
              sabores marinos, realzados por el azafrán y las especias
              seleccionadas con cuidado. El aroma tentador de esta paella al
              servirse es solo el preludio de una experiencia culinaria
              inolvidable que transportará sus sentidos a las costas del sur de
              España..
            </p>
            <p className="text-sm mt-3 font-bold gap-4">
              Clasificación de este plato : 5 ⭐
            </p>
          </section>
          <section className="flex flex-col bg-green-50 p-5 rounded-md">
            <img
              className="w-72 h-60 rounded-md mb-4 hover:-translate-y-1 hover:scale-110 hover:transition hoverduration-300 hover:ease-in-out cursor-pointer"
              src="/dish-2.jpg"
              alt="dish-1"
            />
            <div className="inline-flex gap-24 mb-6">
              <p className="text-sm mt-3  font-bold">Ceviche Peruano</p>
              <p className="text-sm mt-3">Precio: $ 500</p>
            </div>
            <p className="text-xs w-64 h-60 mb-6">
              El Ceviche Peruano es una explosión refrescante de sabores
              cítricos y picantes que captura la esencia de la costa peruana.
              Preparado con pescado blanco fresco, cortado en cubos y marinado
              en una mezcla de jugo de limón fresco, ají amarillo, cebolla roja
              y cilantro, cada bocado de este ceviche es una experiencia
              vibrante para el paladar. La frescura del pescado se equilibra
              perfectamente con la acidez del limón y el toque de calor del ají,
              creando una armonía de sabores que es simplemente irresistible.
            </p>
            <p className="text-sm mt-3 font-bold gap-4">
              Clasificación de este plato : 4.5 ⭐
            </p>
          </section>

          <section className="flex flex-col bg-green-50 p-5 rounded-md">
            <img
              className="w-72 h-60 rounded-md mb-4 hover:-translate-y-1 hover:scale-110 hover:transition hoverduration-300 hover:ease-in-out cursor-pointer"
              src="/dish-3.jpg"
              alt="dish-1"
            />
            <div className="inline-flex gap-24 mb-6">
              <p className="text-sm mt-3  font-bold">Asado Argentino</p>
              <p className="text-sm mt-3">Precio: $ 500</p>
            </div>
            <p className="text-xs w-64 h-60 mb-6">
              Nuestro Asado Argentino es un homenaje a la tradición y la pasión
              por la carne a la parrilla que define la cultura gastronómica de
              Argentina. Seleccionamos cuidadosamente los cortes más jugosos y
              tiernos, que incluyen entraña, chorizo y costillas de cerdo, y los
              sazonamos con nuestra mezcla de especias caseras. Luego, se asan a
              la perfección sobre brasas ardientes hasta alcanzar un dorado
              irresistible por fuera y una jugosidad incomparable por dentro.
            </p>
            <p className="text-sm mt-3 font-bold gap-4">
              Clasificación de este plato : 4.7 ⭐
            </p>
          </section>
        </article>

        <article className="flex flex-col gap-16  py-10 md:flex-row ml-6 bg-[url('/cover-restaurant-contact.svg')] ">
          <section className="flex flex-col ">
            <p className="font-bold text-neutral-700 text-sm">
              DATOS DE CONTACTO
            </p>
            <ContactDetails />
          </section>
          <section className="flex flex-col">
            <p className="font-bold text-neutral-700 text-sm">
              NUESTRO HORARIO
            </p>
            <ul className="py-5  items-center text-sm text-neutral-700">
              <p className="font-bold ">Lunes a Jueves:</p>
              <li>Desayuno: 8:00 a.m. - 11:00 a.m.</li>
              <li>Almuerzo: 12:00 p.m. - 3:00 p.m.</li>
              <li>Cena: 6:00 p.m. - 10:00 p.m.</li>
              <p className="font-bold mt-5">Viernes y Sábado:</p>
              <li>Desayuno: 8:00 a.m. - 11:00 a.m.</li>
              <li>Almuerzo: 12:00 p.m. - 3:00 p.m.</li>
              <li>Cena: 6:00 p.m. - 11:00 p.m.</li>
              <p className="font-bold mt-5">Domingo:</p>
              <li> Brunch: 9:00 a.m. - 2:00 p.m.</li>
              <li> Cena: 5:00 p.m. - 9:00 p.m.</li>
            </ul>
          </section>
        </article>

        <section className="flex flex-col w-full items-center gap-6 bg-cover  bg-indigo-50 py-10">
          <p className="text-2xl text-neutral-700">Donde encontrarnos </p>
          <iframe
            id="restaurant-location"
            title="Maps of Restaurant"
            strict-origin="true"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13088.739164419956!2d-56.1477084!3d-34.901811849999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2suy!4v1711163523446!5m2!1ses!2suy"
            className="border-spacing-0 w-full h-96"
            loading="lazy"
          ></iframe>
          <footer className="flex flex-col items-center text-neutral-700">
            Copyright &copy;2024 - Todos los derechos reservados
          </footer>
        </section>
      </main>
    </>
  );
};
