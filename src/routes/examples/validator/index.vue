<template>
  <div class="row">
    <div class="col-md-24">
      <div class="note note-danger">
        <h4>v-validator 会自动向组件实例中注入validatorErrors和validatorFields两个变量，在组件中声明变量时注意不要冲突了</h4>
        <ul class="fa-ul">
          <li><i class="fa-li fa fa-check-square font-green-haze"></i>使用v-validate指令的元素至少要有name属性</li>
          <li><i class="fa-li fa fa-check-square font-green-haze"></i>模板中使用validatorErrors.has(field)判断是否出错，field对应name属性的值
          </li>
          <li><i class="fa-li fa fa-check-square font-green-haze"></i>field（即name属性）尽可能不要重复，如果需要重复的话只要有任意一个元素判断失败就都会失败
          </li>
          <li><i class="fa-li fa fa-check-square font-green-haze"></i>validatorErrors.first获得某个field下的第一个错误消息</li>
          <li><i class="fa-li fa fa-check-square font-green-haze"></i>目前validator都设置在input和blur事件中触发，如果这个input没有focus过，需要手动触发
          </li>
          <li><i class="fa-li fa fa-check-square font-green-haze"></i>可以使用this.$validator.validateAll(field)触发validator，不传field时触发所有validator
          </li>
          <li><i class="fa-li fa fa-check-square font-green-haze"></i>使用this.$validator.attach()手动attach field
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
      <div :class="['form-group', validatorErrors.has('email') && 'has-error']">
        <label for="exampleInputEmail1">Email address</label>
        <input v-validate="'email|required'" name="email" type="email" class="form-control" id="exampleInputEmail1"
               placeholder="Email" v-model="email">
        <label class="control-label error-label">
          {{ validatorErrors.first('email') }}
        </label>
      </div>
      <div :class="['form-group', validatorErrors.has('password') && 'has-error']">
        <label for="exampleInputPassword1">Password</label>
        <input v-validate="'password|required'" name="password" type="password" class="form-control"
               id="exampleInputPassword1" placeholder="Password" v-model="password">
        <label class="control-label error-label">
          {{ validatorErrors.first('password') }}
        </label>
      </div>
      <div :class="['form-group', validatorErrors.has('range') && 'has-error']">
        <label for="exampleRange">Range 1-10</label>
        <!-- data-vv-as设置错误消息中显示的字段名，默认用name字段 -->
        <input v-validate="'number|required|between:1,10'" name="range" data-vv-as="范围" type="text" class="form-control"
               id="exampleRange" placeholder="Range" v-model="range">
        <label class="control-label error-label">
          {{ validatorErrors.first('range') }}
        </label>
      </div>
      <div :class="['form-group', validatorErrors.has('pick') && 'has-error']">
        <label for="examplePick">Pick 1,2,3</label>
        <!-- data-vv-as设置错误消息中显示的字段名，默认用name字段 -->
        <input v-validate="'number|required|in:1,2,3'" name="pick" data-vv-as="填写的数字" type="text" class="form-control"
               id="examplePick" placeholder="Pick" v-model="pick">
        <label class="control-label error-label">
          {{ validatorErrors.first('pick') }}
        </label>
      </div>
      <div :class="['form-group', validatorErrors.has('custom') && 'has-error']">
        <label for="exampleCustom">自定义规则 /[0-9]+/</label>
        <!-- data-vv-as设置错误消息中显示的字段名，默认用name字段 -->
        <input v-validate="{regex: /[0-9]+/}" name="custom" data-vv-as="该字段" type="text" class="form-control"
               id="exampleCustom" placeholder="Custom" v-model="custom">
        <label class="control-label error-label">
          {{ validatorErrors.first('custom') }}
        </label>
      </div>
      <div :class="['form-group', validatorErrors.has('select') && 'has-error']">
        <label>下拉框</label>
        <div>
          <select v-validate="'required'" name="select" v-model="selected">
            <option value="">请选择</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
        </div>
        <label class="control-label error-label">
          {{ validatorErrors.first('select') }}
        </label>
      </div>
      <div :class="['form-group', validatorErrors.has('checkbox') && 'has-error']">
        <div class="checkbox">
          <label>
            <!--用了required就不需要绑定v-model了，两者选一个用-->
            <input v-validate="'required'" name="checkbox" type="checkbox"> Check me out
          </label>
        </div>
        <label class="control-label error-label">
          {{ validatorErrors.first('checkbox') }}
        </label>
      </div>
      <div :class="['form-group', validatorErrors.has('file') && 'has-error']">
        <!-- 还有image,size,mimes,ext等规则可以选择，可参考http://vee-validate.logaretm.com/rules.html#rule-dimensions -->
        <!-- file不能和v-model一起使用，可以用ref代替 -->
        <label for="exampleInputFile">File input</label>
        <input v-validate="'dimensions:200,200'" name="file" data-vv-as="选择的图片" type="file" id="exampleInputFile"
               ref="file">
        <p class="control-label error-label">
          {{ validatorErrors.first('file') }}
        </p>
      </div>
      <button type="submit" class="btn btn-default" @click="submit">Submit</button>
      <h3>手动validate</h3>
      <p>email: 'foo@bar.com'</p>
      <p>name: 'John Snow'</p>
      <button type="submit" class="btn btn-default" @click="submit2">validate</button>
      <h3>Async Validation</h3>
      <div :class="['form-group', validatorErrors.has('coupon') && 'has-error']">
        <label for="exampleInputcoupon">Async Validation</label>
        <input name="coupon" type="text" class="form-control" id="exampleInputcoupon"
               placeholder="coupon" v-model="coupon">
        <label class="control-label error-label">
          {{ validatorErrors.first('coupon') }}
        </label>
      </div>
      <button type="submit" class="btn btn-default" @click="submit3">validate</button>
    </div>
  </div>
</template>
<script>
  /**
   * vee-validate
   * http://vee-validate.logaretm.com/
   */
  //  import uiService from '../../../core/ui-service'
  import { Validator } from 'vee-validate'
  export default {
    data() {
      return {
        email: '',
        password: '',
        range: 0,
        pick: 0,
        custom: 0,
        selected: '',
        coupon: '',
        va: new Validator({email: 'required|email', name: 'required|alpha|min:3'})
      }
    },
    created() {
      Validator.extend('verify_coupon', {
        getMessage: field => `The ${field} is not a valid coupon.`,
        validate: value => new Promise((resolve) => {
          // API call or database access.
          const validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016']
          setTimeout(() => {
            resolve({
              valid: value && validCoupons.indexOf(value.toUpperCase()) !== -1
            })
          }, 1000)
        })
      })
      this.$validator.attach('coupon', 'required|verify_coupon')
    },
    methods: {
      submit() {
        this.$validator.validateAll()
          .then(result => {
            alert(result)
          })
      },
      submit2() {
        Promise.all([
          this.va.validate('email', 'foo@bar.com'),
          this.va.validate('name', 'John Snow')
        ])
          .then(([result1, result2]) => {
            alert(result1 && result2)
          })
        // 或者
      //        this.va.validateAll({email: 'foo@bar.com', name: 'John Snow'})
      //          .then(result => {
      //            alert(result)
      //          })
      },
      submit3() {
        this.$validator.validate('coupon', this.coupon)
          .then((result1) => {
            alert(result1)
          })
      }
    }
  }
</script>