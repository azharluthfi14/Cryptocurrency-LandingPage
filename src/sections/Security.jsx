import React from "react";
import { security } from "../assets";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Security() {
  return (
    <section className="pt-28 md:mx-20">
      <div className="flex justify-between items-center gap-10">
        <div className="flex justify-center items-center w-full">
          <img src={security} alt="security-image" />
        </div>
        <div className="w-[75%]">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            Industry-leading security from day one
          </h2>
          <ul className="my-6">
            <li className="mb-6">
              <h1 className="mb-3 font-semibold">
                <BsCheckCircleFill className="text-blue-500 inline mr-2" />
                Safety, security and compliance
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                NEFA is a licensed New York trust company that undergoes regular
                bank exams and is subject to the cybersecurity audits conducted
                by the New York Department of Financial Services. Learn more
                about our commitment to security.
              </p>
            </li>
            <li className="mb-6">
              <h1 className="mb-3 font-semibold">
                <BsCheckCircleFill className="text-blue-500 inline mr-2" />
                Hardware security keys
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                With NEFA you can secure your account with a hardware security
                key via WebAuthn.
              </p>
            </li>
            <li className="mb-6">
              <h1 className="mb-3 font-semibold">
                <BsCheckCircleFill className="text-blue-500 inline mr-2" />
                SOC Certifications
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the
                world’s first cryptocurrency exchange and custodian to complete
                these exams.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
