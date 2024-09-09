import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import CalendarWeek from "@/components/StudyRoom/CalendarWeek/CalendarWeek";
import TaskConfirm from "@/components/StudyRoom/TaskConfirm/TaskConfirm";
import TaskList from "@/components/StudyRoom/TaskTab/TaskList/TaskList";

import { PATH } from "@/constants/path";

import type { CalendarDateType } from "@/types/common";

interface TaskTabProps extends CalendarDateType {
  isOwner: boolean;
}

const TaskTab = ({ selectedDate, handleSelectedDate, isOwner }: TaskTabProps) => {
  const params = useParams();

  return (
    <>
      <div className="px-4">
        {isOwner && (
          <Link href={PATH.TASK_CREATE(String(params.id))}>
            <div className="flex items-center justify-between h-[50px] px-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-lg mt-5 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-bold-20">📚</span>
                <p className="text-medium-14 text-[#41364A] leading-5">
                  팀원들에게 과제를 제공해 보세요.
                </p>
              </div>
              <Image src="/svg/ic-calendar-prev-arrow.svg" alt="icon" width={6} height={12} />
            </div>
          </Link>
        )}

        <h2 className="text-bold-18 py-4">🗓️ 과제 일정</h2>
      </div>

      <CalendarWeek selectedDate={selectedDate} handleSelectedDate={handleSelectedDate} />

      <section className="px-4 pt-[34px]">
        <h4 className="text-semibold-18">
          ✍️ {selectedDate.month}월 {selectedDate.date}일 {selectedDate.day}요일
        </h4>
        <span className="text-regular-14 text-[#82829B]">
          #과제 인증을 완료한 팀원들을 확인해 보세요.
        </span>
        <TaskConfirm />
        <Link href={PATH.TASK_CONFIRM}>
          <button className="w-full h-11 mt-6 mb-[34px] flex items-center justify-center gap-2 border border-dotted border-[#686868] rounded-lg text-regular-14 text-[#82829B]">
            <Image src="/svg/ic-confirm-plus.svg" alt="icon" width={20} height={20} />
            과제 인증하기
          </button>
        </Link>
      </section>

      <TaskList studyRoomId={String(params.id)} />
    </>
  );
};

export default TaskTab;
