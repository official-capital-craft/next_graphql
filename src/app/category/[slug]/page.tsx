import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function CategoryPage({ params }: Props) {
  const { slug } = params

  if (!slug) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold capitalize">{slug}</h1>
      <p className="mt-2 text-gray-600">
        Articles or content for this category will appear here.
      </p>
    </main>
  );
}
