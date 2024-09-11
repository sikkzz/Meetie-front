import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import ExplorerSkeleton from "@/components/Study/Explorer/ExplorerSkeleton";
import ExplorerTab from "@/components/Study/Explorer/ExplorerTab";

import { studyListQueryOptions } from "@/hooks/api/study/useStudyListQuery";

export default function Page() {
  const serverFetchOptions = [studyListQueryOptions()];

  return (
    <>
      <Header>
        <Header.Title>탐색하기</Header.Title>
      </Header>

      <Suspense fallback={<ExplorerSkeleton />}>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <ExplorerTab />
        </ServerFetchBoundary>
      </Suspense>

      <Gnb />
    </>
  );
}
