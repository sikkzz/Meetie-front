import Avatar from "@/components/common/Avatar/Avatar";
import EmojiButton from "@/components/Community/ReadPost/EmojiButton/EmojiButton";

import { useOverlay } from "@/hooks/common/useOverlay";

import { convertSimpleDateTime } from "@/utils/date";

import type { CommunityCommentType } from "@/types/community";

interface CommentCardProps {
  comment: CommunityCommentType;
  isOwner: boolean;
  handleDelete: () => void;
  handlePostEmoji: (emoji: string) => void;
}

const CommentCard = ({ comment, isOwner, handleDelete, handlePostEmoji }: CommentCardProps) => {
  const { name, profileImage, contents, uploadDate, emojiList, selectedEmoji } = comment;

  const { isOpen, handleToggle, handleClose } = useOverlay();

  const handleClick = (emoji: string) => {
    handlePostEmoji(emoji);
    handleClose();
  };

  return (
    <div className="border-y border-[#EFEFEF] px-4 py-[18px]">
      <div className="flex gap-4">
        <Avatar src={profileImage} className="w-[32px] h-[32px]" />
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <h4 className="text-bold-14 text-[#141414]">{name}</h4>
              <span className="text-medium-10 text-[#898989]">
                {convertSimpleDateTime(new Date(uploadDate))}
              </span>
            </div>
            {isOwner && (
              <p className="text-medium-12 text-[#ff552d] cursor-pointer" onClick={handleDelete}>
                삭제
              </p>
            )}
          </div>

          <p className="text-regular-14 text-[#1F1F1F] pb-5">{contents}</p>

          <div className="flex gap-2.5 items-center">
            <EmojiButton size="sm" open={isOpen} onClick={handleToggle} handleClick={handleClick} />
            <div className="flex gap-2.5 flex-1 justify-start items-center">
              {emojiList.map((emoji, index) => (
                <div
                  className={`p-1 flex gap-1 border rounded-lg items-center bg-[#F3F3F3] ${selectedEmoji.includes(emoji.emoji) ? "border-primary-300" : "border-[#DDDDDD]"}`}
                  key={`comment_emoji_${index}`}
                >
                  <div className="text-medium-14">{emoji.emoji}</div>
                  <div className="text-medium-12">{emoji.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
