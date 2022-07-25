import React from "react";
import { clever, diamond, gambia, finance } from "../assets";

export default function TrustPartner() {
  return (
    <section className="bg-gradient-to-b md:mx-20 rounded-xl from-gray-100 to-gray-50">
      <div className="p-10">
        <div className="text-center mb-3">
          <h1 className="text-2xl font-semibold mb-3">
            Trusted Partners Worldwide
          </h1>
          <p className="text-base text-gray-600">
            We're partners with countless major organisations around the globe
          </p>
        </div>
        <div className="grid grid-cols-1 items-center align-middle lg:grid-cols-4 md:grid-cols-4 gap-6">
          <div>
            <img src={clever} alt="clever" />
          </div>
          <div>
            <img src={diamond} alt="diamond" />
          </div>
          <div>
            <img src={gambia} alt="gambia" />
          </div>
          <div>
            <img src={finance} alt="finance" />
          </div>
        </div>
      </div>
    </section>
  );
}
