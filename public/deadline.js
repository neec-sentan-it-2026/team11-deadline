// public/deadline.js
// 日付はすべてローカル時刻で扱う(日本時間でもUTCのサーバーでも同じ結果になる)
export function daysUntil(deadline, today = new Date()) {
    const [y, m, d] = deadline.split('-').map(Number);
    const end = new Date(y, m - 1, d);
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return Math.round((end - start) / 86400000); // 86400000 = 1日のミリ秒
  }
  