import Link from "next/link";

export default function ReservePage() {
    return (
        <main className="min-h-screen bg-[#F8F5F0] px-5 py-8 text-gray-800">
            <div className="mx-auto flex min-h-[80vh] max-w-2xl flex-col justify-center">
                <Link
                    href="/"
                    className="mb-8 inline-block text-sm text-[#C75B32] hover:underline"
                >
                    ← 返回首頁
                </Link>

                <div className="rounded-[2rem] bg-white/80 p-8 text-center shadow-sm">
                    <p className="mb-2 text-sm tracking-[0.3em] text-[#C75B32]">
                        RESERVATION
                    </p>

                    <h1 className="mb-4 text-4xl font-bold">線上訂位</h1>

                    <p className="mb-8 leading-7 text-gray-600">
                        填寫訂位資料後，我們將為您保留座位。
                        <br />
                        若遇客滿或特殊情況，店家將再與您確認。
                    </p>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeXseWps0mgWFJ8iuaYVRwL-Dil1KJtbjFk39gy7DTv1czdfQ/viewform?usp=dialog"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded-full bg-[#E86A33] px-8 py-3 font-semibold text-white shadow-md transition hover:bg-[#d85f2d]"
                    >
                        前往填寫訂位資料
                    </a>

                    <p className="mt-6 text-sm text-gray-500">
                        營業時間：11:00 - 20:00
                    </p>
                </div>
            </div>
        </main>
    );
}