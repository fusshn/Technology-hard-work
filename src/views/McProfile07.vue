<script></script>

<template>
    <div class="w-full min-h-screen max-w-[375px] flex flex-col  items-center justify-start bg-contain relative mx-auto">
        <nav class="w-full">
            <button onclick="location.href='./McProfile01';"
                class="w-full h-[68px] flex items-center justify-center border-b-[1px] border-[#D9D9D9]">
                <img class="w-[68px]" src="../assets/img/logo.png" alt="logo">
            </button>

            <button onclick="location.href='./McProfile06';" 
                class="absolute top-[78px] left-[10px] w-[56px] " src="../assets/img/XXbutton.png" alt="返回">
                <img  src="../assets/img/XXbutton.png" alt="logo">
            </button>
        </nav>
            

            <!-- Main Section -->
            <main>
                <!-- 標題文字 -->
                <div class="w-full flex-col gap-3 px-4 mt-20">
                    <!-- 帕瑪森主廚雞腿堡 -->
                    <div class="bg-white rounded-[20px] p-4 flex justify-between items-center shadow-sm border border-gray-100 mb-2">
                        <div class="flex gap-4 items-center">
                            <img src="../assets/img/1.png" alt="選購餐點圖" class="w-16 h-16 object-cover">
                            <div>
                                <p class="font-bold text-base">帕瑪森主廚雞腿堡</p>
                                <p class="text-sm text-gray-500">無須加購套餐</p>
                                <div class="flex items-center gap-2 mt-1">
                                    <button class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">-</button>
                                    <span class="mx-1">1</span>
                                    <button class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                        <span class="font-bold">$108</span>
                    </div>

                    <!-- 購物袋 -->
                    <div class="bg-white rounded-[20px] p-4 flex justify-between items-center shadow-sm border border-gray-100">
                        <div class="flex gap-4 items-center">
                            <img src="../assets/img/bagw.png" alt="購物袋圖" class="w-16 h-16 object-cover">
                            <div>
                                <p class="font-bold text-base">塑膠袋</p>
                                <div class="flex items-center gap-2 mt-1">
                                    <button class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">-</button>
                                    <span class="mx-1">1</span>
                                    <button class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">+</button>
                                </div>
                            </div>
                        </div>
                        <span class="font-bold">$49</span>
                    </div>
                </div>
                <div class="w-full flex justify-end pr-6 mt-64 mb-4">
                    <p class="font-bold text-base">總計: $157</p>
                </div>
            </main>

            <!-- Footer Section -->
            <footer>
                <div class="footer-space">
                    <a href="./McProfile01">
                        <button type="button">取消整筆訂單</button>
                    </a>
                    <a href="./McProfile08">
                        <button type="button">下一步</button>
                    </a>
                </div>
            </footer>
    </div>
</template>