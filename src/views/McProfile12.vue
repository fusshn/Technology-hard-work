<script></script>

<template>
    <div class="w-full h-screen max-w-[375px] flex flex-col items-center justify-start  bg-contain relative mx-auto">
        <!-- Nav Section -->
        <nav class="w-full absolute top-0">
            <a href="./McProfile01"
                class="w-full h-[68px] flex items-center justify-center border-b-[1px] border-[#D9D9D9]">
                <img class="w-[68px]" src="../assets/img/logo.png" alt="logo">
            </a>
        </nav>

        <!-- Main Section -->
        <main class="flex flex-col items-center justify-center gap-4 h-full">
            <p class="text-center text-black-500 text-2xl font-black">謝謝</p>
            <!-- 取餐編號 -->
            <div class="text-center">
                <p class="text-lg font-medium text-black">您的取餐編號是：</p>
                <p id="order-number" class="text-4xl font-bold text-[#FCC305]"></p>
            </div>
        </main>

        <!-- Footer Section (空的) -->
        <footer>
        </footer>
    </div>
</template>