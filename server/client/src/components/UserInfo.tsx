

type Props = {
  user: {
    id:string,
    username:string,
    email:string,
    image?:string,
  };
  date:string
}

export default function UserInfo({user, date}: Props) {

  const dateObj = new Date(date);

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  }).format(dateObj);
  console.log(date)

  return (
    <div className="flex gap-3 items-center">
      {user.image && (
      <div className="h-12 w-12  relative">
        <img
          src={user.image}
          alt=""
          className="object-cover rounded-full w-full h-full"
        />
      </div>
      )}

      <div className="text-base flex flex-col">
        <span className="text-red-400 font-semibold">{user.username}</span>
        <span className="font-medium">{formattedDate}</span>
      </div>
    </div>
  );
}
