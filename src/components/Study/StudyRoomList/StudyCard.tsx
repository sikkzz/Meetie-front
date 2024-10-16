import Image from "next/image";
import Link from "next/link";

import { format, startOfToday, addDays } from "date-fns";
import { ko } from "date-fns/locale";

import Tag from "@/components/common/Tag/Tag";
import Bookmark from "@/components/Study/Bookmark/Bookmark";

import { PATH } from "@/constants/path";

import { usePatchStudyMutation } from "@/hooks/api/study/usePatchStudyMutation";

import { generateDday } from "@/utils/date";

import type { StudyListType } from "@/types/study";
import type { BookMarkType } from "@/types/userInfo";

interface StudyCardProps {
  studyData: StudyListType;
  userId: string;
  bookMarkData: BookMarkType[];
}

const StudyCard = ({ studyData, userId, bookMarkData }: StudyCardProps) => {
  const { mutate: patchStudyMutation } = usePatchStudyMutation(studyData.id);

  const newStartDate = studyData.startDate ?? startOfToday();
  const newEndDate = studyData.endDate ?? addDays(newStartDate, 7); // FIXME: null일 때 임의의 7일 added

  const isMarked = bookMarkData.some(
    (data) => data.isMarked === true && data.study_id === Number(studyData.id),
  );

  //TODO: 전체 필드 아닌 일부 필드만 업데이트 가능하도록 수정
  const handleUpdateViewCount = () => {
    return patchStudyMutation({
      createStudyForm: {
        viewCount: studyData.viewCount + 1,
        position: studyData.position,
        title: studyData.title,
        goal: studyData.goal,
        introduce: studyData.introduce,
        curriculum: studyData.curriculum,
        startDate: studyData.startDate,
        endDate: studyData.endDate,
        week: studyData.week,
        time: studyData.time,
        recruitMemberCount: studyData.recruitMemberCount,
        tagList: studyData.tagList,
      },
      studyId: studyData.id,
    });
  };

  return (
    <Link href={PATH.STUDY(studyData.id)} onClick={handleUpdateViewCount}>
      <div className="mb-4 max-w-full px-4 py-5 rounded-lg bg-white border-2 border-gray-50">
        <div className="flex justify-between mb-3">
          <h2 className="text-bold-14 text-gray-500">{studyData.title}</h2>
          <Bookmark studyId={studyData.id} isMarked={isMarked} userId={userId} />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {studyData.tagList?.map((tag) => <Tag text={tag} isSmall key={tag} />)}
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-[12px] text-primary-500">
            {!studyData.isRecruit ? "모집 마감" : generateDday(newStartDate)}
          </span>
          <div className="flex justify-between">
            <div>
              <Image src="/svg/ic-calandar.svg" alt="icon" width={15} height={15} />
            </div>
            <span className="ml-1 text-regular-12 text-gray-400">
              {`${format(newStartDate, "yyyy-MM-dd (EEE)", { locale: ko })} - ${format(newEndDate, "yyyy-MM-dd (EEE)", { locale: ko })}`}
            </span>
          </div>
          <div className="flex justify-between">
            <div>
              <Image src="/svg/ic-eye.svg" alt="icon" width={14} height={14} />
            </div>
            <span className="ml-1 text-regular-12 text-gray-200">{studyData.viewCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default StudyCard;
