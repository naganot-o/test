const fortunes = [
    {
        rank: "大吉",
        message: "今日は最高の一日！新しいことに挑戦すると良い結果が期待できます。"
    },
    {
        rank: "中吉",
        message: "周囲とのコミュニケーションが運気アップの鍵です。"
    },
    {
        rank: "小吉",
        message: "落ち着いて行動すると良い流れをつかめます。"
    },
    {
        rank: "吉",
        message: "無理をせずマイペースに過ごしましょう。"
    },
    {
        rank: "末吉",
        message: "焦らず準備を進めることでチャンスが訪れます。"
    },
    {
        rank: "凶",
        message: "慎重な判断を心がけましょう。今日は無理をしないのが吉です。"
    }
];

const button = document.getElementById("fortuneButton");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];

    result.innerHTML = `
        <h2>${fortune.rank}</h2>
        <p>${fortune.message}</p>
    `;
});