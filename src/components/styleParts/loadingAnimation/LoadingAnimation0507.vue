/**
* 创建于 2018/8/1
* 作者: QianYu
* 功能: LoadingAnimation0507 其他 Loading效果
* Codepen: https://codepen.io/TaniaLD/pen/oKxep
*/

<template>
  <div class="loading-animation0507">
    <svg id="wrap" width="300" height="300">
      
      <!-- background -->
      <svg>
        <circle cx="150" cy="150" r="130" style="stroke: lightblue; stroke-width:18; fill:transparent"></circle>
        <circle cx="150" cy="150" r="115" style="fill:rgba(66, 185, 131, 1)"></circle>
        <path style="stroke: rgba(66, 185, 131, 1); stroke-dasharray:820; stroke-dashoffset:820; stroke-width:18; fill:transparent" d="M150,150 m0,-130 a 130,130 0 0,1 0,260 a 130,130 0 0,1 0,-260">
          <animate attributeName="stroke-dashoffset" dur="6s" to="-820" repeatCount="indefinite"></animate>
        </path>
      </svg>
      
      <!-- image -->
      <svg>
        <path id="hourglass" d="M150,150 C60,85 240,85 150,150 C60,215 240,215 150,150 Z" style="stroke: white; stroke-width:5; fill:white;"></path>
        
        <path id="frame" d="M100,97 L200, 97 M100,203 L200,203 M110,97 L110,142 M110,158 L110,200 M190,97 L190,142 M190,158 L190,200 M110,150 L110,150 M190,150 L190,150"
              style="stroke:lightblue; stroke-width:6; stroke-linecap:round"></path>
        
        <animateTransform xlink:href="#frame" attributeName="transform" type="rotate" begin="0s" dur="3s" values="0 150 150; 0 150 150; 180 150 150" keyTimes="0; 0.8; 1"
                          repeatCount="indefinite"></animateTransform>
        <animateTransform xlink:href="#hourglass" attributeName="transform" type="rotate" begin="0s" dur="3s" values="0 150 150; 0 150 150; 180 150 150" keyTimes="0; 0.8; 1"
                          repeatCount="indefinite"></animateTransform>
      </svg>
      
      <!-- sand -->
      <svg>
        <!-- upper part -->
        <polygon id="upper" points="120,125 180,125 150,147" style="fill:rgba(66, 185, 131, 1);">
          <animate attributeName="points" dur="3s" keyTimes="0; 0.8; 1" values="120,125 180,125 150,147; 150,150 150,150 150,150; 150,150 150,150 150,150" repeatCount="indefinite"></animate>
        </polygon>
        
        <!-- falling sand -->
        <path id="line" stroke-linecap="round" stroke-dasharray="1,4" stroke-dashoffset="200.00" stroke="rgba(66, 185, 131, 1)" stroke-width="2" d="M150,150 L150,198">
          <!-- running sand -->
          <animate attributeName="stroke-dashoffset" dur="3s" to="1.00" repeatCount="indefinite"></animate>
          <!-- emptied upper -->
          <animate attributeName="d" dur="3s" to="M150,195 L150,195" values="M150,150 L150,198; M150,150 L150,198; M150,198 L150,198; M150,195 L150,195" keyTimes="0; 0.65; 0.9; 1"
                   repeatCount="indefinite"></animate>
          <!-- last drop -->
          <animate attributeName="stroke" dur="3s" keyTimes="0; 0.65; 0.8; 1" values="rgba(66, 185, 131, 1);rgba(66, 185, 131, 1);transparent;transparent" to="transparent" repeatCount="indefinite"></animate>
        </path>
        
        <!-- lower part -->
        <g id="lower">
          <path d="M150,180 L180,190 A28,10 0 1,1 120,190 L150,180 Z" style="stroke: transparent; stroke-width:5; fill:rgba(66, 185, 131, 1);">
            <animateTransform attributeName="transform" type="translate" keyTimes="0; 0.65; 1" values="0 15; 0 0; 0 0" dur="3s" repeatCount="indefinite"></animateTransform>
          </path>
          <animateTransform xlink:href="#lower" attributeName="transform"
                            type="rotate"
                            begin="0s" dur="3s"
                            values="0 150 150; 0 150 150; 180 150 150"
                            keyTimes="0; 0.8; 1"
                            repeatCount="indefinite"></animateTransform>
        </g>
        
        <!-- lower overlay - hourglass -->
        <path d="M150,150 C60,85 240,85 150,150 C60,215 240,215 150,150 Z" style="stroke: white; stroke-width:5; fill:transparent;">
          <animateTransform attributeName="transform"
                            type="rotate"
                            begin="0s" dur="3s"
                            values="0 150 150; 0 150 150; 180 150 150"
                            keyTimes="0; 0.8; 1"
                            repeatCount="indefinite"></animateTransform>
        </path>
        
        <!-- lower overlay - frame -->
        <path id="frame" d="M100,97 L200, 97 M100,203 L200,203" style="stroke:lightblue; stroke-width:6; stroke-linecap:round">
          <animateTransform attributeName="transform"
                            type="rotate"
                            begin="0s" dur="3s"
                            values="0 150 150; 0 150 150; 180 150 150"
                            keyTimes="0; 0.8; 1"
                            repeatCount="indefinite"></animateTransform>
        </path>
      </svg>
    
    </svg>
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'LoadingAnimation0507'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $base-color: rgba(66, 185, 131, .8); // 修改部分环颜色1
  $base-color1: rgba(66, 185, 131, .3); // 修改部分环颜色2
  
  .loading-animation0507 {
    transform: scale(.35); // 修改大小
  }

</style>
