import { X } from "lucide-react";
import { useState } from "react";

export default function Tooltip() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const closeHandle = () => {
    setTooltipVisible(false);
  };

  if (!tooltipVisible) {
    return null;
  }
  return (
    <section
      id="banner"
      className="relative isolate z-0 flex w-full items-center gap-x-6 overflow-hidden bg-zinc-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
    >
      <svg
        viewBox="0 0 577 310"
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
      >
        <path
          id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
          fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)"
          fillOpacity=".3"
          d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
        ></path>
        <defs>
          <linearGradient
            id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
            x1="614.778"
            x2="-42.453"
            y1="26.617"
            y2="96.115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC"></stop>
            <stop offset="1" stopColor="#FF80B5"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 577 310"
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
      ></svg>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-zinc-900">
          <strong className="font-semibold">Open-Source</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
          Junior Frontend developerların sektöre giriş aşamasında yardımcı olabilecek yararlı ve
          öğretici YouTube videolarını sunmaktadır.
        </p>
        <a
          target="_blank"
          href="https://github.com/cemtatli/frontendvideos"
          className="flex-none rounded-full bg-zinc-900 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        >
          Katkıda bulun <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <a
          id="banner-button"
          className="-m-3 cursor-pointer p-3 focus-visible:outline-offset-[-4px] "
        >
          <X
            onClick={closeHandle}
            className="text-zinc-900 transition-all hover:scale-125"
            width={16}
            height={16}
          />
        </a>
      </div>
    </section>
  );
}
