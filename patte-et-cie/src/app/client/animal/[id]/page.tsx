export default function AnimalDetailPage() {
  return (
    <div className="p-8 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Health Record</h1>
        <div className="bg-white shadow rounded p-4">
          <p>No health records available.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Past Consultation</h2>
        <div className="bg-white shadow rounded p-4">
          <p>No past consultations available.</p>
        </div>
      </section>
    </div>
  );
}
