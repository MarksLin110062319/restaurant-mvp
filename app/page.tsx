import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-gray-800 flex flex-col items-center px-5 py-10">

      {/* 店名 */}
      <h1 className="text-3xl font-bold mb-1">欣悅 Xin Yue</h1>
      <p className="text-gray-500 mb-6 text-center">
        每日新鮮漁獲・生魚片丼飯・握壽司
      </p>

      {/* 主視覺圖（之後可以換） */}
      <div className="w-full max-w-md mb-8">
        <Image
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
          alt="生魚片丼"
          width={500}
          height={300}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* 按鈕 */}
      <div className="flex gap-4 mb-10">
        <a
          href="/menu"
          className="bg-[#E86A33] text-white px-6 py-3 rounded-full font-semibold shadow"
        >
          查看菜單
        </a>

        <a
          href="/reserve"
          className="border border-[#E86A33] text-[#E86A33] px-6 py-3 rounded-full font-semibold"
        >
          線上訂位
        </a>
      </div>

      {/* 賣點 */}
      <div className="text-center space-y-2 mb-10 text-sm">
        <p>🍣 客人可先看菜單再決定</p>
        <p>📱 線上訂位，減少電話等待</p>
        <p>✨ 菜單清楚分類，更好閱讀</p>
      </div>

      {/* 店家資訊 */}
      <div className="text-center text-gray-500 text-sm space-y-2">
        <p>營業時間：11:00 - 20:00</p>
        <p>地址：台南市東區東寧路15號（示意）</p>
        <p>電話：0906-560-458</p>
      </div>

    </main>
  );
}