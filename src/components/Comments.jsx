import { useState } from "react";
import assets from "../assets";
import { Button } from "./Button";

const comments = [
  {
    userName: "Иванов Иван",
    desc: "This Samsung Fold packs plenty of power into its small stature and sets the stage for better 5G phone performance in the future",
    date: "14 июля 2022г.",
  },
  {
    userName: "Иванов Иван",
    desc: "This Samsung Fold packs plenty of power into its small stature and sets the stage for better 5G phone performance in the future",
    date: "14 июля 2022г.",
  },
  {
    userName: "Иванов Иван",
    desc: "This Samsung Fold packs plenty of power into its small stature and sets the stage for better 5G phone performance in the future",
    date: "14 июля 2022г.",
  },
  {
    userName: "Иванов Иван",
    desc: "This Samsung Fold packs plenty of power into its small stature and sets the stage for better 5G phone performance in the future",
    date: "14 июля 2022г.",
  },
  {
    userName: "Иванов Иван",
    desc: "This Samsung Fold packs plenty of power into its small stature and sets the stage for better 5G phone performance in the future",
    date: "14 июля 2022г.",
  },
];

// eslint-disable-next-line react/prop-types
export const Comments = ({ title, bottomComment }) => {
  if (!comments || !Array.isArray(comments)) {
    return <div>No comments available</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [expanded, setExpanded] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setIsActive] = useState(false);
  const visibleComments = expanded ? comments : comments.slice(0, 3);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setIsActive(!isActive);
  };
  return (
    <>
      {bottomComment ? null : (
        <form className="mb-14">
          <label className="inline-block text-[22px] leading-[33px] font-normal mb-6">
            {title ? title : "Добавить комментарий"}
          </label>
          <textarea
            name="Добавить комментарий"
            className="w-full min-h-[118px] h-[118px] border bg-[#F3F3F3] rounded-[4px] py-3 px-[18px] outline-teal placeholder:text-[#696F79] text-xs font-light mb-6"
            placeholder="Введите свой комментарий..."
          ></textarea>
          <Button text="Отправить" rightIcon={true} />
        </form>
      )}
      <div className="space-y-[39px]  parent__box">
        {visibleComments.map((comment, index) => (
          <div className="border-b border-[#C4C4C4] pb-[39px]" key={index}>
            <div className="flex items-center gap-4 flex-wrap pb-6 justify-between">
              <h5 className="text-2xl font-semibold">{comment.userName}</h5>
              <div className="flex items-center gap-[13px]">
                <button aria-label="like button">
                  <img src={assets.like} alt="like" width="20" height="19" />
                </button>
                <button aria-label="dislike button">
                  <img
                    src={assets.dislike}
                    alt="dislike"
                    width="20"
                    height="19"
                  />
                </button>
              </div>
            </div>
            <p className="text-[#696F79] text-lg leading-[30px] font-light">
              {comment.desc}
            </p>
            <span className="inline-block mt-6 text-[#242628] text-sm leading-[23.8px] font-light">
              {comment.date}
            </span>
          </div>
        ))}
        {comments.length > 3 && (
          <button
            className={`load__more-btn mx-auto ${isActive ? "active" : ""}`}
            aria-label="Развернуть"
            onClick={handleExpandClick}
          >
            <span>{expanded ? "Свернуть" : "Развернуть"}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#00AAA1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 8L14 12L10 16"
                stroke="#00AAA1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
      {bottomComment ? (
        <form className="sm:my-14 my-8">
          <label className="inline-block text-[22px] leading-[33px] font-normal mb-6">
            {title ? title : "Добавить комментарий"}
          </label>
          <textarea
            name="Добавить комментарий"
            className="w-full min-h-[118px] h-[118px] border bg-[#F3F3F3] rounded-[4px] py-3 px-[18px] outline-teal placeholder:text-[#696F79] text-xs font-light mb-6"
            placeholder="Введите свой комментарий..."
          ></textarea>
          <Button text="Отправить" rightIcon={true} />
        </form>
      ) : null}
    </>
  );
};
