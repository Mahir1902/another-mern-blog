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
          This blog is a side project for my portfolio. It is not meant to be used by users however, feel free to create an account and post your own blogs. As this is not an actual product, the links on the footer are not functional. If you do write a blog, remember to choose a category before you publish the post. That being said, the posts here are actual posts on topics that I am interested in.
        </p>
        <p>
           This project uses react for the frontend and nodejs for the backend. The database used is mongodb. It also uses firebase storage to store the images. The authentication is done using jwt tokens. 
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
