import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/news1">First News Item</Link>
        </li>
        <li>
          <Link href="/news/news2">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/news3">Third News Item</Link>
        </li>
      </ul>
    </>
  );
}
