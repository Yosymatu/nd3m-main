import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <Seo
        title="Member"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          {/* <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
              　<p>Nagoya </p>
              <p>Digital Design Developers</p>
              <p>Meeting</p>
          </h2> */}
          <h1>Team</h1>
          <h4>
            Transform the Design and Architectural Process Using Digital
            Technology.<br></br>
            デジタル技術を用いた，デザイン・コンストラクションプロセスの変革を目指す．
          </h4>

          <p>
            <br></br>
            設計者，エンジニア，研究者，学生... <br></br>
            意匠，構造，都市，計画，xR，デジタルファブリケーション...<br></br>
            それぞれ独自の専門領域をもつメンバーが，コンピュテーショナルデザインを追求することを目的に集まり，コラボレーションによる相乗効果を狙うチームです．
            <br></br>
            <br></br>
            設立からメンバーが入れ替わりながらも，様々な関わり方で現在8名が在籍しています．また，Research&Engineeringコミュニテイとして，
            外部からもメンバーを募り勉強会などを行う場も設けています．
            <br></br>
            <br></br>
          </p>

          <h3>Member</h3>

          <h4 id="dynamic-styles">田住梓 / AZU</h4>
          <p>
            <strong>Azusa TAZUMI</strong>
            <br></br>
            デジタルファブリケーション・建築計画
            <br></br>
            {/* <br></br>
            1999.12　東京都出身<br></br>
            2022.03　名古屋工業大学 卒業(学士/工学)<br></br>
            2022.04　名古屋工業大学大学院　工学研究科社会工学系プログラム卒業<br></br>
            <br></br>
            3Dプリンタを中心に，デジタルファブリケーションによる新しい表現やしくみを模索中です. <br></br>
            ND3Mでは実装/施工を中心に活動中，
            <br></br> */}
            <a
              href="https://twitter.com/azusa353"
              rel="noreferrer"
              target="_blank"
            >
              Twitter:@azusa353
            </a>
            <br></br>
            <br></br>
          </p>

          <h4 id="dynamic-styles">池本しょうこ / MEDY</h4>
          <p>
            <strong>Shoko IKEMTO</strong>
            <br></br>
            意匠設計・コンピュテーショナルデザイン・近代建築史
            <br></br>
            {/* <br></br>
            1997.09　岐阜市出身<br></br>
            2020.03　名古屋市立大学(学士/芸術工学)<br></br>
            2022.03　名古屋工業大学大学院(修士/工学)<br></br>
            2022.04　ゼネコン建築設計職<br></br>
            2022.09　Kyoto Creative Assemblage 1期生<br></br>
            <br></br>
            実務設計とアカデミックを横断しながら新しい価値を実装・実現していきます，建築とアイドルと演劇に命をかけてます.
            <br></br> */}
            <a
              href="https://twitter.com/408321date"
              rel="noreferrer"
              target="_blank"
            >
              Twitter:@408321date
            </a>
            <br></br>
            <br></br>
          </p>

          <h4 id="dynamic-styles">近藤広隆 / コンソメ </h4>
          <p>
            <strong>Hirotaka KONDO</strong>
            <br></br>
            コンピュテーショナルデザイン・xR
            <br></br>
            <br></br>
            {/* 1995.09　愛知県出身<br></br>
            2019.03　名古屋大学(学士)<br></br>
            2022.03　名古屋大学大学院(修士)<br></br>
            2022.04　建築系エンジニアとして会社勤務<br></br>
            <br></br>
            xRを深めたい<br></br>
            建築設計を新しい技術で楽にしたり飛躍させたりして生きていきたい.
            <br></br>
            <br></br> */}
          </p>

          <h4 id="dynamic-styles">鷲見良</h4>
          <p>
            <strong>Ryo SUMI</strong>
            <br></br>
            デジタルファブリケーション，建築意匠設計
            <br></br>
            {/* 2000.8　愛知県名古屋市出身<br></br>
            2021.3　豊田工業高等専門学校　建築学科　卒業<br></br>
            2023.3　豊橋技術科学大学　建築・都市システム学課程　卒業<br></br>
            2023.4　豊橋技術科学大学大学院　建築・都市システム学専攻<br></br>
            <br></br>
            粘土3Dプリンターや大口径ノズルFDM3Dプリンターを用い，建築への3Dプリンターの導入，
            3Dプリント建築のデザイン手法を模索しています，現在は土壁を3Dプリントしています.
            <br></br> */}
            <a
              href="https://twitter.com/645pro_repo"
              rel="noreferrer"
              target="_blank"
            >
              Twitter:@645pro_repo
            </a>
            <br></br>
            <br></br>
          </p>

          <h4 id="dynamic-styles">田川直樹</h4>
          <p>
            <strong>Naoki TAGAWA</strong>
            <br></br>
            都市史・数理最適化・アルゴリズミックデザイン
            <br></br>
            <br></br>
            {/* 2000.05　京都府出身<br></br>
            2023.3　京都工芸繊維大学 デザイン・建築学課程 卒業<br></br>
            2023.4　東京大学大学院工学系研究科　建築専攻　在学中<br></br>
            <br></br>
            フィジカルとバーチャルを横断しながら目に見えない都市の価値を発見し，人々の暮らしに還元する手法を模索しています.
            <br></br>
            <br></br> */}
          </p>

          <h4 id="dynamic-styles">銭健一</h4>
          <p>
            <strong>Kenichi SEN</strong>
            <br></br>
            <br></br>
          </p>

          <h4 id="dynamic-styles">中原稜将</h4>
          <p>
            <strong>Ryosuke NAKAHARA</strong>
            <br></br>
            <br></br>
          </p>

          <h4 id="dynamic-styles">鷲見武洋</h4>
          <p>
            <strong>Takehiro WASHIMI</strong>
            <br></br>
            <br></br>
          </p>

          <h3>メンバー募集について</h3>
          <p>
            現在正規メンバーの募集は不定期で行っております。正規メンバー以外にもプロジェクト単位で参画するコラボレーターなど，様々なかたちで参画していただいています。
            <br></br>
            また，次回メンバー募集の際に優先して声をかけさせていただく場合もありますので，興味のある方はぜひ一度ご連絡ください．
            <br></br>
            <br></br>
            建築専門に限らず，機械や情報系など，他の専門でで建築情報学領域に興味のある方も歓迎します．
            <br></br>
            <br></br>
          </p>

          <h5>R&Eコミュニティについて</h5>
          <p>
            <ul>
              <li>
                所属先を問わず，建築情報学領域を学びたい人が学べる場所を作る
              </li>
              <li>建築情報学領域に関わる仲間や輪を広げていく</li>
            </ul>
            このような場を目指し，随時メンバーを募集しています．自由参加で，休日中心に勉強会やハンズオンなどを開催しています．参加メンバーがファシリテーターとなり進めています．
            参加希望の方はSNS、メール等でご連絡ください．
          </p>

          {/* <p>
            Both post and page templates are light and minimal, with all the
            focus on the content while the design of the theme gets out of the
            way. Beneath the hood, London enjoys the full power of the{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">
              Ghost Handlebars Theme API
            </a>{" "}
            to provide limitless customisation options and dynamic styles.
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p> */}
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    medyProfile: file(relativePath: { eq: "member/medy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 300)
      }
    }
    someProfile: file(relativePath: { eq: "member/some.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 300)
      }
    }

    azuProfile: file(relativePath: { eq: "member/azu.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 300)
      }
    }
    sumiProfile: file(relativePath: { eq: "member/sumi.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 300)
      }
    }
    seiProfile: file(relativePath: { eq: "member/sei.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 300)
      }
    }
    naoProfile: file(relativePath: { eq: "member/nao.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 300)
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
