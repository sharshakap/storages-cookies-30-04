import React, { useState } from "react";

const Home = () => {
  const [key, setKey] = useState("");
  const [dato, setDato] = useState("");

  const handleInput = (e, set) => {
    set(e.target.value);
  };

  const activarBoton = () => {
    return dato === "" || key === "";
  };

  const cookiesToObject = () =>
    document.cookie.split(";").reduce((objs, data) => {
      data = data.trim();
      const pos = data.indexOf("=");
      const id__ = data.substring(0, pos);
      const value__ = data.slice(pos + 1);
      if (value__ && id__) {
        objs[id__] = value__;
      }
      return objs;
    }, {});

  const clearAllCookies = () =>
    document.cookie
      .split(";")
      .map((data) => (document.cookie = `${data.trim()};max-age=-1;`));

  const crear = (type) => {
    //quito los espacios, no puedo actualizar el estado ya que que el codigo al estar en virtualDom se ejecuta antes que se renderice por lo que si actualizace el state no serviria el trim(), ya que se ejecturia antes que el setstate (funcion asincrona)
    const key__ = key.trim();
    const dato__ = dato.trim();
    if (type === document.cookie) {
      //;path=path (p. ej.: '/'. '/midir'). Si no se especifica, por defecto corresponde a la ruta del documento actual.
      document.cookie = `${key__}=${dato__};max-age=30;`;
      return;
    }
    //sino existe lo crea, si existe edita, en realidad es lo mismo que el editar por lo que conviene hacer alguna validacion
    //como en este caso mi validacion es si encuentra la key no deja ingresar
    !type.getItem(key__) && type.setItem(key__, dato__);
  };
  const mostrar = (type) => {
    if (type === document.cookie) {
      alert(document.cookie);
      console.log(cookiesToObject());
      return;
    }
    alert(type.getItem(key.trim()));
  };
  const actualizar = (type) => {
    const key__ = key.trim();
    const dato__ = dato.trim();
    if (type === document.cookie) {
      document.cookie = `${key__}=${dato__};max-age=30;`;
      return;
    }
    //sino existe lo crea, si existe edita, en realidad es lo mismo que el crear por lo que conviene hacer alguna validacion
    //como en este caso mi validacion es si no encuentra la key no deja ingresar
    type.getItem(key__) && type.setItem(key__, dato__);
  };
  const eliminar = (type) => {
    const key__ = key.trim();
    const dato__ = dato.trim();
    if (type === document.cookie) {
      document.cookie = `${key__}=${dato__};max-age=-1;`;
      return;
    }
    type.removeItem(key__);
  };

  const vaciar = (type) => {
    if (type === document.cookie) {
      clearAllCookies();
      return;
    }
    type.clear();
  };

  return (
    <div className="d-flex flex-column mw-25">
      <div className="ml-3">
        <form className="w-25 d-flex flex-column mt-3">
          <div className="mb-3">
            <label className="ml-3" htmlFor="key">
              Identificador (Key)
            </label>
            <input
              id="key"
              type="text"
              value={key}
              onChange={(e) => handleInput(e, setKey)}
            />
          </div>
          <div className="mb-3">
            <label className="ml-3" htmlFor="value">
              Valor (Value)
            </label>
            <input
              id="value"
              type="text"
              value={dato}
              onChange={(e) => handleInput(e, setDato)}
            />
          </div>
        </form>
        <div>
          <h2 className="">Session Storage</h2>
          <button
            type="button"
            disabled={activarBoton()}
            className="btn btn-primary mt-1 btn-lg mr-1"
            onClick={() => crear(sessionStorage)}
          >
            Crear
          </button>
          <button
            type="button"
            className="btn btn-secondary mt-1 btn-lg mr-1"
            onClick={() => mostrar(sessionStorage)}
          >
            Mostrar
          </button>
          <button
            type="button"
            disabled={activarBoton()}
            className="btn btn-success mt-1 btn-lg mr-1"
            onClick={() => actualizar(sessionStorage)}
          >
            Actualizar
          </button>
          <button
            type="button"
            className="btn btn-danger mt-1 btn-lg mr-1"
            onClick={() => eliminar(sessionStorage)}
          >
            Eliminar
          </button>
          <button
            type="button"
            className="btn btn-dark mt-1 btn-lg mr-1"
            onClick={() => vaciar(sessionStorage)}
          >
            Vaciar
          </button>

          <h2 className="mt-5">Local Storage</h2>
          <button
            type="button"
            disabled={activarBoton()}
            className="btn btn-primary mt-1 btn-lg mr-1"
            onClick={() => crear(localStorage)}
          >
            Crear
          </button>
          <button
            type="button"
            className="btn btn-secondary mt-1 btn-lg mr-1"
            onClick={() => mostrar(localStorage)}
          >
            Mostrar
          </button>
          <button
            type="button"
            disabled={activarBoton()}
            className="btn btn-success mt-1 btn-lg mr-1"
            onClick={() => actualizar(localStorage)}
          >
            Actualizar
          </button>
          <button
            type="button"
            className="btn btn-danger mt-1 btn-lg mr-1"
            onClick={() => eliminar(localStorage)}
          >
            Eliminar
          </button>
          <button
            type="button"
            className="btn btn-dark mt-1 btn-lg mr-1"
            onClick={() => vaciar(localStorage)}
          >
            Vaciar
          </button>

          <h2 className="mt-5">Cookies</h2>
          <button
            type="button"
            disabled={activarBoton()}
            className="btn btn-primary mt-1 btn-lg mr-1"
            onClick={() => crear(document.cookie)}
          >
            Añadir/Actualizar
          </button>
          <button
            type="button"
            className="btn btn-secondary mt-1 btn-lg mr-1"
            onClick={() => mostrar(document.cookie)}
          >
            Mostrar Cookies
          </button>
          {/* <button
            type="button"
            disabled={activarBoton()}
            className="btn btn-success mt-1 btn-lg mr-1"
            onClick={() => actualizar(document.cookie)}
          >
            Actualizar
          </button> */}
          <button
            type="button"
            className="btn btn-danger mt-1 btn-lg mr-1"
            onClick={() => eliminar(document.cookie)}
          >
            Eliminar
          </button>
          <button
            type="button"
            className="btn btn-dark mt-1 btn-lg mr-1"
            onClick={() => vaciar(document.cookie)}
          >
            Vaciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
