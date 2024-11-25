import { Link } from "react-router-dom";

const WorkLink = ({ to, src, title, description, tag1, tag2, tag3 }) => {
  return (
    <Link to={to}>
      <div className="mt-2">
        <img src={src} alt="Thumbnail" className="cursor-pointer" />
      </div>
      <div className="block mt-3">
        <p className="text-sm cursor-pointer">{title}</p>
        <h2 className="font-grotesque text-2xl cursor-pointer">
          {description}
        </h2>

        <div className="flex flex-wrap items-start gap-2 text-sm mt-2 mb-6">
          <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
            {tag1}
          </p>
          <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
            {tag2}
          </p>
          <p className="bg-tintblue2 rounded-full py-[2px] px-2 whitespace-nowrap">
            {tag3}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WorkLink;
