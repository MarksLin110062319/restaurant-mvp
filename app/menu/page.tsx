import Link from "next/link";

const menuItems = [
    {
        category: "人氣推薦",
        items: [
            ["綜合生魚片", "$470"],
            ["綜合握壽司", "$350"],
            ["鮭魚卵丼", "$300"],
        ],
    },
    {
        category: "丼飯",
        items: [
            ["鮭魚丼", "$180"],
            ["星鰻丼", "$230"],
            ["比目魚丼", "$350"],
        ],
    },
    {
        category: "小品",
        items: [
            ["味噌湯", "$30"],
            ["茶碗蒸", "$60"],
            ["唐揚雞", "$120"],
        ],
    },
];

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-[#F8F5F0] px-5 py-8 text-gray-800">
            <div className="mx-auto max-w-3xl">
                <Link
                    href="/"
                    className="mb-8 inline-block text-sm text-[#C75B32] hover:underline"
                >
                    ← 返回首頁
                </Link>

                <p className="mb-2 text-center text-sm tracking-[0.3em] text-[#C75B32]">
                    XIN YUE MENU
                </p>

                <h1 className="mb-8 text-center text-4xl font-bold">電子菜單</h1>

                <div className="space-y-6">
                    {menuItems.map((section) => (
                        <section
                            key={section.category}
                            className="rounded-[2rem] bg-white/80 p-6 shadow-sm"
                        >
                            <h2 className="mb-4 border-b border-orange-100 pb-3 text-2xl font-semibold">
                                {section.category}
                            </h2>

                            <div className="space-y-4">
                                {section.items.map(([name, price]) => (
                                    <div
                                        key={name}
                                        className="flex items-center justify-between gap-4 text-base"
                                    >
                                        <span>{name}</span>
                                        <span className="font-semibold text-[#C75B32]">
                                            {price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/reserve"
                        className="inline-block rounded-full bg-[#E86A33] px-8 py-3 font-semibold text-white shadow-md"
                    >
                        看完菜單，立即訂位
                    </Link>
                </div>
            </div>
        </main>
    );
}