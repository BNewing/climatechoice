import React from "react";

export default function FacebookIcon({ fillColor }) {
  return (
    <svg
      height="22"
      viewBox="0 0 23 22"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask fill="#fff">
        <path
          d="m.00129666.00086444h22.12836934v21.99438116h-22.12836934z"
          fill="#fff"
          fillRule="evenodd"
        />
      </mask>
      <path
        d="m22.129666 11.064833c0-6.11094302-4.95389-11.064833-11.064833-11.064833-6.11094302 0-11.064833 4.95388998-11.064833 11.064833 0 5.522778 4.04624951 10.100334 9.33595285 10.9304126v-7.7319843h-2.80943026v-3.1984283h2.80943026v-2.43772102c0-2.77312377 1.65190175-4.30491159 4.17935165-4.30491159 1.2105835 0 2.476837.21611002 2.476837.21611002v2.72298625h-1.3952496c-1.3745245 0-1.8031787.85292141-1.8031787 1.72795088v2.07558546h3.0687622l-.4905697 3.1984283h-2.5781925v7.7319843c5.2897033-.8300786 9.3359528-5.4076346 9.3359528-10.9304126"
        fill={fillColor}
        fillRule="evenodd"
        mask="url(#a)"
      />
    </svg>
  );
}
