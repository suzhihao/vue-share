<template>
<div class="">
  <div class="row">
    <div class="col-md-12">
      <ui-portlet class="box green-jungle">
        <template slot="header">
          <div class="caption">Caption</div>
          <div class="tools">
            <ui-portlet-fullscreen-btn-xs></ui-portlet-fullscreen-btn-xs>
            <ui-portlet-collapse-btn></ui-portlet-collapse-btn>
            <ui-portlet-remove-btn></ui-portlet-remove-btn>
          </div>
          <div slot="actions" class="actions">
            <a href="#" class="btn btn-sm btn-default"><i class="fa fa-pencil"></i> Edit </a>
          </div>
        </template>
        <template slot="body">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
          consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor
          ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
        </template>
      </ui-portlet>
    </div>
    <div class="col-md-12">
      <ui-portlet class="blue-chambray box tabbable">
        <template slot="header">
            <div class="caption">Caption</div>
        </template>
        <template slot="body">
          <div class="tabbable portlet-tabs">
            <ul class="nav nav-tabs">
              <li>
                <a href="#portlet_tab3" data-toggle="tab">
                    Tab 3 </a>
              </li>
              <li>
                <a href="#portlet_tab2" data-toggle="tab">
                    Tab 2 </a>
              </li>
              <li class="active">
                <a href="#portlet_tab1" data-toggle="tab">
                    Tab 1 </a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="portlet_tab1">
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                  nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.ut laoreet dolore magna ut laoreet dolore magna. ut laoreet dolore magna.
                  ut laoreet dolore magna.
                </p>
              </div>
              <div class="tab-pane" id="portlet_tab2">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                  sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                </p>
              </div>
              <div class="tab-pane" id="portlet_tab3">
                <p>
                  Ut wisi enim ad btn-smm veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                  facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
              </div>
            </div>
          </div>
        </template>
      </ui-portlet>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <ui-portlet class="blue-chambray box">
        <template slot="header">
          <div class="caption">Caption</div>
          <div class="tools">
            <ui-portlet-fullscreen-btn-xs></ui-portlet-fullscreen-btn-xs>
            <ui-portlet-collapse-btn></ui-portlet-collapse-btn>
            <ui-portlet-remove-btn></ui-portlet-remove-btn>
          </div>
          <ui-pagination class="ui-pagination-sm" :total="30"></ui-pagination>
        </template>
        <template slot="body">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
          consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor
          ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
        </template>
      </ui-portlet>
    </div>
    <div class="col-md-12">
      <ui-portlet class="light bordered">
        <template slot="header">
          <div class="caption"><i class="icon-home"></i>Caption with icon</div>
          <div class="tools">
            <ui-portlet-fullscreen-btn-xs></ui-portlet-fullscreen-btn-xs>
            <ui-portlet-collapse-btn></ui-portlet-collapse-btn>
            <ui-portlet-remove-btn></ui-portlet-remove-btn>
          </div>
          <div class="actions">
            <a href="#" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i> Edit </a>
          </div>
        </template>
        <template slot="body">
            <div class="scroll-wrapper" v-scroll="scrollConfig">
              <div>
                <strong @click="test">Caption with iscroll</strong><br/>
                Use v-scroll directive<br>
                {{text}}
              </div>
            </div>
          </template>
      </ui-portlet>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      scrollConfig: {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        disableTouch: true
        // disablePointer: true,
        // preventDefault: false
      },
      text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
  },
  mounted() {},
  methods: {
    test() {
      this.text = ''
    }
  }
}
</script>
<style lang="scss">
@import "../../../styles/common";
.scroll-wrapper {
    position: relative;
    height: 200px;
    overflow: hidden;
    padding-right: 10px;
}
</style>
