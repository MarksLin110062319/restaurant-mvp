import Link from "next/link";

const menuItems = [
    {
        category: "生食丼",
        items: [
            ["鮭魚親子丼", "$300"],
            ["心干貝比丼(星鰻、干貝、比目魚)", "$360"],
            ["旗魚丼", "$250"],
            ["玫瑰丼", "$280"],
            ["散壽司", "$300"],
            ["盛合丼", "$410"],
            ["上品丼", "$時價"],
        ],
    },
    {
        category: "熟味丼",
        items: [
            ["薑汁燒肉丼", "$200"],
            ["唐揚雞丼", "$200"],
            ["牛丼", "$200"],
            ["比目魚丼", "$350"],
            ["星鰻丼", "$230"],
            ["松葉蟹丼", "$350"],
        ],
    },
    {
        category: "握壽司",
        items: [
            ["鮪魚握壽司", "$270/6貫"],
            ["鮭魚握壽司（焦糖/炙燒/原味）", "$270/6貫"],
            ["綜合握壽司（炙燒/原味）", "$350/7貫"],
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