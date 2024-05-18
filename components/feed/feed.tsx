import type { NextPage } from "next";
import { useCallback } from "react";
import InputArea from "./input-area";
import { useRouter } from "next/router";
import Thread from "./thread";
import styles from "./feed.module.css";

const Feed: NextPage = () => {
  const router = useRouter();

  const onActionsClick = useCallback(() => {
    router.push("/popup");
  }, [router]);

  return (
    <div className={styles.feed}>
      <div className={styles.threadinput}>
        <div className={styles.thread}>
          <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.infos}>
            <InputArea />
          </div>
          <div className={styles.actions}>
            <div className={styles.actions1}>
              <img
                className={styles.paperclipIcon}
                alt=""
                src="/paperclip@2x.png"
              />
            </div>
            <button className={styles.actions2} onClick={onActionsClick}>
              <img className={styles.sendIcon} alt="" src="/send@2x.png" />
            </button>
          </div>
        </div>
      </div>
      <Thread
        authorImage="/avatar1.svg"
        threadContent="ThreadContent"
        send="/send1.svg"
        likes="7 Likes"
        like="/like@2x.png"
        comment="/comment@2x.png"
        repost="/repost@2x.png"
        username="aura"
      />
      <Thread
        authorImage="/avatar2@2x.png"
        threadContent={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
        send="/send11@2x.png"
        likes="2 Likes"
        like="/like@2x.png"
        comment="/comment@2x.png"
        repost="/repost@2x.png"
        username="aura"
      />
      <Thread
        authorImage="/avatar1.svg"
        threadContent="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        send="/send1.svg"
        likes="16 Likes"
        like="/like1.svg"
        comment="/comment1.svg"
        repost="/repost1.svg"
        username="aura"
      />
      <Thread
        authorImage="/avatar1.svg"
        threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        send="/send11@2x.png"
        likes="7 Likes"
        like="/like@2x.png"
        comment="/comment@2x.png"
        repost="/repost@2x.png"
        username="aura"
      />
    </div>
  );
};

export default Feed;
