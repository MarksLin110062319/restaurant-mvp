import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-gray-800">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-5 py-10 md:flex-row md:px-10">

        {/* 文字區 */}
        <div className="w-full max-w-xl text-center md:text-left">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#C75B32]">
            XIN YUE RESTAURANT
          </p>

          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            欣悅
            <br />
            Xin Yue
          </h1>

          <p className="mb-6 text-base leading-7 text-gray-600 md:text-lg">
            每日新鮮漁獲・生魚片丼飯・握壽司
            <br />
            從 IG 看見我們？現在可以直接查看菜單、線上訂位。
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="/menu"
              className="rounded-full bg-[#E86A33] px-8 py-3 text-center font-semibold text-white shadow-md transition hover:bg-[#d85f2d]"
            >
              查看菜單
            </Link>

            <Link
              href="/reserve"
              className="rounded-full border border-[#E86A33] px-8 py-3 text-center font-semibold text-[#E86A33] transition hover:bg-[#E86A33] hover:text-white"
            >
              線上訂位
            </Link>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-gray-600 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
              🍣 新鮮漁獲
            </div>
            <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
              📱 線上訂位
            </div>
            <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
              📖 電子菜單
            </div>
          </div>
        </div>

        {/* 圖片區 */}
        <div className="w-full max-w-lg overflow-hidden rounded-[2rem] shadow-xl md:max-w-2xl lg:max-w-4xl">
          <Image
            src="/封面.png"
            alt="欣悅日式料理"
            width={800}
            height={900}
            className="h-[420px] w-full object-cover md:h-[560px]"
            priority
          />
        </div>
      </section>
    </main>
  );
}