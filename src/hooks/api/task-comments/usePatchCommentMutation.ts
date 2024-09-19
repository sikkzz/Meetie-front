import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { UpdateCommentFormType } from "@/types/taskConfirm";

const patchComment = async (taskConfirmId: number, createForm: UpdateCommentFormType) => {
  return await PATCH(
    END_POINTS.DELETE_TASK_COMMENTS(taskConfirmId, createForm.id),
    createInit({ contents: createForm.contents }),
  );
};

export const usePatchCommentiMutation = (taskConfirmId: number) => {
  const queryClient = useQueryClient();

  const patchCommentiMutation = useMutation({
    mutationFn: async (createForm: UpdateCommentFormType) =>
      await patchComment(taskConfirmId, createForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASK, taskConfirmId, QUERY_KEYS.TASK_COMMENTS],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return patchCommentiMutation;
};
