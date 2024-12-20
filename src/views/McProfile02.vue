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

    <nav class="h-[68px] p-[10px] flex justify-center items-center flex-col">
        <button @click="goToProfile('/McProfile01')" type="button" >
            <img src="../assets/img/logo.png" alt="logo">
        </button>
    </nav>


<main class="h-full">
    <img src="../assets/img/image1.png" alt="廣告圖">

    <div class="h-[344px] py-[42px] flex justify-center flex-wrap gap-x-[12px]">
        <h2 class="p-[10px]">請選擇用餐方式</h2>
        <div class="p-[20px] flex gap-[20px]">
            <div
                class="card w-[140px] h-[160px] p-[8px] flex flex-col justify-center items-center border rounded-[5px] active:bg-[linear-gradient(144deg,_#FC6405_0%,_#E60013_103.82%)] active:text-white">
                <button @click="goToProfile('/McProfile03')" class="flex items-center flex-col">
                    <p>內用</p>
                    <img src="../assets/img/togo.png" alt="內用圖">
                </button>
            </div>
            <div
                class="card w-[140px] h-[160px] p-[8px] flex flex-col justify-center items-center border rounded-[5px] active:bg-[linear-gradient(144deg,_#FC6405_0%,_#E60013_103.82%)] active:text-white">
                <button @click="goToProfile('/McProfile03')" class="flex items-center flex-col">
                    <p>外帶</p>
                    <img src="../assets/img/takeout.png" alt="外帶圖">
                </button>
            </div>
        </div>
    </div>
</main>

<footer class="w-full h-[88px] flex bg-[#f5f5f5]">

    <div class="w-[287px] h-full flex justify-center items-center gap-[12px] bg-[#f5f5f5]">
        <button type="button"
            class="w-[120px] h-[39px] flex justify-center items-center bg-[#fcc305] border-[none] rounded-[10px]">English</button>
        <button type="button"
            class="w-[120px] h-[39px] flex justify-center items-center bg-[#fcc305] border-[none] rounded-[10px]">友善模式</button>
    </div>

    <div class=" bg-[#f5f5f5] rounded-tr-[50%] rounded-br-[50%]">
        <img src="../assets/img/screen.png" alt="QR掃描圖">
    </div>

</footer>

</div>
</template>