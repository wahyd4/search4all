import { PresetQuery } from "@/app/components/preset-query";
import { Skeleton } from "@/app/components/skeleton";
import { Wrapper } from "@/app/components/wrapper";
import { Relate } from "@/app/interfaces/relate";
import { MessageSquareQuote } from "lucide-react";
import React, { FC } from "react";
import Locale from "../locales";

export const Relates: FC<{ relates: Relate[] | null }> = ({ relates }) => {
  return (
    <Wrapper
      title={
        <>
          <MessageSquareQuote></MessageSquareQuote> {Locale.Relates.related}
        </>
      }
      content={
        <div className="flex gap-2 flex-col">
          {relates !== null ? (
            relates.length > 0 ? (
              relates.map(({ question }) => (
                <PresetQuery key={question} query={question}></PresetQuery>
              ))
            ) : (
              <div className="text-sm">
                {Locale.Relates.no_related_questions}
              </div>
            )
          ) : (
            <>
              <Skeleton className="w-full h-5 bg-zinc-200/80"></Skeleton>
              <Skeleton className="w-full h-5 bg-zinc-200/80"></Skeleton>
              <Skeleton className="w-full h-5 bg-zinc-200/80"></Skeleton>
            </>
          )}
        </div>
      }
    ></Wrapper>
  );
};
