<script></script>

<template>
    <div class="w-full h-screen max-w-[375px] font-semibold mx-auto flex flex-col">
    <!-- <div class="w-full h-screen max-w-[375px] flex flex-col items-center justify-start bg-white bg-contain relative mx-auto"> -->
        <nav class="w-full relative  border-b border-[#D9D9D9]">
            <!-- logo按鈕 -->
            <button onclick="location.href='./McProfile01';"
                class="w-full h-[68px] flex items-center justify-center border-b-[1px] border-[#D9D9D9]">
                <img class="w-[68px]" src="../assets/img/logo.png" alt="logo">
            </button>

            <!-- 返回按鈕 -->
            <button onclick="location.href='./McProfile05';" class="absolute top-[78px] left-[10px] w-[56px]">
                <img src="../assets/img/XXbutton.png" alt="返回">
            </button>

        </nav>

        <main class="h-full">
            <!-- <div class="w-full h-[94px] p-16">
                <h2 class="text-center text-black-500 text-2xl font-black ">請問需要購物袋嗎</h2>
            </div> -->
            <div class="h-full flex flex-col items-center">
        <div class="w-full h-[94px] p-16">
            <h2 class="text-center text-black-500 text-2xl font-black">請問需要購物袋嗎</h2>
        </div>
        <div class="w-[264px] h-min flex flex-wrap gap-4">
            <!-- 第一張卡 -->
            <button onclick="location.href='./McProfile07';"
                class="w-[124px] h-[152px] bg-white rounded-[20px] flex flex-col items-center shadow-[0_0px_4px_0_rgba(0,0,0,0.25)] gap-y-2 p-3">
                <img class="w-[100px]" src="../assets/img/bagblack.png" alt="購物袋黑">
                <div class="text-center px-2">
                    <p class="text-xs font-bold truncate">百分百購物袋(黑)</p>
                    <p class="text-[8px] font-medium">$49</p>
                </div>
            </button>
            <!-- 第二張卡 -->
            <button onclick="location.href='./McProfile07';"
                class="w-[124px] h-[152px] bg-white rounded-[20px] flex flex-col items-center shadow-[0_0px_4px_0_rgba(0,0,0,0.25)] gap-y-2 p-3">
                <img class="w-[100px]" src="../assets/img/bagred.png" alt="購物袋紅">
                <div class="text-center px-2">
                    <p class="text-xs font-bold truncate">百分百購物袋(黑)</p>
                    <p class="text-[8px] font-medium">$49</p>
                </div>
            </button>
            <!-- 第三張卡 -->
            <button onclick="location.href='./McProfile07';"
                class="w-[124px] h-[152px] bg-white rounded-[20px] flex flex-col items-center shadow-[0_0px_4px_0_rgba(0,0,0,0.25)] gap-y-2 p-3">
                <img class="w-[100px]" src="../assets/img/bagw.png" alt="購物袋">
                <div class="text-center px-2">
                    <p class="text-xs font-bold truncate">塑膠袋</p>
                    <p class="text-[8px] font-medium">$2</p>
                </div>
            </button>
        </div>
    </div>
        </main>

        <footer class="w-full h-[88px] flex bg-[#f5f5f5]">

            <div class="w-[287px] h-full flex justify-center items-center gap-[12px] bg-[#f5f5f5]">
                <button onclick="location.href='./McProfile07';"
                    class="w-[264px] h-[39px] bg-[rgb(252,195,5)] rounded-[10px] flex items-center justify-center">
                    <p class="text-base font-black">不需要,謝謝!</p>
                </button>
            </div>

        </footer>
        <!-- <footer>
            <div class="w-full h-[94px] flex items-center justify-center p-4 bg-[#F5F5F5] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-t-[30px]">
                <button onclick="location.href='./McProfile07';"
                    class="w-[264px] h-[39px] bg-[rgb(252,195,5)] rounded-[10px] flex items-center justify-center">
                    <p class="text-base font-black">不需要,謝謝!</p>
                </button>
            </div>
        </footer> -->
    </div>
</template>