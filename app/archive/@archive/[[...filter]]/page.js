import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  //   const selectedYear = filter ? filter[0] : undefined;

  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  let newsContent = <p>No news found for selected period.</p>;

  if (selectedYear && !selectedMonth > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
