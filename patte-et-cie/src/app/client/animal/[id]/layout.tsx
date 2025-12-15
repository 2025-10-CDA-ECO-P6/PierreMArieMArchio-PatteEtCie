"use client";

import { useGetHealthRecord } from "@/src/features/health-record/hooks/useGetHealthRecord";
import Loader from "@/src/ui/loader/Loader";
import { useParams } from "next/navigation";

export default function AnimalDetailsLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const animalId = params?.id;

  const { isLoading, healthRecord } = useGetHealthRecord(animalId as string);

  if (!animalId) return <p>No animal ID provided</p>;
  if (isLoading) return <Loader />;
  if (!healthRecord) return <p>No health record available</p>;

  return <>{children}</>;
}
