const services = [

  // ネコポス
  { name:"ネコポス", price:210, thickness:3, size:60, weight:1,
    detail:"梱包資材指定なし",
    sizeText:"3辺合計60cm以内・長辺34cm以内・厚さ3cm以内・1kg以内",
    place:"ヤマト運輸営業所 / セブン-イレブン / ファミリーマート / PUDO" },

  // ゆうパケット系
  { name:"ゆうパケットポストmini", price:180, thickness:3, size:30, weight:2,
    detail:"送料160円 + 専用封筒20円",
    sizeText:"21.1×16.8cm以内",
    place:"ポスト投函" },

  { name:"ゆうパケットポスト", price:220, thickness:3, size:60, weight:2,
    detail:"送料215円 + 専用シール5円",
    sizeText:"3辺合計60cm以内・長辺34cm以内",
    place:"ポスト投函" },

  { name:"ゆうパケット", price:230, thickness:3, size:60, weight:1,
    detail:"梱包資材指定なし",
    sizeText:"34×23×3cm以内",
    place:"郵便局 / ローソン" },

  { name:"ゆうパケットプラス", price:520, thickness:7, size:60, weight:2,
    detail:"送料455円 + 専用箱65円（再利用可）",
    sizeText:"17×24×7cm以内",
    place:"郵便局 / ローソン" },

  // 宅急便コンパクト
  { name:"宅急便コンパクト", price:520, thickness:5, size:60, weight:999,
    detail:"送料450円 + 専用箱70円（再利用不可）",
    sizeText:"20×25×5cm / 薄型24.8×34cm",
    place:"ヤマト運輸営業所 / セブン-イレブン / ファミリーマート / PUDO" },

  // 宅急便
  { name:"宅急便60", price:750, thickness:999, size:60, weight:2,
    detail:"送料750円", sizeText:"3辺合計60cm以内",
    place:"ヤマト運輸営業所 / セブン-イレブン / ファミリーマート" },

  { name:"宅急便80", price:850, thickness:999, size:80, weight:5,
    detail:"送料850円", sizeText:"3辺合計80cm以内",
    place:"ヤマト運輸営業所 / セブン-イレブン / ファミリーマート" },

  { name:"宅急便100", price:1050, thickness:999, size:100, weight:10,
    detail:"送料1050円", sizeText:"3辺合計100cm以内",
    place:"ヤマト運輸営業所 / セブン-イレブン / ファミリーマート" },

  { name:"宅急便120", price:1200, thickness:999, size:120, weight:15,
    detail:"送料1200円", sizeText:"3辺合計120cm以内",
    place:"ヤマト運輸営業所 / セブン-イレブン / ファミリーマート" },

  // ゆうパック
  { name:"ゆうパック60", price:750, thickness:999, size:60, weight:25,
    detail:"送料750円", sizeText:"3辺合計60cm以内",
    place:"郵便局 / ローソン" },

  { name:"ゆうパック80", price:870, thickness:999, size:80, weight:25,
    detail:"送料870円", sizeText:"3辺合計80cm以内",
    place:"郵便局 / ローソン" },

  { name:"ゆうパック100", price:1070, thickness:999, size:100, weight:25,
    detail:"送料1070円", sizeText:"3辺合計100cm以内",
    place:"郵便局 / ローソン" },

  { name:"ゆうパック120", price:1200, thickness:999, size:120, weight:25,
    detail:"送料1200円", sizeText:"3辺合計120cm以内",
    place:"郵便局 / ローソン" },

  // エコメルカリ便
  { name:"エコメルカリ便60", price:730, thickness:999, size:60, weight:20,
    detail:"置き配専用",
    sizeText:"3辺合計60cm以内",
    place:"PUDO / 自宅集荷" },

  { name:"エコメルカリ便80", price:730, thickness:999, size:80, weight:20,
    detail:"置き配専用",
    sizeText:"3辺合計80cm以内",
    place:"PUDO / 自宅集荷" },

  { name:"エコメルカリ便100", price:730, thickness:999, size:100, weight:20,
    detail:"置き配専用",
    sizeText:"3辺合計100cm以内",
    place:"PUDO / 自宅集荷" },

  { name:"エコメルカリ便120", price:730, thickness:999, size:120, weight:20,
    detail:"置き配専用",
    sizeText:"3辺合計120cm以内",
    place:"PUDO / 自宅集荷" },

  { name:"エコメルカリ便140", price:730, thickness:999, size:140, weight:20,
    detail:"置き配専用",
    sizeText:"3辺合計140cm以内",
    place:"PUDO / 自宅集荷" },

  { name:"エコメルカリ便160", price:730, thickness:999, size:160, weight:20,
    detail:"置き配専用",
    sizeText:"3辺合計160cm以内",
    place:"PUDO / 自宅集荷" },
  
  // たのメル便
  { name:"たのメル便80", price:1700, thickness:999, size:80, weight:150,
    detail:"梱包不要・100kg以上は追加料金あり",
    sizeText:"3辺合計80cm以内",
    place:"自宅集荷" },

  { name:"たのメル便120", price:2400, thickness:999, size:120, weight:150,
    detail:"梱包不要・100kg以上は追加料金あり",
    sizeText:"3辺合計120cm以内",
    place:"自宅集荷" },

  { name:"たのメル便160", price:3400, thickness:999, size:160, weight:150,
    detail:"梱包不要・100kg以上は追加料金あり",
    sizeText:"3辺合計160cm以内",
    place:"自宅集荷" },

  { name:"たのメル便200", price:5000, thickness:999, size:200, weight:150,
    detail:"梱包不要・100kg以上は追加料金あり",
    sizeText:"3辺合計200cm以内",
    place:"自宅集荷" },

  { name:"たのメル便250", price:8600, thickness:999, size:250, weight:150,
    detail:"梱包不要・100kg以上は追加料金あり",
    sizeText:"3辺合計250cm以内",
    place:"自宅集荷" },

  { name:"たのメル便300", price:12000, thickness:999, size:300, weight:150,
    detail:"梱包不要・100kg以上は追加料金あり",
    sizeText:"3辺合計300cm以内",
    place:"自宅集荷" },

  { name:"たのメル便350", price:18500, thickness:999, size:350, weight:150,
    detail:"梱包不要・100kg以上は追加料金あり",
    sizeText:"3辺合計350cm以内",
    place:"自宅集荷" },

  { name:"たのメル便400", price:25400, thickness:999, size:400, weight:150,
    detail:"梱包不要・100kg以上は追加料金あり",
    sizeText:"3辺合計400cm以内",
    place:"自宅集荷" },

  { name:"たのメル便450", price:33000, thickness:999, size:450, weight:150,
    detail:"梱包不要・100kg以上は追加料金あり",
    sizeText:"3辺合計450cm以内",
    place:"自宅集荷" },

];

function getValue(name){
  return Number(document.querySelector(`input[name="${name}"]:checked`).value);
}

function check() {
  const resultEl = document.getElementById("result");

  const t = getValue("thickness");
  const s = getValue("size");
  const w = getValue("weight");

  const available = services.filter(x =>
    t <= x.thickness &&
    s <= x.size &&
    w <= x.weight
  );

  if (available.length === 0) {
    resultEl.innerHTML = "該当する配送方法がありません";
    return;
  }

  available.sort((a, b) => {
    if (a.price !== b.price) return a.price - b.price;

    if (a.name === "ゆうパケットプラス") return -1;
    if (b.name === "ゆうパケットプラス") return 1;

    return 0;
  });

    const medals = ["🥇","🥈","🥉"];
    resultEl.innerHTML = "...";

    available.slice(0,3).forEach((x,i)=>{
      resultEl.innerHTML += `
      <div class="item">
        <div class="row">
          <div class="left">
            <div class="rankIcon">${medals[i]}</div>
            <div class="rankNum">${i+1}位</div>
          </div>
          <div class="right">
            <div class="nameLine">${x.name} / <span class="price">${x.price}円</span></div>
            <div class="detail">${x.detail}</div>
            <div class="size">${x.sizeText}</div>
            <div class="place">発送場所：${x.place}</div>
          </div>
        </div>
      </div>`;
    });
}

document.querySelectorAll("input").forEach(el=>{
  el.addEventListener("change", check);
});

check();