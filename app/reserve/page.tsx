import Link from "next/link";
export default function ReservePage() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
            {/* 返回按鈕 */}
            <Link href="/" className="text-gray-400 mb-6 inline-block">← 返回首頁</Link>

            <h1 className="text-3xl font-bold mb-6">
                線上訂位
            </h1>

            <p className="text-gray-400 mb-8 text-center">
                填寫以下資料，我們將為您保留座位
            </p>

            <a
                href="https://forms.gle/LB2T8o1iF2ewc3ZTA"
                target="_blank"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold"
            >
                前往填寫訂位資料
            </a>

        </main>
    );
}