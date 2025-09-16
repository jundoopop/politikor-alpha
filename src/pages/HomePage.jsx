import { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesCollection = collection(db, 'articles');
        const articleSnapshot = await getDocs(articlesCollection);
        const articlesList = articleSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setArticles(articlesList);
      } catch (error) {
        console.error("Error fetching articles: ", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <main>
      {articles.length > 0 ? <ArticleList articles={articles} /> : <p>Loading articles...</p>}
    </main>
  );
}

export default HomePage;
