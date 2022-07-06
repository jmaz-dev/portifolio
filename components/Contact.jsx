//react_next
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
//assets
import ContactImg from "../public/assets/contact.jpg";
//icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
//emailjs
import emailjs from "@emailjs/browser";
//alert
import Swal from "sweetalert2";
//i18n
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fjx5r8",
        "template_9gpt0cv",
        form.current,
        "3szbibQlGKy4HziCO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Email Sent",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#f07d12]">
          {t("home:contact")}
        </p>
        <h2 className="p-4 capitalize"> {t("home:touch")}</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                  width="636px"
                  height="418px"
                />
                <div>
                  <h2 className="p-2">João Marcos Azeredo</h2>
                  <p className="pl-2">{t("home:front")}</p>
                  <p className="p-4">{t("home:available")}</p>
                </div>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#f07d12]">{t("home:con")}</p>
                <div className="flex items-center justify-between py-4 mt-8">
                  <a
                    href="https://www.linkedin.com/in/jmazeredo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-grat-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn className="text-[#f07d12]" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/JMAzer-dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-grat-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub className="text-[#f07d12]" />
                    </div>
                  </a>
                  <a href="mailto:jmaz.dev@gmail.com">
                    <div className="rounded-full shadow-lg shadow-grat-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail className="text-[#f07d12]" />
                    </div>
                  </a>
                  <a href="tel:+55 21 96807 2492">
                    <div className="rounded-full shadow-lg shadow-grat-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill className="text-[#f07d12]" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppecase text-sm py-2">
                      {t("home:name")}
                    </label>
                    <input
                      className="border-2 p-3 rounded-lg flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppecase text-sm py-2">
                      {t("home:phone")}
                    </label>
                    <input
                      className="border-2 p-3 rounded-lg flex border-gray-300"
                      type="tel"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppecase text-sm py-2">
                    {t("home:email")}
                  </label>
                  <input
                    className="border-2 p-3 rounded-lg flex border-gray-300"
                    type="text"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppecase text-sm py-2">
                    {t("home:subject")}
                  </label>
                  <input
                    className="border-2 p-3 rounded-lg flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppecase text-sm py-2">
                    {t("home:message")}
                  </label>
                  <textarea
                    className="border-2 p-3 rounded-lg flex border-gray-300"
                    rows="8"
                    type="text"
                    name="message"
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  {t("home:send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/#home">
          <div className="rounded-full shadow-lg shadow-grat-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp
              className="m-auto text-[#da7b23]"
              size={30}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
