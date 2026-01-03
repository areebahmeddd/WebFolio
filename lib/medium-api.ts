export interface MediumPost {
  id: string;
  title: string;
  emoji: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  link: string;
  thumbnail?: string;
}

export async function getMediumPosts(limit?: number): Promise<MediumPost[]> {
  const username = "areebahmeddd";
  const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;

  try {
    const response = await fetch(rssUrl, { next: { revalidate: 3600 } });
    const data = await response.json();

    if (data.status !== "ok") {
      console.error("Failed to fetch Medium RSS feed");
      return [];
    }

    const posts = data.items.map((article: any, index: number) => {
      const pubDate = new Date(article.pubDate);
      const formattedDate = pubDate.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      const wordCount = article.content
        .replace(/<[^>]*>/g, "")
        .split(/\s+/).length;
      const readingTime = Math.max(1, Math.round(wordCount / 200));

      const category =
        article.categories && article.categories.length > 0
          ? article.categories[0]
          : "Article";

      let excerpt = article.content
        .replace(/<[^>]*>/g, "")
        .substring(0, 180)
        .trim();
      if (excerpt.length === 180) excerpt += "...";

      const emojis = [
        "💻",
        "🛠️",
        "🌎",
        "🤖",
        "📝",
        "💡",
        "🚀",
        "🔍",
        "📦",
        "💎",
      ];

      return {
        id: article.guid || index.toString(),
        title: article.title,
        emoji: emojis[index % emojis.length],
        date: formattedDate,
        readingTime: `${readingTime} min`,
        category,
        excerpt,
        link: article.link,
        thumbnail: article.thumbnail || undefined,
      };
    });

    return limit ? posts.slice(0, limit) : posts;
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return [];
  }
}
