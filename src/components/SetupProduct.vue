<template>
  <div class="flex flex-col items-center w-full py-11">
    <div class="text-center pb-12">
      <p class="text-xl mt-1">Share your setup with</p>
      <h3 class="text-3xl font-bold">#FuniroFurniture</h3>
    </div>
    <div class="flex justify-between align-middle items-center">
      <div class="w-full img_wrapper_main">
        <div class="left_wrapper">
          <div class="top_wrapper1">
            <div class="top_inner1">
              <img src="../assets/img/img1.png" alt="dsffds" />
            </div>
            <div class="top_inne2">
              <img src="../assets/img/img2.png" alt="dsffds" />
            </div>
          </div>
          <div class="top_wrapper2">
            <div class="top_inner_below1">
              <img src="../assets/img/img6.png" alt="dsffds" />
            </div>
            <div class="top_inne_below2">
              <img src="../assets/img/img7.png" alt="dsffds" />
            </div>
          </div>
        </div>
        <div class="center_wrappwr">
          <img src="../assets/img/img3.png" alt="fdsfs" />
        </div>
        <div class="right_wrapper">
            <div class="top_wrapper1">
              <div class="top_inner1">
                <img src="../assets/img/img4.png" alt="dsffds" />
              </div>
              <div class="top_inne2">
                <img src="../assets/img/img5.png" alt="dsffds" />
              </div>
            </div>
            <div class="top_wrapper2">
              <div class="top_inner_below1">
                <img src="../assets/img/img8.png" alt="dsffds" />
              </div>
              <div class="top_inne_below2">
                <img src="../assets/img/img9.png" alt="dsffds" />
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.img_wrapper_main {
  display: flex;
  align-items: center;
  gap: 16px;
  .left_wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 40%;
    overflow: hidden;
    .top_wrapper1 {
      display: flex;
      align-items: flex-end;
      gap: 16px;
      .top_inner1 {
        width: 15%;
        height: 382px;
        img {
          height: 100%;
          object-fit: cover;
        }
      }
      .top_inne2 {
        width: 85%;
        height: auto;
        img {
          width: 100%;
        }
      }
    }
    .top_wrapper2 {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      .top_inner_below1 {
        width: 30%;
        height: 323px;
        img {
          height: 100%;
          object-fit: cover;
        }
      }
      .top_inne_below2 {
        width: 70%;
        height: 242px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .center_wrappwr {
    height: 392px;
    overflow: hidden;
    width: 20%;
    img {
      width: 100%;
    }
  }
  .right_wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 40%;
    overflow: hidden;
    .top_wrapper1 {
      display: flex;
      align-items: flex-end;
      gap: 16px;
      overflow: hidden;
      .top_inner1 {
        width: 50%;
        img {
          height: 320px;
          object-fit: cover;
        }
      }
      .top_inne2 {
        width: 50%;
        height: 433px;
        img {
          width: 100%;
        }
      }
    }
    .top_wrapper2 {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      .top_inner_below1 {
        img {
          height: 100%;
          width: 178px;
          object-fit: cover;
        }
      }
      .top_inne_below2 {
        img {
          width: 258px;
          height: 196px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
