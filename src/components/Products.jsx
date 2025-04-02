import React, { useContext, Fragment, useState } from "react";

import { useLocation, useParams } from "react-router-dom";
//import { Button, Transition } from "@headlessui/react";
import {
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

import clsx from "clsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const product = {
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
    { name: "6", inStock: true },
    { name: "8", inStock: true },
    { name: "10", inStock: true },
    { name: "12", inStock: true },
    { name: "14", inStock: true },
    { name: "16", inStock: true },
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
    // More sections...
  ],
};

const products = [
  {
    id: 1,
    grupo: 1,
    name: "Casaca Jeans Modelo 1",
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
    name: "Casaca Jeans Modelo 2",
    href: "#",
    price: "$64",
    description: "Walnut",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-01-image-card-02.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },

  // More products...
];

export default function Products() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  let [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  let [isShowing, setIsShowing] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const params = useParams();
  return (
    <div
      style={{
        backgroundImage: `url("https://i.postimg.cc/RhMc5JvP/Logo-Fondo1.png")`,
      }}
    >
      <div>
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
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <button type="button" onClick={() => openModal()} className="">
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
            ))}
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
                              {product.images.map((image) => (
                                <Tab
                                  key={image.id}
                                  className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 focus:ring-3 focus:ring-indigo-500/50 focus:ring-offset-4 focus:outline-hidden"
                                >
                                  <span className="sr-only">{image.name}</span>
                                  <span className="absolute inset-0 overflow-hidden rounded-md">
                                    <img
                                      alt=""
                                      src={image.src}
                                      className="size-full object-cover"
                                    />
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-indigo-500"
                                  />
                                </Tab>
                              ))}
                            </TabList>
                          </div>

                          <TabPanels>
                            {product.images.map((image) => (
                              <TabPanel key={image.id}>
                                <img
                                  alt={image.alt}
                                  src={image.src}
                                  className=" w-full object-cover rounded-3xl"
                                />
                              </TabPanel>
                            ))}
                          </TabPanels>
                        </TabGroup>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {product.name}
                          </h1>

                          <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900"></p>
                          </div>

                          <div className="mt-6">
                            <h3 className="sr-only">Description</h3>

                            <div
                              dangerouslySetInnerHTML={{
                                __html: product.description,
                              }}
                              className="space-y-6 text-base text-gray-700"
                            />
                          </div>

                          <form className="mt-6">
                            {/* Size */}
                            <div>
                              <fieldset
                                aria-label="Choose a size"
                                className="mt-8"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="text-sm font-medium text-gray-900">
                                    Tallas
                                  </div>
                                </div>

                                <RadioGroup
                                  value={selectedSize}
                                  onChange={setSelectedSize}
                                  className="mt-2 grid grid-cols-7 gap-2"
                                >
                                  {product.sizes.map((size) => (
                                    <Radio
                                      key={size.name}
                                      value={size}
                                      disabled={!size.inStock}
                                      className={classNames(
                                        size.inStock
                                          ? "cursor-pointer focus:outline-hidden"
                                          : "cursor-not-allowed opacity-25",
                                        "flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-900 uppercase hover:bg-gray-50 data-checked:border-transparent data-checked:bg-indigo-600 data-checked:text-white data-checked:hover:bg-indigo-700 data-focus:ring-2 data-focus:ring-indigo-500 data-focus:ring-offset-2 sm:flex-1"
                                      )}
                                    >
                                      {size.name}
                                    </Radio>
                                  ))}
                                </RadioGroup>
                              </fieldset>
                            </div>
                            {/* Precio */}
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-sm font-medium text-gray-900">
                                Precio
                              </div>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mt-2">
                              {product.price}
                            </h1>

                            <div className="mt-10 flex">
                              <button
                                type="submit"
                                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden sm:w-full"
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

                            <div className="divide-y divide-gray-200 border-t">
                              {product.details.map((detail) => (
                                <Disclosure key={detail.name} as="div">
                                  <h3>
                                    <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                                      <span className="text-sm font-medium text-gray-900 group-data-open:text-indigo-600">
                                        {detail.name}
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
                                      {detail.items.map((item) => (
                                        <li key={item} className="pl-2">
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </DisclosurePanel>
                                </Disclosure>
                              ))}
                            </div>
                          </section>
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
