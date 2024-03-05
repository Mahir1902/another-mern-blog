import React from "react";
import { FaSquareFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { Links } from "../constants";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex max-lg:gap-8 flex-col mt-12 md:flex-row justify-between items-center">
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-3xl">MyBlog</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          aliquam autem deleniti necessitatibus fugiat dolorem iste accusamus in
          molestiae? 
        </p>
        <div className="flex gap-2 flex-1">
          <FaSquareFacebook className="h-4 w-4" />
          <TiSocialInstagram className="h-4 w-4" />
          <FaYoutube className="h-4 w-4" />
          <FaXTwitter className="h-4 w-4" />
        </div>
      </div>

      <div className="flex-1 flex justify-end gap-12 lg:gap-24 max-lg:w-full max-lg:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-bold">Links</span>
          {Links.map((link) => (
            <Link to={link.href}>{link.name}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Tags</span>
          <Link to={`/travel`}>Travel</Link>
          <Link to={`/tech`}>Tech</Link>
          <Link to={`/travel`}>Food</Link>
          <Link to={`/travel`}>Fitness</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Socials</span>
          <Link to={`/travel`}>Facebook</Link>
          <Link to={`/tech`}>Instagram</Link>
          <Link to={`/travel`}>Youtube</Link>
          <Link to={`/travel`}>Twitter</Link>
        </div>
      </div>
    </div>
  );
}
