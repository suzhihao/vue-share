<template>
<div class="row">
  <div class="col-xs-24">
    <div class="footer text-muted clearfix">
      <div class="left">
        智慧国资企业信息查询系统 v1.0
      </div>
      <div class="right">
        <span class="goto-top text-center" @click="gotoTop()">
          <i class="fa fa-angle-up"></i>
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import "../../styles/common.scss";
@media only screen and (min-width: 769px) {
    .footer {
        margin-left: -15px;
        margin-right: -15px;
        padding: 8px 20px 5px 15px;
        background-color: $sidebar-bg-color;
        z-index: 1001;
        position: relative;

        > .left {
            float: left;
            color: #ccc;
            font-weight: 100;
            font-size: 12px;
            line-height: 20px;
        }

        > .right {
            float: right;

            > .goto-top {
                display: inline-block;
                width: 24px;
                height: 20px;
                line-height: 20px;
                font-size: 18px;
                cursor: pointer;
                background-color: lighten($sidebar-bg-color, 10%);
                transition: all 0.15s linear,color 0.15s linear;

                color: #aaa;

                &:hover {
                    background-color: lighten($sidebar-bg-color, 5%);
                    color: lighten(#ccc, 1%);
                }
            }
        }

    }
}
@media only screen and (max-width: 769px) {
    .footer {
        > .left {
            text-align: center;
            width: 100%;
        }

        > .right {
            display: none;
        }
    }
}
</style>

<script>
export default {
  name: 'app-footer',
  methods: {
    gotoTop() {
      $('html,body').animate({
        scrollTop: 0
      }, 400)
    }
  }
}
</script>
