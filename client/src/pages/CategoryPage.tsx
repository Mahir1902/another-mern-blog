import Menu from "../components/Menu";
import PostList from "../components/PostList";

type Props = {
  category: string;
};

export default function CategoryPage({ category }: Props) {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-300 to-emerald-700 pb-1">
        <h1 className="capitalize dark:bg-slate-900 bg-white py-2 px-4 text-4xl  font-bold ">
          {category} Blogs
        </h1>
      </div>
      <div className="flex gap-12">
        {/* Will send the param here to make a request and get all post related to category */}
        <PostList />
        <Menu />
      </div>
    </div>
  );
}
