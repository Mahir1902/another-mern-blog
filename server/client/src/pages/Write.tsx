import { useEffect, useState } from "react";
import { ImImages } from "react-icons/im";
import { IoMdVideocam } from "react-icons/io";
import { Upload } from "lucide-react";
import { CiCirclePlus } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../utils/firebase";
import usePostStore from "../store/postStore";

const storage = getStorage(app);

const categories = [
  "Tech",
  "Lifestyle",
  "Philosophy",
  "Travel",
  "Food",
  "Fitness",
];

export default function Write() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const { setContent, setTitle, setMedia, setCatSlug, catSlug } =
    usePostStore();

  const [file, setFile] = useState<File | null>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const upload = () => {
      //for unique name
      const name = new Date().getTime() + "-" + file?.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file!);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  return (
    <div className="mt-[5rem] relative">
      <div className="flex gap-6">
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          className=" p-12 text-[3.5rem]  outline-none bg-primaryBg placeholder:text-[#b3b3b1]"
          value={usePostStore.getState().title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex flex-col relative items-start w-full max-w-[12rem]">
          <button className="p-4 w-full bg-slate-800 rounded-xl flex justify-between font-semibold" onClick={() => setDropOpen(!dropOpen)}>{catSlug !== '' ? catSlug : "Category"}
          {dropOpen ? <MdKeyboardArrowUp className="w-6 h-6 text-white/30 dark:text-white/30"/> : <MdOutlineKeyboardArrowDown className="w-6 h-6 text-white/30 dark:text-white/30"/>}
          </button>

          {dropOpen && (
            <div>
              {categories.map((category, index) => (
                <div key={index} className="my-2 hover:scale-105 hover:cursor-pointer flex justify-start w-full" onClick={() => setCatSlug(category)}>
                  <p className="pl-2">{category}</p>
                </div>
              ))}
            </div>
          )}
        
        </div>
      </div>
      <div className="flex gap-5 h-[44rem] relative">
        <div className="flex gap-9 left-12 absolute z-20 w-full ">
          <button onClick={handleOpen}>
            <CiCirclePlus className="w-16 h-16 text-black/30 dark:text-white/30 bg-primaryBg" />
          </button>
          {open && (
            <div className="flex gap-5 items-center bg-primaryBg">
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setFile(e.target.files[0]);
                  }
                }}
                style={{ display: "none" }}
              />
              <button className="border-2 rounded-full border-[#1a8917] p-4">
                <label htmlFor="image">
                  <ImImages className="w-6 h-6 text-[#1a8917]" />
                </label>
              </button>
              <button className="border-2 rounded-full border-[#1a8917] p-4">
                <Upload className="w-6 h-6 text-green-600" />
              </button>
              <button className="border-2 rounded-full border-[#1a8917] p-4">
                <IoMdVideocam className="w-6 h-6 text-[#1a8917]" />
              </button>
            </div>
          )}
        </div>

        <ReactQuill
          theme="bubble"
          value={usePostStore.getState().content}
          onChange={setContent}
          placeholder="Tell your story"
          className="w-full mt-16 ml-20 "
        />
      </div>
    </div>
  );
}
