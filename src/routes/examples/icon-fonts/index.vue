<template>
<div class="row">
  <div class="col-xs-24">
    <div class="nav-tabs-green-jungle">
      <ul class="nav nav-tabs ">
        <li class="active">
          <a href="#tab_6_1" data-toggle="tab" aria-expanded="true"> FontAwesome Icons</a>
        </li>
        <li>
          <a href="#tab_6_2" data-toggle="tab" aria-expanded="false"> Simple Line Icons </a>
        </li>
        <li>
          <a href="#tab_6_3" data-toggle="tab" aria-expanded="false"> Glyphicons </a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="tab_6_1">
          <div class="note note-success">
            <p>
              Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS. The complete set of 370 icons in Font Awesome 4.0.1
            </p>
            For more info check out: <a target="_blank" href="http://fontawesome.io/icons/">http://fontawesome.io/icons/</a>
          </div>
          <font-awesome></font-awesome>
        </div>
        <div class="tab-pane" id="tab_6_2">
          <div class="note note-success">
            <p>
              Simple Line Icons. 162 Beautifully Crafted Webfont Icons.
            </p>
            For more info check out <a href="http://simplelineicons.com/" target="_blank">http://simplelineicons.com/</a>
          </div>
          <simple-line-icons></simple-line-icons>
        </div>
        <div class="tab-pane" id="tab_6_3">
          <div class="note note-success">
            <p>
              Includes 200 glyphs in font format from the Glyphicon Halflings set. <a href="http://glyphicons.com/" target="_blank">
										Glyphicons </a> Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost.
            </p>
            For more info check out <a href="http://getbootstrap.com/components/#glyphicons" target="_blank">http://getbootstrap.com/components/#glyphicons</a>
          </div>
          <glyphicons></glyphicons>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import fontAwesome from './font-awesome'
import simpleLineIcons from './simple-line-icons'
import glyphicons from './glyphicons.vue'
export default {
  components: {
    [fontAwesome.name]: fontAwesome,
    [simpleLineIcons.name]: simpleLineIcons,
    [glyphicons.name]: glyphicons
  }
}
</script>
