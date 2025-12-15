"use client";
import { useOwners } from "@/src/features/common/context/OwnerContext";
import { useHealthRecord } from "@/src/features/health-record/contexts/HealthRecordContext";
import Image from "next/image";

export default function AnimalDetailPage() {
  const { healthRecord, isLoading } = useHealthRecord();
  const { currentOwner } = useOwners();

  if (isLoading) {
    return (
      <div className="p-8">
        <p className="text-gray-500">Loading health record...</p>
      </div>
    );
  }

  if (!healthRecord) {
    return (
      <div className="p-8">
        <p className="text-gray-500">no health record...</p>
      </div>
    );
  }

  const animal = currentOwner?.animals?.find((a) => a.Id === healthRecord.animalId);

  if (!healthRecord) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Health Record</h1>
        <div className="bg-white shadow rounded p-4 mb-8">
          <p>No health record available.</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Past Consultation</h2>
        <div className="bg-white shadow rounded p-4">
          <p>No past consultations available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-4">Health Record</h1>

        <div className="bg-white shadow rounded p-4 space-y-4">
          {/* HEALTH RECORD INFO */}
          <div className="space-y-2">
            <p>
              <strong>Record ID :</strong> {healthRecord.id}
            </p>
            <p>
              <strong>Animal ID :</strong> {healthRecord.animalId}
            </p>
            <p>
              <strong>Notes :</strong> {healthRecord.notes || "No notes"}
            </p>
          </div>

          {/* ANIMAL INFO */}
          {animal ? (
            <div className="border-t pt-4 space-y-3">
              <h2 className="text-xl font-semibold">Animal Information</h2>

              {/* Image si existante */}
              {animal.img_url && (
                <Image
                  src={animal.img_url}
                  alt={animal.name}
                  width={128} // correspond à w-32
                  height={128} // correspond à h-32
                  className="object-cover rounded"
                />
              )}

              <p>
                <strong>Name :</strong> {animal.name}
              </p>

              <p>
                <strong>Birth Date :</strong> {animal.birth_date}
              </p>

              <p>
                <strong>Identification :</strong> {animal.identification}
              </p>
            </div>
          ) : (
            <div className="border-t pt-4">
              <p className="text-gray-500">Animal info not found.</p>
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Past Consultations</h2>

        {healthRecord.medicalCares?.length === 0 && (
          <div className="bg-white shadow rounded p-4">
            <p>No consultations available.</p>
          </div>
        )}

        {healthRecord.medicalCares?.map((care) => (
          <div key={care.id} className="bg-white shadow rounded p-4 mb-4">
            <p>
              <strong>Date :</strong> {care.date}
            </p>
            <p>
              <strong>Description :</strong> {care.description}
            </p>
            <p>
              <strong>Tag :</strong> {care.tag}
            </p>
            <p>
              <strong>Veterinarian ID :</strong> {care.veterinarianId}
            </p>

            {care.vaccine && (
              <div className="mt-4 p-3 border rounded bg-gray-50">
                <h3 className="font-semibold mb-2">Vaccine</h3>
                <p>
                  <strong>Type :</strong> {care.vaccine.vaccineType}
                </p>
                <p>
                  <strong>Administered :</strong> {care.vaccine.administrationDate}
                </p>
                <p>
                  <strong>Expires :</strong> {care.vaccine.expirationDate}
                </p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
