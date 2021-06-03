// キャメルケースで記述する。
// {}内で変数wp扱える。
// 閉じタグが必要

import React from 'react';

const Thumnail = () => {
  const caption = 'Yoshiki'
  const imagePath = '/img/yohshiki'

  return (
    <div>
      <p>{caption}</p>
      <img src={imagePath} alt={'Yoshiki'} />
    </div>
  )
}

export default Thumnail
