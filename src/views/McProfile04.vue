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
    <div class="max-w-[375px] mx-auto h-screen flex flex-col">
    <!-- <div class="max-w-[375px] w-full h-screen flex flex-col relative"> -->
        <nav class="h-[68px] bg-white border-b border-[#D9D9D9] p-[10px] flex flex-col justify-center items-center sticky top-0 z-[9]">
            <button @click="goToProfile('/McProfile01')">
                <img src="../assets/img/logo.png" alt="logo">
            </button>
        </nav>

        <main class="w-full flex justify-center items-center flex-col sticky gap-1">
            
            <button @click="goToProfile('/McProfile03')" class="w-[56px] h-[32px] text-white bg-black p-[10px] flex flex-col justify-center items-center rounded-[15px] absolute top-[10px] left-[10px] cursor-pointer">
                <img src="../assets/img/XXbutton.png" alt="返回按鈕">
            </button>

            <img src="../assets/img/image39.png" alt="返回" class="w-[200px] h-[160px]">
            <h2 class="text-[28px] font-bold">帕瑪森主廚鷄腿堡</h2>
            <p class="text-[20px] text-[#1EB449] font-bold">$108</p>
        </main>

        <div class="py-4 pb-12 gap-5 flex justify-center items-center flex-col">
            <!-- 單點 -->
            <button @click="goToProfile('/McProfile05')" class="w-[327px] h-[100px] rounded-[25px] px-2 border border-black/20 flex items-center gap-2 active:border-transparent active:text-white active:bg-gradient-to-r active:from-[#FC9D05] active:to-[#E60013]">
                <img src="../assets/img/Rectangle46.png" alt="套餐加購圖片" class="w-[80px] h-[80px] rounded-[25px] p-3">
                <div class="w-[152px] h-full py-3 flex flex-col justify-center">
                    <h3 class="text-[18px] font-semibold">單點</h3>
                    <p class="text-xs font-semibold">無須加購套餐</p>
                </div>
                <div class="w-[56px] h-[80px] text-[18px] p-[10px] flex justify-center items-center rounded-[25px] bg-[#fcc205]">0元</div>
            </button>

            <!-- 經典配餐 -->
            <button @click="goToProfile('/McProfile05')" class="w-[327px] h-[100px] rounded-[25px] px-2 border border-black/20 flex items-center gap-2 active:border-transparent active:text-white active:bg-gradient-to-r active:from-[#FC9D05] active:to-[#E60013]">
                <img src="../assets/img/Rectangle46(1).png" alt="套餐加購圖片" class="w-[80px] h-[80px] rounded-[25px] p-3">
                <div class="w-[152px] h-full py-3 flex flex-col justify-center">
                    <h3 class="text-[18px] font-semibold">經典配餐</h3>
                    <div>
                        <p class="text-xs font-semibold">中薯+$33冷/熱飲</p>
                    </div>
                </div>
                <div class="w-[56px] h-[80px] text-[18px] p-[10px] flex justify-center items-center rounded-[25px] bg-[#fcc205]">65元</div>
            </button>

            <!-- 清爽配餐 -->
            <button @click="goToProfile('/McProfile05')" class="w-[327px] h-[100px] rounded-[25px] px-2 border border-black/20 flex items-center gap-2 active:border-transparent active:text-white active:bg-gradient-to-r active:from-[#FC9D05] active:to-[#E60013]">
                <img src="../assets/img/Rectangle46(2).png" alt="套餐加購圖片" class="w-[80px] h-[80px] rounded-[25px] p-3">
                <div class="w-[152px] h-full py-3 flex flex-col justify-center">
                    <h3 class="text-[18px] font-semibold">清爽配餐</h3>
                    <div>
                        <p class="text-xs font-semibold">四季沙拉(大)</p>
                        <p class="text-xs font-semibold">+$33冷/熱飲</p>
                    </div>
                </div>
                <div class="w-[56px] h-[80px] text-[18px] p-[10px] flex justify-center items-center rounded-[25px] bg-[#fcc205]">70元</div>
            </button>

            <!-- 勁脆配餐 -->
            <button @click="goToProfile('/McProfile05')" class="w-[327px] h-[100px] rounded-[25px] px-2 border border-black/20 flex items-center gap-2 active:border-transparent active:text-white active:bg-gradient-to-r active:from-[#FC9D05] active:to-[#E60013]">
                <img src="../assets/img/Rectangle46(3).png" alt="套餐加購圖片" class="w-[80px] h-[80px] rounded-[25px] p-3">
                <div class="w-[152px] h-full py-3 flex flex-col justify-center">
                    <h3 class="text-[18px] font-semibold">勁脆配餐</h3>
                    <p class="text-xs font-semibold">麥脆雞塊一塊(棒腿或</p>
                    <p class="text-xs font-semibold">大腿)$33冷/熱飲</p>
                </div>
                <div class="w-[56px] h-[80px] text-[18px] p-[10px] flex justify-center items-center rounded-[25px] bg-[#fcc205]">84元</div>
            </button>

            <!-- 炫冰配餐 -->
            <button @click="goToProfile('/McProfile05')" class="w-[327px] h-[100px] rounded-[25px] px-2 border border-black/20 flex items-center gap-2 active:border-transparent active:text-white active:bg-gradient-to-r active:from-[#FC9D05] active:to-[#E60013]">
                <img src="../assets/img/Rectangle46(4).png" alt="套餐加購圖片" class="w-[80px] h-[80px] rounded-[25px] p-3">
                <div class="w-[152px] h-full py-3 flex flex-col justify-center">
                    <h3 class="text-[18px] font-semibold">炫冰配餐</h3>
                    <p class="text-xs font-semibold">冰炫風(oreo)+小薯</p>
                    <p class="text-xs font-semibold">+$33冷/熱飲</p>
                </div>
                <div class="w-[56px] h-[80px] text-[18px] p-[10px] flex justify-center items-center rounded-[25px] bg-[#fcc205]">99元</div>
            </button>

            <!-- 豪吃配餐 -->
            <button @click="goToProfile('/McProfile05')" class="w-[327px] h-[100px] rounded-[25px] px-2 border border-black/20 flex items-center gap-2 active:border-transparent active:text-white active:bg-gradient-to-r active:from-[#FC9D05] active:to-[#E60013]">
                <img src="../assets/img/Rectangle46(5).png" alt="套餐加購圖片" class="w-[80px] h-[80px] rounded-[25px] p-3">
                <div class="w-[152px] h-full py-3 flex flex-col justify-center">
                    <h3 class="text-[18px] font-semibold">豪吃配餐</h3>
                    <p class="text-xs font-semibold">麥可雞塊(六塊)</p>
                    <p class="text-xs font-semibold">小薯 +$33冷/熱飲</p>
                </div>
                <div class="w-[56px] h-[80px] text-[18px] p-[10px] flex justify-center items-center rounded-[25px] bg-[#fcc205]">81元</div>
            </button>
        </div>
    </div>
</template>