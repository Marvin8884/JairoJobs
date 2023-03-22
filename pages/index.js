import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Image from 'next/image'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intro to Jairo Jobs</title>
        <link rel="icon" href="/icon3.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <Link href="https://jairojobs.com" target="_blank">JairoJobs!</Link>
        </h1>

        <div className={styles.grid}>
          <a href="https://jairojobs.com/jobs" target="_blank" className={styles.card}>
            <h3>Find a Job &rarr;</h3>
            <p>Find in-depth information Jobs in JairoJobs.</p>
          </a>

          <a href="https://jairojobs.com/company" target="_blank" className={styles.card}>
            <h3>Companies &rarr;</h3>
            <p>Learn about Companies Detailed Information.</p>
          </a>

          <a
            href="https://jairojobs.com/post-job"
            target="_blank"
            className={styles.card}
          >
            <h3>Post a Job &rarr;</h3>
            <p>Discover and Build your business with JairoJobs.</p>
          </a>

          <a
            href="https://jairojobs.com/sign-in"
            target="_blank"
            className={styles.card}
          >
            <h3>Sign in &rarr;</h3>
            <p>
              Sign in or Create an Account with JairoJobs.
            </p>
          </a>
        </div>  
      </main>

      

      <footer>
      <a
          href="/posts/pre-rendering"
          rel="noopener noreferrer"
        >
          My Profile{' '}
          <img src="/profile.png" alt="Jairosoft" className={styles.logo} />
        </a>
        <p>&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        </p>
        <a
          href="https://jairosoft.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/jairosoft.png" alt="Jairosoft" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
      <Image
        src="/dagat.jpg"
        alt="Dagat"
        layout="fill"
        objectFit='cover'
        />
        </div>
    </div>
  )
}

