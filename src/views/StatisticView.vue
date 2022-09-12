<template>
  <div>
    <div>
    <form class="oc-form   hidden-xs" action="/fr/recherche/" method="get"
            wtx-context="65C3FC7B-BC9B-4684-B6B1-B9F49ED6662B">
            <div class="oc-form__widget  inputGroup  inputGroup--medium">
                <input type="search" class="oc-form-control inputGroup__input"  placeholder="Rechercher ici"
                    name="search" aria-label="Barre de recherche"
                    wtx-context="A6D34D64-0B90-479C-816E-48146C920B53">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="bi pe-none me-2" width="14"
                    height="14">
                    <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                </svg>


            </div>
        </form>
  </div>
   
  <h1> h </h1>
        <p>f</p> 
        <div class="chart-container" id="didi">
        <canvas id="graph"  role="img"></canvas>
        </div>
        
  </div>

</template>


<script>

  
export default {
  name: 'Statistic',
  props: {}
}
</script>

<style scoped>

</style>
