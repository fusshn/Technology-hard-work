<script></script>

<template>
    <div
        class="w-full h-screen max-w-[375px] flex flex-col items-center justify-start bg-contain relative mx-auto">
        <nav class="w-full">
            <!-- logo -->
            <a href="./McProfile01"
                class="w-full h-[68px] flex items-center justify-center border-b-[1px] border-[#D9D9D9]">
                <img class="w-[68px]" src="../assets/img/logo.png" alt="logo">
            </a>
        </nav>

        <main class="h-full">
            <a href="./McProfile08"><img class="absolute top-[78px] left-[10px] w-[56px] " src="../assets/img/XXbutton.png"
                    alt="返回"></a>
            <!-- 標題文字 -->
            <div class="w-full h-[94px] p-16">
                <p class="text-center text-black-500 text-2xl font-black ">請選擇發票方式</p>
            </div>
            <!-- 卡片區 -->

            <div class="h-[100%] flex justify-center ">
                <!-- 第一張卡 -->
                <div class="w-[264px] h-min flex flex-wrap gap-4">
                    <a href="./McProfile12">
                        <div
                            class="w-[124px] h-[152px] bg-white rounded-[20px] flex flex-col items-center shadow-[0_0px_4px_0_rgba(0,0,0,0.25)] gap-y-2 p-3">
                            <img class="w-[100px] " src="../assets/img/paperinvoice.png" alt="紙本發票圖">
                            <div class="text-center px-2 ">
                                <p class="text-[12px] font-bold truncate">紙本發票
                                </p>
                            </div>
                        </div>
                    </a>
                    <!-- 第二張卡 -->
                    <a href="./McProfile11">
                        <div
                            class="w-[124px] h-[152px] bg-white rounded-[20px] flex flex-col items-center shadow-[0_0px_4px_0_rgba(0,0,0,0.25)] gap-y-2 p-3">
                            <img class="h-[100px]" src="../assets/img/phone.png" alt="手機載具圖">
                            <div class="text-center px-2">
                                <p class="text-xs font-bold truncate">手機載具</p>
                            </div>
                        </div>
                    </a>
                    <!-- 第三張卡 -->
                    <a href="./11-請感應手機條碼.html">
                        <div
                            class="w-[124px] h-[152px] bg-white rounded-[20px] flex flex-col items-center shadow-[0_0px_4px_0_rgba(0,0,0,0.25)] gap-y-2 p-3">
                            <img class="w-[100px]" src="../assets/img/naturalperson.png" alt="掃描自然人憑證圖">
                            <div class="text-center px-2">
                                <p class="text-xs font-bold truncate">掃描自然人憑證
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </main>

    </div>
</template>