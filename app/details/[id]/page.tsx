export default async function Details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:4000/blogs/${id}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10" dir="rtl">
      <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
        {blog.category.name}
      </span>

      <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-4">
        {blog.title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <span>{blog.author.name}</span>
        <span>{blog.date}</span>
        <span>{blog.views} بازدید</span>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-2xl mb-8 max-h-96 object-cover"
      />

      <p className="text-gray-600 text-base leading-8 border-r-4 border-purple-400 pr-4 mb-8 bg-purple-50 py-3 rounded-lg">
        {blog.description}
      </p>

      <p className="text-gray-700 text-base leading-9">{blog.content}</p>
    </main>
  ); 
}

