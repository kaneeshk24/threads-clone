import type { NextPage } from "next";
import Navbar from "../components/nav/navbar";
import UserInfo from "../components/UserInfoCol/user-info";
import Feed from "../components/feed/feed";
import TrendingTopics from "../components/trendSect/trending-topics";
import styles from "./index.module.css";

const Content: NextPage = () => {
  return (
    <div className={styles.content}>
      <main className={styles.feed}>
        <Navbar />
        <section className={styles.contentcontainer}>
          <UserInfo />
          <Feed />
          <TrendingTopics />
        </section>
      </main>
    </div>
  );
};

export default Content;
