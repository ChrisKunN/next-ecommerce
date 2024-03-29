/* eslint-disable no-unused-vars */
import { Store } from "@/utils/Store";
import Head from "next/head";
import { signOut, useSession } from 'next-auth/react';
import Link from "next/link";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { Menu } from "@headlessui/react";
import DropdownLink from "./DropdownLink";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';

export default function Layout({ title, children }) {

  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);

  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {

    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))

  }, [cart.cartItems]);

  const logoutClickHandler = () => {

    Cookies.remove('cart');

    dispatch({ type: 'CART_RESET' });

    signOut({ callbackUrl: '/login' });


  };

  const [query, setQuery] = useState('');

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  }

  return (
    <>
      <Head>
        <title>{title ? title + "- Chaska Shop" : "Chaska"}</title>

        <meta name="description" content="Ecommerce Website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">

        <header>

          <nav className="flex h-20 items-center px-10 justify-between shadow-md">

            <Link className="text-xl font-bold" href="/">

              Chaska Shop

            </Link>
            <form
              onSubmit={submitHandler}
              className="mx-auto  hidden w-84 justify-center md:flex"
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
                placeholder="Search products"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                <SearchIcon className="h-5 w-5"></SearchIcon>
              </button>
            </form>
            <div>

              <Link className="p-2" href="/cart">

                Cart

                {cartItemsCount > 0 && (

                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">

                    {cartItemsCount}

                  </span>
                )}

              </Link>

              {status === 'loading' ? (

                'Loading'

              ) : session?.user ? (

                <Menu as="div" className="relative inline-block">

                  <Menu.Button className="text-blue-600">

                    {session.user.name}

                  </Menu.Button>

                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg z-10 ">

                    <Menu.Item>

                      <DropdownLink className="dropdown-link" href="/profile">

                        Profile

                      </DropdownLink>

                    </Menu.Item>

                    <Menu.Item>

                      <DropdownLink

                        className="dropdown-link"

                        href="/order-history"

                      >
                        Order History

                      </DropdownLink>

                    </Menu.Item>

                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}

                    <Menu.Item>
                      <Link
                        className="dropdown-link"

                        href="#"

                        onClick={logoutClickHandler}

                      >
                        Logout

                      </Link>

                    </Menu.Item>

                  </Menu.Items>

                </Menu>

              ) : (

                <Link className="p-2" href="/login">

                  Login

                </Link>

              )}

            </div>

          </nav>

        </header>

        <main className="container my-auto  mt-4 px-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">

          <p>Copyright © 2023 </p>

        </footer>

      </div>
    </>
  );
}
