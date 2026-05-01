export default function MenuPage() {
    return (
        <main className="min-h-screen bg-black text-white px-6 py-10">

            {/* 標題 */}
            <h1 className="text-3xl font-bold text-center mb-8">電子菜單</h1>

            {/* 壽司 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                    🍣 壽司
                </h2>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span>鮭魚握壽司</span>
                        <span>$40</span>
                    </div>
                    <div className="flex justify-between">
                        <span>鮪魚握壽司</span>
                        <span>$45</span>
                    </div>
                    <div className="flex justify-between">
                        <span>炙燒干貝</span>
                        <span>$80</span>
                    </div>
                </div>
            </section>

            {/* 丼飯 */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                    🍱 丼飯
                </h2>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span>鮭魚丼</span>
                        <span>$180</span>
                    </div>
                    <div className="flex justify-between">
                        <span>炙燒牛丼</span>
                        <span>$200</span>
                    </div>
                </div>
            </section>

            {/* 飲料 */}
            <section>
                <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
                    🍶 飲品
                </h2>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span>可樂</span>
                        <span>$30</span>
                    </div>
                    <div className="flex justify-between">
                        <span>日本清酒</span>
                        <span>$120</span>
                    </div>
                </div>
            </section>

        </main>
    );
}