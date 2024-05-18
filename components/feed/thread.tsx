import type { NextPage } from "next";
import styles from "./thread.module.css";

export type ThreadType = {
  authorImage?: string;
  threadContent?: string;
  send?: string;
  likes?: string;
  like?: string;
  comment?: string;
  repost?: string;
  username?: string;
};

const Thread: NextPage<ThreadType> = ({
  authorImage,
  threadContent,
  send,
  likes,
  like,
  comment,
  repost,
  username,
}) => {
  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src={authorImage} />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <div className={styles.username}>{username}</div>
              <div className={styles.rightInfos}>
                <div className={styles.min}>2min</div>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                </div>
              </div>
            </div>
            <div className={styles.iveBeenExploring}>{threadContent}</div>
          </div>
          <div className={styles.actions}>
            <img className={styles.likeIcon} alt="" src={like} />
            <img className={styles.likeIcon} alt="" src={comment} />
            <img className={styles.likeIcon} alt="" src={repost} />
            <img className={styles.sendIcon} alt="" src={send} />
          </div>
          <div className={styles.reactions}>
            <div className={styles.likes}>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
