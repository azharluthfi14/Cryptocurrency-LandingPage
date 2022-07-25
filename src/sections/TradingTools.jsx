import React from "react";
import { tools } from "../assets";

export default function TradingTools() {
  return (
    <section className="pt-28 mx-20">
      <div className="flex justify-between items-center gap-20">
        <div className="md:order-1 w-[70%]">
          <h1 className="text-4xl mb-10 font-bold">
            Advanced Trading <span className="text-blue-500">Tools</span>
          </h1>
          <div className="mb-8">
            <h3 className="font-semibold text-md mb-3">
              Professional Access, Non-stop Availability
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              We provide premium access to crypto trading for both individuals
              and institutions through high liquidity, reliable order execution
              and constant uptime.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold text-base mb-3">
              A Range of Powerful Apis
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Set up your own trading interface or deploy your algorithmic
              strategy with our high-performance FIX and HTTP APIs. Connect to
              our WebSocket for real-time data streaming.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold text-base mb-3">Customer Support</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Premium 24/7 support available to all customers worldwide by phone
              or email. Dedicated account managers for partners.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:order-2">
          <img src={tools} className="w-[880px]" alt="tools-image" />
        </div>
      </div>
    </section>
  );
}
