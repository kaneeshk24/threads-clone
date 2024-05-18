import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Content: NextPage = () => {
  const router = useRouter();

  const onActionsClick = useCallback(() => {
    router.push("/popup");
  }, [router]);

  return (
    <div className={styles.content}>
      <main className={styles.feed}>
        <header className={styles.nav}>
          <div className={styles.logo}>
            <img
              className={styles.threadsLogoIcon}
              alt=""
              src="/threads-logo.svg"
            />
            <h2 className={styles.threads}>threads</h2>
          </div>
          <div className={styles.avatar}>
            <div className={styles.righInfos}>
              <img className={styles.logo2Icon} alt="" src="/logo-2.svg" />
              <img
                className={styles.hamburgerIcon}
                alt=""
                src="/hamburger.svg"
              />
            </div>
          </div>
        </header>
        <section className={styles.contentcontainer}>
          <div className={styles.userinfo}>
            <div className={styles.infos}>
              <img
                className={styles.avatarBigIcon}
                alt=""
                src="/avatar-big.svg"
              />
              <div className={styles.infos1}>
                <div className={styles.infos2}>
                  <h2 className={styles.alissonRochinski}>Alisson Rochinski</h2>
                  <div className={styles.infos3}>
                    <div className={styles.arochinski}>arochinski</div>
                    <div className={styles.threadsnetWrapper}>
                      <div className={styles.threadsnet}>threads.net</div>
                    </div>
                  </div>
                </div>
                <div className={styles.uiDesignerContainer}>
                  <p className={styles.uiDesigner}>
                    UI Designer | Let's redesign the world
                  </p>
                  <p className={styles.uiDesigner}>
                    alisson.rochinski@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.infos4}>
              <div className={styles.respostasECurtidas}>
                <div className={styles.seguidores}>2957 seguidores</div>
                <div className={styles.respostasECurtidasChild} />
                <div className={styles.seguidores}>rochinski.com</div>
              </div>
            </div>
          </div>
          <div className={styles.feed1}>
            <div className={styles.threadinput}>
              <div className={styles.thread}>
                <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
              </div>
              <div className={styles.infosActions}>
                <div className={styles.infos5}>
                  <input
                    className={styles.asdasd}
                    placeholder="Share something cool today"
                    type="text"
                  />
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
                    <img
                      className={styles.sendIcon}
                      alt=""
                      src="/send@2x.png"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.thread1}>
              <div className={styles.thread2}>
                <div className={styles.thread}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar1.svg"
                  />
                </div>
                <div className={styles.infosActions}>
                  <div className={styles.info}>
                    <div className={styles.headingInfos}>
                      <div className={styles.arochinski}>aura</div>
                      <div className={styles.rightInfos}>
                        <div className={styles.min}>2min</div>
                        <div className={styles.dots}>
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.iveBeenExploring}>
                      I’ve been exploring ways of setting up variables in Figma
                      if you have two different sets of global colours for light
                      and dark themes with multiple brands. If you want to learn
                      more about it, DM me, please
                    </div>
                  </div>
                  <div className={styles.actions3}>
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/like@2x.png"
                    />
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/comment@2x.png"
                    />
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/repost@2x.png"
                    />
                    <img className={styles.sendIcon1} alt="" src="/send.svg" />
                  </div>
                  <div className={styles.reactions}>
                    <div className={styles.seguidores}>7 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.thread1}>
              <div className={styles.thread2}>
                <div className={styles.thread}>
                  <img
                    className={styles.avatarIcon2}
                    alt=""
                    src="/avatar2@2x.png"
                  />
                </div>
                <div className={styles.infosActions}>
                  <div className={styles.info}>
                    <div className={styles.headingInfos}>
                      <div className={styles.arochinski}>aura</div>
                      <div className={styles.rightInfos}>
                        <div className={styles.min}>2min</div>
                        <div className={styles.dots}>
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.iveBeenExploring}>
                      guys, just see that now we have a "Save for Later" I've
                      been waiting for this so much
                    </div>
                  </div>
                  <div className={styles.actions3}>
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/like@2x.png"
                    />
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/comment@2x.png"
                    />
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/repost@2x.png"
                    />
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/send1@2x.png"
                    />
                  </div>
                  <div className={styles.reactions}>
                    <div className={styles.seguidores}>2 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.thread1}>
              <div className={styles.thread2}>
                <div className={styles.thread}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar1.svg"
                  />
                </div>
                <div className={styles.infosActions}>
                  <div className={styles.info}>
                    <div className={styles.headingInfos}>
                      <div className={styles.arochinski}>aura</div>
                      <div className={styles.rightInfos}>
                        <div className={styles.min}>2min</div>
                        <div className={styles.dots}>
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.iveBeenExploring}>
                      Hold onto your seats, folks! The new iPhone is coming in
                      hot, ready to rock our world! Imagine the stunning photos
                      and videos I'll capture with this beauty! 📸💥
                      #BringItOnNewiPhone #BeyondExcited
                    </div>
                  </div>
                  <div className={styles.actions3}>
                    <img className={styles.sendIcon1} alt="" src="/like.svg" />
                    <img
                      className={styles.sendIcon1}
                      alt=""
                      src="/comment.svg"
                    />
                    <img
                      className={styles.sendIcon1}
                      alt=""
                      src="/repost.svg"
                    />
                    <img className={styles.sendIcon1} alt="" src="/send.svg" />
                  </div>
                  <div className={styles.reactions}>
                    <div className={styles.seguidores}>16 Likes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.thread1}>
              <div className={styles.thread2}>
                <div className={styles.thread}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar1.svg"
                  />
                </div>
                <div className={styles.infosActions}>
                  <div className={styles.info}>
                    <div className={styles.headingInfos}>
                      <div className={styles.arochinski}>aura</div>
                      <div className={styles.rightInfos}>
                        <div className={styles.min}>2min</div>
                        <div className={styles.dots}>
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                          <div className={styles.dotsChild} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.iveBeenExploring}>
                      I’ve been exploring ways of setting up variables in Figma
                      if you have two different sets of global colours for light
                      and dark themes with multiple brands. If you want to learn
                      more about it, DM me, please
                    </div>
                  </div>
                  <div className={styles.actions3}>
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/like@2x.png"
                    />
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/comment@2x.png"
                    />
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/repost@2x.png"
                    />
                    <img
                      className={styles.paperclipIcon}
                      alt=""
                      src="/send1@2x.png"
                    />
                  </div>
                  <div className={styles.reactions}>
                    <div className={styles.seguidores}>7 Likes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.infos6}>
            <div className={styles.infos5}>
              <div className={styles.headingInfos}>
                <h2 className={styles.alissonRochinski}>Trending Topics</h2>
                <img
                  className={styles.settingsIcon}
                  alt=""
                  src="/settings.svg"
                />
              </div>
            </div>
            <div className={styles.treanding}>
              <div className={styles.topic}>
                <div className={styles.design}>Design</div>
                <div className={styles.threadsdesktop}>ThreadsDesktop</div>
                <div className={styles.min}>123.9k threads</div>
              </div>
              <div className={styles.topic}>
                <div className={styles.design}>movies and series</div>
                <div className={styles.threadsdesktop}>
                  Spider-Man: Across the Spider-Verse
                </div>
                <div className={styles.min}>93.4k threads</div>
              </div>
              <div className={styles.topic}>
                <div className={styles.design}>tech</div>
                <div className={styles.threadsdesktop}>iPhone 15</div>
                <div className={styles.min}>85.2k threads</div>
              </div>
              <div className={styles.topic}>
                <div className={styles.design}>games</div>
                <div className={styles.threadsdesktop}>Riot Games</div>
                <div className={styles.min}>71.9k threads</div>
              </div>
              <div className={styles.topic}>
                <div className={styles.design}>Design</div>
                <div className={styles.threadsdesktop}>#Minimalism</div>
                <div className={styles.min}>69.1k threads</div>
              </div>
            </div>
            <div className={styles.seeMore}>see more</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Content;
