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
            <!-- 標題文字 -->
            <div class="w-full h-[94px] p-16">
                <p class="text-center text-black-500 text-2xl font-black ">請感應行動支付</p>
            </div>
            <div class="h-[100%] flex justify-center ">
                <!-- 第一張卡 -->
                <div class="w-[284px] h-min flex flex-wrap gap-4">
                    <img src="../assets/img/induction.png" alt="行動支付掃描">
                </div>
            </div>
        </main>
    </div>
</template>