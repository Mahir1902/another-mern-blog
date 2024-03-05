import { Link } from "react-router-dom";
import { Categories } from "../constants";

export default function CategoryList() {
  return (
    <div className="">
      <h1 className="my-10 text-3xl font-bold">Popular Categories</h1>

      <div className="flex justify-between flex-wrap gap-5">
        {Categories.map((category) => (
          <Link
            to={category.href}
            key={category.name}
            className={` flex items-center rounded-md h-20 w-[100%] md:w-[45%] lg:w-[25%] xl:w-[15%] justify-center gap-2 text-black font-semibold hover:scale-105  transition`}
            style={{ backgroundColor: category.bgColor }}
          >
            
              <img src={category.image} alt="catergory image" className="h-9 w-9 rounded-full" />
              {category.name}
            
          </Link>
        ))}
      </div>
    </div>
  );
}
