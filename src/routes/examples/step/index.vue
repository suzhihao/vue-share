<template>
<div>
  <div class="note note-success">
    <h4 class="block">Info! Some Header Goes Here</h4>
    <p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, mattis consectetur purus sit amet eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24 col-xs-24">

        <div class="step">
          <div class="row step-line">
            <div class="col-md-4 col-xs-4 step-col error" v-for="(item,index) in [1, 2, 3, 4]">
              <div class="step-number step-round" style="border-color: #fff !important;"></div>
              <div class="step-title text-uppercase steps">Lorem ipsum dolor sit amet{{item}}</div>
              <ul>
                <li class="text-center">880万</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step-body">
          <div class="el-steps el-steps--vertical">
            <!-- <div style="width:60px;height:60px;border-color:#fff;background:#E7505A;"> -->
            <div class="el-step is-vertical step-header">
              <div class="el-step__head is-finish">
                <div class="el-step__line step-header-line"><i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 1px; height: 100%;"></i></div>
                <div class="el-step__icon is-text step-header-round">
                  2017
                </div>
              </div>
            </div>
            <div class="el-step is-vertical step-content" v-for="(item,index) in [1, 2, 3, 4, 5]">
              <div class="margin-r-0-3x" style="position:absolute;right:100%;min-width:40px;">07-31</div>
              <div class="el-step__head is-finish">
                <div class="el-step__line step-content-line"><i class="el-step__line-inner" style="transition-delay: 150ms; border-width: 1px; height: 100%;"></i></div>
                <div class="el-step__icon is-text step-content-round">
                </div>
              </div>
              <div class="el-step__main">
                <div class="margin-r-0-6x tishi" style="float:left;padding:2px 8px;border: 1px solid #eaedf4;border-left:none;">裁判文书</div>
                <div class="el-step__title is-finish step-text" style="float:left;">步骤 {{item}}</div>
                <div style="clear:both;"></div>
                <div class="el-step__description is-finish"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step">
          <div class="row step-default">
            <div class="col-md-8 step-col active">
              <div class="step-number">1</div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col done">
              <div class="step-number">2</div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col error">
              <div class="step-number">3</div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step">
          <div class="row step-thin">
            <div class="col-md-8 step-col">
              <div class="step-number">1</div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col error">
              <div class="step-number">2</div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col done">
              <div class="step-number">3</div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step">
          <div class="row step-no-background">
            <div class="col-md-8 step-col">
              <div class="step-number">1</div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col error">
              <div class="step-number">2</div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content font-grey-cascade">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col done">
              <div class="step-number">3</div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step">
          <div class="row step-no-background-thin">
            <div class="col-md-8 step-col active">
              <div class="step-number">1</div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col error">
              <div class="step-number">2</div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col done">
              <div class="step-number">3</div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24 bg-dark">
        <div class="step">
          <div class="row step-no-background">
            <div class="col-md-8 step-col">
              <div class="step-number">1</div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col error">
              <div class="step-number">2</div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col done">
              <div class="step-number">3</div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24 bg-dark">

        <div class="step">
          <div class="row step-no-background-thin">
            <div class="col-md-8 step-col active">
              <div class="step-number">1</div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col error">
              <div class="step-number">2</div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col done">
              <div class="step-number">3</div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step">
          <div class="row step-background">
            <div class="col-md-8 step-col">
              <div class="step-number">1</div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col done">
              <div class="step-number">2</div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col error">
              <div class="step-number">3</div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step">
          <div class="row step-background-thin">
            <div class="col-md-8 step-col">
              <div class="step-number">1</div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col active">
              <div class="step-number">2</div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col done">
              <div class="step-number">3</div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step">
          <div class="row step-line">
            <div class="col-md-6 step-col first">
              <div class="step-number">1</div>
              <div class="step-title text-uppercase">Setup</div>
              <div class="step-content">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="col-md-6 step-col active">
              <div class="step-number">2</div>
              <div class="step-title text-uppercase">Develop</div>
              <div class="step-content">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="col-md-6 step-col error">
              <div class="step-number">3</div>
              <div class="step-title text-uppercase">Testing</div>
              <div class="step-content font-grey-cascade">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="col-md-6 step-col last done">
              <div class="step-number">4</div>
              <div class="step-title text-uppercase">Launch</div>
              <div class="step-content font-grey-cascade">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24 bg-dark">

        <div class="step">
          <div class="row step-line">
            <div class="col-md-6 step-col first">
              <div class="step-number bg-dark">1</div>
              <div class="step-title text-uppercase">Setup</div>
              <div class="step-content">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="col-md-6 step-col active">
              <div class="step-number bg-dark">2</div>
              <div class="step-title text-uppercase">Develop</div>
              <div class="step-content">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="col-md-6 step-col error">
              <div class="step-number bg-dark">3</div>
              <div class="step-title text-uppercase">Testing</div>
              <div class="step-content">Lorem ipsum dolor sit amet</div>
            </div>
            <div class="col-md-6 step-col last done">
              <div class="step-number bg-dark">4</div>
              <div class="step-title text-uppercase">Launch</div>
              <div class="step-content">Lorem ipsum dolor sit amet</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step">
          <div class="row step-line">
            <div class="col-md-8 step-col first done">
              <div class="step-number bg-white">
                <i class="icon-basket"></i>
              </div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col error">
              <div class="step-number bg-white">
                <i class="icon-credit-card"></i>
              </div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col last">
              <div class="step-number bg-white">
                <i class="icon-rocket"></i>
              </div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bs-example">
    <div class="row">
      <div class="col-md-24">
        <div class="step">
          <div class="row step-line">
            <div class="col-md-8 step-col first done">
              <div class="step-number bg-white">
                <i class="fa fa-shopping-cart"></i>
              </div>
              <div class="step-title text-uppercase">Purchase</div>
              <div class="step-content">Purchasing the item</div>
            </div>
            <div class="col-md-8 step-col active">
              <div class="step-number">
                <i class="fa fa-cc-visa"></i>
              </div>
              <div class="step-title text-uppercase">Payment</div>
              <div class="step-content">Complete your payment</div>
            </div>
            <div class="col-md-8 step-col last">
              <div class="step-number bg-white">
                <i class="fa fa-rocket"></i>
              </div>
              <div class="step-title text-uppercase">Deploy</div>
              <div class="step-content">Receive item integration</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
