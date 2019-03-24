import React from 'react';

const AboutPage = () => (
  <div style={{
    margin: '5rem'
  }}>

    <h2>About</h2>
    <h4>ポートフォリオとして作成したオリジナルのミニプロジェクトになります。2019年3月4日時点で取得した、800名弱のVtuber情報を表示するデータベースサイトです。バックエンドやパフォーマンスの向上まで手掛けたかったのですが、諸々の事情で手が出せませんでした。フロントエンドメインのポートフォリオとしてご覧ください。また、扱っている情報自体は当時のリアルのものですが、中途半端にランダムなデータが表示されていますので、基本的にデータの信憑性はないと考えてください。</h4>
    <br/>

    <h2>使用技術</h2>
    <h4>HTML / CSS / Sass / JavaScript / React / Redux / Router / Nodejs / Firebase / Webpack</h4>
    <br/>

    <h5>※ 機械学習でVtuberをクラスタリングして2次元マッピングしたけど特に面白くなさそうなので断念したプロトタイプはこちら ⇒ <a href="https://vtbase.herokuapp.com">Demo</a></h5>

  </div>
);

export default AboutPage;