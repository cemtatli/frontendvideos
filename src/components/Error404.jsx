import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex h-[calc(100vh-15rem)] w-full flex-col items-center justify-center gap-y-5">
      <h1 className="text-6xl font-bold dark:text-white">404</h1>
      <p className="text-base font-semibold dark:text-white xl:text-xl">Hata! Aradığınız sayfa bulunamadı.</p>
      <Link
        to="/"
        className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-blue-700"
      >
        Anasayfaya Dön
      </Link>
    </div>
  );
};

export default Error404;
