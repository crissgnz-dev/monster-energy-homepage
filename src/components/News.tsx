import React from "react";
import Noticia1 from "../assets/news/Noticia1.webp";
import Noticia2 from "../assets/news/Noticia2.webp";
import Noticia3 from "../assets/news/Noticia3.webp";
import Noticia4 from "../assets/news/Noticia4.webp";

export default function News() {
  return (
    <div className="p-15">
      <h2 className="uppercase text-6xl border-b-2 border-green-600 font-bold">
        Novedades
      </h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-8">
        <a
          href="#"
          className="bg-neutral-800 col-span-2 mt-5 rounded-xl overflow-hidden"
        >
          <div className="relative">
            <img src={Noticia1} className="bg-cover bg-center" />
            <div className="absolute top-1 left-1 bg-neutral-800 p-1 px-2 rounded-lg">
              <p className="text-green-600 uppercase font-bold mt-1">
                Action / Skateboard
              </p>
            </div>
          </div>
          <div className="p-2">
            <h2 className="text-xl font-bold">
              Disorderly Conduct Tour: Episodio 3
            </h2>
            <p className="text-neutral-300">
              Sumérgete en el caos detrás de la Disorderly Conduct Tour!
            </p>
            <p className="text-xs mt-3">9/10/2025</p>
          </div>
        </a>

        <a
          href="#"
          className="bg-neutral-800 mt-5 rounded-xl overflow-hidden h-120 self-center"
        >
          <div className="relative">
            <img src={Noticia2} className="" />
            <div className="absolute top-1 left-1 bg-neutral-800 p-1 px-2 rounded-lg">
              <p className="text-green-600 uppercase font-bold mt-1">Gaming</p>
            </div>
          </div>
          <div className="p-2">
            <h2 className="text-xl font-bold">
              Call of Duty NEXT: Beta de Black Ops 7, nuevo mapa de Warzone y
              Zombis
            </h2>
            <p className="text-neutral-300">
              Todo lo revelado en Call of Duty NEXT: campaña de Black Ops 7,
              multijugador, actualizaciones de Warzone y detalles de Zombies
              antes del lanzamiento del 14 de noviembre.
            </p>
            <p className="text-xs mt-3">8/10/2025</p>
          </div>
        </a>

        <a
          href="#"
          className="bg-neutral-800 mt-5 rounded-xl overflow-hidden h-120 self-center"
        >
          <div className="relative">
            <img src={Noticia3} />
            <div className="absolute top-1 left-1 bg-neutral-800 p-1 px-2 rounded-lg">
              <p className="text-green-600 uppercase font-bold mt-1">
                Motor / 2 Ruedas
              </p>
            </div>
          </div>
          <div className="p-2">
            <h2 className="text-xl font-bold">
              EL PRIMER GRAN PREMIO DE BIKE LIFE DEL MUNDO
            </h2>
            <p className="text-neutral-300">
              20 pilotos de élite de todo el mundo se dieron cita en el Track
              Kartodromo de Atenas para la inauguración del Bike Life GP, un
              evento a puerta cerrada diseñado para mostrar el talento innato,
              la creatividad y el espíritu comunitario del movimiento Bike Life
              en un entorno profesional.
            </p>
            <p className="text-xs mt-3">7/10/2025</p>
          </div>
        </a>

        <a
          href="#"
          className="bg-neutral-800 mt-5 rounded-xl col-span-2 overflow-hidden"
        >
          <div className="relative">
            <img src={Noticia4} />
            <div className="absolute top-1 left-1 bg-neutral-800 p-1 px-2 rounded-lg">
              <p className="text-green-600 uppercase font-bold mt-1">
                Motor / F1
              </p>
            </div>
          </div>
          <div className="p-2">
            <h2 className="text-xl font-bold">
              EL PRIMER CAMPEONATO DE CONSTRUCTORES CONSECUTIVO PARA McLAREN
              DESDE 1991
            </h2>
            <p className="text-neutral-300">
              Singapur iluminó la noche y McLaren iluminó el campeonato. Bajo
              las brillantes luces de Marina Bay, los pilotos papaya rugieron
              por las calles y entraron en los libros de historia, asegurando su
              segundo título consecutivo de Constructores a falta de seis
              carreras.
            </p>
            <p className="text-xs mt-3">6/10/2025</p>
          </div>
        </a>
      </div>
    </div>
  );
}
