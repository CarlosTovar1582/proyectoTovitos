import React, { useContext, Fragment, useState } from "react";
//clases dinamicas
import { clsx } from "clsx";
import { useLocation, useParams } from "react-router-dom";
//import { Button, Transition } from "@headlessui/react";
import {
  Field,
  Label,
  Dialog,
  Popover,
  Tab,
  TabGroup,
  Radio,
  Transition,
  RadioGroup,
  Disclosure,
  Button,
  DisclosureButton,
  DisclosurePanel,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";

import { StarIcon } from "@heroicons/react/20/solid";
//icons
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
  HeartIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  CheckCircleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const seleccionTalla = {
  seleccion: [
    //Pantalones
    {
      id: 1,
      grupo: 2,
      details: [
        {
          id: 6,
          talla: "4",
          precio: "S/.20",
        },
        {
          id: 8,
          talla: "6",
          precio: "S/.30",
        },
        {
          id: 10,
          talla: "8",
          precio: "S/.40",
        },
        {
          id: 12,
          talla: "10",
          precio: "S/.50",
        },
        {
          id: 14,
          talla: "12",
          precio: "S/.60",
        },
        {
          id: 16,
          talla: "14",
          precio: "S/.70",
        },
      ],
    },
  ],
};

const detalleProduct = {
  detalle: [
    {
      id: 1,
      name: "Pantalon Jeans Streech con Regulador",
      price: "S/.37",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://i.postimg.cc/CLQzKhNr/PN-01.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 2,
          name: "Angled view",
          src: "https://i.postimg.cc/Gh5Zt25f/PN-02-FINAL.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 3,
          name: "Angled view",
          src: "https://i.postimg.cc/brhY57r9/PN-03-FINAL.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        {
          id: 4,
          name: "Angled view",
          src: "https://i.postimg.cc/52VzdrYy/PN-04-FINAL.png",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-blue-900",
          selectedColor: "ring-gray-700",
        },
        // { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        /*{
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },*/
      ],
      sizes: [
        { id: "6", inStock: true },
        { id: "8", inStock: true },
        { id: "10", inStock: true },
        { id: "12", inStock: true },
        { id: "14", inStock: true },
        { id: "16", inStock: true },
      ],
      description: `
    <p>El pantalon es completamente regulable debido a su elastico que lleva en la cintura.</>
    
  `,
      details: [
        {
          name: "Medidas del Producto  (Largo)",
          items: [
            "Talla 6  : 60 cm",
            "Talla 8  : 64 cm",
            "Talla 10 : 68 cm",
            "Talla 12 : 72 cm",
            "Talla 14 : 76 cm",
            "Talla 16 : 80 cm",
          ],
        },
      ],
    },
  ],
};

const listproducts = {
  categories: [
    //Conjuntos
    {
      id: 1,
      grupo: 1,
      name: "Conjuntos Modelo 1",
      href: "#",
      price: "$13",
      description: "3 sizes available",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-01-image-card-01.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 2,
      grupo: 1,
      name: "Conjunto Modelo 2",
      href: "#",
      price: "$64",
      description: "Walnut",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-01-image-card-02.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    //Pantalones
    {
      id: 3,
      grupo: 2,
      name: "Pantalon Jeans Modelo 1",
      href: "#",
      price: "$64",
      description: "Walnut",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-01-image-card-02.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 4,
      grupo: 2,
      name: "Pantalon Jeans Modelo 1",
      href: "#",
      price: "$64",
      description: "Walnut",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-01-image-card-02.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    //Shorts
    {
      id: 5,
      grupo: 3,
      name: "Shorts Modelo 1",
      href: "#",
      price: "$64",
      description: "Walnut",
      imageSrc:
        "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-01-image-card-02.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
  ],
};
/*const plans = [
  { name: "Startup", available: true },
  { name: "Business", available: true },
  { name: "Enterprise", available: false },
];*/

export default function Products() {
  //const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  //const [selected, setSelected] = useState(product.colors[0]);

  /*const [selectedSize, setSelectedSize] = useState(
    detalleProduct.detalle.sizes[2]
  );*/
  //let [selected, setSelected] = useState(plans[0]);
  //let [selected, setSelected] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  let [isShowing, setIsShowing] = useState(false);
  const params = useParams();
  //cerrar modal
  function closeModal() {
    setIsOpen(false);
  }
  function limpiarModal() {
    //setIsOpen(false);
    document.getElementById("idMonto").innerText = "";
  }
  //abrir modal
  function openModal() {
    setIsOpen(true);
  }
  function valorSeleccionado(image) {
    /*setActiveIndex(true);
    setTitulo(item.name);
    //setParametroDetalle(true);
    setParametroDetalle(item);

    document.getElementById("idtitulo").style.visibility = "visible";
    //document.getElementById("idcosto").innerText = "";
    document.getElementById("idmensaje").innerText = "";
    document.getElementById("idtallas").style.visibility = "visible";*/
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function onClickHandler(id) {
    //console.log(id);
    seleccionTalla.seleccion.map((product) =>
      product.grupo == params.id
        ? product.details.map((item) =>
            item.id == id
              ? (document.getElementById("idMonto").innerText = item.precio)
              : null
          )
        : null
    );
  }
  let calculo = 1;
  function restarNumero() {
    if (calculo > -(-1)) {
      calculo -= 1;
      document.getElementById("cantidad").innerText = calculo;
      //document.getElementById("cantidadTotal").innerText=calculo
    }
  }
  function sumarNumero() {
    if (calculo < 10) {
      calculo += 1;
      document.getElementById("cantidad").innerText = calculo;
      //document.getElementById("cantidadTotal").innerText=calculo
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://i.postimg.cc/RhMc5JvP/Logo-Fondo1.png")`,
      }}
    >
      <div className="">
        {/* Mostrar lista deProductos */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1
            id="products-heading"
            className="text-center pb-10 font-Concert-One text-6xl"
          >
            {"1" == params.id ? "Conjuntos" : null}
            {"2" == params.id ? "Pantalones" : null}
            {"3" == params.id ? "Shorts" : null}
          </h1>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {listproducts.categories.map((product) =>
              product.grupo == params.id ? (
                <a key={product.id} href={product.href} className="group">
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className=""
                  >
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3"
                    />
                  </button>
                  <div className="mt-4 flex items-center justify-center  text-base font-DynaPuff text-blue-600">
                    <h5>{product.name}</h5>
                  </div>
                </a>
              ) : null
            )}
          </div>
        </div>
      </div>
      {/* AbrirPopalModel */}
      <Transition appear show={isOpen} as={Fragment} onClose={setOpen}>
        <Dialog
          as="div"
          className="relative z-10 border-2 border-cyan-500"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden border-slate-900 rounded-2xl bg-slate-900 p-1 text-left align-middle shadow-xl transition-all">
                  {/* Empiezo de popup */}

                  <div className="bg-white border-2 border-black rounded-3xl">
                    <div className="mx-auto max-w-2xl px-1 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <button
                          type="button"
                          className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                          onClick={() => closeModal(false)}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon
                            className="h-10 w-10 font-bold bg-slate-950 text-white rounded-full"
                            aria-hidden="true"
                          />
                        </button>
                        {/* Image gallery */}
                        <TabGroup className="flex flex-col-reverse">
                          {/* Image selector */}
                          <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
                            <TabList className="grid grid-cols-4 gap-6">
                              {detalleProduct.detalle.map((image, selected) =>
                                image.images.map((item) => (
                                  <Tab
                                    key={item.id}
                                    className="relative  h-24  sm:h-56 sm:w-36   
                                                  bg-white text-sm font-medium uppercase text-gray-900 
                                                  hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 "
                                  >
                                    <span className="sr-only">{item.name}</span>
                                    <span className="absolute inset-0 overflow-hidden rounded-md">
                                      <img
                                        alt=""
                                        src={item.src}
                                        className="h-full w-full object-cover object-center px-1 rounded-2xl"
                                      />
                                    </span>
                                    <span
                                      className={classNames(
                                        selected
                                          ? "ring-transparent"
                                          : "ring-transparent",
                                        "pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-offset-2"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Tab>
                                ))
                              )}
                            </TabList>
                          </div>
                          {/* Image Grande */}
                          <TabPanels>
                            {detalleProduct.detalle.map((image) =>
                              image.images.map((item) => (
                                <TabPanel key={item.id}>
                                  <img
                                    alt={item.alt}
                                    src={item.src}
                                    className=" w-full object-cover rounded-3xl"
                                  />
                                </TabPanel>
                              ))
                            )}
                          </TabPanels>
                        </TabGroup>

                        {/* Product informacion */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 font-DynaPuff">
                          {/* aqui inicia el arreglo */}
                          {detalleProduct.detalle.map((image, selected) => (
                            <div key={image.id}>
                              <h1 className="text-3xl  tracking-tight text-gray-900 ">
                                {image.name}
                              </h1>

                              <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl tracking-tight text-gray-900"></p>
                              </div>
                              <div className="mt-6">
                                <h3 className="sr-only ">Description</h3>

                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: image.description,
                                  }}
                                  className="space-y-6  text-gray-700 "
                                />
                              </div>
                            </div>
                          ))}
                          {/* Formulario de Tallas */}
                          <form className="mt-6">
                            {/* Size */}
                            <div>
                              <fieldset
                                aria-label="Choose a size"
                                className="mt-8"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="text-sm font-bold text-gray-900">
                                    Tallas
                                  </div>
                                </div>

                                <RadioGroup className="mt-2 grid grid-cols-7 gap-2">
                                  {detalleProduct.detalle.map((size) =>
                                    size.sizes.map((item) => (
                                      <Field
                                        key={item.id}
                                        disabled={!item.inStock}
                                        className="flex items-center gap-2"
                                      >
                                        <Radio
                                          value={item}
                                          className="group flex px-5 py-5 size-1 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400 data-[disabled]:bg-gray-100"
                                          onClick={() =>
                                            onClickHandler(item.id)
                                          }
                                        >
                                          <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                                          {item.id}
                                        </Radio>
                                      </Field>
                                    ))
                                  )}
                                </RadioGroup>
                              </fieldset>
                            </div>
                            {/* Precio */}
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-sm  font-bold  text-gray-900">
                                Precio
                              </div>
                            </div>
                            <h1
                              id="idMonto"
                              className=" text-6xl font-bold tracking-tight text-red-600 mt-2 text-center"
                            ></h1>
                            {/* Cantidad */}
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-sm  font-bold  text-gray-900">
                                Cantidad
                              </div>
                            </div>
                            <div className="grid grid-cols-6  text-1xl mt-4 ">
                              <div className="col-span-1 border-2 border-slate-200 rounded">
                                <Button
                                  className="rounded  py-1 px-4 text-3xl text-black data-[hover]:bg-slate-950 hover:text-black
                                                        data-[active]:bg-sky-700 h-10 w-11 sm:h-10 sm:w-24 md:h-10 md:w-24"
                                  onClick={restarNumero}
                                >
                                  -
                                </Button>
                              </div>
                              <div className="col-span-1">
                                <h1
                                  id="cantidad"
                                  className="text-2xl pt-2 text-center text-slate-700"
                                >
                                  {calculo}
                                </h1>
                              </div>
                              <div className="col-span-1 border-2 border-slate-200 rounded">
                                <Button
                                  className="rounded  py-1 px-4 text-3xl text-black data-[hover]:bg-slate-950 hover:text-black
                                                        data-[active]:bg-sky-700    h-10 w-11 sm:h-10 sm:w-24 md:h-10 md:w-24"
                                  onClick={sumarNumero}
                                >
                                  +
                                </Button>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                              <div className="text-sm  font-bold  text-gray-900">
                                Nota *
                              </div>
                            </div>
                            <h6 className=" text-1xl font-bold tracking-tight text-stone-500 mt-2 text-center">
                              A partir de 3 productos para adelante tiene un
                              costo al x mayor x cada uno de ellos.
                            </h6>

                            <div className="mt-10 flex">
                              <button
                                type="submit"
                                className=" flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden sm:w-full"
                              >
                                Solicitar
                              </button>

                              <button
                                type="button"
                                className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                              >
                                <span className="sr-only">
                                  Add to favorites
                                </span>
                              </button>
                            </div>
                          </form>

                          <section
                            aria-labelledby="details-heading"
                            className="mt-12"
                          >
                            <h2 id="details-heading" className="sr-only">
                              Additional details
                            </h2>
                            {/* Acordion */}
                            <div className="divide-y divide-gray-200 border-t">
                              {detalleProduct.detalle.map((detail) =>
                                detail.details.map((item) => (
                                  <Disclosure key={item.name} as="div">
                                    <h3>
                                      <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                                        <span className="text-sm  text-gray-900 group-data-open:text-indigo-600">
                                          {item.name}
                                        </span>
                                        <span className="ml-6 flex items-center">
                                          <PlusIcon
                                            aria-hidden="true"
                                            className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-open:hidden"
                                          />
                                          <MinusIcon
                                            aria-hidden="true"
                                            className="hidden size-6 text-indigo-400 group-hover:text-indigo-500 group-data-open:block"
                                          />
                                        </span>
                                      </DisclosureButton>
                                    </h3>
                                    <DisclosurePanel className="pb-6">
                                      <ul
                                        role="list"
                                        className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                                      >
                                        {item.items.map((lista) => (
                                          <li key={lista} className="pl-2 ">
                                            {lista}
                                          </li>
                                        ))}
                                      </ul>
                                    </DisclosurePanel>
                                  </Disclosure>
                                ))
                              )}
                            </div>
                          </section>

                          {/* aqui finaliza el arreglo */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* AbrirPopalModel */}
    </div>
  );
}
