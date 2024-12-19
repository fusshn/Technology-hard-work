<script>
export default {
    methods: {
        goToProfile(item) {
            this.$router.push(item); // 程式化導航
        },
    },
};
</script>

<template>
    
    <div class="w-full h-screen max-w-[375px] font-semibold mx-auto flex flex-col">
        <!-- Main 區塊 -->
        <main class="flex-grow relative flex flex-col">
            <button @click="goToProfile('/McProfile02')" type="button" class="relative flex-grow">
                <!-- 圖片 -->
                <img src="../assets/img/banner.png" alt="首頁圖片" class="object-cover w-full h-full">
                <!-- 文字區塊 -->
                <div class="absolute bottom-0 w-full h-[30px] flex justify-center items-center bg-[#1fb549] text-white">
                    請點擊上方螢幕
                </div>
            </button>
        </main>

        <!-- Footer 區塊 -->
        <footer class="w-full h-[88px] flex bg-[#f5f5f5]">
            <div class="w-[287px] h-full flex justify-center items-center gap-[12px] bg-[#f5f5f5]">
                <button type="button"
                    class="w-[120px] h-[39px] flex justify-center items-center bg-[#fcc305] border-[none] rounded-[10px]">
                    English
                </button>
                <button type="button"
                    class="w-[120px] h-[39px] flex justify-center items-center bg-[#fcc305] border-[none] rounded-[10px]">
                    友善模式
                </button>
            </div>
            <div class="bg-[#f5f5f5] rounded-tr-[50%] rounded-br-[50%]">
                <img src="../assets/img/screen.png" alt="QR掃描圖">
            </div>
        </footer>
    </div>
</template>



