
import Menu from "../components/Menu";
import Comments from "../components/Comments";
import UserInfo from "../components/UserInfo";

export default function SinglePost() {
  return (
    <div>
      {/* Post info */}
      <div className="flex justify-center gap-14">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-[64px] font-bold">
            5 Daily Habits for a Healthier Life
          </h1>

          <UserInfo/>
        </div>

        <div className="reletive flex-1 h-[22rem]">
          <img
            src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      </div>

      {/* Post content */}
      <div className="flex gap-14">
        <div className="mt-[3rem] flex-5">
          <div className="text-xl font-light ">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
              totam quo! Dolor voluptate veritatis tempora iste totam possimus
              maxime expedita. Repellat facere natus beatae architecto illum
              animi alias aliquid atque?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              doloremque cum vel, laboriosam officiis fugit delectus amet,
              veniam odio porro, beatae aliquam corporis non reprehenderit sint
              suscipit culpa tempore eligendi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugiat enim corporis quas
              consectetur aspernatur rerum iste quam cum ratione laborum.
              Pariatur quidem optio illo aliquam. Velit maxime veniam aliquid
              nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae natus iure unde iusto temporibus! Esse fugiat odit,
              cumque temporibus nostrum maxime dolore in placeat reiciendis
              architecto optio necessitatibus minus harum! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Esse repellendus, impedit
              dignissimos nemo iusto deserunt earum rem aliquid voluptas eos
              molestiae et repellat dolore voluptatum commodi sint excepturi
              accusantium. Cupiditate.
            </p>
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
