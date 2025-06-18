import CategoryList from "@/components/category_list";

export default function Category() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">Respect Magazine</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Your source for the latest news, stories, and cultural insights.
        </p>
      </div>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Explore Categories
        </h2>
        <CategoryList />
      </section>
    </main>
  );
}
